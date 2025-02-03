import{P as e,a as o}from"./ProjectData-b6a7d0fc.js";import{d as i,_ as s,h as n,c as l,e as d,a,o as c}from"./index-5664a943.js";const h=[new e("project-1","Underworld Overseer","img/projects/underworld-overseer.jpg",`
    <div class="paragraph">
     <strong>Underworld Overseer</strong> is so far my favourite project to date.<br/>
     It is a dungeon managing game where we took some inspiration from both the old "Dungeon Keeper" games aswel as "War For The Overworld" but with a focus oh VR.<br/>
     I worked on it from December 2022 till March 2025 from start to finish.<br/>
     The game taught me alot about code structure, file structure and planning a whole code base from scratch.<br/>
     Also was it sometimes quite challenging to make shaders or (graphics) optimizations to suit the hardware limitations of the VR Quest 2 on standalone.<br/>  
     In this article I will mainly talk about some of the challenges and some of the things I enjoyed when working on <strong>Underworld Overseer</strong>.
     </div>
     
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        My contributions to the project were mostly involving:
        <ul>
        <li>Code Structure</li>
        Since resources were stretched a little thin at times I was mostly in charge of implementing the gameplay loop after discussing it with the lead programmer.<br/>
        Here I learned that naming variables or methods isn't my strong suit and that asking another programmer's opinion about a name prevents misunderstandings immensely down the line.<br/>
        <br/>
        <li>Unit Behavior</li>
        Most of the time I would be tweaking the behavior of the creatures.<br/>
        Whether it would be adding a new mechanic such as eating mandrakes or adding a new enemy behavior.<br/>
        We made use of UML to document how the classes would interact with each other as well as documenting how the enemy and unit AI would function.<br/>
        <br/>
        <li>Optimizing For Quest 2</li>
        One of the problems with VR is the limited capabilities of the hardware you are working with compared to a computer or console.<br/>
        Slight changes in the renderer would make it so that using the depth buffer was not possible for example.<br/>
        It also means that the amount of drawcalls needed to be decreased and that detecting nearby creatures had to be done with performance in mind.<br/>
        <br/>
        <li>Custom Fog</li>
        Another issue is that the culling of objects far away was not only quite noticable but the fog in unity appears to be rectangular.<br/>
        To fix this I made a subshader that implements my own variant of fog.<br/>
        We really wanted a fog that would start at a variable range which would get exponentially thicker while getting closer to another variable.<br/>
        These values could be tweaked and changed at runtime, allowing us to test quicker or limit the render distance for weaker hardware with less popping of meshes.<br/>
        <br/>
        <li>Vertex Animation Texture</li>
        The amount of draw calls would still limit us to do certain things as each animator is it's own draw call.<br/>
        To allow us some simple animations we are making use of a <strong>Vertex Animation Texture</strong> where we use the texture to store vertex offsets.<br/>
        This allows us to turn a bunch of different simple animations into a single material and draw call.</br>   
        </ul>
    </div>

    <div class="paragraph">
        <strong>Underworld Overseer</strong> was released in October 2024 and received an update 2025.
    </div>
    `,"#610917"),new e("project-2","Deisim","img/projects/deisim.jpg",`
    <div class="paragraph">
        <strong>Deisim</strong> is the game that just released when I started my internship.<br/>
        It taught me how to work in a professional team compared to the group projects and how to maintain a project over a couple of years.<br/>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Some of the features I've contributed to:
        <ul>
        <li>Vehicle Behavior</li>
        I was in charge of designing and implementing how ships, airships and spaceshuttles would move through the world.<br/>
        Whether they go from port to port to trade or pirates hunting and plundering traders. <br/>
        <li>Coast Manager</li>
        To add some more variety between coasts and to make a difference between dirt, sand and docks, we added the coast manager.<br/>
        Where we made use of scriptable objects to make it easier to maintain.<br/>
        <li>Terrain Blending Shader</li>
        The old blending was made to only supported blending between snow, grass and sand.<br/>
        I refactored it so that we could use more different colors for our terrain tiles but also that they all would have this jagged line no matter the combination.<br/>
        </ul>
    </div>
    </div>
    `,"#4ba4e3"),new e("project-3","Landmass Inspired Terrain Tool","img/projects/project-3-icon.png",`
    <div class="paragraph">
        <strong>Landmass</strong> is a tool for Unreal that allows for shaping terrain using splines and perlin noise.<br/>
        In my paper I am explaining how I try to recreate mountain ranges using splines, generating floodmaps and octaves.</br> 
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph center">

    </div>
    `,"#383838"),new e("project-4","Banana Wars","img/projects/banana-wars.jpg",`
    <div class="paragraph">
    <strong>Banana Wars</strong> is a small couch co-op game where the goal is to gain as many bananas as possible.<br/>

    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph center">
    </div>
    `,"#e80fb7"),new e("project-5","Zombie Survivor AI","img/projects/project-5-icon.png",`
    <div class="paragraph">
        <strong>Zombie Survivor AI</strong> is a game where we needed to write an AI that would play the game for us using code injection.<br/>
        
    </div>

    <div class="paragraph center">
    </div>
    `,"#e48246"),new e("project-6","Wheelchair Simulator","img/projects/project-5-icon.png",`
    <div class="paragraph">
        <strong>Vanilla, Wheelchair Simulator</strong> is a school project where we worked together with <strong>UZ Ghent</strong> to create a VR game that mimics an electronic wheelchair.<br/>
        This project was a colaboration with the patients and the specialist.</br>
        The goal was to make a training simulation for people that are paraplegic or tetraplegic and would require an electronic wheelchair for their daily lives.<br/>
    </div>
    
    <div class="paragraph">
        My contributions include but are not limited to:
        <ul>
        <li>Realistic Wheelchair Movement</li>
        The specialists and patients tested the controls to make sure that the feel felt authentic. 
        <br/>
        <li>Collecting Patient Data</li>
        The specialists wanted to collect data such as:
        <ul> How long does it take to finish a parcour compared to last time?</ul>
        <ul> How often are they looking at the joystick?</ul>
        <ul> How many times do they bump into a wall/object while driving?</ul>
        All of this data was saved into an excel file for easy access for the specialists.<br/>
        <li>URP Shaders</li>
        I also learned how to use HLSL and GLSL in Unity's URP.<br/>
        How to work with the necessary buffers and how to utilize property blocks.</br>
        </ul>
    </div>
    `,"#ada99c")],m=i({name:"GameProjects",components:{ProjectsList:o},data:function(){return{projects:h}}}),u=a("h1",null,"Game Projects",-1),p=a("div",{style:{"margin-bottom":"30px"}}," The following games are made by me or I've heavily contributed to. ",-1);function g(t,w,b,f,v,y){const r=n("ProjectsList");return c(),l("div",null,[u,p,d(r,{projects:t.projects},null,8,["projects"])])}const I=s(m,[["render",g]]);export{I as default};
