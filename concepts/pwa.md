# Web Push notification
- Has 3 parameters silent, tags & renotify
- silent for only vibrate
- tags for notification from group, auto silent from 2nd message of same tag if 1st one is still not read.
- tag with renotify to vibrate again.

# Service worker push aggregator
- To emulate group notification like android on  client site.
- Just update the text of old notification of same group with new count.
- For this keep the count with the notification itself.

# Check client focused screen
- check if client is already on our webpage.
- If yes why give web push show in website page itself.

# Navigation
- On web push open open inactive tab of your webpage instead of opening new tab.