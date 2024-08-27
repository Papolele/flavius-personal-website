import Head from 'next/head';
import Header from '@components/Header';
import { useState, useEffect } from 'react';
import CodeBlock from '@components/CodeBlock';

export default function Main() {

  const code = `
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);


#include <thermistor.h>

thermistor therm1(A0, 0);
int PWM_pin = 5;


const int numReadings = 5;

int readings[numReadings];  // the readings from the analog input
int readIndex = 0;          // the index of the current reading
int total = 0;              // the running total
int average = 0;            // the average
int sTemp = 0;
int set_temp = 0;

//pid var
float temperature_read = 0.0;
float set_temperature = 215+23;
float PID_error = 0;
float previous_error = 0;
float elapsedTime, Time, timePrev;
int PID_value = 0;
int writeval = 0;


//pid static
int kp = 9.8;   int ki = 0.3;   int kd = 2.3;
int PID_p = 0;    int PID_i = 0;    int PID_d = 0;

void setup() {
  Serial.begin(9600);

  pinMode(8, INPUT_PULLUP);  
  pinMode(9, INPUT_PULLUP);
  pinMode(10, INPUT_PULLUP);
  pinMode(PWM_pin, OUTPUT);
  Time = millis();

  for (int thisReading = 0; thisReading < numReadings; thisReading++) {
    readings[thisReading] = 0;
  }

  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;);
  }
  display.clearDisplay(); display.setTextSize(2); display.setTextColor(WHITE); display.setCursor(0, 5);
  display.println("Projekt   Flasche!");
  display.display();
  delay(2500);
}

void loop() {
  filterproc();
  tempset();
  display.clearDisplay(); display.setTextSize(1); display.setCursor(0, 5);
  display.print("Temp");
  display.setTextSize(3); display.setCursor(0, 16);
  display.print((String)sTemp);
  display.setTextSize(1); display.setCursor(64, 5);
  display.print("Set");
  display.setTextSize(3); display.setCursor(64, 16);
  display.print((String)set_temp);
  display.setTextSize(1); display.setCursor(4, 45);
  display.print("Target Temp:");
  display.setTextSize(1); display.setCursor(4, 55);
  display.print(set_temperature - 23);
  display.display();

  // First we read the real value of temperature
  temperature_read = sTemp;
  //Next we calculate the error between the setpoint and the real value
  PID_error = set_temperature - temperature_read;
  //Calculate the P value
  PID_p = kp * PID_error;
  //Calculate the I value in a range on +-3
  if (-3 < PID_error < 3)
  {
    PID_i = PID_i + (ki * PID_error);
  }

  //For derivative we need real time to calculate speed change rate
  timePrev = Time;                            // the previous time is stored before the actual time read
  Time = millis();                            // actual time read
  elapsedTime = (Time - timePrev) / 1000;
  //Now we can calculate the D calue
  PID_d = kd * ((PID_error - previous_error) / elapsedTime);
  //Final total PID value is the sum of P + I + D
  PID_value = PID_p + PID_i + PID_d;

  //We define PWM range between 0 and 255
  if (PID_value < 0)
  {
    PID_value = 0;
  }
  if (PID_value > 255)
  {
    PID_value = 255;
  }
  //Now we can write the PWM signal to the mosfet on digital pin D3
  writeval = map(255 - PID_value, 0 , 255, 255, 0);
  analogWrite(PWM_pin, writeval);
  previous_error = PID_error;     //Remember to store the previous error for next loop.
  
  
  delay(50);
}



void filterproc() {
  double temp = therm1.analog2temp();
  // subtract the last reading:
  total = total - readings[readIndex];
  // read from the sensor:
  String strtemp = String(temp);
  readings[readIndex] = strtemp.toInt();
  // add the reading to the total:
  total = total + readings[readIndex];
  // advance to the next position in the array:
  readIndex = readIndex + 1;

  // if we're at the end of the array...
  if (readIndex >= numReadings) {
    // ...wrap around to the beginning:
    readIndex = 0;
  }

  // calculate the average:
  average = total / numReadings;
  Serial.println(sTemp);
  sTemp = average;
  delay(1);  // delay in between reads for stability
}

void tempset()  {
  int setval = digitalRead(10);
  int downval = digitalRead(9);
  int upval = digitalRead(8);
  if (setval == LOW)  {
    set_temperature = set_temperature + set_temp;
    set_temp = 0;
    Serial.println("SET");
    delay(300);
  }
  if (downval == LOW)  {
    set_temp = set_temp - 1;
    delay(300);
    Serial.println("DOWN");
  }
  if (upval == LOW)  {
    set_temp = set_temp + 1;
    delay(300);
    Serial.println("UP");
  }
  Serial.println(String(set_temp));
  Serial.println(String(set_temperature-23));
}
    `;
  
  return (
    <div className="container" style={{ backgroundColor: '#F1EEEE', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Head>
        <title>Flavius!</title>
        <link rel="icon" href="Icon.PNG" />
      </Head>
      <Header />
      <main>
        
        <h1 style={{ fontSize: '7vw', marginTop: '2px', marginBottom: '10px' }}>
          Projekt Flasche!
        </h1>
        <p className="bio" style={{ fontSize: '2.5vh', paddingRight: '10px' }}>
          Projekt Flasche was my 2023 school project, where I focused on recycling PET bottles into 3D printer filament.
        </p>

            <div style={{ width: '95%' }}>
              <iframe 
            width="49%" 
            height="400vh" // Maintain 16:9 aspect ratio for mobile
            src="https://www.youtube.com/embed/lPAiaiMdthM" 
            title="YouTube video player" 
            frameBorder="1" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          <iframe 
            width="49%" 
            height="400vw" 
            src="https://www.youtube.com/embed/xtNXAdkCluk" 
            title="YouTube video player" 
            frameBorder="1" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
            </div>

          <h2 style={{ fontSize: '3vw' }}>The Components</h2>
          <div style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
          <section style={{ marginTop: '20px' }}>
          
        </section>
          <img src="/PF-PCB.png" alt="Projekt Flasche" style={{ width: '53.5vh', margin: '.75vw'}} />
          <img src="/Projekt Flasche.jpg" alt="Projekt Flasche" style={{ width: '53.5vh', margin: '.75vw'}} />
        

          <h2 style={{ fontSize: '2vw' }}>Arduino Program</h2>
          <CodeBlock code={code} />
            </div>
            
      </main>
    </div>
  );
}
