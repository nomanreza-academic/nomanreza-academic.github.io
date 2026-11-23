/* Easy-edit content loader. Edits in Pages CMS save JSON files; this script updates the site. */
(() => {
 const one=s=>document.querySelector(s);
 const setText=(s,v)=>{const e=one(s); if(e && v!==undefined && v!==null)e.textContent=v;};
 const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;};
 const safeUrl=u=>{try{const v=new URL(u,location.href);return ['https:','http:','mailto:'].includes(v.protocol)?v.href:null}catch{return null}};
 const link=(text,url,cls)=>{const u=safeUrl(url);if(!u)return el('span','contact-placeholder','Not added yet');const a=el('a',cls,text);a.href=u;if(!u.startsWith('mailto:')){a.target='_blank';a.rel='noopener noreferrer'}return a;};
 async function get(file){const r=await fetch('data/'+file+'.json',{cache:'no-cache'});if(!r.ok)throw new Error('Missing '+file);return await r.json();}
 function renderProfile(p){
  setText('.hero-copy .eyebrow','●  '+p.eyebrow);
  const heading=one('#hero-heading');if(heading&&p.full_name){const words=p.full_name.trim().split(/\s+/);const second=words.length>2?words.slice(-2).join(' '):words.slice(-1)[0];const first=words.slice(0,-(words.length>2?2:1)).join(' ');heading.replaceChildren(document.createTextNode(first),document.createElement('br'));const em=document.createElement('em');em.textContent=second;heading.append(em);}
  setText('.hero-lead',p.intro);setText('.portrait-caption p',p.headline);setText('.hero-metadata span:first-child',p.credential);setText('.hero-metadata span:nth-child(2)',p.institution);
  setText('#about .section-intro h2',p.about_heading);
  const about=one('#about .about-body');if(about){about.replaceChildren();(p.about_paragraphs||[]).forEach((v,i)=>about.append(el('p',i===0?'large':'',v)));const tags=el('div','tag-row');(p.research_interests||[]).forEach(x=>tags.append(el('span','',x)));about.append(tags);}
  const photo=one('.portrait-frame img');if(photo&&p.portrait){const previous=photo.src;photo.onerror=()=>{photo.onerror=null;photo.src=previous};photo.src=p.portrait;photo.alt=p.full_name||'Academic portrait'}
  document.querySelectorAll('a[href$="Mohammad_Ali_Noman_Reza_Academic_CV.pdf"]').forEach(a=>{if(p.cv_file)a.href=p.cv_file});
  const rows=one('.contact-panel');if(rows){rows.querySelectorAll('.contact-row').forEach(r=>r.remove());
   [['Email',p.email?'mailto:'+p.email:'',p.email],['ORCID',p.orcid,p.orcid],['Google Scholar',p.google_scholar,'Open profile ↗'],['LinkedIn',p.linkedin,'Open profile ↗'],['CV / Résumé',p.cv_file,'Download academic CV ↓']].forEach(([name,url,label])=>{let r=el('div','contact-row');r.append(el('span','',name),link(label||'',url));rows.append(r)});
  }
  document.title=(p.full_name||'Academic Portfolio')+' — Research & Academic Portfolio';
  const desc=document.querySelector('meta[name="description"]');if(desc)desc.content=(p.full_name||'')+' — '+(p.intro||'');
 }
 function renderPublications(items){const dest=one('#publications .publication-list');if(!dest||!Array.isArray(items))return;dest.replaceChildren();items.forEach(p=>{const a=el('article','publication');a.append(el('div','pub-year',p.year||''));const details=el('div','pub-details'),meta=el('div','pub-meta');meta.append(el('span','',p.kind||''),el('span','',p.journal||''));details.append(meta,el('h3','',p.title||''),el('p','',p.authors||''));a.append(details);const u=safeUrl(p.url);if(u){const l=link('↗',u,'pub-link');l.setAttribute('aria-label','Open publication');a.append(l)}dest.append(a)});}
 function renderResearch(items){const dest=one('#research .research-grid');if(!dest||!Array.isArray(items))return;dest.replaceChildren();items.forEach((p,i)=>{const card=el('article','research-card');const top=el('div','research-top');top.append(el('span','research-num',String(i+1).padStart(2,'0')),el('span','card-symbol','✧'));const inner=el('div','research-inner');inner.append(el('span','micro-label',p.category||''),el('h3','',p.title||''),el('p','',p.summary||''));if(p.highlight){const highlight=el('div','research-takeaway','Key finding ');highlight.append(el('strong','',p.highlight));inner.append(highlight)}card.append(top,inner,el('div','research-footer','RESEARCH AREA'));dest.append(card)});}
 function renderEducation(items){const dest=one('#education .timeline');if(!dest||!Array.isArray(items))return;dest.replaceChildren();items.forEach(p=>{const card=el('article','timeline-item');card.append(el('span','timeline-date',p.year||''),el('h3','',p.degree||''),el('p','',p.institution||''));if(p.details)card.append(el('p','timeline-detail',p.details));dest.append(card)});}
 function renderTeaching(items){const dest=one('#teaching .teaching-grid');if(!dest||!Array.isArray(items))return;dest.replaceChildren();items.forEach(p=>{const card=el('div','placeholder-card');card.append(el('span','placeholder-icon','▤'),el('span','micro-label',p.category||''),el('h3','',p.title||''),el('p','',p.description||''));dest.append(card)});}
 const updates=[['profile',renderProfile],['publications',renderPublications],['research',renderResearch],['education',renderEducation],['teaching',renderTeaching]];
 Promise.all(updates.map(async ([file,fn])=>{try{fn(await get(file))}catch(e){console.warn('Using built-in content for',file,e)}}));
})();