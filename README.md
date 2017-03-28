# Javascript helper for detecting Apple Devices

Background : All Apple devices of the same family (eg iPhones, iPads and iPod Touch's) share the same user-agent. 
This makes differentiating between Apple devices of the same family impossible using http headers alone.  

To address this challenge we've come up with a small javascript snippet that generates a quick hardware fingerprint.  
Feeding the fingerprint along with the http headers to our detection engine, on any platform, will help the detection 
engine make a better choice. 

This scriptlet can be used with both Ultimate (stand alone) and Cloud (web service) detection. 
Express detection has this feature built in already.

# What does the fingerprint look like ?

The fingerprint looks like 4 digits separated by colon (":"). For example 320:480:200:120 

# What does the fingerprint mean ?

The first two numbers are the screen width and height. They can be in any order.

The third number is the display pixel ratio x 100. So if the display is a double
density retina display (2.0) then this number is 200. If the device is an iPhone 6 Plus, then the number
is 300. 

The final number is a micro benchmark. We take up to 20 samples, 1 per ms over 50ms, then select
the highest number. Original iPhones benchmark at around 40 to 60 samples per ms, current iPadPro 
devices benchmark at around 4500 samples per ms !!

# Is this method 100% reliable ?

No. Zoom mode, device load and closeness of device hardware can thwart accuracy. 

# Can you give me some examples of the edge cases ?

Sure : For example, iPhone 5 devices and iPhone 5C devices have virtually identical hardware specs. In this case
both devices generate similar fingerprints. iPhone 6 devices operating in Zoom mode report as having an iPhone 5 
screen size, the iPhone 6 has a faster CPU so the benchmark can pick this up, unless the device is under load, 
then a lower benchmark might lead to it reporting as an iPhone 5.

