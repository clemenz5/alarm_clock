#!/bin/bash

title=
date=
timestamp=

add_alarm_clock()
{
    echo "add alarm clock"
    echo "title: $title"
    echo "timestamp: $timestamp"

    echo "h[Unit]
# Abschnitt wird im Artikel systemd/Units beschrieben
[Service]
Type=simple
ExecStart=/PFAD/ZUM/BEFEHL/befehl
[Install]
# Abschnitt wird im Artikel systemd/Units beschrieben" > /etc/systemd/$title.kron.service
}

remove_alarm_clock()
{
    echo "remove alarm clock"
    rm /etc/systemd/$title.kron.service
    if [ $? != 0 ]
    then echo "problem when deleting"
    else echo "success deleting"
    fi
}

case $1 in
    -a | --add )    if [ $# != 3 ]
                        then 
                        echo "Wrong number of args" 
                        exit 1
                    fi
                    title=$2
                    timestamp=$3
                    add_alarm_clock;;
    -r | --remove ) if [ $# != 2 ]
                        then 
                        echo "Wrong number of args" 
                        exit 1
                    fi
                    title=$2
                    remove_alarm_clock;;
esac                    