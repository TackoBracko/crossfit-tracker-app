import assultBike from './../assets/pictures/movements_img/Assault.avif';
import backSquat from './../assets/pictures/movements_img/BackSquat.png';
import barbellRow from './../assets/pictures/movements_img/BarbellRow.webp';
import benchPress from './../assets/pictures/movements_img/BenchPress.jpg';
import boxJumps from './../assets/pictures/movements_img/BoxJumps.jpg';
import burpees from './../assets/pictures/movements_img/Burpees.jpg';
import butterflyPullUps from './../assets/pictures/movements_img/ButterflyPullUps.jpg';
import chestToBar from './../assets/pictures/movements_img/ChestToBar.jpg';
import cleanAndJerk from './../assets/pictures/movements_img/CleanAndJerk.jpg';
import deadLift from './../assets/pictures/movements_img/Deadlift.jpg';
import dips from './../assets/pictures/movements_img/Dips.jpeg';
import doubleUnders from './../assets/pictures/movements_img/DoubleUnders.jpg';
import dumbbellRow from './../assets/pictures/movements_img/DumbbellRow.png';
import echoBike from './../assets/pictures/movements_img/EchoBike.webp';
import frontSquat from './../assets/pictures/movements_img/FrontSquat.jpg';
import ghd from './../assets/pictures/movements_img/Ghd.jpg';
import gobletSquat from './../assets/pictures/movements_img/GobletSquat.png';
import hspu from './../assets/pictures/movements_img/HandStandPushUps.jpg';
import hsw from './../assets/pictures/movements_img/HandStandWalk.jpg';
import hangPowerClean from './../assets/pictures/movements_img/HangPowerClean.jpg';
import hangPowerSnatch from './../assets/pictures/movements_img/HangPowerSnatch.jpg';
import hangSquatClean from './../assets/pictures/movements_img/HangSquatClean.jpg';
import hangSquatSnatch from './../assets/pictures/movements_img/HangSquatSnatch.jpg';
import hollowHold from './../assets/pictures/movements_img/HollowHold.jpeg';
import kippingPullUps from './../assets/pictures/movements_img/KippingPullUps.jpg';
import lunges from './../assets/pictures/movements_img/Lunges.jpg';
import muscleUps from './../assets/pictures/movements_img/MuscleUps.png';
import ohs from './../assets/pictures/movements_img/OverheadSquat.jpg';
import pistols from './../assets/pictures/movements_img/Pistols.png';
import plank from './../assets/pictures/movements_img/Plank.jpg';
import powerClean from './../assets/pictures/movements_img/PowerClean.jpg';
import powerSnatch from './../assets/pictures/movements_img/PowerSnatch.jpg';
import pushJerk from './../assets/pictures/movements_img/PushJerk.jpg';
import pushPress from './../assets/pictures/movements_img/PushPress.jpg';
import pushUps from './../assets/pictures/movements_img/PushUps2.jpg';
import ropeClimbs from './../assets/pictures/movements_img/RopeClimb.jpg';
import rower from './../assets/pictures/movements_img/Rower.jpg';
import russianTwist from './../assets/pictures/movements_img/RussianTwist.jpg';
import singleUnder from './../assets/pictures/movements_img/SingleUnder.jpg';
import skiErg from './../assets/pictures/movements_img/SkiErg.jpg';
import splitJerk from './../assets/pictures/movements_img/SplitJerk.png';
import squatClean from './../assets/pictures/movements_img/SquatClean.jpg';
import squatSnatch from './../assets/pictures/movements_img/SquatSnatch.png';
import stepUps from './../assets/pictures/movements_img/StepUps.jpg';
import strictPress from './../assets/pictures/movements_img/StrictPress.jpeg';
import strictPullUps from './../assets/pictures/movements_img/StrictPullUps.jpg';
import swing from './../assets/pictures/movements_img/Swing.jpg';
import thruster from './../assets/pictures/movements_img/Thruster.jpg';
import t2b from './../assets/pictures/movements_img/ToesToBar.jpg';
import turkishGetUp from './../assets/pictures/movements_img/TurkishGetUp.jpg';
import vUps from './../assets/pictures/movements_img/Vups.jpg';
import wallBall from './../assets/pictures/movements_img/WallBall.png';
import wallWalk from './../assets/pictures/movements_img/WallWalk.jpg';

import lifting from './../assets/icons/CrossfitIcons/Lifting.svg';
import legs from './../assets/icons/CrossfitIcons/Legs.svg';
import arms from './../assets/icons/CrossfitIcons/Arms.svg';
import shoulders from './../assets/icons/CrossfitIcons/Shoulder.svg';
import back from './../assets/icons/CrossfitIcons/Back.svg';
import gymnastics from './../assets/icons/CrossfitIcons/Gymnastics.svg';
import skills from './../assets/icons/CrossfitIcons/Skills.svg';
import engine from './../assets/icons/CrossfitIcons/Engine.svg';
import core from './../assets/icons/CrossfitIcons/Abs.svg';

export const crossfitData = [
  {
    id: 1,
    title: 'Weightlifting',
    categoryDescription:
      'Build strength and power through precise, goal-oriented weightlifting exercises designed to improve technique and muscle growth',
    icon: lifting,
    exercises: [
      {
        id: 0,
        name: 'Clean',
        picture: squatClean,
        video: 'Ty14ogq_Vok',
        description:
          'The clean is a powerful weightlifting movement where the barbell is lifted from the ground to the front of the shoulders in a single, fluid motion. It begins with a strong pull from the floor, followed by an explosive hip extension to drive the bar upward, and ends with quickly dropping underneath to catch the bar in a front rack position. The clean develops full-body power, speed and coordination, making it a cornerstone of functional fitness and athletic training.',
        subExercise: [
          {
            id: 1,
            name: 'Power Clean',
            description:
              'The power clean is a weightlifting movement where the barbell is explosively lifted from the ground to the front of the shoulders without dropping into a full squat. It starts with a powerful pull from the floor, followed by an explosive hip extension to propel the bar upward, and finishes with a quick catch in the front rack position, typically with the knees slightly bent. The power clean builds explosive power, speed, and coordination, and is commonly used in functional fitness and athletic training to develop strength and agility.',
            picture: powerClean,
            video: 'KwYJTpQ_x5A',
            category: 'Weightlifting',
          },
          {
            id: 2,
            name: 'Squat Clean',
            description:
              'In the clean, the hips and legs launch a weight upward from the ground to about belly button height and then the lifter retreats under the weight quickly to catch it. The full movement finishes with the hips and legs again working by squatting the weight and standing up to full extension.',
            picture: squatClean,
            video: 'Ty14ogq_Vok',
            category: 'Weightlifting',
          },
          {
            id: 3,
            name: 'Hang Power Clean',
            description:
              'The hang power clean is a variation of the clean where the barbell starts from a hanging position (above the knees) rather than the ground. From the hang position, the athlete explosively extends the hips and pulls the bar upward, catching it in the front rack position without dropping into a full squat. This movement focuses on developing explosive power, speed, and coordination while emphasizing the transition and pull phase of the clean.',
            picture: hangPowerClean,
            video: '0aP3tgKZcHQ',
            category: 'Weightlifting',
          },
          {
            id: 4,
            name: 'Hang Squat Clean',
            description:
              'The hang squat clean is a variation of the clean where the barbell starts from a hanging position (above the knees). From the hang position, the athlete explosively extends the hips, pulls the bar upward, and then drops under it into a full squat to catch the bar in the front rack position. The movement develops full-body power, strength, and mobility, emphasizing speed under the bar and the ability to stabilize in the squat position.',
            picture: hangSquatClean,
            video: 'DaKC_BEN5bk',
            category: 'Weightlifting',
          },
        ],
      },
      {
        id: 1,
        name: 'Snatch',
        picture: squatSnatch,
        video: 'GhxhiehJcQY',
        description:
          'The snatch is a dynamic Olympic weightlifting exercise where a barbell is lifted from the ground to overhead in one explosive motion. It requires a combination of strength, speed, mobility, and precision, making it one of the most technical and athletic movements in weightlifting. The snatch develops full-body power, coordination, and balance, engaging muscles from the legs and core to the shoulders and arms.',
        subExercise: [
          {
            id: 1,
            name: 'Power Snatch',
            description:
              'The power snatch is received in a partial overhead squat. Without the option of catching in a full squat, the athlete must pull the bar high and focus on a quick change of direction. Complete hip and knee extension followed by a fast turnover of the bar is critical.',
            picture: powerSnatch,
            video: 'TL8SMp7RdXQ',
            category: 'Weightlifting',
          },
          {
            id: 2,
            name: 'Squat Snatch',
            description:
              'The squat snatch is a weightlifting movement that involves lifting a barbell from the ground to overhead in one fluid motion, while catching the bar in a full squat position. This exercise requires a great deal of mobility, strength, and coordination.',
            picture: squatSnatch,
            video: 'GhxhiehJcQY',
            category: 'Weightlifting',
          },
          {
            id: 3,
            name: 'Hang Power Snatch',
            description:
              'The hang power snatch emphasizes the second and third pulls of the snatch, from the hang position with the bar at the hip to the finish of the lift with the bar overhead. The timing, powerful hip extension, and coordination remain similar to the power snatch.',
            picture: hangPowerSnatch,
            video: 'bJYzOo1cNqY',
            category: 'Weightlifting',
          },
          {
            id: 4,
            name: 'Hang Squat Snatch',
            description:
              'The hang snatch emphasizes the second and third pulls of the snatch, from the hang position with the bar at the hip to the full overhead squat receiving position and finally to the end of the lift with the bar overhead and the athlete standing.',
            picture: hangSquatSnatch,
            video: 'IucshEToDyM',
            category: 'Weightlifting',
          },
        ],
      },
      {
        id: 2,
        name: 'Clean and Jerk',
        description:
          'In the most common variation of the clean and jerk, the athlete receives the load in a full front squat, then uses the split position in the jerk. For most athletes, these positions allow for the greatest loads to be lifted. During the clean, the athlete must pull the weight only as high as needed to move into the bottom of the squat. During the split jerk, the torso can remain vertical while demanding less shoulder and thoracic flexibility than a squat or power jerk. ',
        picture: cleanAndJerk,
        video: 'PjY1rH4_MOA',
        category: 'Weightlifting',
      },
      {
        id: 3,
        name: 'Back Squat',
        description:
          'The back squat requires the structures of the lower body and core to work synergistically. Optimal performance requires an adequate range of motion at the ankles, hips, and knees; superior lower-body strength; and a tremendous amount of core stability.',
        picture: backSquat,
        video: 'ultWZbUMPL8?si=7aIKde5oAUZn2A2d',
        category: 'Weightlifting',
      },
      {
        id: 4,
        name: 'Front Squat',
        description:
          'The front squat builds exactly on the mechanics of the air squat. All that is added is a load supported in the front-rack position, where the weight sits squarely on the upper chest and shoulders, and the elbows point forward to bring the upper arms parallel to the floor. This “rack position,” critical to weightlifting, both demands and improves wrist and shoulder flexibility while the load, supported by the torso, both demands and improves midline stability.',
        picture: frontSquat,
        video: 'uYumuL_G_V0?si=6ODaDF94F1Jnfblz',
        category: 'Weightlifting',
      },
      {
        id: 5,
        name: 'Deadlift',
        description:
          'The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells. ',
        picture: deadLift,
        video: '1ZXobu7JvvE',
        category: 'Weightlifting',
      },
      {
        id: 6,
        name: 'Bench Press',
        description:
          'The bench press or chest press is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used.',
        picture: benchPress,
        video: 'SCVCLChPQFY',
        category: 'Weightlifting',
      },
    ],
  },
  {
    id: 2,
    title: 'Legs',
    categoryDescription: 'Boost your lower body strength and mobility with targeted leg exercises that enhance endurance, stability and power',
    icon: legs,
    exercises: [
      {
        id: 0,
        name: 'Back Squat',
        description:
          'The back squat requires the structures of the lower body and core to work synergistically. Optimal performance requires an adequate range of motion at the ankles, hips, and knees; superior lower-body strength; and a tremendous amount of core stability.',
        picture: backSquat,
        video: 'ultWZbUMPL8?si=sysMtCZxJ4UiUIhd',
        category: 'Legs',
      },
      {
        id: 1,
        name: 'Front Squat',
        description:
          'The front squat builds exactly on the mechanics of the air squat. All that is added is a load supported in the front-rack position, where the weight sits squarely on the upper chest and shoulders, and the elbows point forward to bring the upper arms parallel to the floor. This “rack position,” critical to weightlifting, both demands and improves wrist and shoulder flexibility while the load, supported by the torso, both demands and improves midline stability.',
        picture: frontSquat,
        video: 'uYumuL_G_V0?si=6ODaDF94F1Jnfblz',
        category: 'Legs',
      },
      {
        id: 2,
        name: 'Overhead Squat',
        description:
          'The overhead squat is the ultimate core exercise and peerless in developing effective athletic movement. This functional gem trains for efficient transfer of energy from large to small body parts and improves functional flexibility. Similarly, it develops the squat by amplifying and cruelly punishing faults in posture, movement, and stability. The overhead squat is to midline control, stability and balance what the clean and snatch are to power—unsurpassed.',
        picture: ohs,
        video: 'pn8mqlG0nkE?si=CPZvCaA2EKomYoq6',
        category: 'Legs',
      },
      {
        id: 3,
        name: 'Goblet Squat',
        description:
          'The Goblet Squat is a fantastic exercise for your lower body, working your quads (front of your thigh), hamstrings (back of your thigh), and glutes (butt muscle), as well as helping to strengthen your core and lower back. This is a weighted squat exercise with single or double kettlebell',
        picture: gobletSquat,
        video: 'f-Vf2yRRqOg',
        category: 'Legs',
      },
      {
        id: 4,
        name: 'Lunges',
        description:
          'The walking lunge is a fantastic, accessible tool for developing lower body strength, postural awareness, and balance. The basic movement pattern can be learned quickly and performed almost anywhere. It also serves as a gateway to many other variations. Once the fundamentals are mastered at body weight, load can be held at the hang, in the front rack, or overhead to increase the challenge of the movement.',
        picture: lunges,
        video: 'DlhojghkaQ0',
        category: 'Legs',
      },
      {
        id: 5,
        name: 'Box Jumps',
        description:
          'Box jumps are a powerful and conditioning exercise. Box jumps involve jumping from the floor onto a box or other elevated surface. They are an excellent way to enhance explosive power, further develop strength through your lower body, improve vertical jump height, and generally improve athletic performance.',
        picture: boxJumps,
        video: 'NBY9-kTuHEk',
        category: 'Legs',
      },
      {
        id: 6,
        name: 'Wall Ball',
        description:
          'The movement begins as a front squat and follows through to a push press/shove that sends the ball up and forward to the target from which it rebounds back to the throwers outstretched arms where it is “absorbed” back into the squat.',
        picture: wallBall,
        video: 'EqjGKsiIMCE',
        category: 'Legs',
      },
      {
        id: 7,
        name: 'Squat Clean',
        description:
          'In the clean, the hips and legs launch a weight upward from the ground to about belly button height and then the lifter retreats under the weight quickly to catch it. The full movement finishes with the hips and legs again working by squatting the weight and standing up to full extension.',
        picture: squatClean,
        video: 'Ty14ogq_Vok',
        category: 'Legs',
      },
      {
        id: 8,
        name: 'Squat Snatch',
        description:
          'The squat snatch is a weightlifting movement that involves lifting a barbell from the ground to overhead in one fluid motion, while catching the bar in a full squat position. This exercise requires a great deal of mobility, strength, and coordination.',
        picture: squatSnatch,
        video: 'GhxhiehJcQY',
        category: 'Legs',
      },
      {
        id: 9,
        name: 'Deadlift',
        description:
          'The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells. ',
        picture: deadLift,
        video: '1ZXobu7JvvE',
        category: 'Legs',
      },
      {
        id: 10,
        name: 'Pistols',
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",
        picture: pistols,
        video: 'keSzg7MaoVQ',
        category: 'Legs',
      },
      {
        id: 11,
        name: 'Step-Ups',
        description:
          'The box step up is similar in mechanics to any lunging variation. The athlete must use the strength of one leg to elevate themselves. The higher the box, the greater the demand on both strength and flexibility. ',
        picture: stepUps,
        video: '5qjqDHOUh-A',
        category: 'Legs',
      },
      {
        id: 12,
        name: 'Thruster',
        description:
          'The thruster is a powerful, full-body movement that combines a front squat and an overhead press into one fluid motion. The athlete starts with the barbell resting on their shoulders in a front-rack position, performs a deep front squat, and explosively drives upward, using the momentum from the squat to press the bar overhead to full arm extension. The thruster targets the legs, shoulders, and core while also building explosive power and endurance. It’s commonly used in CrossFit workouts due to its intensity and efficiency.',
        picture: thruster,
        video: 'L219ltL15zk',
        category: 'Legs',
      },
      {
        id: 13,
        name: 'Kettlebell Swings (American or Russian)',
        description:
          'The kettlebell swing is a powerful hip-hinge movement that develops explosive power, endurance, and posterior chain strength. The athlete swings a kettlebell from between the legs to chest level (Russian swing) or overhead (American swing), driven by the hips rather than the arms.',
        picture: swing,
        video: 'mKDIuUbH94Q',
        category: 'Legs',
      },
    ],
  },
  {
    id: 3,
    title: 'Arms',
    categoryDescription: 'Build upper body strength and definition with dynamic arm workouts tailored for all fitness levels',
    icon: arms,
    exercises: [
      {
        id: 0,
        name: 'Pull-Ups (strict pull-ups)',
        description:
          'The strict pull-up is a foundational upper-body strength exercise where the athlete pulls themselves up from a hanging position on a bar until their chin is above the bar, using only the strength of their arms and back. It is performed without any swinging or momentum, focusing on building raw strength and control in the upper body.',
        picture: strictPullUps,
        video: 'HRV5YKKaeVw',
        category: 'Arms',
      },
      {
        id: 1,
        name: 'Chest-to-Bar Pull-Ups',
        description:
          'The chest-to-bar pull-up is an advanced variation of the pull-up where the athlete pulls their body high enough so that their chest touches the bar. It can be performed strictly or with a kipping motion, requiring greater pulling strength, range of motion, and control compared to a standard pull-up.',
        picture: chestToBar,
        video: 'AyPTCEXTjOo',
        category: 'Arms',
      },
      {
        id: 2,
        name: 'Muscle-Ups',
        description:
          'The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.e-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.',
        picture: muscleUps,
        video: 'OCg3UXgzftc',
        category: 'Arms',
      },
      {
        id: 3,
        name: 'Rope Climb',
        description:
          'The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique, such as the J-hook or S-hook, to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.',
        picture: ropeClimbs,
        video: 'Pa4QUC9AvuA',
        category: 'Arms',
      },
      {
        id: 4,
        name: 'Barbell Rows',
        description:
          'The barbell row is a strength exercise targeting the back and arms. It involves bending at the hips while keeping the back flat, holding a barbell with an overhand or underhand grip, and pulling it toward the torso. This movement builds upper-back strength, focusing on the lats, traps, and rear deltoids, while also engaging the core and biceps.',
        picture: barbellRow,
        video: '9Gf-Ourup_k',
        category: 'Arms',
      },
      {
        id: 5,
        name: 'Dumbbell Rows',
        description:
          'The dumbbell row is a single-arm strength exercise performed with a dumbbell. The athlete braces one hand on a bench or support while pulling the dumbbell toward their torso with the other arm. This unilateral movement strengthens the lats, traps, and biceps while also improving balance and core stability.',
        picture: dumbbellRow,
        video: 'xl1YiqQY2vA',
        category: 'Arms',
      },
      {
        id: 6,
        name: 'Push-Ups',
        description:
          'The push-up is a classic bodyweight exercise that works the chest, shoulders, triceps, and core. Starting in a plank position, the athlete lowers their chest to the ground by bending their elbows, then pushes back up to full extension. It’s a foundational movement for upper-body strength and endurance.',
        picture: pushUps,
        video: '0pkjOk0EiAk',
        category: 'Arms',
      },
      {
        id: 7,
        name: 'Handstand Push-Ups',
        description:
          'The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.',
        picture: hspu,
        video: '9wIkPCS4Mbo',
        category: 'Arms',
      },
      {
        id: 8,
        name: 'Dips',
        description:
          'The dip is a bodyweight movement performed on parallel bars or a similar surface. The athlete lowers their body by bending their elbows until their shoulders are just below their elbows, then pushes back up to full extension. Dips primarily target the triceps, chest, and shoulders, building strength and stability in the upper body.',
        picture: dips,
        video: 'o2qX3Zb5mvg',
        category: 'Arms',
      },
      {
        id: 9,
        name: 'Bench Press',
        description:
          'The bench press or chest press is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used.',
        picture: benchPress,
        video: 'SCVCLChPQFY',
        category: 'Arms',
      },
      {
        id: 10,
        name: 'Strict Press',
        description:
          'The strict press is a foundational barbell movement where the athlete presses the barbell overhead from the shoulders to full arm extension without using any leg drive. This movement focuses solely on upper-body strength, targeting the shoulders, triceps, and upper chest, while requiring core stability to maintain a neutral spine.',
        picture: strictPress,
        video: '5yWaNOvgFCM',
        category: 'Arms',
      },
      {
        id: 11,
        name: 'Push Press',
        description:
          'The push press builds on the strict press by incorporating a small dip and drive with the legs to help propel the barbell overhead. Starting with a slight knee bend, the athlete explosively extends their legs and presses the bar overhead to full arm extension. This movement combines lower-body power with upper-body strength, targeting the shoulders, triceps, and legs.',
        picture: pushPress,
        video: 'iaBVSJm78ko',
        category: 'Arms',
      },
      {
        id: 12,
        name: 'Push Jerk',
        description:
          'The push jerk is a dynamic overhead movement that uses the legs for both driving the barbell upward and receiving it in a partial squat position. After a quick dip and explosive drive, the athlete drops under the bar into a bent-knee position and locks the bar overhead. This technique allows the athlete to lift heavier weights by utilizing speed, power, and coordination. It targets the shoulders, triceps, legs, and core.',
        picture: pushJerk,
        video: 'VrHNJXoSyXw',
        category: 'Arms',
      },
      {
        id: 13,
        name: 'Wall Walk',
        description:
          'A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.',
        picture: wallWalk,
        video: '2TnX8j29tRY',
        category: 'Arms',
      },
    ],
  },
  {
    id: 4,
    title: 'Back',
    categoryDescription:
      'Strengthen your posture and build a powerful back with exercises designed to improve stability, mobility and upper body balance',
    icon: back,
    exercises: [
      {
        id: 0,
        name: 'Deadlift',
        description:
          'The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells. ',
        picture: deadLift,
        video: '1ZXobu7JvvE',
        category: 'Back',
      },
      {
        id: 1,
        name: 'Pull-Ups (strict pull-ups)',
        description:
          'The strict pull-up is a foundational upper-body strength exercise where the athlete pulls themselves up from a hanging position on a bar until their chin is above the bar, using only the strength of their arms and back. It is performed without any swinging or momentum, focusing on building raw strength and control in the upper body.',
        picture: strictPullUps,
        video: 'HRV5YKKaeVw',
        category: 'Back',
      },
      {
        id: 2,
        name: 'Chest-to-Bar Pull-Ups',
        description:
          'The chest-to-bar pull-up is an advanced variation of the pull-up where the athlete pulls their body high enough so that their chest touches the bar. It can be performed strictly or with a kipping motion, requiring greater pulling strength, range of motion, and control compared to a standard pull-up.',
        picture: chestToBar,
        video: 'AyPTCEXTjOo',
        category: 'Back',
      },
      {
        id: 3,
        name: 'Muscle-Ups',
        description:
          'The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.',
        picture: muscleUps,
        video: 'OCg3UXgzftc',
        category: 'Back',
      },
      {
        id: 4,
        name: 'Rope Climb',
        description:
          'The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique ,such as the J-hook or S-hook, to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.',
        picture: ropeClimbs,
        video: 'Pa4QUC9AvuA',
        category: 'Back',
      },
      {
        id: 5,
        name: 'Barbell Rows',
        description:
          'The barbell row is a strength exercise targeting the back and arms. It involves bending at the hips while keeping the back flat, holding a barbell with an overhand or underhand grip, and pulling it toward the torso. This movement builds upper-back strength, focusing on the lats, traps, and rear deltoids, while also engaging the core and biceps.',
        picture: barbellRow,
        video: '9Gf-Ourup_k',
        category: 'Back',
      },
      {
        id: 6,
        name: 'Dumbbell Rows',
        description:
          'The dumbbell row is a single-arm strength exercise performed with a dumbbell. The athlete braces one hand on a bench or support while pulling the dumbbell toward their torso with the other arm. This unilateral movement strengthens the lats, traps, and biceps while also improving balance and core stability.',
        picture: dumbbellRow,
        video: 'xl1YiqQY2vA',
        category: 'Back',
      },
      {
        id: 7,
        name: 'Wall Walk',
        description:
          'A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.',
        picture: wallWalk,
        video: '2TnX8j29tRY',
        category: 'Back',
      },
    ],
  },
  {
    id: 5,
    title: 'Shoulders',
    categoryDescription: 'Strengthen and sculpt your shoulders with exercises designed to improve mobility, stability and upper body power',
    icon: shoulders,
    exercises: [
      {
        id: 0,
        name: 'Kettlebell Swings (American or Russian)',
        description:
          'The kettlebell swing is a powerful hip-hinge movement that develops explosive power, endurance, and posterior chain strength. The athlete swings a kettlebell from between the legs to chest level (Russian swing) or overhead (American swing), driven by the hips rather than the arms.',
        picture: swing,
        video: 'mKDIuUbH94Q',
        category: 'Shoulders',
      },
      {
        id: 1,
        name: 'Handstand Push-Ups',
        description:
          'The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.',
        picture: hspu,
        video: '9wIkPCS4Mbo',
        category: 'Shoulders',
      },
      {
        id: 2,
        name: 'Split Jerk',
        description:
          'The split jerk is a dynamic weightlifting movement used to lift a barbell overhead with maximum efficiency and stability. It involves a powerful drive from the legs to propel the barbell overhead, followed by a split stance to stabilize the weight in the final position. The split jerk is an advanced movement that requires strength, coordination, and balance. ',
        picture: splitJerk,
        video: 'GUDkOtraHHY',
        category: 'Shoulders',
      },
      {
        id: 3,
        name: 'Push Jerk',
        description:
          'The push jerk is a dynamic overhead movement that uses the legs for both driving the barbell upward and receiving it in a partial squat position. After a quick dip and explosive drive, the athlete drops under the bar into a bent-knee position and locks the bar overhead. This technique allows the athlete to lift heavier weights by utilizing speed, power, and coordination. It targets the shoulders, triceps, legs, and core.',
        picture: pushJerk,
        video: 'VrHNJXoSyXw',
        category: 'Shoulders',
      },
      {
        id: 4,
        name: 'Push Press',
        description:
          'The push press builds on the strict press by incorporating a small dip and drive with the legs to help propel the barbell overhead. Starting with a slight knee bend, the athlete explosively extends their legs and presses the bar overhead to full arm extension. This movement combines lower-body power with upper-body strength, targeting the shoulders, triceps, and legs.',
        picture: pushPress,
        video: 'iaBVSJm78ko',
        category: 'Shoulders',
      },
      {
        id: 5,
        name: 'Bench Press',
        description:
          'The bench press or chest press is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used.',
        picture: benchPress,
        video: 'SCVCLChPQFY',
        category: 'Shoulders',
      },
      {
        id: 6,
        name: 'Dips',
        description:
          'The dip is a bodyweight movement performed on parallel bars or a similar surface. The athlete lowers their body by bending their elbows until their shoulders are just below their elbows, then pushes back up to full extension. Dips primarily target the triceps, chest, and shoulders, building strength and stability in the upper body.',
        picture: dips,
        video: 'o2qX3Zb5mvg',
        category: 'Shoulders',
      },
      {
        id: 7,
        name: 'Snatch',
        description:
          'The snatch is a dynamic Olympic weightlifting exercise where a barbell is lifted from the ground to overhead in one explosive motion. It requires a combination of strength, speed, mobility, and precision, making it one of the most technical and athletic movements in weightlifting. The snatch develops full-body power, coordination, and balance, engaging muscles from the legs and core to the shoulders and arms.',
        picture: squatSnatch,
        video: 'GhxhiehJcQY',
        category: 'Shoulders',
      },
      {
        id: 8,
        name: 'Overhead Squat',
        description:
          'The overhead squat is the ultimate core exercise and peerless in developing effective athletic movement. This functional gem trains for efficient transfer of energy from large to small body parts and improves functional flexibility. Similarly, it develops the squat by amplifying and cruelly punishing faults in posture, movement, and stability. The overhead squat is to midline control, stability and balance what the clean and snatch are to power—unsurpassed.',
        picture: ohs,
        video: 'pn8mqlG0nkE?si=CPZvCaA2EKomYoq6',
        category: 'Shoulders',
      },
      {
        id: 9,
        name: 'Thruster',
        description:
          'The thruster is a powerful, full-body movement that combines a front squat and an overhead press into one fluid motion. The athlete starts with the barbell resting on their shoulders in a front-rack position, performs a deep front squat, and explosively drives upward, using the momentum from the squat to press the bar overhead to full arm extension. The thruster targets the legs, shoulders, and core while also building explosive power and endurance. It’s commonly used in CrossFit workouts due to its intensity and efficiency.',
        picture: thruster,
        video: 'L219ltL15zk',
        category: 'Shoulders',
      },
    ],
  },
  {
    id: 6,
    title: 'Gymnastics',
    categoryDescription:
      'Master body control, flexibility and strength with gymnastics-inspired movements that challenge your coordination and skill',
    icon: gymnastics,
    exercises: [
      {
        id: 0,
        name: 'Kipping Pull-Ups',
        description:
          'The kipping pull-up is a dynamic variation of the pull-up that uses momentum generated from a controlled swinging motion, a kip, to propel the body upward. This movement allows for higher repetition pull-ups, making it efficient in functional fitness workouts, while still engaging the back, shoulders, and core.',
        picture: kippingPullUps,
        video: 'lzRo-4pq_AY',
        category: 'Gymnastics',
      },
      {
        id: 1,
        name: 'Chest-to-Bar Pull-Ups',
        description:
          'The chest-to-bar pull-up is an advanced variation of the pull-up where the athlete pulls their body high enough so that their chest touches the bar. It can be performed strictly or with a kipping motion, requiring greater pulling strength, range of motion, and control compared to a standard pull-up.',
        picture: chestToBar,
        video: 'AyPTCEXTjOo',
        category: 'Gymnastics',
      },
      {
        id: 2,
        name: 'Butterfly Pull-Ups',
        description:
          'The butterfly pull-up is a highly efficient, cyclical pull-up variation used in functional fitness. It involves a continuous circular motion of the body to rapidly cycle between reps, minimizing time spent hanging on the bar. This technique requires significant coordination, timing, and shoulder strength, making it ideal for high-repetition workouts.',
        picture: butterflyPullUps,
        video: 'U_MhBXnlInE',
        category: 'Gymnastics',
      },
      {
        id: 3,
        name: 'Muscle-Ups',
        description:
          'The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.',
        picture: muscleUps,
        video: 'OCg3UXgzftc',
        category: 'Gymnastics',
      },
      {
        id: 4,
        name: 'Toes-to-Bar',
        description:
          'A dynamic movement using a kipping motion to bring your toes to the pull-up bar. Start hanging from the bar, initiate a controlled kip by alternating between arch and hollow body positions, then use momentum and core strength to lift your legs and touch your toes to the bar. Reset into the kip for continuous reps.',
        picture: t2b,
        video: '6dHvTlsMvNY',
        category: 'Gymnastics',
      },
      {
        id: 5,
        name: 'Handstand Push-Ups',
        description:
          'The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.',
        picture: hspu,
        video: '9wIkPCS4Mbo',
        category: 'Gymnastics',
      },
      {
        id: 6,
        name: 'Handstand Walk',
        description:
          'The handstand walk is an advanced gymnastics skill that tests balance, coordination, shoulder strength, and spatial awareness. It involves walking forward while inverted on your hands. Kick up into a handstand, shift your weight onto one hand, and step forward with the other. Alternate hands while keeping your core tight and body aligned, using your fingers to maintain balance. Gradually progress to longer distances.',
        picture: hsw,
        video: 'FdgJ9jZIT-Q',
        category: 'Gymnastics',
      },
      {
        id: 7,
        name: 'Rope Climb',
        description:
          'The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique ,such as the J-hook or S-hook to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.',
        picture: ropeClimbs,
        video: 'Pa4QUC9AvuA',
        category: 'Gymnastics',
      },
      {
        id: 8,
        name: 'Pistols',
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement often included in CrossFit workout regimens. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",
        picture: pistols,
        video: 'keSzg7MaoVQ',
        category: 'Gymnastics',
      },
      {
        id: 9,
        name: 'Wall Walk',
        description:
          'A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.',
        picture: wallWalk,
        video: '2TnX8j29tRY',
        category: 'Gymnastics',
      },
    ],
  },
  {
    id: 7,
    title: 'Skills',
    categoryDescription: 'Refine your technique and develop advanced movements that require precision, strength and coordination',
    icon: skills,
    exercises: [
      {
        id: 0,
        name: 'Double Unders',
        description:
          'A jump rope movement where the rope passes under your feet twice in a single jump. Start with a smooth, controlled rhythm and maintain a slightly higher jump than single unders while keeping your wrists relaxed to generate speed. Focus on consistent timing and avoid excessive arm movement.',
        picture: doubleUnders,
        video: '82jNjDS19lg',
        category: 'Skills',
      },
      {
        id: 1,
        name: 'Single Under',
        description:
          'A basic jump rope movement where the rope passes under your feet once with each jump. Maintain a steady rhythm with small, controlled hops and use minimal wrist movement to keep the rope spinning smoothly. Ideal for building coordination and conditioning.',
        picture: singleUnder,
        video: 'hCuXYrTOMxI',
        category: 'Skills',
      },
      {
        id: 2,
        name: 'Handstand Push-Ups',
        description:
          'The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.',
        picture: hspu,
        video: '9wIkPCS4Mbo',
        category: 'Skills',
      },
      {
        id: 3,
        name: 'Handstand Walk',
        description:
          'The handstand walk is an advanced gymnastics skill that tests balance, coordination, shoulder strength, and spatial awareness. It involves walking forward while inverted on your hands. Kick up into a handstand, shift your weight onto one hand, and step forward with the other. Alternate hands while keeping your core tight and body aligned, using your fingers to maintain balance. Gradually progress to longer distances.',
        picture: hsw,
        video: 'FdgJ9jZIT-Q',
        category: 'Skills',
      },
      {
        id: 4,
        name: 'Muscle-Ups',
        description:
          'The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.',
        picture: muscleUps,
        video: 'OCg3UXgzftc',
        category: 'Skills',
      },
      {
        id: 5,
        name: 'Pistols',
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement often included in CrossFit workout regimens. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",
        picture: pistols,
        video: 'keSzg7MaoVQ',
        category: 'Skills',
      },
      {
        id: 6,
        name: 'Toes-to-Bar',
        description:
          'A dynamic movement using a kipping motion to bring your toes to the pull-up bar. Start hanging from the bar, initiate a controlled kip by alternating between arch and hollow body positions, then use momentum and core strength to lift your legs and touch your toes to the bar. Reset into the kip for continuous reps.',
        picture: t2b,
        video: '6dHvTlsMvNY',
        category: 'Skills',
      },
      {
        id: 7,
        name: 'Rope Climb',
        description:
          'The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique ,such as the J-hook or S-hook, to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.',
        picture: ropeClimbs,
        video: 'Pa4QUC9AvuA',
        category: 'Skills',
      },
    ],
  },
  {
    id: 8,
    title: 'Engine',
    categoryDescription: 'Build stamina and power through workouts designed to challenge your cardio system and improve endurance',
    icon: engine,
    exercises: [
      {
        id: 0,
        name: 'Calories on machines',
        picture: rower,
        video: 'fxfhQMbATCw',
        description:
          'When CrossFit machines measure calories, they are not directly measuring how many calories you are burning in a workout. Instead, these calories are a standardized unit of work output. Machines like the Assault Bike and Concept2 Rower calculate the amount of energy you generate during exercise based on resistance, distance, and time. In essence, they are quantifying how hard you are working.',
        subExercise: [
          {
            id: 1,
            name: 'Row (Concept2 Rower)',
            description:
              'Calories on the rower are measured based on the power and pace of each stroke. The harder and faster you pull, the more calories you burn. Focus on maintaining a strong pull, efficient leg drive, and consistent rhythm to maximize output. Proper technique and pacing are crucial for sustained calorie output. Sit on the rower, grip the handle, and use your legs to drive the movement while pulling the handle towards your chest, ensuring a full-body motion with each stroke.',
            picture: rower,
            video: 'fxfhQMbATCw',
            category: 'Engine',
          },
          {
            id: 2,
            name: 'Assault Bike',
            description:
              'On the Assault Bike, calories are determined by how hard and fast you pedal while simultaneously driving the handlebars. The air resistance increases with effort, making it more challenging at higher intensities. Engage both your upper and lower body to distribute the workload evenly and maintain maximum efficiency. Pedal hard while simultaneously pushing and pulling the handlebars to engage both your upper and lower body for a full-body, high-intensity effort.',
            picture: assultBike,
            video: 'yvXr-9uRd1o',
            category: 'Engine',
          },
          {
            id: 3,
            name: 'Echo Bike',
            description:
              'Similar to the Assault Bike, calories on the Echo Bike are calculated based on air resistance. The smoother mechanics of the Echo Bike make it slightly more efficient, but the calorie output is still tied to your effort level. Focus on a strong push-pull motion with your arms and a steady pace with your legs to optimize calorie burn. Pedal steadily while using a push-pull motion with the handlebars, engaging both your legs and arms, and adjusting your pace for sustained intensity.',
            picture: echoBike,
            video: '9xfUu652CMg',
            category: 'Engine',
          },
          {
            id: 4,
            name: 'Ski Erg',
            description:
              'Calories on the Ski Erg depend on the force and consistency of your pull. Using a coordinated movement of your arms and core, pull the handles downward in a controlled but powerful motion while hinging at the hips. Engaging your legs slightly for stability and rhythm can help sustain power for more calories. Stand with your knees slightly bent, grab the handles, and pull them downward using your arms, core, and a slight push from your legs to generate force with each stroke.',
            picture: skiErg,
            video: '44YUR_dln0k',
            category: 'Engine',
          },
        ],
      },
      {
        id: 1,
        name: 'Burpees',
        description:
          'Burpees are a full-body exercise commonly used to build endurance, strength, and cardiovascular fitness. A burpee involves multiple movements performed in one fluid sequence. Begin in a standing position, squat down, place your hands on the ground, jump your feet back into a plank, perform a push-up, then jump your feet forward, and explosively jump into the air with a clap overhead.',
        picture: burpees,
        video: 'auBLPXO8Fww',
        category: 'Engine',
      },
      {
        id: 2,
        name: 'Double Unders',
        description:
          'A jump rope movement where the rope passes under your feet twice in a single jump. Start with a smooth, controlled rhythm and maintain a slightly higher jump than single unders while keeping your wrists relaxed to generate speed. Focus on consistent timing and avoid excessive arm movement.',
        picture: doubleUnders,
        video: '82jNjDS19lg',
        category: 'Engine',
      },
      {
        id: 3,
        name: 'Single Under',
        description:
          'A basic jump rope movement where the rope passes under your feet once with each jump. Maintain a steady rhythm with small, controlled hops and use minimal wrist movement to keep the rope spinning smoothly. Ideal for building coordination and conditioning.',
        picture: singleUnder,
        video: 'hCuXYrTOMxI',
        category: 'Engine',
      },
      {
        id: 4,
        name: 'Wall Balls',
        description:
          'The movement begins as a front squat and follows through to a push press/shove that sends the ball up and forward to the target from which it rebounds back to the throwers outstretched arms where it is “absorbed” back into the squat.',
        picture: wallBall,
        video: 'EqjGKsiIMCE',
        category: 'Engine',
      },
    ],
  },
  {
    id: 9,
    title: 'Core',
    categoryDescription: 'Enhance your core stability and overall balance with effective, focused core exercises',
    icon: core,
    exercises: [
      {
        id: 0,
        name: 'Plank Hold',
        description:
          'A static core exercise that targets the abdominals, lower back, and shoulders. The plank hold builds strength and endurance in the core, helping improve stability and posture. Start in a forearm plank position with your body in a straight line from head to heels, keeping your core tight, shoulders over your elbows, and avoiding any sagging or piking of the hips.',
        picture: plank,
        video: 'EPiXN2bkLoQ',
        category: 'Core',
      },
      {
        id: 1,
        name: 'Hollow Hold',
        description:
          'A core-strengthening movement that engages the entire trunk. The hollow hold emphasizes control and stability, particularly in the abdominal region, improving overall core strength and endurance. Lie on your back with your arms extended overhead and your legs straight. Lift your shoulders and legs off the ground while pressing your lower back into the floor, holding your body in a hollow shape, and keeping your core engaged.',
        picture: hollowHold,
        video: 'p7j02V1fIzU',
        category: 'Core',
      },
      {
        id: 2,
        name: 'GHD Sit-Ups',
        description:
          'A dynamic core exercise using the Glute-Ham Developer (GHD) machine. This variation of sit-ups increases the range of motion and works the hip flexors, lower back, and abdominals, enhancing core strength and flexibility.  Using a Glute-Ham Developer (GHD) machine, sit with your feet secured, and lean back, engaging your core. Then, explosively sit up and bring your chest toward your thighs, making sure to control the movement on both the way down and up.',
        picture: ghd,
        video: '1pbZ8mX2D1U',
        category: 'Core',
      },
      {
        id: 3,
        name: 'V-Ups',
        description:
          'A full-body exercise that targets the core, particularly the abs. V-ups require coordination and control to bring both the torso and legs up simultaneously in a V shape, helping develop explosive strength in the core. Lie on your back with your arms extended overhead and legs straight. Simultaneously raise your legs and torso toward each other, reaching your hands to touch your feet, while keeping your legs straight. Lower back down and repeat the motion.',
        picture: vUps,
        video: '7UVgs18Y1P4',
        category: 'Core',
      },
      {
        id: 4,
        name: 'Turkish Get-Up',
        description:
          'A complex, full-body movement that involves transitioning from lying down to standing while holding a weight overhead. It targets the shoulders, core, hips, and legs, enhancing strength, stability, mobility, and coordination. Start lying on your back, holding a kettlebell or dumbbell in one hand with your arm fully extended. Using the opposite arm to help push yourself up, rise to a standing position, and then reverse the movement back to lying down while keeping the weight overhead throughout.',
        picture: turkishGetUp,
        video: 'saYKvqSscuY',
        category: 'Core',
      },
      {
        id: 5,
        name: 'Russian Twists',
        description:
          'A rotational core exercise that targets the obliques (side abs) and helps improve overall core strength and rotational power. The twisting motion challenges the stabilizing muscles of the core and builds endurance for dynamic movements. Sit on the ground with your knees bent and feet off the floor (or on the floor for an easier variation), lean back slightly, and twist your torso from side to side while holding a weight or just clasping your hands, engaging your core throughout.',
        picture: russianTwist,
        video: 'JyUqwkVpsi8',
        category: 'Core',
      },
      {
        id: 6,
        name: 'Pistols',
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement often included in CrossFit workout regimens. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",
        picture: pistols,
        video: 'keSzg7MaoVQ',
        category: 'Core',
      },
      {
        id: 7,
        name: 'Toes-to-Bar',
        description:
          'A dynamic movement using a kipping motion to bring your toes to the pull-up bar. Start hanging from the bar, initiate a controlled kip by alternating between arch and hollow body positions, then use momentum and core strength to lift your legs and touch your toes to the bar. Reset into the kip for continuous reps.',
        picture: t2b,
        video: '6dHvTlsMvNY',
        category: 'Core',
      },
      {
        id: 8,
        name: 'Wall Walk',
        description:
          'A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.',
        picture: wallWalk,
        video: '2TnX8j29tRY',
        category: 'Core',
      },
    ],
  },
];
