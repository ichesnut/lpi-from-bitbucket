import RPi.GPIO as GPIO
import datetime
import time

GPIO.setmode(GPIO.BCM)
pins = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]

def test():
  for pin in pins:
    print("off ", pin)
    GPIO.setup(pin, GPIO.OUT) 
    GPIO.output(pin, GPIO.LOW)
    time.sleep(1.5)
    print("on ", pin)
    GPIO.output(pin, GPIO.HIGH)
    time.sleep(1.5)
    GPIO.cleanup

def testPin(p):
    print(p)
    print("low ", p)
    GPIO.setup(p, GPIO.OUT) 
    GPIO.output(p, GPIO.LOW)
    time.sleep(1.5)
    print("high ", p)
    GPIO.output(p, GPIO.HIGH)
    time.sleep(1.5)
    GPIO.cleanup

def low(p):
    print(p)
    print("low ", p)
    GPIO.setup(p, GPIO.OUT) 
    GPIO.output(p, GPIO.LOW)
    GPIO.cleanup


def high(p):
    print(p)
    print("high ", p)
    GPIO.setup(p, GPIO.OUT) 
    GPIO.output(p, GPIO.HIGH)
    GPIO.cleanup

