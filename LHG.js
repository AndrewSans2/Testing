/************ 
 * Lhg *
 ************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'LHG';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999)).toFixed(0), 3)}`,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'norm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
const Consent_YesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Consent_YesLoopBegin(Consent_YesLoopScheduler));
flowScheduler.add(Consent_YesLoopScheduler);
flowScheduler.add(Consent_YesLoopEnd);















const Consent_NoLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Consent_NoLoopBegin(Consent_NoLoopScheduler));
flowScheduler.add(Consent_NoLoopScheduler);
flowScheduler.add(Consent_NoLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Resource/EasyMode/riddles.xlsx', 'path': 'Resource/EasyMode/riddles.xlsx'},
    {'name': 'Resource/EasyMode/no.1.png', 'path': 'Resource/EasyMode/no.1.png'},
    {'name': 'Resource/EasyMode/no.2.png', 'path': 'Resource/EasyMode/no.2.png'},
    {'name': 'Resource/EasyMode/no.3.png', 'path': 'Resource/EasyMode/no.3.png'},
    {'name': 'Resource/EasyMode/no.4.png', 'path': 'Resource/EasyMode/no.4.png'},
    {'name': 'Resource/EasyMode/no.5.png', 'path': 'Resource/EasyMode/no.5.png'},
    {'name': 'Resource/EasyMode/test.xlsx', 'path': 'Resource/EasyMode/test.xlsx'},
    {'name': 'Resource/EasyMode/no.6.png', 'path': 'Resource/EasyMode/no.6.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var ConsentClock;
var Consent_title;
var Consent_text;
var consentyes;
var consentno;
var consent_mouse;
var InstructionsClock;
var Instruction_title;
var InstructionText;
var instructionscontinue;
var instructionmouse;
var Task1Clock;
var text;
var answer_box;
var timer_text;
var routineClock;
var feedback_timer;
var showing_feedback;
var trial_feedback;
var image_things;
var FeedbackClock;
var feedback_bg;
var feedback_text;
var click_cont;
var mouse_cont;
var Try_AgainClock;
var TryAgain_text;
var try_yes;
var try_no;
var try_mouse;
var TestTaskClock;
var try_text;
var try_answer_box;
var try_timer_text;
var try_image_things;
var DebriefClock;
var Debrief_title;
var Debrief_text;
var Exit;
var exit_mouse;
var SaveClock;
var save_text;
var filename;
var NoConsentClock;
var text_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  Consent_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_title',
    text: 'INFORMED CONSENT',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.86], draggable: false, height: 0.14,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text',
    text: '\nBy continuing, you agree to participate in a research study exploring how people approach new challenges.\n\nYou will be asked to complete problem-solving tasks that may vary in difficulty. Some tasks may be challenging. Your participation is completely voluntary, and you may stop at any time without penalty.\n\nNo personally identifying information will be collected. Your responses will be kept confidential and analyzed only in aggregate for research purposes.\n\nAfter completing the study, you will be fully debriefed about the purpose of the research and have the opportunity to ask questions.\n\nBy proceeding, you confirm that you are participating voluntarily and understand the information above.\n',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consentyes = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentyes',
    text: 'I AGREE',
    font: 'Helvetica',
    units: undefined, 
    pos: [(- 0.35), (- 0.85)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  consentno = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentno',
    text: 'I DO NOT AGREE',
    font: 'Helvetica',
    units: undefined, 
    pos: [0.35, (- 0.85)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  consent_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  consent_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Instruction_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_title',
    text: 'INSTRUCTIONS',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.61], draggable: false, height: 0.14,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: '\nFor each item, identify the word that best connects the images shown. You may try as many times as you wish. The task will advance when a correct response is given or when time limit expires.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.11,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instructionscontinue = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionscontinue',
    text: 'CLICK HERE TO CONTINUE',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.75)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  instructionmouse = new core.Mouse({
    win: psychoJS.window,
  });
  instructionmouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Task1"
  Task1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.59], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  answer_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'answer_box',
    text: '',
    placeholder: 'Type here...',
    font: 'Helvetica',
    pos: [0, (- 0.65)], 
    draggable: false,
    letterHeight: 0.25,
    lineSpacing: 1.0,
    size: [2, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'top-center',
    depth: -1.0 
  });
  
  timer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.85], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create the clock ONCE (global for the experiment)
  routineClock = new util.Clock();
  
  // Also initialize feedback variables globally
  feedback_timer = 0;
  showing_feedback = false;
  trial_feedback = "";
  
  image_things = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_things', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  feedback_bg = new visual.Rect ({
    win: psychoJS.window, name: 'feedback_bg', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.3647), 1.0, (- 0.8902)]), 
    colorSpace: 'rgb', 
    opacity: 0.7, 
    depth: 0, 
    interpolate: true, 
  });
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.25,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  click_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'click_cont',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.75)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_cont = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_cont.mouseClock = new util.Clock();
  // Initialize components for Routine "Try_Again"
  Try_AgainClock = new util.Clock();
  TryAgain_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TryAgain_text',
    text: 'Would you like to try one more task?',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.12,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  try_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'try_yes',
    text: 'YES',
    font: 'Helvetica',
    units: undefined, 
    pos: [(- 0.35), (- 0.4)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  try_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'try_no',
    text: 'NO',
    font: 'Helvetica',
    units: undefined, 
    pos: [0.35, (- 0.4)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  try_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  try_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "TestTask"
  TestTaskClock = new util.Clock();
  try_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'try_text',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.59], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  try_answer_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'try_answer_box',
    text: '',
    placeholder: 'Type here...',
    font: 'Helvetica',
    pos: [0, (- 0.65)], 
    draggable: false,
    letterHeight: 0.25,
    lineSpacing: 1.0,
    size: [2, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'top-center',
    depth: -1.0 
  });
  
  try_timer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'try_timer_text',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.85], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  try_image_things = new visual.ImageStim({
    win : psychoJS.window,
    name : 'try_image_things', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "Debrief"
  DebriefClock = new util.Clock();
  Debrief_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'Debrief_title',
    text: 'DEBRIEFING',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.77], draggable: false, height: 0.14,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Debrief_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Debrief_text',
    text: 'Thank you for participating. This study examined how prior task experiences influence people’s motivation when facing a new challenge. Some participants completed manageable tasks, while others completed tasks that were intentionally very difficult or nearly impossible. This was done to examine how perceived controllability affects willingness to persist.\n\nThe full purpose of the study was not explained beforehand to avoid influencing responses. This partial deception was used to reduce bias and was not related to assessing your intelligence, ability, or effort.\n\nThe study is based on the concept of learned helplessness, which describes how repeated experiences of uncontrollable difficulty can reduce motivation. Any frustration you may have felt was expected and does not reflect your abilities.\n\nYour participation was voluntary, your responses are confidential, and you may withdraw your data if you wish. If you have questions or concerns, you may ask now or contact appropriate support services. You may press “End Session” to exit and save your responses.\n\nThank you for your participation.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Exit = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exit',
    text: '>End Session',
    font: 'Helvetica',
    units: undefined, 
    pos: [0.73, (- 0.88)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  exit_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  exit_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Save"
  SaveClock = new util.Clock();
  save_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'save_text',
    text: 'Please wait while we save your results...',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // === Begin Experiment (JS tab) ===
  // Define a global filename for this experiment
  filename =
    psychoJS._experiment._experimentName +
    "_" +
    psychoJS._experiment._datetime +
    ".json";
  
  // Initialize components for Routine "NoConsent"
  NoConsentClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Consent not provided.\nThe session will now end.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var ConsentMaxDurationReached;
var gotValidClick;
var ConsentMaxDuration;
var ConsentComponents;
function ConsentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ConsentClock.reset();
    routineTimer.reset();
    ConsentMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the consent_mouse
    // current position of the mouse:
    consent_mouse.x = [];
    consent_mouse.y = [];
    consent_mouse.leftButton = [];
    consent_mouse.midButton = [];
    consent_mouse.rightButton = [];
    consent_mouse.time = [];
    consent_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    ConsentMaxDuration = null
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(Consent_title);
    ConsentComponents.push(Consent_text);
    ConsentComponents.push(consentyes);
    ConsentComponents.push(consentno);
    ConsentComponents.push(consent_mouse);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function ConsentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Consent' ---
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_title* updates
    if (t >= 0.0 && Consent_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_title.tStart = t;  // (not accounting for frame time here)
      Consent_title.frameNStart = frameN;  // exact frame index
      
      Consent_title.setAutoDraw(true);
    }
    
    
    // if Consent_title is active this frame...
    if (Consent_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Consent_text* updates
    if (t >= 0.0 && Consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text.tStart = t;  // (not accounting for frame time here)
      Consent_text.frameNStart = frameN;  // exact frame index
      
      Consent_text.setAutoDraw(true);
    }
    
    
    // if Consent_text is active this frame...
    if (Consent_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *consentyes* updates
    if (t >= 0.0 && consentyes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentyes.tStart = t;  // (not accounting for frame time here)
      consentyes.frameNStart = frameN;  // exact frame index
      
      consentyes.setAutoDraw(true);
    }
    
    
    // if consentyes is active this frame...
    if (consentyes.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *consentno* updates
    if (t >= 0.0 && consentno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentno.tStart = t;  // (not accounting for frame time here)
      consentno.frameNStart = frameN;  // exact frame index
      
      consentno.setAutoDraw(true);
    }
    
    
    // if consentno is active this frame...
    if (consentno.status === PsychoJS.Status.STARTED) {
    }
    
    // *consent_mouse* updates
    if (t >= 0.0 && consent_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_mouse.tStart = t;  // (not accounting for frame time here)
      consent_mouse.frameNStart = frameN;  // exact frame index
      
      consent_mouse.status = PsychoJS.Status.STARTED;
      consent_mouse.mouseClock.reset();
      prevButtonState = consent_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if consent_mouse is active this frame...
    if (consent_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = consent_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          consent_mouse.clickableObjects = eval([consentyes, consentno])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(consent_mouse.clickableObjects)) {
              consent_mouse.clickableObjects = [consent_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of consent_mouse.clickableObjects) {
              if (obj.contains(consent_mouse)) {
                  gotValidClick = true;
                  consent_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              consent_mouse.clicked_name.push(null);
          }
          _mouseXYs = consent_mouse.getPos();
          consent_mouse.x.push(_mouseXYs[0]);
          consent_mouse.y.push(_mouseXYs[1]);
          consent_mouse.leftButton.push(_mouseButtons[0]);
          consent_mouse.midButton.push(_mouseButtons[1]);
          consent_mouse.rightButton.push(_mouseButtons[2]);
          consent_mouse.time.push(consent_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var consentReps;
var noconsentReps;
function ConsentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Consent' ---
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('consent_mouse.x', consent_mouse.x);
    psychoJS.experiment.addData('consent_mouse.y', consent_mouse.y);
    psychoJS.experiment.addData('consent_mouse.leftButton', consent_mouse.leftButton);
    psychoJS.experiment.addData('consent_mouse.midButton', consent_mouse.midButton);
    psychoJS.experiment.addData('consent_mouse.rightButton', consent_mouse.rightButton);
    psychoJS.experiment.addData('consent_mouse.time', consent_mouse.time);
    psychoJS.experiment.addData('consent_mouse.clicked_name', consent_mouse.clicked_name);
    
    // Run 'End Routine' code from consent_code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("consentyes", consent_mouse.clicked_name)) {
        consentReps = 1;
        noconsentReps = 0;
    } else {
        if (_pj.in_es6("consentno", consent_mouse.clicked_name)) {
            consentReps = 0;
            noconsentReps = 1;
        }
    }
    
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Consent_Yes;
function Consent_YesLoopBegin(Consent_YesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Consent_Yes = new TrialHandler({
      psychoJS: psychoJS,
      nReps: consentReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Consent_Yes'
    });
    psychoJS.experiment.addLoop(Consent_Yes); // add the loop to the experiment
    currentLoop = Consent_Yes;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisConsent_Ye of Consent_Yes) {
      snapshot = Consent_Yes.getSnapshot();
      Consent_YesLoopScheduler.add(importConditions(snapshot));
      Consent_YesLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      Consent_YesLoopScheduler.add(InstructionsRoutineEachFrame());
      Consent_YesLoopScheduler.add(InstructionsRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      Consent_YesLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      Consent_YesLoopScheduler.add(trialsLoopScheduler);
      Consent_YesLoopScheduler.add(trialsLoopEnd);
      Consent_YesLoopScheduler.add(Try_AgainRoutineBegin(snapshot));
      Consent_YesLoopScheduler.add(Try_AgainRoutineEachFrame());
      Consent_YesLoopScheduler.add(Try_AgainRoutineEnd(snapshot));
      const Test_YesLoopScheduler = new Scheduler(psychoJS);
      Consent_YesLoopScheduler.add(Test_YesLoopBegin(Test_YesLoopScheduler, snapshot));
      Consent_YesLoopScheduler.add(Test_YesLoopScheduler);
      Consent_YesLoopScheduler.add(Test_YesLoopEnd);
      Consent_YesLoopScheduler.add(DebriefRoutineBegin(snapshot));
      Consent_YesLoopScheduler.add(DebriefRoutineEachFrame());
      Consent_YesLoopScheduler.add(DebriefRoutineEnd(snapshot));
      Consent_YesLoopScheduler.add(SaveRoutineBegin(snapshot));
      Consent_YesLoopScheduler.add(SaveRoutineEachFrame());
      Consent_YesLoopScheduler.add(SaveRoutineEnd(snapshot));
      Consent_YesLoopScheduler.add(Consent_YesLoopEndIteration(Consent_YesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Resource/EasyMode/riddles.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(Task1RoutineBegin(snapshot));
      trialsLoopScheduler.add(Task1RoutineEachFrame());
      trialsLoopScheduler.add(Task1RoutineEnd(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Test_Yes;
function Test_YesLoopBegin(Test_YesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Test_Yes = new TrialHandler({
      psychoJS: psychoJS,
      nReps: tryReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Test_Yes'
    });
    psychoJS.experiment.addLoop(Test_Yes); // add the loop to the experiment
    currentLoop = Test_Yes;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_Ye of Test_Yes) {
      snapshot = Test_Yes.getSnapshot();
      Test_YesLoopScheduler.add(importConditions(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      Test_YesLoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      Test_YesLoopScheduler.add(trials_2LoopScheduler);
      Test_YesLoopScheduler.add(trials_2LoopEnd);
      Test_YesLoopScheduler.add(Test_YesLoopEndIteration(Test_YesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Resource/EasyMode/test.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(TestTaskRoutineBegin(snapshot));
      trials_2LoopScheduler.add(TestTaskRoutineEachFrame());
      trials_2LoopScheduler.add(TestTaskRoutineEnd(snapshot));
      trials_2LoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trials_2LoopScheduler.add(FeedbackRoutineEachFrame());
      trials_2LoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Test_YesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Test_Yes);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Test_YesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Consent_YesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Consent_Yes);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Consent_YesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Consent_No;
function Consent_NoLoopBegin(Consent_NoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Consent_No = new TrialHandler({
      psychoJS: psychoJS,
      nReps: noconsentReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Consent_No'
    });
    psychoJS.experiment.addLoop(Consent_No); // add the loop to the experiment
    currentLoop = Consent_No;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisConsent_No of Consent_No) {
      snapshot = Consent_No.getSnapshot();
      Consent_NoLoopScheduler.add(importConditions(snapshot));
      Consent_NoLoopScheduler.add(NoConsentRoutineBegin(snapshot));
      Consent_NoLoopScheduler.add(NoConsentRoutineEachFrame());
      Consent_NoLoopScheduler.add(NoConsentRoutineEnd(snapshot));
      Consent_NoLoopScheduler.add(Consent_NoLoopEndIteration(Consent_NoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Consent_NoLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Consent_No);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Consent_NoLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var InstructionsMaxDurationReached;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the instructionmouse
    // current position of the mouse:
    instructionmouse.x = [];
    instructionmouse.y = [];
    instructionmouse.leftButton = [];
    instructionmouse.midButton = [];
    instructionmouse.rightButton = [];
    instructionmouse.time = [];
    instructionmouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Instruction_title);
    InstructionsComponents.push(InstructionText);
    InstructionsComponents.push(instructionscontinue);
    InstructionsComponents.push(instructionmouse);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_title* updates
    if (t >= 0.0 && Instruction_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_title.tStart = t;  // (not accounting for frame time here)
      Instruction_title.frameNStart = frameN;  // exact frame index
      
      Instruction_title.setAutoDraw(true);
    }
    
    
    // if Instruction_title is active this frame...
    if (Instruction_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }
    
    
    // if InstructionText is active this frame...
    if (InstructionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instructionscontinue* updates
    if (t >= 0.0 && instructionscontinue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionscontinue.tStart = t;  // (not accounting for frame time here)
      instructionscontinue.frameNStart = frameN;  // exact frame index
      
      instructionscontinue.setAutoDraw(true);
    }
    
    
    // if instructionscontinue is active this frame...
    if (instructionscontinue.status === PsychoJS.Status.STARTED) {
    }
    
    // *instructionmouse* updates
    if (t >= 0.0 && instructionmouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionmouse.tStart = t;  // (not accounting for frame time here)
      instructionmouse.frameNStart = frameN;  // exact frame index
      
      instructionmouse.status = PsychoJS.Status.STARTED;
      instructionmouse.mouseClock.reset();
      prevButtonState = instructionmouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if instructionmouse is active this frame...
    if (instructionmouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = instructionmouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          instructionmouse.clickableObjects = eval(instructionscontinue)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(instructionmouse.clickableObjects)) {
              instructionmouse.clickableObjects = [instructionmouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of instructionmouse.clickableObjects) {
              if (obj.contains(instructionmouse)) {
                  gotValidClick = true;
                  instructionmouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              instructionmouse.clicked_name.push(null);
          }
          _mouseXYs = instructionmouse.getPos();
          instructionmouse.x.push(_mouseXYs[0]);
          instructionmouse.y.push(_mouseXYs[1]);
          instructionmouse.leftButton.push(_mouseButtons[0]);
          instructionmouse.midButton.push(_mouseButtons[1]);
          instructionmouse.rightButton.push(_mouseButtons[2]);
          instructionmouse.time.push(instructionmouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('instructionmouse.x', instructionmouse.x);
    psychoJS.experiment.addData('instructionmouse.y', instructionmouse.y);
    psychoJS.experiment.addData('instructionmouse.leftButton', instructionmouse.leftButton);
    psychoJS.experiment.addData('instructionmouse.midButton', instructionmouse.midButton);
    psychoJS.experiment.addData('instructionmouse.rightButton', instructionmouse.rightButton);
    psychoJS.experiment.addData('instructionmouse.time', instructionmouse.time);
    psychoJS.experiment.addData('instructionmouse.clicked_name', instructionmouse.clicked_name);
    
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Task1MaxDurationReached;
var timer_countdown;
var attemptCount;
var attemptTimes;
var attemptTexts;
var enterWasDown;
var Task1MaxDuration;
var Task1Components;
function Task1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Task1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Task1Clock.reset();
    routineTimer.reset();
    Task1MaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(questionText);
    answer_box.setText('');
    answer_box.refresh();
    answer_box.setText('');
    // Run 'Begin Routine' code from timer_code
    // reset routine clock
    routineClock.reset();
    
    // reset countdown
    timer_countdown = 60;
    
    // reset attempts
    attemptCount = 0;
    attemptTimes = [];
    attemptTexts = [];
    
    // reset feedback and debounce
    feedback_timer = 0;
    showing_feedback = false;
    trial_feedback = "";
    enterWasDown = false;
    
    // clear key buffer
    psychoJS.eventManager.clearEvents();
    
    // reset text box (optional)
    answer_box.text = "";
    
    image_things.setImage(image_path);
    psychoJS.experiment.addData('Task1.started', globalClock.getTime());
    Task1MaxDuration = null
    // keep track of which components have finished
    Task1Components = [];
    Task1Components.push(text);
    Task1Components.push(answer_box);
    Task1Components.push(timer_text);
    Task1Components.push(image_things);
    
    for (const thisComponent of Task1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var feedback_type;
function Task1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Task1' ---
    // get current time
    t = Task1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *answer_box* updates
    if (t >= 0.0 && answer_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_box.tStart = t;  // (not accounting for frame time here)
      answer_box.frameNStart = frameN;  // exact frame index
      
      answer_box.setAutoDraw(true);
    }
    
    
    // if answer_box is active this frame...
    if (answer_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *timer_text* updates
    if (t >= 0.0 && timer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text.tStart = t;  // (not accounting for frame time here)
      timer_text.frameNStart = frameN;  // exact frame index
      
      timer_text.setAutoDraw(true);
    }
    
    
    // if timer_text is active this frame...
    if (timer_text.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from timer_code
    let resp = answer_box.text.trim();
    let correct = (correctAns === null) ? "" : correctAns.trim();
    
    // countdown
    timer_countdown -= psychoJS.window.monitorFramePeriod;
    timer_countdown = Math.max(timer_countdown, 0);
    timer_text.text = Math.ceil(timer_countdown).toString();
    
    // keys
    let keys = psychoJS.eventManager.getKeys({keyList: ['return']});
    let newPress = (keys.length > 0 && !enterWasDown);
    
    // handle attempt
    if (newPress && resp !== "") {
        attemptCount += 1;
        attemptTimes.push(routineClock.getTime());
        attemptTexts.push(resp);
    
        if (resp.toLowerCase() === correct.toLowerCase()) {
            trial_feedback = "Correct!";
            feedback_type = "correct";
            continueRoutine = false;
        } else {
            // wrong answer feedback
            trial_feedback = "Incorrect!";
            feedback_type = "incorrect";
    
            answer_box.text = "";     // reset text box
            showing_feedback = true;
            feedback_timer = 1.5;     // seconds to show feedback
        }
    }
    
    // update Enter debounce
    enterWasDown = (keys.length > 0);
    
    // show feedback (only if timer is active)
    if (showing_feedback) {
        feedback_timer -= psychoJS.window.monitorFramePeriod;
        feedback_text.text = trial_feedback;
    
        if (feedback_timer <= 0) {
            showing_feedback = false;
            feedback_text.text = "";
        }
    }
    
    // check timeout
    if (timer_countdown <= 0) {
        trial_feedback = `Time's up! The answer was "${correct}"`;
        feedback_type = "timeup";
        continueRoutine = false;
    }
    
    
    // *image_things* updates
    if (t >= 0.0 && image_things.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_things.tStart = t;  // (not accounting for frame time here)
      image_things.frameNStart = frameN;  // exact frame index
      
      image_things.setAutoDraw(true);
    }
    
    
    // if image_things is active this frame...
    if (image_things.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Task1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Task1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Task1' ---
    for (const thisComponent of Task1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Task1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('answer_box.text',answer_box.text)
    // Add trial data to PsychoJS experiment
    psychoJS.experiment.addData('attempt_count', attemptCount);
    psychoJS.experiment.addData('attempt_times', attemptTimes.map(t => t.toFixed(2)).join(','));
    psychoJS.experiment.addData('attempt_texts', attemptTexts.join(','));
    
    // Move to the next trial / prepare for next entry
    psychoJS.experiment.nextEntry();
    
    // the Routine "Task1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackMaxDurationReached;
var FeedbackMaxDuration;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FeedbackClock.reset();
    routineTimer.reset();
    FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    click_cont.setText('CLICK HERE TO CONTINUE');
    // Run 'Begin Routine' code from feedback_code
    // --- Preload sounds once at the start (e.g., "Begin Experiment" tab) ---
    let correctSound = new Audio("Resource/EasyMode/success.ogg");
    let incorrectSound = new Audio("Resource/EasyMode/failed.ogg");
    
    // Make sure sounds are loaded
    correctSound.load();
    incorrectSound.load();
    
    // --- Function to play feedback ---
    function playFeedback(feedbackType) {
        try {
            if (feedbackType === "correct") {
                correctSound.currentTime = 0;  // rewind to start
                correctSound.play().catch(e => {
                    console.warn("Correct sound blocked by browser until user interacts", e);
                });
            } else if (feedbackType === "timeup") {
                incorrectSound.currentTime = 0; // rewind to start
                incorrectSound.play().catch(e => {
                    console.warn("Incorrect sound blocked by browser until user interacts", e);
                });
            }
        } catch (error) {
            console.error("Sound playback error:", error);
        }
    }
    
    // --- Example usage in Each Frame or End Routine ---
    playFeedback(feedback_type);  // where feedback_type = "correct" or "incorrect"
    
    // setup some python lists for storing info about the mouse_cont
    // current position of the mouse:
    mouse_cont.x = [];
    mouse_cont.y = [];
    mouse_cont.leftButton = [];
    mouse_cont.midButton = [];
    mouse_cont.rightButton = [];
    mouse_cont.time = [];
    mouse_cont.clicked_name = [];
    gotValidClick = false; // until a click is received
    FeedbackMaxDuration = null
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(feedback_bg);
    FeedbackComponents.push(feedback_text);
    FeedbackComponents.push(click_cont);
    FeedbackComponents.push(mouse_cont);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_bg* updates
    if (t >= 0.0 && feedback_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_bg.tStart = t;  // (not accounting for frame time here)
      feedback_bg.frameNStart = frameN;  // exact frame index
      
      feedback_bg.setAutoDraw(true);
    }
    
    
    // if feedback_bg is active this frame...
    if (feedback_bg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      feedback_text.setText(trial_feedback, false);
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
      // update params
      feedback_text.setText(trial_feedback, false);
    }
    
    
    // *click_cont* updates
    if (t >= 0.0 && click_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_cont.tStart = t;  // (not accounting for frame time here)
      click_cont.frameNStart = frameN;  // exact frame index
      
      click_cont.setAutoDraw(true);
    }
    
    
    // if click_cont is active this frame...
    if (click_cont.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from feedback_code
    // --- Update timer text ---
    timer_countdown -= 1/60;
    timer_countdown = Math.max(timer_countdown, 0);
    timer_text.text = Math.floor(timer_countdown).toString();  // JS-safe
    
    // --- Show feedback text ---
    feedback_text.text = trial_feedback;
    
    // --- Ensure feedback Rect is full screen ---
    feedback_bg.setSize([2, 2]);  // full screen in norm units
    feedback_bg.units = 'norm';
    
    // --- Update feedback background color based on feedback_type ---
    if (feedback_type === "correct") {
        feedback_bg.fillColor = new util.Color([-0.5, 1, -0.5]);  // your color
    } else if (feedback_type === "incorrect") {
        feedback_bg.fillColor = new util.Color([0.8, 0.8, 0.8]);              // grey
    } else if (feedback_type === "timeup") {
        feedback_bg.fillColor = new util.Color([1, -0.5, -0.5]);                 // light red
    } else {
        feedback_bg.fillColor = new util.Color([1, 1, 1]);                    // default white
    }
    
    // *mouse_cont* updates
    if (t >= 0.0 && mouse_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_cont.tStart = t;  // (not accounting for frame time here)
      mouse_cont.frameNStart = frameN;  // exact frame index
      
      mouse_cont.status = PsychoJS.Status.STARTED;
      mouse_cont.mouseClock.reset();
      prevButtonState = mouse_cont.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_cont is active this frame...
    if (mouse_cont.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_cont.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_cont.clickableObjects = eval(click_cont)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_cont.clickableObjects)) {
              mouse_cont.clickableObjects = [mouse_cont.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_cont.clickableObjects) {
              if (obj.contains(mouse_cont)) {
                  gotValidClick = true;
                  mouse_cont.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_cont.clicked_name.push(null);
          }
          _mouseXYs = mouse_cont.getPos();
          mouse_cont.x.push(_mouseXYs[0]);
          mouse_cont.y.push(_mouseXYs[1]);
          mouse_cont.leftButton.push(_mouseButtons[0]);
          mouse_cont.midButton.push(_mouseButtons[1]);
          mouse_cont.rightButton.push(_mouseButtons[2]);
          mouse_cont.time.push(mouse_cont.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_cont.x', mouse_cont.x);
    psychoJS.experiment.addData('mouse_cont.y', mouse_cont.y);
    psychoJS.experiment.addData('mouse_cont.leftButton', mouse_cont.leftButton);
    psychoJS.experiment.addData('mouse_cont.midButton', mouse_cont.midButton);
    psychoJS.experiment.addData('mouse_cont.rightButton', mouse_cont.rightButton);
    psychoJS.experiment.addData('mouse_cont.time', mouse_cont.time);
    psychoJS.experiment.addData('mouse_cont.clicked_name', mouse_cont.clicked_name);
    
    // the Routine "Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Try_AgainMaxDurationReached;
var Try_AgainMaxDuration;
var Try_AgainComponents;
function Try_AgainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Try_Again' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Try_AgainClock.reset();
    routineTimer.reset();
    Try_AgainMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the try_mouse
    // current position of the mouse:
    try_mouse.x = [];
    try_mouse.y = [];
    try_mouse.leftButton = [];
    try_mouse.midButton = [];
    try_mouse.rightButton = [];
    try_mouse.time = [];
    try_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Try_Again.started', globalClock.getTime());
    Try_AgainMaxDuration = null
    // keep track of which components have finished
    Try_AgainComponents = [];
    Try_AgainComponents.push(TryAgain_text);
    Try_AgainComponents.push(try_yes);
    Try_AgainComponents.push(try_no);
    Try_AgainComponents.push(try_mouse);
    
    for (const thisComponent of Try_AgainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Try_AgainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Try_Again' ---
    // get current time
    t = Try_AgainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TryAgain_text* updates
    if (t >= 0.0 && TryAgain_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TryAgain_text.tStart = t;  // (not accounting for frame time here)
      TryAgain_text.frameNStart = frameN;  // exact frame index
      
      TryAgain_text.setAutoDraw(true);
    }
    
    
    // if TryAgain_text is active this frame...
    if (TryAgain_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *try_yes* updates
    if (t >= 0.0 && try_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_yes.tStart = t;  // (not accounting for frame time here)
      try_yes.frameNStart = frameN;  // exact frame index
      
      try_yes.setAutoDraw(true);
    }
    
    
    // if try_yes is active this frame...
    if (try_yes.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *try_no* updates
    if (t >= 0.0 && try_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_no.tStart = t;  // (not accounting for frame time here)
      try_no.frameNStart = frameN;  // exact frame index
      
      try_no.setAutoDraw(true);
    }
    
    
    // if try_no is active this frame...
    if (try_no.status === PsychoJS.Status.STARTED) {
    }
    
    // *try_mouse* updates
    if (t >= 0.0 && try_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_mouse.tStart = t;  // (not accounting for frame time here)
      try_mouse.frameNStart = frameN;  // exact frame index
      
      try_mouse.status = PsychoJS.Status.STARTED;
      try_mouse.mouseClock.reset();
      prevButtonState = try_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if try_mouse is active this frame...
    if (try_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = try_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          try_mouse.clickableObjects = eval([try_yes, try_no])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(try_mouse.clickableObjects)) {
              try_mouse.clickableObjects = [try_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of try_mouse.clickableObjects) {
              if (obj.contains(try_mouse)) {
                  gotValidClick = true;
                  try_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              try_mouse.clicked_name.push(null);
          }
          _mouseXYs = try_mouse.getPos();
          try_mouse.x.push(_mouseXYs[0]);
          try_mouse.y.push(_mouseXYs[1]);
          try_mouse.leftButton.push(_mouseButtons[0]);
          try_mouse.midButton.push(_mouseButtons[1]);
          try_mouse.rightButton.push(_mouseButtons[2]);
          try_mouse.time.push(try_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Try_AgainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var tryReps;
function Try_AgainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Try_Again' ---
    for (const thisComponent of Try_AgainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Try_Again.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('try_mouse.x', try_mouse.x);
    psychoJS.experiment.addData('try_mouse.y', try_mouse.y);
    psychoJS.experiment.addData('try_mouse.leftButton', try_mouse.leftButton);
    psychoJS.experiment.addData('try_mouse.midButton', try_mouse.midButton);
    psychoJS.experiment.addData('try_mouse.rightButton', try_mouse.rightButton);
    psychoJS.experiment.addData('try_mouse.time', try_mouse.time);
    psychoJS.experiment.addData('try_mouse.clicked_name', try_mouse.clicked_name);
    
    // Run 'End Routine' code from try_code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("try_yes", try_mouse.clicked_name)) {
        tryReps = 1;
    } else {
        if (_pj.in_es6("try_no", try_mouse.clicked_name)) {
            tryReps = 0;
        }
    }
    
    // the Routine "Try_Again" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TestTaskMaxDurationReached;
var TestTaskMaxDuration;
var TestTaskComponents;
function TestTaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TestTask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    TestTaskClock.reset();
    routineTimer.reset();
    TestTaskMaxDurationReached = false;
    // update component parameters for each repeat
    try_text.setText(questionText);
    try_answer_box.setText('');
    try_answer_box.refresh();
    try_answer_box.setText('');
    // Run 'Begin Routine' code from try_timer_code
    timer_countdown = 60;
    attemptCount = 0;
    attemptTimes = [];
    attemptTexts = [];
    enterWasDown = false;
    routineClock = new util.Clock();
    psychoJS.eventManager.clearEvents();
    
    try_image_things.setImage(bonus_path);
    psychoJS.experiment.addData('TestTask.started', globalClock.getTime());
    TestTaskMaxDuration = null
    // keep track of which components have finished
    TestTaskComponents = [];
    TestTaskComponents.push(try_text);
    TestTaskComponents.push(try_answer_box);
    TestTaskComponents.push(try_timer_text);
    TestTaskComponents.push(try_image_things);
    
    for (const thisComponent of TestTaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var resp;
var correct;
var keys;
var newPress;
function TestTaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TestTask' ---
    // get current time
    t = TestTaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *try_text* updates
    if (t >= 0.0 && try_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_text.tStart = t;  // (not accounting for frame time here)
      try_text.frameNStart = frameN;  // exact frame index
      
      try_text.setAutoDraw(true);
    }
    
    
    // if try_text is active this frame...
    if (try_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *try_answer_box* updates
    if (t >= 0.0 && try_answer_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_answer_box.tStart = t;  // (not accounting for frame time here)
      try_answer_box.frameNStart = frameN;  // exact frame index
      
      try_answer_box.setAutoDraw(true);
    }
    
    
    // if try_answer_box is active this frame...
    if (try_answer_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *try_timer_text* updates
    if (t >= 0.0 && try_timer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_timer_text.tStart = t;  // (not accounting for frame time here)
      try_timer_text.frameNStart = frameN;  // exact frame index
      
      try_timer_text.setAutoDraw(true);
    }
    
    
    // if try_timer_text is active this frame...
    if (try_timer_text.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from try_timer_code
    // _pj helper (you can keep it)
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if ((right instanceof Array) || (typeof right === "string")) {
                return right.indexOf(left) > -1;
            } else if ((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet)) {
                return right.has(left);
            } else {
                return left in right;
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    
    // --- main logic ---
    resp = try_answer_box.text.trim();  // JS trim
    correct = "heart";
    
    timer_countdown -= (1 / 60);
    timer_countdown = Math.max(timer_countdown, 0);
    
    // Update countdown text
    try_timer_text.text = Math.floor(timer_countdown).toString();
    
    // Initialize feedback
    feedback_type = "None";
    
    // Get key presses
    keys = psychoJS.eventManager.getKeys({"keyList": ["return"]});
    
    // Detect new return press
    newPress = (keys.length > 0) && (!enterWasDown);
    
    // Check answer if return was pressed
    if (newPress && (resp !== "")) {
        attemptCount += 1;
        attemptTimes.push(routineClock.getTime());
        attemptTexts.push(resp);
    
        if (resp.toLowerCase() === correct.toLowerCase()) {
            trial_feedback = "Correct!";
            feedback_type = "correct";
            continueRoutine = false;
        } else {
            trial_feedback = "Incorrect!";
            try_answer_box.text = "";
            feedback_timer = 1.5;
            showing_feedback = true;
        }
    }
    
    // Update enter key state
    enterWasDown = keys.length > 0;  // JS replacement for bool(keys)
    
    // Handle feedback display
    if (showing_feedback) {  // No need for _pj.in_es6 check
        feedback_timer -= (1 / 60);
        feedback_text.text = trial_feedback;
    
        if (feedback_timer <= 0) {
            showing_feedback = false;
            feedback_text.text = "";
        }
    }
    
    // Handle countdown timeout
    if (timer_countdown <= 0) {
        trial_feedback = `Time's up! The answer was '${correct}'`;
        feedback_type = "timeup";
        continueRoutine = false;
    }
    
    
    // *try_image_things* updates
    if (t >= 0.0 && try_image_things.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      try_image_things.tStart = t;  // (not accounting for frame time here)
      try_image_things.frameNStart = frameN;  // exact frame index
      
      try_image_things.setAutoDraw(true);
    }
    
    
    // if try_image_things is active this frame...
    if (try_image_things.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TestTaskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestTaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TestTask' ---
    for (const thisComponent of TestTaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TestTask.stopped', globalClock.getTime());
    psychoJS.experiment.addData('try_answer_box.text',try_answer_box.text)
    // Add trial data to PsychoJS experiment
    psychoJS.experiment.addData('attempt_count', attemptCount);
    psychoJS.experiment.addData('attempt_times', attemptTimes.map(t => t.toFixed(2)).join(','));
    psychoJS.experiment.addData('attempt_texts', attemptTexts.join(','));
    // the Routine "TestTask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DebriefMaxDurationReached;
var DebriefMaxDuration;
var DebriefComponents;
function DebriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Debrief' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DebriefClock.reset();
    routineTimer.reset();
    DebriefMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the exit_mouse
    // current position of the mouse:
    exit_mouse.x = [];
    exit_mouse.y = [];
    exit_mouse.leftButton = [];
    exit_mouse.midButton = [];
    exit_mouse.rightButton = [];
    exit_mouse.time = [];
    exit_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    DebriefMaxDuration = null
    // keep track of which components have finished
    DebriefComponents = [];
    DebriefComponents.push(Debrief_title);
    DebriefComponents.push(Debrief_text);
    DebriefComponents.push(Exit);
    DebriefComponents.push(exit_mouse);
    
    for (const thisComponent of DebriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DebriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Debrief' ---
    // get current time
    t = DebriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Debrief_title* updates
    if (t >= 0.0 && Debrief_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Debrief_title.tStart = t;  // (not accounting for frame time here)
      Debrief_title.frameNStart = frameN;  // exact frame index
      
      Debrief_title.setAutoDraw(true);
    }
    
    
    // if Debrief_title is active this frame...
    if (Debrief_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Debrief_text* updates
    if (t >= 0.0 && Debrief_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Debrief_text.tStart = t;  // (not accounting for frame time here)
      Debrief_text.frameNStart = frameN;  // exact frame index
      
      Debrief_text.setAutoDraw(true);
    }
    
    
    // if Debrief_text is active this frame...
    if (Debrief_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Exit* updates
    if (t >= 0.0 && Exit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Exit.tStart = t;  // (not accounting for frame time here)
      Exit.frameNStart = frameN;  // exact frame index
      
      Exit.setAutoDraw(true);
    }
    
    
    // if Exit is active this frame...
    if (Exit.status === PsychoJS.Status.STARTED) {
    }
    
    // *exit_mouse* updates
    if (t >= 0.0 && exit_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_mouse.tStart = t;  // (not accounting for frame time here)
      exit_mouse.frameNStart = frameN;  // exact frame index
      
      exit_mouse.status = PsychoJS.Status.STARTED;
      exit_mouse.mouseClock.reset();
      prevButtonState = exit_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if exit_mouse is active this frame...
    if (exit_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = exit_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          exit_mouse.clickableObjects = eval(Exit)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(exit_mouse.clickableObjects)) {
              exit_mouse.clickableObjects = [exit_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of exit_mouse.clickableObjects) {
              if (obj.contains(exit_mouse)) {
                  gotValidClick = true;
                  exit_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              exit_mouse.clicked_name.push(null);
          }
          _mouseXYs = exit_mouse.getPos();
          exit_mouse.x.push(_mouseXYs[0]);
          exit_mouse.y.push(_mouseXYs[1]);
          exit_mouse.leftButton.push(_mouseButtons[0]);
          exit_mouse.midButton.push(_mouseButtons[1]);
          exit_mouse.rightButton.push(_mouseButtons[2]);
          exit_mouse.time.push(exit_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DebriefComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DebriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Debrief' ---
    for (const thisComponent of DebriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('exit_mouse.x', exit_mouse.x);
    psychoJS.experiment.addData('exit_mouse.y', exit_mouse.y);
    psychoJS.experiment.addData('exit_mouse.leftButton', exit_mouse.leftButton);
    psychoJS.experiment.addData('exit_mouse.midButton', exit_mouse.midButton);
    psychoJS.experiment.addData('exit_mouse.rightButton', exit_mouse.rightButton);
    psychoJS.experiment.addData('exit_mouse.time', exit_mouse.time);
    psychoJS.experiment.addData('exit_mouse.clicked_name', exit_mouse.clicked_name);
    
    // the Routine "Debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SaveMaxDurationReached;
var SaveMaxDuration;
var SaveComponents;
function SaveRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Save' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SaveClock.reset();
    routineTimer.reset();
    SaveMaxDurationReached = false;
    // update component parameters for each repeat
    // Prepare payload with all trial data
    let payload = {
        experiment: psychoJS._experiment._experimentName,
        datetime: psychoJS._experiment._datetime,
        trials: psychoJS._experiment._trialsData
    };
    
    // Upload data to OSF DataPipe
    fetch("https://pipe.jspsych.org/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            experimentID: "c4BnXK4plhFt",   // replace with your DataPipe experiment ID
            filename: filename,              // safe JSON filename
            data: JSON.stringify(payload)    // preserve arrays, text, and trial structure
        })
    })
    .then(response => response.json())
    .then(responseData => {
        console.log("DataPipe upload success:", responseData);
        // Quit experiment after successful upload
        psychoJS.quit({ isCompleted: true });
    })
    .catch(error => {
        console.error("DataPipe upload error:", error);
        // Quit experiment even if upload fails, marking incomplete
        psychoJS.quit({ isCompleted: false });
    });
    
    psychoJS.experiment.addData('Save.started', globalClock.getTime());
    SaveMaxDuration = null
    // keep track of which components have finished
    SaveComponents = [];
    SaveComponents.push(save_text);
    
    for (const thisComponent of SaveComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SaveRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Save' ---
    // get current time
    t = SaveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *save_text* updates
    if (t >= 0.0 && save_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_text.tStart = t;  // (not accounting for frame time here)
      save_text.frameNStart = frameN;  // exact frame index
      
      save_text.setAutoDraw(true);
    }
    
    
    // if save_text is active this frame...
    if (save_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SaveComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SaveRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Save' ---
    for (const thisComponent of SaveComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Save.stopped', globalClock.getTime());
    // the Routine "Save" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NoConsentMaxDurationReached;
var NoConsentMaxDuration;
var NoConsentComponents;
function NoConsentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NoConsent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    NoConsentClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    NoConsentMaxDurationReached = false;
    // update component parameters for each repeat
    NoConsentMaxDuration = null
    // keep track of which components have finished
    NoConsentComponents = [];
    NoConsentComponents.push(text_5);
    
    for (const thisComponent of NoConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function NoConsentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NoConsent' ---
    // get current time
    t = NoConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_5.tStop = t;  // not accounting for scr refresh
      text_5.frameNStop = frameN;  // exact frame index
      // update status
      text_5.status = PsychoJS.Status.FINISHED;
      text_5.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NoConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NoConsentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NoConsent' ---
    for (const thisComponent of NoConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (routineForceEnded) {
        routineTimer.reset();} else if (NoConsentMaxDurationReached) {
        NoConsentClock.add(NoConsentMaxDuration);
    } else {
        NoConsentClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
