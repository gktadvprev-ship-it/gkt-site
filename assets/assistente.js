/* Assistente virtual GKT: triagem por botões que monta a mensagem e abre o WhatsApp. Nada é gravado no site. */
(()=>{
const WA="5551999443190";
const AVATAR=`<svg viewBox="0 0 128 128" aria-hidden="true">
<defs><clipPath id="gk-c"><circle cx="64" cy="64" r="64"/></clipPath>
<linearGradient id="gk-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset="1" stop-color="#d6dee8"/></linearGradient>
<linearGradient id="gk-sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5d8c4"/><stop offset="1" stop-color="#eec6aa"/></linearGradient>
<linearGradient id="gk-h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a2c1d"/><stop offset="1" stop-color="#22130d"/></linearGradient></defs>
<g clip-path="url(#gk-c)"><rect width="128" height="128" fill="url(#gk-bg)"/>
<circle cx="25.1" cy="83.1" r="6.1" fill="#2b1912"/><circle cx="23.1" cy="76.4" r="5.6" fill="#2b1912"/><circle cx="19.3" cy="69.6" r="5.9" fill="#2b1912"/><circle cx="19.2" cy="62.5" r="6.3" fill="#2b1912"/><circle cx="21.5" cy="53.2" r="6.6" fill="#2b1912"/><circle cx="21.1" cy="46.2" r="6.9" fill="#2b1912"/><circle cx="25.1" cy="39.4" r="6.6" fill="#2b1912"/><circle cx="27.6" cy="33.0" r="6.5" fill="#2b1912"/><circle cx="33.3" cy="25.1" r="6.9" fill="#2b1912"/><circle cx="39.6" cy="22.3" r="7.0" fill="#2b1912"/><circle cx="46.7" cy="19.2" r="6.2" fill="#2b1912"/><circle cx="54.0" cy="15.3" r="7.0" fill="#2b1912"/><circle cx="61.5" cy="13.0" r="5.7" fill="#2b1912"/><circle cx="66.8" cy="15.6" r="6.2" fill="#2b1912"/><circle cx="75.3" cy="14.8" r="6.3" fill="#2b1912"/><circle cx="81.6" cy="17.5" r="6.5" fill="#2b1912"/><circle cx="88.6" cy="22.9" r="6.6" fill="#2b1912"/><circle cx="95.4" cy="27.5" r="7.1" fill="#2b1912"/><circle cx="99.6" cy="31.2" r="6.9" fill="#2b1912"/><circle cx="104.4" cy="39.9" r="6.4" fill="#2b1912"/><circle cx="106.5" cy="44.9" r="6.9" fill="#2b1912"/><circle cx="107.7" cy="52.6" r="5.6" fill="#2b1912"/><circle cx="109.1" cy="62.4" r="5.7" fill="#2b1912"/><circle cx="108.1" cy="68.4" r="5.8" fill="#2b1912"/><circle cx="104.6" cy="76.8" r="6.9" fill="#2b1912"/><circle cx="100.7" cy="83.3" r="5.6" fill="#2b1912"/><path d="M64 16c-26 0-42 18-42 42c0 14-6 22-4 34c2 10 10 14 18 14h56c8 0 16-4 18-14c2-12-4-20-4-34c0-24-16-42-42-42z" fill="#2b1912"/><path d="M82.3 51.8q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(38 82.3 51.8)"/><path d="M64.5 103.9q1.8 -2.2 3.6 0t3.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-34 64.5 103.9)"/><path d="M72.4 28.4q1.7 -2.0 3.4 0t3.4 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-7 72.4 28.4)"/><path d="M73.3 38.2q1.5 -1.9 3.1 0t3.1 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(29 73.3 38.2)"/><path d="M48.4 100.8q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-10 48.4 100.8)"/><path d="M60.7 66.6q2.1 -2.6 4.3 0t4.3 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(8 60.7 66.6)"/><path d="M69.0 74.4q2.4 -2.9 4.9 0t4.9 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(1 69.0 74.4)"/><path d="M58.2 82.2q1.7 -2.1 3.5 0t3.5 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-16 58.2 82.2)"/><path d="M104.1 66.6q2.0 -2.5 4.1 0t4.1 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-39 104.1 66.6)"/><path d="M56.9 71.2q1.5 -1.8 3.0 0t3.0 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(9 56.9 71.2)"/><path d="M75.1 30.7q2.1 -2.6 4.3 0t4.3 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-3 75.1 30.7)"/><path d="M79.1 53.5q2.2 -2.6 4.4 0t4.4 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(19 79.1 53.5)"/><path d="M23.9 30.7q2.2 -2.6 4.4 0t4.4 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(37 23.9 30.7)"/><path d="M43.1 61.6q2.1 -2.5 4.2 0t4.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-14 43.1 61.6)"/><path d="M52.6 50.4q1.9 -2.2 3.7 0t3.7 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(8 52.6 50.4)"/><path d="M47.2 55.4q2.3 -2.7 4.5 0t4.5 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-38 47.2 55.4)"/><path d="M69.8 83.3q1.8 -2.2 3.6 0t3.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-22 69.8 83.3)"/><path d="M89.5 44.6q1.7 -2.0 3.4 0t3.4 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-5 89.5 44.6)"/><path d="M80.6 33.9q1.8 -2.2 3.6 0t3.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-13 80.6 33.9)"/><path d="M92.0 60.2q2.4 -2.8 4.7 0t4.7 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-26 92.0 60.2)"/><path d="M50.3 76.7q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-4 50.3 76.7)"/><path d="M40.9 35.4q2.0 -2.4 4.1 0t4.1 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-25 40.9 35.4)"/><path d="M89.8 91.4q1.7 -2.0 3.4 0t3.4 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-18 89.8 91.4)"/><path d="M89.8 76.1q2.3 -2.8 4.6 0t4.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-12 89.8 76.1)"/><path d="M32.9 48.8q2.3 -2.8 4.6 0t4.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-18 32.9 48.8)"/><path d="M51.1 58.5q1.9 -2.3 3.8 0t3.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-7 51.1 58.5)"/><path d="M99.3 38.2q1.5 -1.8 3.0 0t3.0 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(35 99.3 38.2)"/><path d="M95.9 103.0q1.9 -2.3 3.9 0t3.9 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(36 95.9 103.0)"/><path d="M99.9 43.3q2.2 -2.7 4.5 0t4.5 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(27 99.9 43.3)"/><path d="M77.7 66.5q1.8 -2.1 3.6 0t3.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-13 77.7 66.5)"/><path d="M41.1 31.3q2.1 -2.5 4.2 0t4.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-17 41.1 31.3)"/><path d="M90.1 29.5q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(15 90.1 29.5)"/><path d="M99.6 95.9q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(6 99.6 95.9)"/><path d="M23.1 84.1q1.7 -2.0 3.3 0t3.3 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-16 23.1 84.1)"/><path d="M77.7 66.9q1.9 -2.3 3.8 0t3.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(35 77.7 66.9)"/><path d="M73.4 52.6q1.8 -2.1 3.5 0t3.5 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(29 73.4 52.6)"/><path d="M62.1 87.0q1.9 -2.2 3.7 0t3.7 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-24 62.1 87.0)"/><path d="M66.9 89.7q1.7 -2.0 3.3 0t3.3 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(23 66.9 89.7)"/><path d="M99.4 88.9q2.3 -2.8 4.6 0t4.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-39 99.4 88.9)"/><path d="M74.8 93.3q1.5 -1.9 3.1 0t3.1 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-18 74.8 93.3)"/><path d="M44.6 67.1q1.9 -2.3 3.8 0t3.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-2 44.6 67.1)"/><path d="M87.2 26.1q1.6 -1.9 3.1 0t3.1 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-30 87.2 26.1)"/><path d="M32.5 31.3q2.5 -3.0 4.9 0t4.9 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(28 32.5 31.3)"/><path d="M29.2 65.2q1.8 -2.2 3.6 0t3.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-15 29.2 65.2)"/><path d="M51.5 76.5q2.1 -2.5 4.2 0t4.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-11 51.5 76.5)"/><path d="M38.1 51.6q1.6 -1.9 3.2 0t3.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(4 38.1 51.6)"/><path d="M82.1 55.7q1.6 -1.9 3.2 0t3.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-26 82.1 55.7)"/><path d="M53.4 73.1q2.3 -2.7 4.6 0t4.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-10 53.4 73.1)"/><path d="M89.3 74.6q1.9 -2.3 3.9 0t3.9 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-10 89.3 74.6)"/><path d="M63.7 80.8q1.9 -2.3 3.8 0t3.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(16 63.7 80.8)"/><path d="M60.7 45.1q2.0 -2.4 4.1 0t4.1 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(16 60.7 45.1)"/><path d="M28.0 59.1q1.9 -2.3 3.9 0t3.9 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(30 28.0 59.1)"/><path d="M100.7 55.2q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(23 100.7 55.2)"/><path d="M44.0 62.2q1.6 -1.9 3.2 0t3.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(25 44.0 62.2)"/><path d="M77.6 95.2q2.3 -2.8 4.6 0t4.6 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(13 77.6 95.2)"/>
<path d="M14 128c4-18 20-27 50-27s46 9 50 27z" fill="#1b2f52"/>
<path d="M52 100l12 15 12-15" fill="none" stroke="#2c4570" stroke-width="2"/>
<path d="M54 99c3 8 7 12 10 12s7-4 10-12" fill="none" stroke="#cfd5dd" stroke-width="1"/>
<path d="M56.5 86h15v12c-3 4-12 4-15 0z" fill="#e8bea1"/>
<path d="M42 62c0-17 9-28 22-28s22 11 22 28c0 16-10 29-22 29s-22-13-22-29z" fill="url(#gk-sk)"/>
<path d="M64 31c-14 0-24 10-24 26c0 5 1 9 2 12c1-9 3-17 8-22c4-4 9-6 14-8c5 2 10 4 14 8c5 5 7 13 8 22c1-3 2-7 2-12c0-16-10-26-24-26z" fill="url(#gk-h)"/>
<path d="M64 33q-2 6-12 11q-7 5-8 13" stroke="#22130d" stroke-width="1.2" fill="none"/><path d="M64 33q2 6 12 11q7 5 8 13" stroke="#22130d" stroke-width="1.2" fill="none"/>
<path d="M72.4 38.1q1.6 -1.9 3.2 0t3.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(7 72.4 38.1)"/><path d="M46.2 34.3q2.3 -2.7 4.5 0t4.5 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-36 46.2 34.3)"/><path d="M49.3 33.9q2.4 -2.9 4.8 0t4.8 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(-26 49.3 33.9)"/><path d="M46.8 40.6q1.6 -1.9 3.2 0t3.2 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(28 46.8 40.6)"/><path d="M70.2 40.5q2.5 -2.9 4.9 0t4.9 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(6 70.2 40.5)"/><path d="M74.8 33.3q2.3 -2.7 4.5 0t4.5 0" stroke="#6a4128" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".55" transform="rotate(1 74.8 33.3)"/>
<path d="M49.5 55.5q5.5-3.2 11-.6" stroke="#3a2418" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M67.5 54.9q5.5-2.6 11 .6" stroke="#3a2418" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<g class="olhos"><path d="M51 62.5q4-3.6 8.2 0q-4 2.6-8.2 0z" fill="#fff"/><path d="M68.8 62.5q4-3.6 8.2 0q-4 2.6-8.2 0z" fill="#fff"/>
<circle cx="55.1" cy="62.3" r="1.9" fill="#6f6d4a"/><circle cx="72.9" cy="62.3" r="1.9" fill="#6f6d4a"/>
<circle cx="55.1" cy="62.3" r=".9" fill="#1e140e"/><circle cx="72.9" cy="62.3" r=".9" fill="#1e140e"/>
<circle cx="55.7" cy="61.7" r=".45" fill="#fff"/><circle cx="73.5" cy="61.7" r=".45" fill="#fff"/></g>
<path d="M50.6 62.3q4.5-4.4 9 0M68.4 62.3q4.5-4.4 9 0" stroke="#2a1810" stroke-width="1.1" fill="none" stroke-linecap="round"/>
<path d="M64 63.5q-.8 5.5-2.6 7.6q1.8 1 4 .3" stroke="#cf9b7f" stroke-width="1.1" fill="none" stroke-linecap="round"/>
<ellipse cx="51" cy="72" rx="4" ry="2.2" fill="#ee9c90" opacity=".28"/><ellipse cx="77" cy="72" rx="4" ry="2.2" fill="#ee9c90" opacity=".28"/>
<path d="M57.5 77.2q6.5 3.4 13 0q-1.6 5-6.5 5t-6.5-5z" fill="#b3313a"/>
<path d="M59.3 78.1q4.7 1.7 9.4 0q-.5 1.6-4.7 1.7t-4.7-1.7z" fill="#fbf6f2"/>
<path d="M57.5 77.2q3.2-1.3 6.5-.4q3.3-.9 6.5.4" stroke="#9e2730" stroke-width=".9" fill="none"/>
</g></svg>`;

const ASSUNTOS={
 acidente:{rotulo:"Acidente ou doença do trabalho",perguntas:[
  {q:"Você trabalhava com carteira assinada quando aconteceu?",op:["Sim, com carteira assinada","Não, era autônomo(a) ou informal","Não sei"]},
  {q:"Qual é a sua situação hoje na empresa?",op:["Ainda trabalho lá","Saí há menos de 2 anos","Saí há mais de 2 anos","Estou afastado(a) pelo INSS"],urg:["Saí há menos de 2 anos"]},
  {q:"Ficou com alguma sequela ou limitação?",op:["Sim","Ainda estou em tratamento","Não sei dizer"]}]},
 inss:{rotulo:"Auxílio-doença ou benefício do INSS",perguntas:[
  {q:"O que está acontecendo com o benefício?",op:["Foi negado","Foi cortado ou tem alta marcada","Ainda não pedi","Recebo e tenho dúvidas"],urg:["Foi cortado ou tem alta marcada"]},
  {q:"O problema de saúde tem relação com o trabalho?",op:["Sim","Não","Não sei"]}]},
 aposentadoria:{rotulo:"Aposentadoria",perguntas:[
  {q:"Qual aposentadoria você procura?",op:["Pessoa com deficiência","Especial (ruído, química, insalubridade)","Por tempo de contribuição ou idade","Rural","Não sei qual"]},
  {q:"Já fez algum pedido no INSS?",op:["Ainda não","Sim, foi negado","Sim, está em análise"]}]},
 bpc:{rotulo:"BPC-LOAS",perguntas:[
  {q:"Para quem é o benefício?",op:["Criança (autismo ou outra condição)","Adulto com deficiência ou doença","Pessoa idosa (65 anos ou mais)"]},
  {q:"Já fez algum pedido no INSS?",op:["Ainda não","Sim, foi negado","Recebia e foi cortado"],urg:["Recebia e foi cortado"]}]},
 outro:{rotulo:"Outro assunto",perguntas:[]}
};

const css=`
.gkt-ass-btn{position:fixed;right:16px;bottom:16px;z-index:60;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;background:#0d1b30;color:#fff;border-radius:99px;padding:6px 18px 6px 6px;box-shadow:0 8px 24px rgba(0,0,0,.35);font:600 15px/1.2 Inter,system-ui,sans-serif}
.gkt-ass-btn svg{width:48px;height:48px;flex:none}
.gkt-ass-btn .ponto{position:absolute;left:44px;top:8px;width:12px;height:12px;border-radius:50%;background:#25d366;border:2px solid #0d1b30}
.gkt-ass-dica{position:fixed;right:16px;bottom:82px;z-index:60;max-width:260px;background:#fff;color:#1c1f24;border-radius:14px 14px 4px 14px;padding:12px 34px 12px 14px;box-shadow:0 8px 24px rgba(0,0,0,.25);font:15px/1.4 Inter,system-ui,sans-serif;cursor:pointer}
.gkt-ass-dica button{position:absolute;top:4px;right:6px;border:0;background:none;font-size:18px;cursor:pointer;color:#4f5866}
.gkt-ass{position:fixed;right:16px;bottom:16px;z-index:61;width:min(380px,calc(100vw - 24px));height:min(600px,calc(100dvh - 32px));display:flex;flex-direction:column;background:#fff;color:#1c1f24;border-radius:18px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.4);font:15px/1.45 Inter,system-ui,sans-serif}
.gkt-ass[hidden],.gkt-ass-dica[hidden],.gkt-ass-btn[hidden]{display:none}
.gkt-ass header{display:flex;align-items:center;gap:10px;background:#0d1b30;color:#fff;padding:12px 14px}
.gkt-ass header svg{width:44px;height:44px;flex:none}
.gkt-ass header b{display:block;font-size:15px}.gkt-ass header small{color:#b9c6d6;font-size:12px}
.gkt-ass header button{margin-left:auto;border:0;background:none;color:#fff;font-size:24px;cursor:pointer;padding:4px 8px}
.gkt-ass .corpo{flex:1;overflow-y:auto;padding:14px;background:#eef1f4;display:flex;flex-direction:column;gap:8px}
.gkt-ass .msg{max-width:88%;padding:10px 12px;border-radius:14px;white-space:pre-line}
.gkt-ass .msg.ela{background:#fff;border-radius:4px 14px 14px 14px;align-self:flex-start;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.gkt-ass .msg.voce{background:#16294a;color:#fff;border-radius:14px 4px 14px 14px;align-self:flex-end}
.gkt-ass .ops{display:flex;flex-direction:column;gap:6px;align-self:stretch}
.gkt-ass .ops button{border:1.5px solid #16294a;background:#fff;color:#16294a;border-radius:12px;padding:9px 12px;text-align:left;cursor:pointer;font:600 14.5px/1.3 Inter,system-ui,sans-serif}
.gkt-ass .ops button:hover,.gkt-ass .ops button:focus-visible{background:#16294a;color:#fff}
.gkt-ass form{display:flex;flex-direction:column;gap:8px;align-self:stretch}
.gkt-ass input[type=text],.gkt-ass textarea{border:1.5px solid #c3ccd7;border-radius:10px;padding:9px 10px;font:15px Inter,system-ui,sans-serif;color:#1c1f24;background:#fff;width:100%;box-sizing:border-box}
.gkt-ass label.lgpd{font-size:13px;display:flex;gap:8px;align-items:flex-start;font-weight:400}.gkt-ass label.lgpd input{margin-top:3px;flex:none}
.gkt-ass .enviar{background:#1f7a4d;color:#fff;border:0;border-radius:12px;padding:11px 14px;font:700 15px Inter,system-ui,sans-serif;cursor:pointer}
.gkt-ass .erro{color:#b3261e;font-size:13px;min-height:1em}
.gkt-ass .digitando{align-self:flex-start;background:#fff;border-radius:14px;padding:10px 14px}
.gkt-ass .digitando i{display:inline-block;width:6px;height:6px;margin:0 2px;border-radius:50%;background:#8a96a6;animation:gktpula 1s infinite}
.gkt-ass .digitando i:nth-child(2){animation-delay:.15s}.gkt-ass .digitando i:nth-child(3){animation-delay:.3s}
.gkt-ass footer{font-size:11.5px;color:#4f5866;padding:8px 14px;border-top:1px solid #dde3ea;background:#fff}
.gkt-ass footer a{color:#1f7a4d;font-weight:600}
@keyframes gktpula{0%,80%,100%{opacity:.3}40%{opacity:1}}
.olhos{animation:gktpisca 4s infinite;transform-origin:64px 62px}
@keyframes gktpisca{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
@media(max-width:600px){.gkt-ass-btn span.txt{display:none}.gkt-ass-btn{padding:6px}.gkt-ass{right:12px;bottom:12px}}
@media(prefers-reduced-motion:reduce){.olhos,.gkt-ass .digitando i{animation:none}}`;
const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

document.querySelectorAll(".fab").forEach(e=>e.style.display="none");

const btn=document.createElement("button");btn.className="gkt-ass-btn";btn.type="button";btn.setAttribute("aria-label","Abrir a assistente virtual da Dra. Gabriela");
btn.innerHTML=AVATAR+'<span class="ponto"></span><span class="txt">Posso ajudar?</span>';
const dica=document.createElement("div");dica.className="gkt-ass-dica";dica.hidden=true;
dica.innerHTML='Olá! Quer ajuda para encaminhar o seu caso ao escritório? 😊<button type="button" aria-label="Fechar aviso">×</button>';
const box=document.createElement("div");box.className="gkt-ass";box.hidden=true;box.setAttribute("role","dialog");box.setAttribute("aria-label","Assistente virtual");
box.innerHTML=`<header>${AVATAR}<div><b>Assistente virtual da Dra. Gabriela</b><small>Atendimento automático do escritório</small></div><button type="button" aria-label="Fechar">×</button></header><div class="corpo" aria-live="polite"></div><footer>Prefere falar direto? <a href="https://wa.me/${WA}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de atendimento.")}" target="_blank" rel="noopener">Abrir o WhatsApp</a></footer>`;
document.body.append(dica,box,btn);
const corpo=box.querySelector(".corpo");

let dados={},iniciado=false;
const rolar=()=>{corpo.scrollTop=corpo.scrollHeight};
const espera=ms=>new Promise(r=>setTimeout(r,matchMedia("(prefers-reduced-motion:reduce)").matches?0:ms));
async function fala(t){const d=document.createElement("div");d.className="digitando";d.innerHTML="<i></i><i></i><i></i>";corpo.append(d);rolar();await espera(550);d.remove();const m=document.createElement("div");m.className="msg ela";m.textContent=t;corpo.append(m);rolar()}
function voce(t){const m=document.createElement("div");m.className="msg voce";m.textContent=t;corpo.append(m);rolar()}
function opcoes(lista){return new Promise(res=>{const w=document.createElement("div");w.className="ops";lista.forEach(o=>{const b=document.createElement("button");b.type="button";b.textContent=o.r||o;b.onclick=()=>{w.remove();voce(o.r||o);res(o)};w.append(b)});corpo.append(w);rolar();w.querySelector("button").focus({preventScroll:true})})}

async function iniciar(){
 iniciado=true;dados={respostas:[],urgente:false};
 await fala("Olá! Sou a assistente virtual da Dra. Gabriela Köchler Teixeira. 👋 Sou um atendimento automático do escritório.");
 await fala("Vou fazer algumas perguntas rápidas para encaminhar você ao atendimento certo pelo WhatsApp. Por aqui eu não dou orientação jurídica: quem analisa o seu caso é a advogada.");
 await fala("Sobre qual assunto você quer falar?");
 const a=await opcoes(Object.entries(ASSUNTOS).map(([k,v])=>({k,r:v.rotulo})));
 dados.assunto=a.r;
 for(const p of ASSUNTOS[a.k].perguntas){await fala(p.q);const r=await opcoes(p.op);dados.respostas.push(`${p.q} ${r}`);if((p.urg||[]).includes(r))dados.urgente=true}
 if(dados.urgente)await fala("Obrigada. Pela sua resposta, pode haver prazo correndo. Vou marcar o seu contato como prioridade. ⏱️");
 await fala("Para finalizar, me conte seu nome e sua cidade. Se quiser, escreva também um resumo curto do que aconteceu.");
 formulario();
}
function formulario(){
 const f=document.createElement("form");f.noValidate=true;
 f.innerHTML=`<input type="text" id="gkt-n" placeholder="Seu nome" autocomplete="name" aria-label="Seu nome"><input type="text" id="gkt-c" placeholder="Cidade/UF" autocomplete="address-level2" aria-label="Cidade e estado"><textarea id="gkt-r" rows="3" placeholder="Resumo (opcional). Não envie documentos ou detalhes de saúde por aqui." aria-label="Resumo do caso"></textarea><label class="lgpd"><input type="checkbox" id="gkt-ok"><span>Concordo com o uso destes dados para retorno do escritório, conforme a <a href="privacidade.html">política de privacidade</a>.</span></label><p class="erro" role="alert"></p><button class="enviar" type="submit">Enviar pelo WhatsApp</button>`;
 corpo.append(f);rolar();f.querySelector("#gkt-n").focus({preventScroll:true});
 f.onsubmit=async e=>{e.preventDefault();const v=id=>f.querySelector(id).value.trim();const err=f.querySelector(".erro");
  if(!v("#gkt-n")){err.textContent="Informe seu nome.";return}
  if(!f.querySelector("#gkt-ok").checked){err.textContent="Marque a concordância para continuar.";return}
  const linhas=["Olá! Vim pelo site, pela assistente virtual."+(dados.urgente?" ⚠️ Pode haver prazo correndo.":""),`Nome: ${v("#gkt-n")}`,`Cidade: ${v("#gkt-c")||"não informada"}`,`Assunto: ${dados.assunto}`,...dados.respostas.map(r=>"• "+r)];
  if(v("#gkt-r"))linhas.push(`Resumo: ${v("#gkt-r")}`);
  const url=`https://wa.me/${WA}?text=${encodeURIComponent(linhas.join("\n"))}`;
  f.remove();voce("Enviar pelo WhatsApp");
  await fala("Pronto! Estou abrindo o WhatsApp com o seu resumo. É só tocar em enviar. A equipe responde de segunda a sexta, das 9h às 17h30.");
  window.open(url,"_blank","noopener")||(location.href=url);
  const w=document.createElement("div");w.className="ops";const b=document.createElement("button");b.type="button";b.textContent="Começar de novo";b.onclick=()=>{corpo.innerHTML="";iniciar()};w.append(b);corpo.append(w);rolar()};
}
function abrir(){dica.hidden=true;btn.hidden=true;box.hidden=false;if(!iniciado)iniciar();else box.querySelector("header button").focus()}
function fechar(){box.hidden=true;btn.hidden=false;btn.focus()}
btn.onclick=abrir;dica.onclick=e=>{if(e.target.tagName==="BUTTON"){dica.hidden=true;return}abrir()};
box.querySelector("header button").onclick=fechar;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!box.hidden)fechar()});
let visto=false;try{visto=sessionStorage.getItem("gkt-dica")==="1"}catch(e){}
if(!visto)setTimeout(()=>{if(box.hidden){dica.hidden=false;try{sessionStorage.setItem("gkt-dica","1")}catch(e){}}},7000);
})();
