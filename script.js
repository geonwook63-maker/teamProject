const CONFIG={daySeconds:240,thresholds:[0,5,12,22],theftChance:.04};
const materials=[
  {
    "id": "iron_ingot",
    "name": "철괴",
    "icon": "▰",
    "level": 1
  },
  {
    "id": "ancient_wood",
    "name": "고대 목재",
    "icon": "🪵",
    "level": 1
  },
  {
    "id": "tough_leather",
    "name": "질긴 가죽",
    "icon": "🟫",
    "level": 2
  },
  {
    "id": "red_herb",
    "name": "붉은 약초",
    "icon": "🌿",
    "level": 1
  },
  {
    "id": "life_water",
    "name": "생명의 물",
    "icon": "🧪",
    "level": 1
  },
  {
    "id": "honey",
    "name": "꿀",
    "icon": "🍯",
    "level": 1
  },
  {
    "id": "blue_herb",
    "name": "푸른 약초",
    "icon": "🫐",
    "level": 1
  },
  {
    "id": "fire_stone",
    "name": "화염석",
    "icon": "♦",
    "level": 1
  },
  {
    "id": "wind_feather",
    "name": "바람 깃털",
    "icon": "🪶",
    "level": 1
  },
  {
    "id": "magic_crystal",
    "name": "마력 수정",
    "icon": "💎",
    "level": 1
  },
  {
    "id": "steel_plate",
    "name": "강철판",
    "icon": "🔩",
    "level": 2
  },
  {
    "id": "magic_cloth",
    "name": "마력 천",
    "icon": "📜",
    "level": 2
  },
  {
    "id": "red_crystal",
    "name": "붉은 수정",
    "icon": "🔻",
    "level": 1
  },
  {
    "id": "crystal_powder",
    "name": "수정 가루",
    "icon": "✧",
    "level": 1
  },
  {
    "id": "poison_mushroom",
    "name": "독버섯",
    "icon": "🍄",
    "level": 1
  },
  {
    "id": "venom_fang",
    "name": "맹독니",
    "icon": "🦷",
    "level": 1
  },
  {
    "id": "holy_crystal",
    "name": "성스러운 결정",
    "icon": "🔶",
    "level": 2
  },
  {
    "id": "silver_piece",
    "name": "은조각",
    "icon": "◈",
    "level": 2
  },
  {
    "id": "mana_water",
    "name": "마력수",
    "icon": "⚗",
    "level": 1
  },
  {
    "id": "black_herb",
    "name": "검은 약초",
    "icon": "🍃",
    "level": 2
  },
  {
    "id": "bat_wing",
    "name": "박쥐 날개",
    "icon": "🦇",
    "level": 2
  }
];
const people=[
  {
    "id": "knight",
    "name": "왕국 기사",
    "role": "왕국을 수호하는 든든한 전사",
    "sprite_x": 20
  },
  {
    "id": "elf_archer",
    "name": "엘프 궁수",
    "role": "숲을 지키는 바람의 명사수",
    "sprite_x": 380
  },
  {
    "id": "rogue",
    "name": "도적",
    "role": "어둠 속을 걷는 은밀한 여행자",
    "sprite_x": 735
  },
  {
    "id": "wizard",
    "name": "마법사",
    "role": "신비한 마법을 연구하는 현자",
    "sprite_x": 1095
  },
  {
    "id": "cleric",
    "name": "성직자",
    "role": "빛과 치유를 전하는 순례자",
    "sprite_x": 1450
  }
];
// 확정안 우선: 각 캐릭터 Lv.1~3에 레시피 한 개씩, Lv.4는 추리 난이도만 상승.
const recipes=[
{"id":"flame_sword","name":"화염 장검","character_id":"knight","category_id":"weapon","level":1,"material_ids":["iron_ingot","fire_stone","red_crystal"],"quotes":[{"id":"knight_flame_sword_01","text":"불꽃을 머금은 장검이 필요하네. 철에 화염석과 붉은 수정을 더해 주게."},{"id":"knight_flame_sword_02","text":"차가운 쇠붙이에 두 붉은 심장을. 어둠을 가를 한 자루를 벼려 주게."}]},
{"id":"wind_bow","name":"바람의 장궁","character_id":"elf_archer","category_id":"weapon","level":1,"material_ids":["ancient_wood","wind_feather","magic_crystal"],"quotes":[{"id":"elf_archer_wind_bow_01","text":"바람처럼 빠른 장궁을 원해요. 고대 목재, 바람 깃털과 마력 수정으로 만들 수 있죠?"},{"id":"elf_archer_wind_bow_02","text":"오래된 숲의 뼈대에 하늘의 숨결, 푸른 별 하나. 먼 곳까지 제 의지가 닿도록 해 주세요."}]},
{"id":"poison_dagger","name":"독 단검","character_id":"rogue","category_id":"weapon","level":1,"material_ids":["iron_ingot","poison_mushroom","venom_fang"],"quotes":[{"id":"rogue_poison_dagger_01","text":"철로 된 작은 칼에 독버섯과 맹독니를 더해 줘요. 조용하고 확실하게."},{"id":"rogue_poison_dagger_02","text":"단단한 회색 뼈에 숲의 위험과 짐승의 마지막 미소. 소리 없이 끝내고 싶군요."}]},
{"id":"magic_staff","name":"마력 증폭 지팡이","character_id":"wizard","category_id":"weapon","level":1,"material_ids":["ancient_wood","magic_crystal","crystal_powder"],"quotes":[{"id":"wizard_magic_staff_01","text":"고대 목재에 마력 수정과 수정 가루를 더한 지팡이를 부탁해요."},{"id":"wizard_magic_staff_02","text":"늙은 나무가 푸른 심장을 품고 별의 먼지를 두를 때, 제 주문은 더 멀리 울리겠죠."}]},
{"id":"mana_potion","name":"마력 회복 물약","character_id":"cleric","category_id":"potion","level":1,"material_ids":["blue_herb","mana_water","crystal_powder"],"quotes":[{"id":"cleric_mana_potion_01","text":"푸른 약초, 마력수, 수정 가루를 섞어 주세요. 기도를 이어갈 힘이 필요해요."},{"id":"cleric_mana_potion_02","text":"푸른 숲의 열매와 신비한 샘, 잘게 부서진 별빛. 메마른 영혼을 다시 채워 주세요."}]},
{"id":"steel_armor","name":"강철 수호 갑옷","character_id":"knight","category_id":"armor","level":2,"material_ids":["steel_plate","iron_ingot","tough_leather"],"quotes":[{"id":"knight_steel_armor_01","text":"강철판과 철괴, 질긴 가죽으로 튼튼한 갑옷을 부탁하네."},{"id":"knight_steel_armor_02","text":"두 겹의 쇠가 몸을 지키고 짐승의 옷이 그 사이를 잇도록. 왕국의 방패가 되어야 하네."}]},
{"id":"wind_leather_armor","name":"바람 가죽 갑옷","character_id":"elf_archer","category_id":"armor","level":2,"material_ids":["tough_leather","wind_feather","magic_cloth"],"quotes":[{"id":"elf_archer_wind_leather_armor_01","text":"질긴 가죽과 바람 깃털, 마력 천으로 가벼운 갑옷을 만들어 주세요."},{"id":"elf_archer_wind_leather_armor_02","text":"짐승의 옷 위에 하늘의 자취를, 마법의 실로 꿰매 주세요. 나뭇가지 사이를 자유롭게 달릴 수 있게."}]},
{"id":"shadow_cloak","name":"그림자 망토","character_id":"rogue","category_id":"armor","level":2,"material_ids":["magic_cloth","black_herb","bat_wing"],"quotes":[{"id":"rogue_shadow_cloak_01","text":"마력 천에 검은 약초와 박쥐 날개를 더한 망토가 필요해요."},{"id":"rogue_shadow_cloak_02","text":"주문을 엮은 천에 어두운 잎과 밤을 나는 자의 날개. 달빛조차 저를 찾지 못하도록."}]},
{"id":"mana_potion","name":"마력 회복 물약","character_id":"wizard","category_id":"potion","level":2,"material_ids":["blue_herb","mana_water","crystal_powder"],"quotes":[{"id":"wizard_mana_potion_01","text":"푸른 약초와 마력수, 수정 가루가 필요해요. 마력이 바닥났거든요."},{"id":"wizard_mana_potion_02","text":"푸른 열매와 신비한 물에 작은 별의 가루를. 끊어진 주문을 다시 이어야 해요."}]},
{"id":"holy_mace","name":"성광 철퇴","character_id":"cleric","category_id":"weapon","level":2,"material_ids":["iron_ingot","holy_crystal","silver_piece"],"quotes":[{"id":"cleric_holy_mace_01","text":"철괴와 성스러운 결정, 은조각으로 빛나는 철퇴를 만들어 주세요."},{"id":"cleric_holy_mace_02","text":"강인한 쇠에 신의 빛과 달의 파편을 담아 주세요. 어둠을 몰아낼 손잡이가 필요해요."}]},
{"id":"health_potion","name":"생명 회복 물약","character_id":"knight","category_id":"potion","level":3,"material_ids":["red_herb","life_water","honey"],"quotes":[{"id":"knight_health_potion_01","text":"붉은 약초, 생명의 물, 꿀을 섞어 주게. 전투의 상처를 회복해야 하네."},{"id":"knight_health_potion_02","text":"붉은 잎에 생명을 불어넣고 벌들의 선물로 달래 주게. 다시 전선에 설 힘이 필요하네."}]},
{"id":"health_potion","name":"생명 회복 물약","character_id":"elf_archer","category_id":"potion","level":3,"material_ids":["red_herb","life_water","honey"],"quotes":[{"id":"elf_archer_health_potion_01","text":"붉은 약초와 생명의 물에 꿀을 넣어 주세요. 숲에서 다쳤어요."},{"id":"elf_archer_health_potion_02","text":"붉은 풀과 살아 숨 쉬는 샘, 꽃에서 온 달콤함. 제 상처도 봄처럼 아물겠죠."}]},
{"id":"health_potion","name":"생명 회복 물약","character_id":"rogue","category_id":"potion","level":3,"material_ids":["red_herb","life_water","honey"],"quotes":[{"id":"rogue_health_potion_01","text":"붉은 약초에 생명의 물, 꿀을 섞어 줘요. 어젯밤 일이 조금 험했거든요."},{"id":"rogue_health_potion_02","text":"붉은 잎, 살아 있는 물, 벌집의 보물. 무슨 일이 있었는지는 묻지 말아요."}]},
{"id":"health_potion","name":"생명 회복 물약","character_id":"wizard","category_id":"potion","level":3,"material_ids":["red_herb","life_water","honey"],"quotes":[{"id":"wizard_health_potion_01","text":"생명 회복 물약을 부탁해요. 붉은 약초, 생명의 물과 꿀이면 돼요."},{"id":"wizard_health_potion_02","text":"붉은 숲의 숨과 살아 있는 샘에 벌들의 햇살을. 마법으로도 낫지 않는 피로가 있어요."}]},
{"id":"blessed_chain_armor","name":"축복의 사슬 갑옷","character_id":"cleric","category_id":"armor","level":3,"material_ids":["steel_plate","holy_crystal","silver_piece"],"quotes":[{"id":"cleric_blessed_chain_armor_01","text":"강철판과 성스러운 결정, 은조각으로 축복받은 갑옷을 만들어 주세요."},{"id":"cleric_blessed_chain_armor_02","text":"강철의 피부에 거룩한 빛과 달의 조각을 엮어 주세요. 약한 이들 앞에 설 때 저를 지켜 주도록."}]}];
const material_by_id=Object.fromEntries(materials.map(m=>[m.id,m]));
const $=id=>document.getElementById(id);let saved;try{saved=JSON.parse(localStorage.getItem('moonlit-v1'))}catch{}let state={coins:0,total:0,day:1,...(saved&&Number.isFinite(saved.coins)&&Number.isFinite(saved.total)?saved:{})};let running=false,deadline=0,expired=false,order=null,selected=[],filter='all',stats={ok:0,fail:0,earned:0,penalty:0,theft:0},audioEnabled=false,audioCtx;
const level=()=>1+CONFIG.thresholds.slice(1).filter(n=>state.total>=n).length;
function save(){try{localStorage.setItem('moonlit-v1',JSON.stringify(state))}catch{}}
function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toast.timeout);toast.timeout=setTimeout(()=>$('toast').classList.remove('show'),3200)}
function tone(ok){if(!audioEnabled)return;audioCtx??=new AudioContext();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=ok?660:180;g.gain.setValueAtTime(.06,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.25);o.connect(g).connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.25)}
function render(){const lv=level();$('shop_level').textContent=`Lv.${lv} ${['견습 공방','길드 공인 상점','왕도 명성 상점','왕실 지정 상점'][lv-1]}`;$('coins').textContent=`◉ ${state.coins.toLocaleString()}`;$('day').textContent=`${state.day}번째 날`;$('ledger_day').textContent=String(state.day).padStart(2,'0');$('progress').textContent=lv===4?`최고 레벨 · ${state.total}회 성공`:`${state.total} / ${CONFIG.thresholds[lv]} 판매`;$('success').innerHTML=`${stats.ok}<em>회</em>`;$('failure').innerHTML=`${stats.fail}<em>회</em>`;$('income').innerHTML=`${stats.earned-stats.penalty-stats.theft}<em>◉</em>`;$('price').textContent=`+${10+(lv-1)*5} 코인`;$('selected_count').textContent=`${selected.length} / 3`;$('slots').innerHTML=Array.from({length:3},(_,i)=>`<button class="slot" data-slot="${i}" aria-label="${selected[i]===undefined?'빈 재료 칸':material_by_id[selected[i]].name+' 제거'}">${selected[i]===undefined?'<span style="color:#5c503d">＋</span>':material_by_id[selected[i]].icon+`<small>${material_by_id[selected[i]].name}</small>`}</button>`).join('');$('craft').disabled=!running||!order||!selected.length;$('craft_note').textContent=selected.length?'선택한 재료를 한 번 더 확인해 주세요.':'재료함에서 재료를 선택해 주세요.';$('unlocked').textContent=`${materials.filter(m=>m.level<=lv).length} / ${materials.length} 해금`;$('materials').innerHTML=materials.map((m,i)=>filter==='open'&&m.level>lv?'':`<button class="ingredient ${m.level>lv?'locked':''} ${selected.includes(m.id)?'chosen':''}" data-material="${m.id}" ${m.level>lv?'disabled':''}><span class="infinity">${m.level>lv?'🔒':'∞'}</span><span class="icon">${m.icon}</span><span class="name">${m.name}</span>${m.level>lv?`<span class="lock-level">Lv.${m.level} 해금</span>`:''}</button>`).join('');$('start').textContent=running?'영업 중 · 좋은 하루 되세요':`상점 문 열기 →`; $('start').disabled=running;save()}
function updateClock(){if(!running)return;const seconds=Math.max(0,Math.ceil((deadline-Date.now())/1000));$('timer').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;$('timebar').style.width=seconds/CONFIG.daySeconds*100+'%';if(!seconds){expired=true;$('open_badge').textContent='마지막 손님 응대 중';$('time_label').textContent='영업 종료';if(!order)finishDay()}}
function nextCustomer(){if(!running)return;updateClock();if(!running)return;if(expired){finishDay();return}const who=Math.floor(Math.random()*5);if(who===2&&Math.random()<CONFIG.theftChance){const amount=Math.floor(state.coins*.1);state.coins-=amount;stats.theft+=amount;toast(`도적이 ${amount}코인을 훔치고 달아났습니다!`);render();setTimeout(nextCustomer,1400);return}const options=recipes.filter(r=>r.character_id===people[who].id&&r.level<=level());order=options[Math.floor(Math.random()*options.length)];selected=[];$('customer').style.backgroundPosition=`-${people[who].sprite_x}px -83px`;$('customer').classList.add('visible');$('customer_name').textContent=people[who].name;$('customer_role').textContent=people[who].role;const dialogue=order.quotes[level()===4?1:0];$('quote').dataset.dialogue_id=dialogue.id;$('quote').textContent='“'+dialogue.text+'”';$('order_foot').textContent=`${level()===4?'✧ 말 속에 숨은 재료를 찾아보세요.':'✧ 레시피 도감에서 이 손님의 제작법을 확인할 수 있어요.'}`;render()}
function startDay(){if(running)return;stats={ok:0,fail:0,earned:0,penalty:0,theft:0};running=true;expired=false;deadline=Date.now()+CONFIG.daySeconds*1000;$('open_badge').textContent='● 영업 중';$('time_label').textContent='오늘 남은 시간';nextCustomer();updateClock();tone(true)}
function craft(){if(!running||!order||!selected.length)return;updateClock();const before=level(),price=10+(before-1)*5;const ok=order.material_ids.length===selected.length&&order.material_ids.every(i=>selected.includes(i));if(ok){state.coins+=price;state.total++;stats.ok++;stats.earned+=price;toast(`제작 성공! ${order.name} 판매 · +${price} 코인`)}else{const penalty=Math.min(state.coins,Math.floor(price*.25));state.coins-=penalty;stats.fail++;stats.penalty+=penalty;toast(`제작 실패 · -${penalty} 코인. 손님이 떠났습니다.`)}tone(ok);order=null;selected=[];delete $('quote').dataset.dialogue_id;$('customer').classList.remove('visible');$('customer_name').textContent=ok?'만족한 손님이 떠났습니다':'손님이 아쉬워하며 떠났습니다';$('quote').textContent=ok?'“고맙습니다. 다음 모험도 함께해요!”':'“제가 찾던 물건은 아니군요…”';if(level()>before)toast(`Lv.${level()} 달성! 새로운 레시피와 재료가 해금되었습니다.`);render();if(expired)finishDay();else setTimeout(nextCustomer,1600)}
function modal(html){$('modal_content').innerHTML=html;if(!$('modal').open)$('modal').showModal()}
function finishDay(){if(!running)return;running=false;order=null;delete $('quote').dataset.dialogue_id;$('open_badge').textContent='오늘 영업 종료';const day=state.day;state.day++;render();modal(`<small>THE END OF A GOOD DAY</small><h2>${day}일차 영업을 마쳤습니다.</h2><p>공방의 불을 잠시 낮춥니다. 오늘도 수고했어요.</p><div class="summary">${[['판매 성공',stats.ok+'회'],['판매 실패',stats.fail+'회'],['획득 코인',stats.earned],['제작 패널티',stats.penalty],['도난 코인',stats.theft],['최종 보유 코인',state.coins]].map(([a,b])=>`<div>${a}<b>${b}</b></div>`).join('')}</div><button class="primary" id="next_day">${state.day}일차 상점 문 열기 →</button>`);$('next_day').onclick=()=>{$('modal').close();startDay()}}
function book(){modal(`<small>THE ARTISAN'S RECIPE BOOK</small><h2>장인의 레시피 도감</h2><p>캐릭터별 Lv.1~3 레시피가 순서대로 해금됩니다. 순서와 무관하게 정확한 재료를 조합하세요.</p><div class="recipe-list">${recipes.map(r=>`<div class="recipe-card ${r.level>level()?'locked':''}"><b>${r.level>level()?'🔒 ':''}${r.name}</b><small>${people.find(p=>p.id===r.character_id).name} · Lv.${r.level} 해금</small><div>${r.material_ids.map(i=>material_by_id[i].icon+' '+material_by_id[i].name).join(' + ')}</div></div>`).join('')}</div>`)}
$('materials').onclick=e=>{const button=e.target.closest('[data-material]');if(!button||button.disabled)return;if(!running||!order){toast('상점 문을 열고 손님의 주문을 받아 주세요.');return}const i=button.dataset.material;if(selected.includes(i))selected=selected.filter(n=>n!==i);else if(selected.length<3)selected.push(i);else toast('재료는 최대 3개까지 선택할 수 있어요.');render()};$('slots').onclick=e=>{const b=e.target.closest('[data-slot]');if(b){selected.splice(+b.dataset.slot,1);render()}};$('clear').onclick=()=>{selected=[];render()};document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));render()});$('craft').onclick=craft;$('start').onclick=startDay;$('book').onclick=book;$('close').onclick=()=>$('modal').close();$('modal').onclick=e=>{if(e.target===$('modal'))$('modal').close()};$('help').onclick=()=>modal(`<small>WELCOME TO YOUR WORKSHOP</small><h2>작은 상점, 위대한 모험.</h2><p>① 상점 문을 열어 손님을 맞이하세요.<br>② 주문을 읽고 재료를 최대 3개 고르세요.<br>③ 제작하고 판매하기를 눌러 결과를 확인하세요.<br>④ 4분이 지나면 마지막 주문을 마친 후 정산합니다.</p><p>성공 시 Lv.1~4에서 10·15·20·25코인을 받습니다. 실패하면 판매가의 25%를 버림하여 차감하며, 코인은 0 미만으로 내려가지 않습니다. 도적은 등장 시 4% 확률로 보유 코인의 10%를 훔칩니다.</p><p>임시 밸런스: 누적 성공 5·12·22회에 레벨 상승. 다음 날은 정산 후 직접 시작합니다. 최소 패널티는 없으며, 희귀 재료와 레어 아이템은 등장 조건 확정 전까지 적용하지 않습니다. 진행 기록은 이 브라우저에 자동 저장됩니다.</p><p>도감 단축키: R · 도감을 읽는 동안에도 영업 시간은 흐릅니다.</p>`);$('sound').onclick=()=>{audioEnabled=!audioEnabled;$('sound').textContent=audioEnabled?'♫ ON':'♫ OFF';tone(true)};document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r'){if($('modal').open)$('modal').close();else book()}});setInterval(updateClock,250);render();
