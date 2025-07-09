// --- Language Translation Logic ---
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-contacts': 'Contacts',
        'nav-info': 'Info',
        'carousel-author-1': 'Wild animals',
        'carousel-title-1': 'Wild Content',
        'carousel-topic-1': 'Introduction',
        'carousel-des-1': 'Wild animals are creatures that live in natural habitats without human domestication. They include a diverse range of species, such as lions, eagles, elephants, and wolves. These animals rely on their instincts for survival, hunting for food, finding shelter, and avoiding predators in the wild.',
        'carousel-btn-1': 'See More',
        'carousel-author-2': 'Wild animals',
        'carousel-title-2': 'Wild Content',
        'carousel-topic-2': 'Wild Reindeer',
        'carousel-des-2': 'Wild reindeer, also known as caribou in North America, are large herbivores native to Arctic and Subarctic regions. They are known for their impressive antlers, which both males and females possess. Reindeer migrate over vast distances, traveling in herds, and primarily feed on lichens, grasses, and shrubs.',
        'carousel-btn-2': 'See More',
        'carousel-author-3': 'Wild animals',
        'carousel-title-3': 'Wild Content',
        'carousel-topic-3': 'Wild Elephants',
        'carousel-des-3': 'Wild elephants are majestic, large mammals found in Africa and Asia. Known for their intelligence and strong social bonds, they live in herds led by matriarchs. Elephants have distinctive trunks used for feeding, drinking, and communication. They primarily eat vegetation and play a crucial role in their ecosystems.',
        'carousel-btn-3': 'See More',
        'carousel-author-4': 'Wild animals',
        'carousel-title-4': 'Wild Content',
        'carousel-topic-4': 'Wild Tiger',
        'carousel-des-4': 'Wild tigers are powerful, solitary predators native to Asia. They have striking orange coats with black stripes and are skilled hunters, preying on deer, wild boar, and other animals. Tigers are territorial and primarily nocturnal, relying on stealth and strength. They play a crucial role in maintaining ecological balance.',
        'carousel-btn-4': 'See More',
        'thumb-title-1': 'Introduction',
        'thumb-desc-1': 'Overview',
        'thumb-title-2': 'Reindeer',
        'thumb-desc-2': 'Overview',
        'thumb-title-3': 'Wild Elephants',
        'thumb-desc-3': 'Overview',
        'thumb-title-4': 'Wild Tiger',
        'thumb-desc-4': 'Overview',
    },
    th: {
        'nav-home': 'หน้าหลัก',
        'nav-contacts': 'ติดต่อ',
        'nav-info': 'ข้อมูล',
        'carousel-author-1': 'สัตว์ป่า',
        'carousel-title-1': 'เนื้อหาสัตว์ป่า',
        'carousel-topic-1': 'บทนำ',
        'carousel-des-1': 'สัตว์ป่าคือสิ่งมีชีวิตที่อาศัยอยู่ในถิ่นที่อยู่ตามธรรมชาติ โดยไม่มีการเลี้ยงดูโดยมนุษย์ เช่น สิงโต อินทรี ช้าง หมาป่า สัตว์เหล่านี้ใช้สัญชาตญาณเพื่อเอาตัวรอด หาอาหาร ที่พัก และหลีกเลี่ยงผู้ล่า',
        'carousel-btn-1': 'ดูเพิ่มเติม',
        'carousel-author-2': 'สัตว์ป่า',
        'carousel-title-2': 'เนื้อหาสัตว์ป่า',
        'carousel-topic-2': 'กวางเรนเดียร์ป่า',
        'carousel-des-2': 'กวางเรนเดียร์ป่า หรือแคริบูในอเมริกาเหนือ เป็นสัตว์กินพืชขนาดใหญ่ในเขตอาร์กติกและซับอาร์กติก มีเขาทั้งตัวผู้และตัวเมีย อพยพเป็นฝูงระยะไกล กินไลเคน หญ้า และพุ่มไม้',
        'carousel-btn-2': 'ดูเพิ่มเติม',
        'carousel-author-3': 'สัตว์ป่า',
        'carousel-title-3': 'เนื้อหาสัตว์ป่า',
        'carousel-topic-3': 'ช้างป่า',
        'carousel-des-3': 'ช้างป่าเป็นสัตว์เลี้ยงลูกด้วยนมขนาดใหญ่ พบในแอฟริกาและเอเชีย ฉลาดและมีสายสัมพันธ์ในฝูง นำโดยตัวเมีย มีงวงเด่นใช้กินอาหาร ดื่มน้ำ และสื่อสาร กินพืชและมีบทบาทสำคัญในระบบนิเวศ',
        'carousel-btn-3': 'ดูเพิ่มเติม',
        'carousel-author-4': 'สัตว์ป่า',
        'carousel-title-4': 'เนื้อหาสัตว์ป่า',
        'carousel-topic-4': 'เสือป่า',
        'carousel-des-4': 'เสือป่าเป็นนักล่าทรงพลัง พบในเอเชีย ขนสีส้มลายดำ ล่าเนื้อ กวางป่า และสัตว์อื่น ๆ ออกหากินกลางคืน ใช้ความลับและพละกำลัง รักษาสมดุลระบบนิเวศ',
        'carousel-btn-4': 'ดูเพิ่มเติม',
        'thumb-title-1': 'บทนำ',
        'thumb-desc-1': 'สรุป',
        'thumb-title-2': 'เรนเดียร์',
        'thumb-desc-2': 'สรุป',
        'thumb-title-3': 'ช้างป่า',
        'thumb-desc-3': 'สรุป',
        'thumb-title-4': 'เสือป่า',
        'thumb-desc-4': 'สรุป',
    },
    ja: {
        'nav-home': 'ホーム',
        'nav-contacts': 'お問い合わせ',
        'nav-info': '情報',
        'carousel-author-1': '野生動物',
        'carousel-title-1': '野生の内容',
        'carousel-topic-1': '紹介',
        'carousel-des-1': '野生動物は人間に飼いならされていない自然の生息地に住んでいます。ライオン、ワシ、ゾウ、オオカミなど多様な種がいます。これらの動物は本能で生き延び、食料を探し、住処を見つけ、捕食者から身を守ります。',
        'carousel-btn-1': 'もっと見る',
        'carousel-author-2': '野生動物',
        'carousel-title-2': '野生の内容',
        'carousel-topic-2': '野生のトナカイ',
        'carousel-des-2': '野生のトナカイ（北米ではカリブー）は北極圏と亜北極圏に生息する大型草食動物です。オスもメスも立派な角を持ちます。トナカイは長距離を移動し、群れで生活し、主に地衣類や草、低木を食べます。',
        'carousel-btn-2': 'もっと見る',
        'carousel-author-3': '野生動物',
        'carousel-title-3': '野生の内容',
        'carousel-topic-3': '野生のゾウ',
        'carousel-des-3': '野生のゾウはアフリカとアジアに生息する壮大な大型哺乳類です。知性と強い社会的絆で知られ、母系の群れで生活します。ゾウは特徴的な鼻で食事や水を取り、コミュニケーションします。主に植物を食べ、生態系で重要な役割を果たします。',
        'carousel-btn-3': 'もっと見る',
        'carousel-author-4': '野生動物',
        'carousel-title-4': '野生の内容',
        'carousel-topic-4': '野生のトラ',
        'carousel-des-4': '野生のトラはアジア原産の力強い単独性の捕食者です。鮮やかなオレンジ色の毛皮に黒い縞模様があり、巧みなハンターで、シカやイノシシなどを狩ります。トラは縄張り意識が強く、主に夜行性で、隠密性と力を頼りにします。生態系のバランス維持に重要な役割を果たします。',
        'carousel-btn-4': 'もっと見る',
        'thumb-title-1': '紹介',
        'thumb-desc-1': '概要',
        'thumb-title-2': 'トナカイ',
        'thumb-desc-2': '概要',
        'thumb-title-3': '野生のゾウ',
        'thumb-desc-3': '概要',
        'thumb-title-4': '野生のトラ',
        'thumb-desc-4': '概要',
    }
};

function setLanguage(lang) {
    const dict = translations[lang] || translations['en'];
    Object.keys(dict).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = dict[id];
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('language-select');
    if (select) {
        select.addEventListener('change', function() {
            setLanguage(this.value);
        });
        // Set default language
        setLanguage(select.value);
    }
});
// --- End Language Translation Logic ---
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    // Animation: add animating class
    if(type === 'next'){
        carouselDom.classList.add('animating-next');
    } else {
        carouselDom.classList.add('animating-prev');
    }

    setTimeout(() => {
        if(type === 'next'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        }else{
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        }
        // Remove animating class after animation
        setTimeout(() => {
            carouselDom.classList.remove('animating-next');
            carouselDom.classList.remove('animating-prev');
        }, 700);
    }, 10);

    if(type === 'next'){
        carouselDom.classList.add('next');
    }else{
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}