# Optimistic Mode components
- When ride is completed the UI goes a head and shows the success even if network unavailable
- This is optimistic and can do that because app has all needed information for price calculation sent to it before hand
- In case ride ended in under Parking lot with no signal

# Component Driven Framework
- Components - a self-contained implementation of a piece of app UI
- Development becomes an act of composition, rather than constantly reinventing
- E.g. giving a button too many props of color and background defeats the whole purpose
- Component should be followed by designer along with developers

# StyleSheet Theme - component use as single piece of truth
- twitter color mode dark, light
- style is also an HTML DOM element and can be inserted an removed

# Action by user
- closing of dropdown for desktop is outside click
- in phone same item click

# ModalRoute component
- modal in wide screen but full screen page in mobile
- component decide based in the device screen

# LazyLoader
- Don't want to take all code directly to front end
- LazyLoad as per the need and device spec
- Twitter has side bar in desktop but for mobile with lazy loading hence code can be skipped

