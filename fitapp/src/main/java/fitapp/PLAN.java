package fitapp;

public class PLAN {
	public String PLA(String day){
		switch (day.toLowerCase()) {
        case "monday":
            return "Cardio: 30 minutes running.";
        case "tuesday":
            return "Leg day: Squats, lunges, leg press.";
        case "wednesday":
            return "Rest day: Light stretching.";
        default:
            return "Basic workout plan for today.";
    }
	
	}}
