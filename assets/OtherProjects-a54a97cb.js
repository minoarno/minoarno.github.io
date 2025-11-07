import{P as o,a as s}from"./ProjectData-b7bc38af.js";import{d as a,_ as n,h as i,c,e as d,a as e,o as l}from"./index-f650e78c.js";const p=[new o("project-7","DirectX 11 Engine","img/projects/zelda.png",`
    <div class="paragraph">
                This project was made for the graphics programming 2 course at <strong>DAE</strong>.</br>
                For the demonstration of the features of the engine, I made a little student game using assets of "Zelda Wind Waker" from Nintendo.</br>
                This project is purely for educational purposes on how engines and DirectX11 work.</br> 
            </div>
            </br>
            <div class="paragraph center">
                <iframe class="youtube" src="https://www.youtube.com/embed/60jUz-i-3Kk" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="paragraph">
              The goal was to add features to the Overlord Game Engine to add features like:
              <ul>
                <li>PhysX Physics</li>
                <li>Deferred Rendering</li>
                <li>Shadowmap</li>
                <li>Deferred Rendering</li>
              </ul>
            </div>
            
            In the video above there is a specific shader used for the sea.</br>
            To create it I first made it in Unity and then tried recreating it in the engine using the depthbuffer.</br>
            `,"#1ca1e2")],h=a({name:"EngineProjects",components:{ProjectsList:s},data:function(){return{projects:p}}}),f=e("h1",null,"Renderer Projects",-1),m=e("div",{style:{"margin-bottom":"30px"}}," Here you can find some projects that are more focused on the renderer instead of the gameplay. ",-1);function u(t,g,j,_,b,v){const r=i("ProjectsList");return l(),c("div",null,[f,m,d(r,{projects:t.projects},null,8,["projects"])])}const y=n(h,[["render",u]]);export{y as default};
