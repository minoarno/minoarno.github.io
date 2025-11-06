import{P as e,a as o}from"./ProjectData-5b6f3871.js";import{d as s,_ as i,h as n,c as l,e as d,a as t,o as h}from"./index-e20fae04.js";const c=[new e("project-1","Underworld Overseer","img/projects/underworld-overseer.jpg",`<div class="paragraph">
     <strong>Underworld Overseer</strong> is so far my favourite project to date.<br/>
     I worked on it from December 2022 till March 2025 from start to finish at <strong>Myron Games</strong> with 10 people.<br/>
     The game was made in <strong>Unity</strong> and we used <strong>Plastic SCM</strong> for version control.<br/>
     To communicate clearly in the team, we adopted an agile sprint planning style using <strong>Notion</strong>.<br/>
     It is a dungeon managing game where we took some inspiration from both the old "Dungeon Keeper" games as well as "War For The Overworld" but with a <strong>focus on VR</strong>.<br/>
     The game was published on October 31 2024 on:
     <ul>
     <li><a href="https://www.meta.com/en-gb/experiences/underworld-overseer/7249464208476495/" target="_blank">Underworld Overseer on Meta</a><br/></li>   
     <li><a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">Underworld Overseer on Steam</a><br/></li>
     </ul>
     <br/>
     The game required me to be part of designing the code structure, file structure and planning a whole code base from scratch.<br/>
     It was quite challenging to make shaders or (graphics) optimizations to suit the hardware limitations of the VR Quest 2 on standalone.<br/>  
     In this article I will mainly talk about some of the challenges and some of the things I enjoyed when working on <strong>Underworld Overseer</strong>.<br/>
     </div>
     
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        My contributions to the project were mostly involving:
        <ul>
        <li><strong>Code Structure</strong></li>
        Since resources were stretched a little thin at times, I was mostly in charge of implementing the gameplay loop after discussing it with the lead programmer.<br/>
        Here I learned that naming variables or methods isn't my strong suit and that asking another programmer's opinion about a name prevents misunderstandings immensely down the line.<br/>
        <br/>
        <li><strong>Unit Behavior</strong></li>
        Most of the time I would be tweaking the behavior of the creatures.<br/>
        Whether it would be adding a new mechanic such as eating mandrakes or adding a new enemy behavior.<br/>
        We made use of UML to document how the classes would interact with each other as well as documenting how the enemy and unit AI would function.<br/>
        <img src="/img/projects/ai-unit.png" width=90%; height=auto; alt="AI behavior diagram of the player's controllable units"/>
        <br/>
        <li><strong>Optimizing For Quest 2</strong></li>
        One of the problems with VR is the limited capabilities of the hardware you are working with compared to a computer or console.<br/>
        Slight changes in the renderer would make it so that using the depth buffer was not possible for example.<br/>
        It also means that the amount of drawcalls needed to be decreased and that detecting nearby creatures had to be done with performance in mind.<br/>
        <br/>
        <li><strong>Custom Fog</strong></li>
        Another issue is that the culling of objects far away was not only quite noticable but the fog in unity appears to be rectangular.<br/>
        To fix this I made a <strong>subshader</strong> that implements my own variant of fog.<br/>
        We really wanted a fog that would start at a variable range which would get exponentially thicker while getting closer to another variable.<br/>
        These values could be tweaked and changed at runtime, allowing us to test quicker or limit the render distance for weaker hardware with less popping of meshes.<br/>
        <br/>
        <li><strong>Vertex Animation Texture</strong></li>
        The amount of draw calls would still limit us to do certain things as each animator is it's own draw call.<br/>
        To allow us some simple animations, we are making use of a <strong>Vertex Animation Texture</strong>, where we use the texture to store vertex offsets.<br/>
        This allows us to turn a bunch of different simple animations into a single material and draw call.</br>
        </ul>
    </div>
    `,"#610917"),new e("project-2","Deisim","img/projects/deisim.jpg",`
    <div class="paragraph">
        <strong>Deisim</strong> is the game that just released when I started my internship in September 2022.<br/>
        It is a God simulator in <strong>VR</strong> made in <strong>Unity</strong> that has been in development since 2016.<br/>
        We made use of <strong>GitKraken</strong> for version control at first and merged the project to <strong>Plastic SCM</strong> later.<br/>
        For communication we tried a variety of agile planning tools such as <strong>Codecks</strong> and eventually <strong>Notion</strong>.<br/>
        The game released on:
        <ul>
            <li><a href="https://www.meta.com/en-gb/experiences/deisim/3526702020710931/" target="_blank">Deisim on Meta</a><br/></li>
            <li><a href="https://www.picoxr.com/global/games/deisim" target="_blank">Deisim on Pico</a><br/></li>   
            <li><a href="https://store.steampowered.com/app/525680/Deisim/" target="_blank">Deisim on Steam</a><br/></li>
        </ul>

        My job was primarily to maintain the existing code base, add new features for future updates and refactoring where needed to allow for more options.<br/>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/URFq4KwWioQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Some of the features I've contributed to:
        <ul>
        <li><strong>Vehicle Behavior</strong></li>
        I was in charge of designing and implementing how ships, airships and spaceshuttles would move through the world.<br/>
        Whether they go from port to port to trade or pirates hunting and plundering traders. <br/>
    
        <img src="/img/projects/abstract-vehicle-state.png" width=90%; height=auto; alt="Code snippet of abstract state machine of the vehicle types"/>
        <br/>        
        <br/>
        <li><strong>Coast Manager</strong></li>
        To add some more variety between coasts and to make a difference between dirt, sand and docks, we added the coast manager.<br/>
        Where we made use of scriptable objects to make it easier to maintain.<br/> 
        Since the dock selection was a rather repetitive process that needed to be done per civilization I integrated a tool inside the scriptable object where it was possible to decide a dock per town type and tech level.<br/>
        <img src="/img/projects/dock-collection-tool.png" width=90%; height=auto; alt="Code snippet of abstract state machine of the vehicle types"/>
        <br/>
        <br/>
        <li><strong>Terrain Blending Shader</strong></li>
        The old blending was made to only supported blending between snow, grass and sand.<br/>
        I refactored it so that we could use more different colors for our terrain tiles but also that they all would have this jagged line no matter the combination.<br/>
        <br/>
        <img src="/img/projects/deisim-biome.png" style="display: block; margin: auto;" alt="Photo of biome blending and coast manager"/>
        For this I had to write the code in the unity built-in renderpipeline, the masks are used as booleans to decide what is blended and what isn't.
        <img src="/img/projects/terrain-shader-deisim.png" style="display: block; margin: auto;" width=90%; height=auto; alt="Code snippet of terrain shader"/>
        To make the blending a bit less straight a special mask was created where I use the different channels to create seperate masks.
        <img src="/img/projects/terrain-blending-deisim.png" style="display: block; margin: auto;" width=90%; height=auto; alt="terrain blending image"/>
        </ul>
    </div>
    <br/>
    
    </div>
    `,"#4ba4e3"),new e("project-3","Landmass Inspired Terrain Tool","img/projects/landmass-display.png",`
    <div class="paragraph">
        This project was made alongside my paper as my graduation work for DAE between October 2021 until January 2022.</br>
        <strong>Landmass</strong> is a tool for <strong>Unreal</strong> that allows for shaping terrain using splines and perlin noise.<br/>
        My graduation work was to make a <strong>Landmass inspired terrain tool</strong> for in <strong>Unity</strong>.
        In my paper I am explaining how I try to recreate mountain ranges using splines, generating floodmaps and octaves.</br>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/UZ7Kp2-77CE" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        If you would like to have a read of my paper you can download it on the link below.</br>
    </div>
    <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="/papers/GW_LandMass_Paper_EN.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download resume as PDF 🇬🇧</a>
        <div style="clear:both"></div>
    </div>

    <div class="paragraph center">

    </div>
    `,"#708496"),new e("project-4","Banana Wars","img/projects/banana-wars.jpg",`
    <div class="paragraph">
        <strong>Banana Wars</strong> is a small chaotic couch co-op game where the goal is to gain as many bananas as possible.<br/>
        The project is made in <strong>Unity</strong> with 3 other people between February 2020 and June 2020.<br/>
        We used <strong>Perforce</strong> for source control and <strong>Hacknplan</strong> for planning.<br/>
        It feels more like a gamejam game to the limited amount of time we could spend on development each week.<br/>

        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/Jd1Z2E_hLIM " frameborder="0" allowfullscreen></iframe>
        </div>

        The game did so well in fact that we were finalists for "Rookie Of The Year" in 2020 according to The Rookies.
        
        <a href="https://www.therookies.co/entries/5001" target="_blank">Rookies Entry</a>
        <a href="https://liamvb.itch.io/banana-wars" target="_blank">itch.io page</a>     
    </div>
    `,"#e80fb7"),new e("project-5","Zombie Survivor AI","img/projects/zombie-survivor.png",`
    <div class="paragraph">
        <strong>Zombie Survivor AI</strong> is a game where it was an exam from <strong>DAE</strong>, where you would have to write an AI that would play the game for us using code injection.<br/>
        The AI is written in a <strong>custom framework in C++</strong> making use of statemachines and blackboards.
        For version control I made use of <strong>Github</strong>.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/C8MBB69VfP0" frameborder="0" allowfullscreen></iframe>
    </div>
    <br/>
    Here you can see a visual representation of the player AI's thought process in <strong>UML</strong>.<br/>
    Since the goal is to survive as long as possible and the zombies get stronger the longer you stay alive.<br/>
    After a while food also starts to become a problem, hence the reason why exploring is a necessity.<br/>
    All the movement of the player is handled using <strong>steering behaviors</strong>.<br/>

    <div class="paragraph center">
        <img src="/img/projects/zombie-survivor-behavior.png"/> 
    </div>

    <img :src="/img/projects/zombie-survivor-behavior.jpg"/>
    `,"#e48246"),new e("project-6","Wheelchair Simulator","img/projects/vanilla.jpg",`
    <div class="paragraph">
        <strong>Vanilla, Wheelchair Simulator</strong> is a school project where we worked together with <strong>UZ Ghent</strong> to create a <strong>VR</strong> game that mimics an electronic wheelchair.<br/>
        It's made in <strong>Unity</strong> and we used <strong>Perforce</strong> for version control.<br/>
        The development team consisted of 6 students from <strong>DAE</strong>, where the teachers would supervise as leads twice a week.</br>
        <br/>
        This project was a collaboration with the patients and the specialists.</br>
        We would then have to adjust the game based of the biweekly feedback.</br>
        The goal was to make a training simulation for people that are paraplegic or tetraplegic and would require an electronic wheelchair for their daily lives.<br/>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/a2FW9JjHKNA" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        My contributions include but are not limited to:
        <ul>
        <li><strong>Realistic Wheelchair Movement</strong></li>
        The specialists and patients tested the controls to make sure that the feel felt authentic.<br/>
        <br/>
        <li><strong>Collecting Patient Data</strong></li>
        The specialists wanted to collect data such as:
        <ul> 
            <li> How long does it take to finish a set route compared to last time?</li>
            <li> How often are they looking at the joystick?</li>
            <li> How many times do they bump into a wall/object while driving?</li>
        </ul>
        All of this data was saved into an excel file for easy access for the specialists.<br/>
        <br/>
        <li><strong>URP Shaders</strong></li>
        Sometimes I had to adapt the shaders inside of <strong>HLSL</strong> and <strong>GLSL</strong> in <strong>Unity's URP</strong> because shadergraph was lacking a node.<br/>
        Working with the necessary buffers and utilizing property blocks where needed.</br>
        </ul>
    </div>
    `,"#cb8300")],g=s({name:"GameProjects",components:{ProjectsList:o},data:function(){return{projects:c}}}),m=t("h1",null,"Game Projects",-1),p=t("div",{style:{"margin-bottom":"30px"}}," The following games are made by me or I've heavily contributed to. ",-1);function b(a,u,w,f,v,y){const r=n("ProjectsList");return h(),l("div",null,[m,p,d(r,{projects:a.projects},null,8,["projects"])])}const I=i(g,[["render",b]]);export{I as default};
