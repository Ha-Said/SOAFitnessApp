package fitapp;

public class PersonalizedWorkout {

	public String personalizedWorkout(String fitnessLevel, String goal) {
        fitnessLevel = fitnessLevel.toLowerCase();
        goal = goal.toLowerCase();

        if (!(fitnessLevel.equals("beginner") || fitnessLevel.equals("intermediate") || fitnessLevel.equals("advanced"))) {
            return "Invalid fitness level. Please choose between beginner, intermediate, or advanced.";
        }

        if (!(goal.equals("strength") || goal.equals("endurance") || goal.equals("weight loss"))) {
            return "Invalid goal. Please choose between strength, endurance, or weight loss.";
        }

        String workoutSuggestion = "";

        // Suggest workout based on fitness level and goal
        if (fitnessLevel.equals("beginner")) {
            if (goal.equals("strength")) {
                workoutSuggestion = "Beginner strength workout: Bodyweight squats, push-ups, and lunges for 3 sets of 10 reps.";
            } else if (goal.equals("endurance")) {
                workoutSuggestion = "Beginner endurance workout: 20-minute walk or light jog, 3 times a week.";
            } else {
                workoutSuggestion = "Beginner weight loss workout: 20-30 minutes of cardio (running, cycling) 3 times a week.";
            }
        } else if (fitnessLevel.equals("intermediate")) {
            if (goal.equals("strength")) {
                workoutSuggestion = "Intermediate strength workout: Weight training with dumbbells (squats, bench press, deadlifts) for 4 sets of 8 reps.";
            } else if (goal.equals("endurance")) {
                workoutSuggestion = "Intermediate endurance workout: 30-40 minutes of running or cycling, 3-4 times a week.";
            } else {
                workoutSuggestion = "Intermediate weight loss workout: HIIT (High-Intensity Interval Training) for 30 minutes.";
            }
        } else { // Advanced
            if (goal.equals("strength")) {
                workoutSuggestion = "Advanced strength workout: Compound lifts (squats, bench press, deadlifts) with progressively increasing weight.";
            } else if (goal.equals("endurance")) {
                workoutSuggestion = "Advanced endurance workout: 60 minutes of running or swimming, 4-5 times a week.";
            } else {
                workoutSuggestion = "Advanced weight loss workout: Intense HIIT with weight training for 45 minutes.";
            }
        }

        return workoutSuggestion;
    }}
