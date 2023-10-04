"""This module is for solving Phyics Question"""

def Acceleration(v:int|float,u:int|float,t:int|float)->int|float:
    """This function helps in calculating the Acceleration"""
    Acceleration = (v-u)/t
    return Acceleration

def Density(m:int|float,v:int|float,)->int|float:
    """This function helps in calculating the Density"""
    Density = m/v
    return Density

def Power(w:int|float,t:int|float)->int|float:
    """This function helps in calculating the Power"""
    Power = w/t
    return Power

def Force(m:int|float,a:int|float)->int|float:
    """This function helps in calculating the Force"""
    Force = m * a
    return Force

def Speed(d:int|float,t:int|float)->int|float:
    """This function helps in calculating the Speed"""
    Speed = d/t
    return Speed

def Pressure(F:int|float,A:int|float)->int|float:
    """This function helps in calculating the Acceleration"""
    Pressure = F/A
    return Pressure

