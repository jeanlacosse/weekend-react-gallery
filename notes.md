- want to download postman
    - see what data is being sent back whewn I go to different URLs in my code
    - good for isolating if the problem is server related or not

- need to always orient myself to the new code 
    - get a feel for how it runs so I am familiar with it

- server running on port 5000, but proxy client stuff is on 3000
    - unsure why that is happening but whatever

- always test the "handshake" before writing too much code. Very often the problems exist in the handshake so fix thta before moving to code

- useState data types should always be the same type that I am expecting to use the whole time
    - data types should not change over use

- conditional state changes like showing pic or description don't need to live on the server/DB. The true false state can live inside the client b/c it is a short term thing
    - could have used <div>
    onClick={() => setImgShowing(!imgShowing)}
    </div>
        - this would have prevented using onClick twice and just applied it to the entire div, where setImg b/cm the opposite of what it currently is

- all event ahndlers have an event object attached, cannot be called directly