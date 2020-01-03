---
title: Uplink and Downlink
date: 2020-01-03 11:06:28
tags: Blogs
category: Blogs
mathjax: true
---
> Uplink and Downlink

## Introduction
In telecommunications, the term uplink refers to a wireless connection which is made from the ground to a communications satellite orbiting the Earth or a cell tower. While this transmission signal back to Earth or a Mobile Station (aka. **MS**) is called a downlink.<br>

These terms are usually used in wireless network composed of two main parts which are network side and mobile side. The former houses network equipments such as base station or Node-B or eNB[^1].Network part also interfaces with **PSTN** (*aka. Public Switched Telephone Network*), **ISDN** (*Integrated Services Digital Network*) and **PSDN** (*Public Services Digital Network*) so as to provide various services to the users or subscribers. The latter houses mobile phone or smartphone with SIM card or other devices to connect with network for data access.

## What is uplink?
Specificially, this term is used to indicate transmission route from one device to another, such as from mobile terminal to the network side. The frequency used for all the transmissions from Mobile Subscriber Unit to the Base Station is known as uplink frequency. The data transmission direction from MS to BS is called uplink direction.In GSM network, the packet transmission frequency range from $890MHz$ to $915MHz$ is used as uplink frequency. In C band satellite communication operation, $5925MHz$ to $6425MHz$ is uplink band.

## What is downlink?
Contrastngly, the transmission route from network to subscribers is downlink. The frequency used for all the transmissions from Base Station to the Mobile Subscriber Unit (MS) is known as downlink frequency. The direction from BS to MSs is called downlink direction. Besides, TDD (Time Division Duplex) and FDD (Frequency Division Duplex) is used in combination with FDMA (Frequency Division Multiple Access) and TDMA (Time Division Multiple Access) in order to use the bandwidth effectively in wireless systems. Generally $3700MHz$ to $4200MHz$ is used as downlink frequency band in C band satellite network, while in GSM frequency range from $935MHz$ to $960MHz$ is used as downlink frequency range.

## Why uplink frequency is higher than downlink in satellite communications but downlink is higher in GSM systems?
Well, the reason is simple. 

According to [Dr. Pradhan](https://www.researchgate.net/profile/Prasanta_Pradhan2), in satellite communication, the transmission signals have to travel across the atmosphere which presents a great deal of attenuation. The higher the frequency, the signals lose more and the more power is needed. Lower frequencies will get reflected by atmospheric bands and cannot penetrate to get through to the satellite. Given that a satellite is a light-weight device which canot suppport high-power transmitters on it. Consequencely, it transmits at a lower frequency as compared to the earth station which can afford using very high-power transmitters. Thus, the uplink frequency is higher than downlink in satellite communications.

In GSM systems, our mobile is a portable device which cannot afford high-power transmission as it has a small battery with limited power. The higher the transmitting frequency, the higher is the loss because of the *free space path loss*[^2]. Since a mobile station (cellphone) cannot afford to transmit at high power to compensate for this loss, it must transmit on a lower frequency as a lower frequency presents lesser free space path loss. Therefore, mobile-to-base station (uplink) frequencies are lower than base station-to-mobile (downlink) frequencies.

[^1]: *Node-B* is the telecommunications node in particular mobile communication networks, namely those that adhere to the **UMTS** (Universal Mobile Telecommunications System) standard. *eNB*, aka. Envolved Node-B, is the hardware that is connected to the mobile phone network, like a base transceiver station in GSM networks.

[^2]: The *free space path loss* refers to the attenuation of radio energy between the feedpoints of two antennas that results from the combination of the receiving antenna's capture area plus the obstacle free, line-of-sight path through free space (usually air).