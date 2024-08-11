from gemini import call_gemini

def process_budget(data):
    prompt = """
    Act as a professional event planner, update the event budget using the details provided by the user,
    including guest count, planned dates, and whether the event is eco-friendly 
    (in which case only sustainable, recyclable items should be used). 
    Provide an approximate price based on the event location,
    considering factors such as whether it is during peak season 
    (which would increase costs) or off-season, and
    whether the event will feature vegetarian or non-vegetarian options.
    """

    user_input = data

    output_data = """
{
  "BudgetAllocation": [
    {
      "id": 1,
      "title": "Venue and Rentals",
      "description": "Booking and rental costs",
      "amount": "$1,999",
      "avatar": "01"
    },
    {
      "id": 2,
      "title": "Catering and Beverages",
      "description": "Food and drinks costs",
      "amount": "$39",
      "avatar": "02"
    },
    {
      "id": 3,
      "title": "Decor and Ambiance",
      "description": "Decoration costs",
      "amount": "$299",
      "avatar": "03"
    },
    {
      "id": 4,
      "title": "Entertainment & Media",
      "description": "Entertainment, photo & videography",
      "amount": "$99",
      "avatar": "04"
    },
    {
      "id": 5,
      "title": "Gift Items",
      "description": "Cost of gifts",
      "amount": "$99",
      "avatar": "05"
    },
    {
      "id": 6,
      "title": "Miscellaneous",
      "description": "Other expenses",
      "amount": "$39",
      "avatar": "06"
    }
  ]
}

    """

    return call_gemini(prompt, user_input, output_data,task_type='budget')
