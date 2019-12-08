# LRU - Least recently used
> Double linked list and hash map

# LFU - Least frequently used
> More time complexity
> Keep track of frequency used for moving items in array

# ZFS - Adaptive replacement cache
> Space in half for LRU and LFU
> Ghost of LRU and LFU
> If used LRU again move it to LFU with time
> If found in LFU move to LRU with count
> If drop from LRU keep key in LRU ghost
> If key found in ghost LRU increase size of LRU in expense of LFU
> Same for LFU
