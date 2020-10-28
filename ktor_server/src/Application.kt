package com.example

import com.google.gson.Gson
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*
import java.util.*

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
            call.respond("You connected")
        }

        post("/timer") {
            val request = call.receive<String>()
            var alarm = Gson().fromJson(request, Alarm::class.java)
        }
    }
}