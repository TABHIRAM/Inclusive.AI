from gemini import call_gemini

def process_timeline(data):
    prompt = """
    Act as a professional event planner, update the event timeline based on the dateRange 
    date format will be like this: 
    from:"YYYY-MM-DDTHH:MM:SS.000Z" to: "YYYY-MM-DDTHH:MM:SS.000Z"
accordingly.
    Include food items and when they will be served and what to serve.
    """

    user_input = data

    output_data = """
{
  "EventTimeline": [
    {
      "date": "<MMM DD>",
      "time": "<HH:MM AM/PM>",
      "title": "<Event Title>",
      "description": "<Event Description>",
      "label": "<Event Category>"
    },
    {
      "date": "<MMM DD>",
      "time": "<HH:MM AM/PM>",
      "title": "<Food Title>",
      "description": "<Food Description>",
      "label": "<Food Category>"
    }
    // Add more timelines as needed in the similar format.
  ]
}

"""
    return call_gemini(prompt, user_input, output_data,task_type='timeline')
