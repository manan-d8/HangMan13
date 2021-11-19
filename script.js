const inp = document.querySelector("#Inp");
const Disp = document.querySelector("#Disp");
const Latters = document.querySelector("#Latters");
const btn = document.querySelector("#btn");
const rst = document.querySelector("#RESET");
const popup = document.querySelector(".popup");
const msg = document.querySelector(".msg");
const lattersList = document.querySelectorAll(".latter");
const chanceNo = document.querySelector(".chanceNo");
// console.log(lattersList);
// let data = ["APPLE", "BANANA", "ORANGE", "KIVI"];
let data = ['ABLE', 'ABOUT', 'ACCOUNT', 'ACID', 'ACROSS', 'ACT', 'ADDITION', 'ADJUSTMENT', 'ADVERTISEMENT', 'AFTER', 'AGAIN', 'AGAINST', 'AGREEMENT', 'AIR', 'ALL', 'ALMOST', 'AMONG', 'AMOUNT', 'AMUSEMENT', 'AND', 'ANGLE', 'ANGRY', 'ANIMAL', 'ANSWER', 'ANT', 'ANY', 'APPARATUS', 'APPLE', 'APPROVAL', 'ARCH', 'ARGUMENT', 'ARM', 'ARMY', 'ART', 'AS', 'AT', 'ATTACK', 'ATTEMPT', 'ATTENTION', 'ATTRACTION', 'AUTHORITY', 'AUTOMATIC', 'AWAKE', 'BABY', 'BACK', 'BAD', 'BAG', 'BALANCE', 'BALL', 'BAND', 'BASE', 'BASIN', 'BASKET', 'BATH', 'BE', 'BEAUTIFUL', 'BECAUSE', 'BED', 'BEE', 'BEFORE', 'BEHAVIOUR', 'BELIEF', 'BELL', 'BENT', 'BERRY', 'BETWEEN', 'BIRD', 'BIRTH', 'BIT', 'BITE', 'BITTER', 'BLACK', 'BLADE', 'BLOOD', 'BLOW', 'BLUE', 'BOARD', 'BOAT', 'BODY', 'BOILING', 'BONE', 'BOOK', 'BOOT', 'BOTTLE', 'BOX', 'BOY', 'BRAIN', 'BRAKE', 'BRANCH', 'BRASS', 'BREAD', 'BREATH', 'BRICK', 'BRIDGE', 'BRIGHT', 'BROKEN', 'BROTHER', 'BROWN', 'BRUSH', 'BUCKET', 'BUILDING', 'BULB', 'BURN', 'BURST', 'BUSINESS', 'BUT', 'BUTTER', 'BUTTON', 'BY', 'CAKE', 'CAMERA', 'CANVAS', 'CARD', 'CARE', 'CARRIAGE', 'CART', 'CAT', 'CAUSE', 'CERTAIN', 'CHAIN', 'CHALK', 'CHANCE', 'CHANGE', 'CHEAP', 'CHEESE', 'CHEMICAL', 'CHEST', 'CHIEF', 'CHIN', 'CHURCH', 'CIRCLE', 'CLEAN', 'CLEAR', 'CLOCK', 'CLOTH', 'CLOUD', 'COAL', 'COAT', 'COLD', 'COLLAR', 'COLOUR', 'COMB', 'COME', 'COMFORT', 'COMMITTEE', 'COMMON', 'COMPANY', 'COMPARISON', 'COMPETITION', 'COMPLETE', 'COMPLEX', 'CONDITION', 'CONNECTION', 'CONSCIOUS', 'CONTROL', 'COOK', 'COPPER', 'COPY', 'CORD', 'CORK', 'COTTON', 'COUGH', 'COUNTRY', 'COVER', 'COW', 'CRACK', 'CREDIT', 'CRIME', 'CRUEL', 'CRUSH', 'CRY', 'CUP', 'CUP', 'CURRENT', 'CURTAIN', 'CURVE', 'CUSHION', 'DAMAGE', 'DANGER', 'DARK', 'DAUGHTER', 'DAY', 'DEAD', 'DEAR', 'DEATH', 'DEBT', 'DECISION', 'DEEP', 'DEGREE',
    'DELICATE', 'DEPENDENT', 'DESIGN', 'DESIRE', 'DESTRUCTION', 'DETAIL', 'DEVELOPMENT', 'DIFFERENT', 'DIGESTION', 'DIRECTION', 'DIRTY', 'DISCOVERY', 'DISCUSSION', 'DISEASE', 'DISGUST', 'DISTANCE', 'DISTRIBUTION', 'DIVISION', 'DO', 'DOG', 'DOOR', 'DOUBT', 'DOWN', 'DRAIN', 'DRAWER', 'DRESS', 'DRINK', 'DRIVING', 'DROP', 'DRY', 'DUST', 'EAR', 'EARLY', 'EARTH', 'EAST', 'EDGE', 'EDUCATION', 'EFFECT', 'EGG', 'ELASTIC', 'ELECTRIC', 'END', 'ENGINE', 'ENOUGH', 'EQUAL', 'ERROR', 'EVEN', 'EVENT', 'EVER', 'EVERY', 'EXAMPLE', 'EXCHANGE', 'EXISTENCE', 'EXPANSION', 'EXPERIENCE', 'EXPERT', 'EYE', 'FACE', 'FACT', 'FALL', 'FALSE', 'FAMILY', 'FAR', 'FARM', 'FAT', 'FATHER', 'FEAR', 'FEATHER', 'FEEBLE', 'FEELING', 'FEMALE', 'FERTILE', 'FICTION', 'FIELD', 'FIGHT', 'FINGER', 'FIRE', 'FIRST', 'FISH', 'FIXED', 'FLAG', 'FLAME', 'FLAT', 'FLIGHT', 'FLOOR', 'FLOWER', 'FLY', 'FOLD', 'FOOD', 'FOOLISH', 'FOOT', 'FOR', 'FORCE', 'FORK', 'FORM', 'FORWARD', 'FOWL', 'FRAME', 'FREE', 'FREQUENT', 'FRIEND', 'FROM', 'FRONT', 'FRUIT', 'FULL', 'FUTURE', 'GARDEN', 'GENERAL', 'GET', 'GIRL', 'GIVE', 'GLASS', 'GLOVE', 'GO', 'GOAT', 'GOLD', 'GOOD', 'GOVERNMENT', 'GRAIN', 'GRASS', 'GREAT', 'GREEN', 'GREY', 'GRIP', 'GROUP', 'GROWTH', 'GUIDE', 'GUN', 'HAIR', 'HAMMER', 'HAND', 'HANGING', 'HAPPY', 'HARBOUR', 'HARD', 'HARMONY', 'HAT', 'HATE', 'HAVE', 'HE', 'HEAD', 'HEALTHY', 'HEAR', 'HEARING', 'HEART', 'HEAT', 'HELP', 'HIGH', 'HISTORY', 'HOLE', 'HOLLOW', 'HOOK', 'HOPE', 'HORN', 'HORSE', 'HOSPITAL', 'HOUR', 'HOUSE', 'HOW', 'HUMOUR', 'ICE', 'IDEA', 'IF', 'ILL', 'IMPORTANT', 'IMPULSE', 'IN', 'INCREASE', 'INDUSTRY', 'INK', 'INSECT', 'INSTRUMENT', 'INSURANCE', 'INTEREST', 'INVENTION', 'IRON', 'ISLAND', 'JELLY', 'JEWEL', 'JOIN', 'JOURNEY', 'JUDGE', 'JUMP', 'KEEP', 'KETTLE', 'KEY', 'KICK', 'KIND', 'KISS', 'KNEE', 'KNIFE', 'KNOT', 'KNOWLEDGE', 'LAND', 'LANGUAGE', 'LAST', 'LATE', 'LAUGH', 'LAW', 'LEAD', 'LEAF', 'LEARNING', 'LEATHER', 'LEFT', 'LEG', 'LET', 'LETTER', 'LEVEL', 'LIBRARY', 'LIFT', 'LIGHT', 'LIKE', 'LIMIT', 'LINE', 'LINEN', 'LIP', 'LIQUID', 'LIST', 'LITTLE', 'LIVING', 'LOCK', 'LONG', 'LOOK', 'LOOSE', 'LOSS', 'LOUD', 'LOVE', 'LOW', 'MACHINE', 'MAKE', 'MALE', 'MAN', 'MANAGER', 'MAP', 'MARK', 'MARKET', 'MARRIED', 'MASS', 'MATCH', 'MATERIAL', 'MAY', 'MEAL', 'MEASURE', 'MEAT', 'MEDICAL', 'MEETING', 'MEMORY', 'METAL', 'MIDDLE', 'MILITARY', 'MILK', 'MIND', 'MINE', 'MINUTE', 'MIST', 'MIXED', 'MONEY', 'MONKEY', 'MONTH', 'MOON', 'MORNING', 'MOTHER', 'MOTION', 'MOUNTAIN', 'MOUTH', 'MOVE', 'MUCH', 'MUSCLE', 'MUSIC', 'NAIL', 'NAME', 'NARROW', 'NATION', 'NATURAL', 'NEAR', 'NECESSARY', 'NECK', 'NEED', 'NEEDLE', 'NERVE', 'NET', 'NEW', 'NEWS', 'NIGHT', 'NO', 'NOISE', 'NORMAL', 'NORTH', 'NOSE', 'NOT', 'NOTE', 'NOW', 'NUMBER', 'NUT', 'OBSERVATION', 'OF', 'OFF', 'OFFER', 'OFFICE', 'OIL', 'OLD', 'ON', 'ONLY', 'OPEN', 'OPERATION', 'OPINION', 'OPPOSITE', 'OR', 'ORANGE', 'ORDER', 'ORGANIZATION', 'ORNAMENT', 'OTHER', 'OUT', 'OVEN', 'OVER', 'OWNER', 'PAGE', 'PAIN', 'PAINT', 'PAPER', 'PARALLEL', 'PARCEL', 'PART', 'PAST', 'PASTE', 'PAYMENT', 'PEACE', 'PEN', 'PENCIL', 'PERSON', 'PHYSICAL', 'PICTURE', 'PIG', 'PIN', 'PIPE', 'PLACE', 'PLANE', 'PLANT', 'PLATE', 'PLAY', 'PLEASE', 'PLEASURE', 'PLOUGH', 'POCKET', 'POINT', 'POISON', 'POLISH', 'POLITICAL', 'POOR', 'PORTER', 'POSITION', 'POSSIBLE', 'POT', 'POTATO', 'POWDER', 'POWER', 'PRESENT', 'PRICE', 'PRINT', 'PRISON', 'PRIVATE', 'PROBABLE', 'PROCESS', 'PRODUCE', 'PROFIT', 'PROPERTY', 'PROSE', 'PROTEST', 'PUBLIC', 'PULL', 'PUMP', 'PUNISHMENT', 'PURPOSE', 'PUSH', 'PUT', 'QUALITY', 'QUESTION', 'QUICK', 'QUIET', 'QUITE', 'RAIL', 'RAIN', 'RANGE', 'RAT', 'RATE', 'RAY', 'REACTION', 'READING', 'READY', 'REASON', 'RECEIPT', 'RECORD', 'RED', 'REGRET', 'REGULAR', 'RELATION', 'RELIGION', 'REPRESENTATIVE', 'REQUEST', 'RESPECT', 'RESPONSIBLE', 'REST', 'REWARD', 'RHYTHM', 'RICE', 'RIGHT', 'RING', 'RIVER', 'ROAD', 'ROD', 'ROLL', 'ROOF', 'ROOM', 'ROOT', 'ROUGH', 'ROUND', 'RUB', 'RULE', 'RUN', 'SAD', 'SAFE', 'SAIL', 'SALT', 'SAME', 'SAND', 'SAY', 'SCALE', 'SCHOOL', 'SCIENCE', 'SCISSORS', 'SCREW', 'SEA', 'SEAT', 'SECOND', 'SECRET', 'SECRETARY', 'SEE', 'SEED', 'SEEM', 'SELECTION', 'SELF', 'SEND', 'SENSE', 'SEPARATE', 'SERIOUS', 'SERVANT', 'SEX', 'SHADE', 'SHAKE', 'SHAME', 'SHARP', 'SHEEP', 'SHELF', 'SHIP', 'SHIRT', 'SHOCK', 'SHOE', 'SHORT', 'SHUT', 'SIDE', 'SIGN', 'SILK', 'SILVER', 'SIMPLE', 'SISTER', 'SIZE', 'SKIN', '', 'SKIRT', 'SKY', 'SLEEP', 'SLIP', 'SLOPE', 'SLOW', 'SMALL', 'SMASH', 'SMELL', 'SMILE', 'SMOKE', 'SMOOTH', 'SNAKE', 'SNEEZE', 'SNOW', 'SO', 'SOAP', 'SOCIETY', 'SOCK', 'SOFT',
    'SOLID', 'SOME', 'SON', 'SONG', 'SORT', 'SOUND', 'SOUP', 'SOUTH', 'SPACE', 'SPADE', 'SPECIAL', 'SPONGE', 'SPOON', 'SPRING', 'SQUARE', 'STAGE', 'STAMP', 'STAR', 'START', 'STATEMENT', 'STATION', 'STEAM', 'STEEL', 'STEM', 'STEP', 'STICK', 'STICKY', 'STIFF', 'STILL', 'STITCH', 'STOCKING', 'STOMACH', 'STONE', 'STOP', 'STORE', 'STORY', 'STRAIGHT', 'STRANGE', 'STREET', 'STRETCH', 'STRONG', 'STRUCTURE', 'SUBSTANCE', 'SUCH', 'SUDDEN', 'SUGAR', 'SUGGESTION', 'SUMMER', 'SUN', 'SUPPORT', 'SURPRISE', 'SWEET', 'SWIM', 'SYSTEM', 'TABLE', 'TAIL', 'TAKE', 'TALK', 'TALL', 'TASTE', 'TAX', 'TEACHING', 'TENDENCY', 'TEST', 'THAN', 'THAT', 'THE', 'THEN', 'THEORY', 'THERE', 'THICK', 'THIN', 'THING', 'THIS', 'THOUGHT', 'THREAD', 'THROAT', 'THROUGH', 'THROUGH', 'THUMB', 'THUNDER', 'TICKET', 'TIGHT', 'TILL', 'TIME', 'TIN', 'TIRED', 'TO', 'TOE', 'TOGETHER', 'TOMORROW', 'TONGUE', 'TOOTH', 'TOP', 'TOUCH', 'TOWN', 'TRADE', 'TRAIN', 'TRANSPORT', 'TRAY', 'TREE', 'TRICK', 'TROUBLE', 'TROUSERS', 'TRUE', 'TURN', 'TWIST', 'UMBRELLA', 'UNDER', 'UNIT', 'UP', 'USE', 'VALUE', 'VERSE', 'VERY', 'VESSEL', 'VIEW', 'VIOLENT', 'VOICE', 'WAITING', 'WALK', 'WALL', 'WAR', 'WARM', 'WASH', 'WASTE', 'WATCH', 'WATER', 'WAVE', 'WAX', 'WAY', 'WEATHER', 'WEEK', 'WEIGHT', 'WELL', 'WEST', 'WET', 'WHEEL', 'WHEN', 'WHERE', 'WHILE', 'WHIP', 'WHISTLE', 'WHITE', 'WHO', 'WHY', 'WIDE', 'WILL', 'WIND', 'WINDOW', 'WINE', 'WING', 'WINTER', 'WIRE', 'WISE', 'WITH', 'WOMAN', 'WOOD', 'WOOL', 'WORD', 'WORK', 'WORM', 'WOUND', 'WRITING', 'WRONG', 'YEAR', 'YELLOW', 'YES', 'YESTERDAY', 'YOU', 'YOUNG', 'BERNHARD', 'BREYTENBACH', 'ANDROID'
];
let word = data[Math.floor((Math.random() * data.length))];
let known = [];
let latterfound = 0;
let totalLatter = word.length;
// console.log("Word Is : " + word)

let chances = 13;

function reset() {
    word = data[Math.floor((Math.random() * data.length))];
    chances = 13;
    chanceNo.textContent = chances;
    latterfound = 0;
    totalLatter = word.length;
    known = [];
    popup.classList.add("disNone");
    displayDisp();
    displayKnownLatter();
    inp.focus();
    lattersList.forEach(element => {
        element.classList.remove("fail");
        element.classList.remove("succ");
        element.classList.add("def");
    });
}

function displayKnownLatter() {
    let str = "";
    for (const key in known) {
        if (Object.hasOwnProperty.call(known, key)) {
            const element = known[key];
            // str += element + " ";
        }
    }
    // Latters.textContent = str;
}

function displayDisp() {
    let str = "";
    for (const key in word) {
        if (Object.hasOwnProperty.call(word, key)) {
            const element = word[key];
            if (known.includes(element)) {
                str += element + " ";
            } else {
                str += "_ ";
            }
        }
    }
    Disp.textContent = str;
}


function checkInWord(ch) {
    let won = false;
    let count = word.split(ch).length - 1
        // console.log(count);
    if (word.includes(ch)) {
        latterfound += count;
        document.querySelector("#" + ch).classList.remove("def");
        document.querySelector("#" + ch).classList.add("succ");
        if (latterfound === totalLatter) {
            console.log("WON");
            msg.textContent = "You Won!";
            popup.classList.remove("disNone");
            won = true;
        }
    } else {
        document.querySelector("#" + ch).classList.remove("def");
        document.querySelector("#" + ch).classList.add("fail");
    }
    if (chances > 1) {
        chances--;
    } else {
        if (!won) {
            msg.textContent = "Game Over | Word :" + word;
            popup.classList.remove("disNone");
            console.log("GAME OVER");
        }
    }
}

function submit(val) {
    if (val === undefined) {
        val = (inp.value + "").toUpperCase();
    }
    // console.log(val);
    if (val !== "") {
        if (known.includes(val)) {
            console.log("Allredy Pressed");
        } else {
            known.push(val);
            checkInWord(val);
            displayDisp();
            displayKnownLatter();
        }
    } else {
        console.log("Enter Something...");
    }
    chanceNo.textContent = chances;
}


lattersList.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.id);
        submit(element.id);
    });
});
btn.addEventListener("click", () => {
    submit();
});
rst.addEventListener("click", () => { reset(); });
inp.addEventListener("focus", () => { inp.value = ""; });
inp.addEventListener("keydown", (event) => {
    var name = event.key;
    var code = event.code;

    if (code == "Enter") {
        submit();
        inp.value = "";
    }
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);

popup.addEventListener("click", () => { reset(); })
reset();
inp.focus();