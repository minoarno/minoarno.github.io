import{P as e,a as r}from"./ProjectData-cdee6204.js";import{d as s,_ as i,h as n,c,e as l,a,o as p}from"./index-872cec1c.js";const d=[new e("project-7","2D OpenGL engine","img/projects/project-6-icon.png",`
    <div class="paragraph">
      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It's available on Windows Store because why not.
      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.
            </div>
            <div class="paragraph center">
              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>
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
    `,"#c10606"),new e("project-8","DirectX 11 Engine","img/projects/zelda.png",`
    <div class="paragraph">
                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.
            </div>

            <div class="paragraph center">
                <iframe class="youtube" src="https://www.youtube.com/embed/60jUz-i-3Kk" frameborder="0" allowfullscreen></iframe>
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

            <div class="paragraph">
              <div class="notice">
                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> 
            </div>`,"#1ca1e2")],f=s({name:"EngineProjects",components:{ProjectsList:r},data:function(){return{projects:d}}}),m=a("h1",null,"Renderer Projects",-1),h=a("div",{style:{"margin-bottom":"30px"}}," Here you can find some projects that are more focused on the renderer instead of the gameplay. ",-1);function u(t,g,w,v,b,j){const o=n("ProjectsList");return p(),c("div",null,[m,h,l(o,{projects:t.projects},null,8,["projects"])])}const k=i(f,[["render",u]]);export{k as default};
