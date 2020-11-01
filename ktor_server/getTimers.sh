#!/bin/bash
echo $(ls /etc/systemd/system/ | grep kron.timer)
