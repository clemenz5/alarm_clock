#!/bin/bash
LANG=en_us_8859_1
title=
date=
timestamp=
music=

add_alarm_clock()
{
    echo "add alarm clock"
    echo "title: $title"
    echo "timestamp: $timestamp"

    echo "[Service]
ExecStart=/home/pi/tizonia_skript.sh \"$music\"
User=pi
Type=forking
EnvironmentFile=/home/pi/a" > /etc/systemd/system/$title.kron.service

    echo "[Unit]
Description=start the alarm clock on date

[Timer]
OnCalendar=$(date --date="@$timestamp" +"%a %Y-%m-%d %H:%M:%S")
Persistent=true

[Install]
WantedBy=basic.target" > /etc/systemd/system/$title.kron.timer

    sudo systemctl enable --now $title.kron.timer
    sudo systemctl restart $title.kron.timer
    echo $(systemctl status $title.kron.timer | grep Trigger)
}

remove_alarm_clock()
{
    echo "remove alarm clock"
    rm /etc/systemd/system/$title.kron.service
    rm /etc/systemd/system/$title.kron.timer
    if [ $? != 0 ]
    then echo "problem when deleting"
    else echo "success deleting"
    fi
}

case $1 in
    -a | --add )    if [ $# != 4 ]
                        then 
                        echo "Wrong number of args" 
                        exit 1
                    fi
                    title=$2
                    music=$3
                    timestamp=$4
                    add_alarm_clock;;
    -r | --remove ) if [ $# != 2 ]
                        then 
                        echo "Wrong number of args" 
                        exit 1
                    fi
                    title=$2
                    remove_alarm_clock;;
esac                    
