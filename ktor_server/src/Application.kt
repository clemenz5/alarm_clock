package com.example

import com.google.gson.Gson
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*
import java.util.*
import java.util.concurrent.TimeUnit
import java.io.File
import java.io.IOException

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {


    routing {
        install(StatusPages) {
            exception<Throwable> { e ->
                call.respondText(e.toString())
            }
        }
        install(ContentNegotiation) {

        }
        get("/all-timers") {
            val request = call.receive<String>()
            call.respondText("./getTimers.sh".runCommand(File("/home/pi/alarm_clock/ktor_server"))!!);
        }

        post("/timer") {
            val request = call.receive<String>()
            var alarm:Alarm = Gson().fromJson(request, Alarm::class.java)
            var command:String = StringBuilder().append("sudo ./main.sh").append(" -a ").append(alarm.name).append(" ").append(alarm.spotify).append(" ").append(alarm.time).toString()
            println(command)
            call.respondText(command.runCommand(File("/home/pi/alarm_clock/cli"))!!)
        }
    }
}

fun String.runCommand(workingDir: File): String? {
    try {
        val parts = this.split("\\s".toRegex())
        val proc = ProcessBuilder(*parts.toTypedArray())
                .directory(workingDir)
                .redirectOutput(ProcessBuilder.Redirect.PIPE)
                .redirectError(ProcessBuilder.Redirect.PIPE)
                .start()

        proc.waitFor(60, TimeUnit.MINUTES)
        return proc.inputStream.bufferedReader().readText()
    } catch(e: IOException) {
        e.printStackTrace()
        return null
    }
}
