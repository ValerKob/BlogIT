!function(){const e=document.getElementById("burger"),t=document.getElementById("sidebar-mobile"),s=document.querySelector(".main"),c=document.getElementById("sidebar-mobile-wrapper"),o=document.querySelector("body");e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("active"),s.classList.toggle("active"),o.classList.toggle("no-scroll--sidebar"),c.classList.toggle("active")})),c.querySelector(".sidebar-mobile-container").addEventListener("click",(function(e){e.stopPropagation()})),c.addEventListener("click",(function(){t.classList.toggle("active"),e.classList.toggle("active"),s.classList.toggle("active"),o.classList.toggle("no-scroll--sidebar"),c.classList.toggle("active")}))}(),function(){const e=document.querySelector("[data-friteMe-mobile]"),t=document.getElementById("friteMe-mobile"),s=document.getElementById("friteMe__close-mobile");e.addEventListener("click",(function(){t.classList.remove("active")})),t.querySelector(".modal__friteMe-mobile").addEventListener("click",(function(e){e.stopPropagation()})),s.addEventListener("click",(function(){t.classList.add("active")})),t.addEventListener("click",(function(){t.classList.add("active")}))}(),function(){const e=document.querySelectorAll("[data-friteMe]"),t=document.getElementById("friteMe"),s=document.getElementById("friteMe-close"),c=document.querySelector("body");e.forEach((e=>{e.addEventListener("click",(function(){t.classList.remove("active"),c.classList.add("no-scroll")}))})),t.querySelector(".modal__friteMe").addEventListener("click",(function(e){e.stopPropagation()})),s.addEventListener("click",(function(){t.classList.add("active"),c.classList.remove("no-scroll")})),t.addEventListener("click",(function(){t.classList.add("active"),c.classList.remove("no-scroll")}))}(),function(){const e=document.querySelectorAll("#leafRight"),t=document.getElementById("content-1"),s=document.getElementById("content-2"),c=(document.getElementById("content-3"),document.querySelectorAll("#leafLeft"));e.forEach((e=>{e.addEventListener("click",(e=>{t.classList.contains("active")?window.location.href="index.html":s.classList.contains("active")?window.location.href="index-three.html":window.location.href="index-one.html"}))})),c.forEach((e=>{e.addEventListener("click",(e=>{t.classList.contains("active")?window.location.href="index-three.html":s.classList.contains("active")?window.location.href="index-one.html":window.location.href="index.html"}))}))}(),function(){const e=document.querySelector("[data-mobile-nav]"),t=document.getElementById("headerLink"),s=document.getElementById("headerNav");e.addEventListener("click",(e=>{t.classList.toggle("active"),s.classList.toggle("active")}))}(),function(){const e=document.querySelectorAll("[data-stories]"),t=document.querySelectorAll("[data-stories-close]"),s=document.getElementById("st_1"),c=document.getElementById("st_2"),o=document.getElementById("st_3"),i=document.getElementById("st_4"),n=document.getElementById("mdST_1"),a=document.getElementById("mdST_2"),l=document.getElementById("mdST_3"),d=document.getElementById("mdST_4"),r=document.getElementById("mdSourse_1"),m=document.getElementById("mdSourse_2"),v=document.getElementById("mdSourse_3"),u=document.getElementById("mdSourse_4"),L=document.getElementById("mdImg_1"),g=document.getElementById("mdImg_2"),y=document.getElementById("mdImg_3"),E=document.getElementById("mdImg_4"),f=document.querySelector("body");e.forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.stories,t=document.querySelector("#"+e);t.classList.remove("active"),t.querySelector(".modal__story").addEventListener("click",(function(e){e.stopPropagation()})),t==stories_1?(s.classList.remove("active"),n.classList.remove("active"),r.classList.remove("active"),L.classList.remove("active")):t==stories_2?(c.classList.remove("active"),a.classList.remove("active"),m.classList.remove("active"),g.classList.remove("active")):t==stories_3?(o.classList.remove("active"),l.classList.remove("active"),v.classList.remove("active"),y.classList.remove("active")):t==stories_4&&(i.classList.remove("active"),d.classList.remove("active"),u.classList.remove("active"),E.classList.remove("active")),f.classList.add("no-scroll")}))})),t.forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.storiesClose,t=document.querySelector("#"+e);t.classList.add("active"),t==stories_1?(s.classList.add("active"),n.classList.add("active"),r.classList.add("active"),L.classList.add("active")):t==stories_2?(c.classList.add("active"),a.classList.add("active"),m.classList.add("active"),g.classList.add("active")):t==stories_3?(o.classList.add("active"),l.classList.add("active"),v.classList.add("active"),y.classList.add("active")):t==stories_4&&(i.classList.add("active"),d.classList.add("active"),u.classList.add("active"),E.classList.add("active")),f.classList.remove("no-scroll")}))}))}(),function(){const e=document.querySelector(".scroll-up"),t=document.querySelector(".scroll-up__svg-path"),s=t.getTotalLength();t.style.strokeDasharray=`${s} ${s}`,t.style.transition="stroke-dashoffset 20ms";const c=()=>window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",(()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,o=s-c()*s/e;t.style.strokeDashoffset=o})(),c()>100?e.classList.add("scroll-up--active"):e.classList.remove("scroll-up--active")})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}(),document.querySelectorAll("[data-search]").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target;t.style.height="2.5rem",t.style.height=t.scrollHeight+"px"}))})),function(){const e=document.querySelectorAll("[data-modal-share]"),t=document.getElementById("share"),s=document.getElementById("share__close"),c=document.querySelector("body");e.forEach((e=>{e.addEventListener("click",(function(){t.classList.remove("active"),c.classList.add("no-scroll")}))})),s.addEventListener("click",(function(){t.classList.add("active"),c.classList.remove("no-scroll")})),t.querySelector(".modal__share").addEventListener("click",(function(e){e.stopPropagation()})),t.addEventListener("click",(function(){t.classList.add("active"),c.classList.remove("no-scroll")}))}();