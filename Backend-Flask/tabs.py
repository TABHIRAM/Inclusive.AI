from gemini import call_gemini

def process_tabs(data):
    prompt = """
Act as a professional event planner and update the event budget based on the provided details 

Categories (Tabs): Venue, Catering, Decoration, Entertainment, Media, Gifts, Miscellaneous

General Guidelines:
Event Details:
Name
Type
Budget
Guest Count
Vegetarian Option: Suggest vegetarian only if true, both options if false
Eco-Friendly Option: Recommend eco-friendly items if true

a) Venue Tab:
Type: Suggest based on month, season, and location
Fees: Provide rental fees and additional costs
Amenities: List needed amenities (eg, tables, chairs)
Additional Costs: Note extra costs (eg, permits)
Tips: Advise on budget-saving

b) Catering Tab:
Menu: Suggest menu style (eg, buffet)
Food/Beverages: List options and special dishes
Staff/Equipment: Specify required staff and rentals
Tips: Offer cost-saving and experience-enhancing tips

c) Decoration Tab:
Theme/Style: Recommend theme with examples
Floral: Detail types, quantities, and pricing
Centerpieces: Describe and quantify
Drapery/Linens: Suggest colors and rental fees
Lighting/Decor: Recommend types and quantities

d) Entertainment Tab:
Options: Suggest suitable entertainment
Equipment/Duration: Recommend rentals and performance times
Additional Costs: Identify extra costs (eg, travel)

e) Media Tab:
Photography/Videography: Specify hours and packages
Photo Booth: Details on rental and props
Live Streaming: Suggest platforms and equipment
Printing: Costs for invitations, programs, signage

f) Gifts Tab:
Recommendations: Suggest gifts, costs, sources, and packaging

g) Miscellaneous Tab:
Stationery Costs: Estimate for invitations, RSVP cards
Transportation Costs: Estimate for guest/staff transport
Insurance: Note if needed
Contingency: Include a buffer for unexpected costs
Additional Items: Mention any other important details

Note: Include Google products where relevant and ensure some items are eco-friendly
    """

    user_input = data

    output_data = """
   {
    "value": "Venue",
    "title": "Venue",
    "description": "Brief summary of the venue details",
    "details": `Detailed description`"
  },
  {
    "value": "Catering",
    "title": "Catering",
    "description": "Brief summary of the catering details",
    "details": `Detailed description`"
  },
  {
    "value": "Decoration",
    "title": "Decoration",
    "description": "Brief summary of the decoration details",
    "details": `Detailed description`"
  },
  {
    "value": "Entertainment",
    "title": "Entertainment",
    "description": "Brief summary of the entertainment details",
    "details": `Detailed description`"
  },
  {
    "value": "Media",
    "title": "Media",
    "description": "Brief summary of the media details",
    "details": `Detailed description`"
  },
  {
    "value": "Gifts",
    "title": "Gifts",
    "description": "Brief summary of the gifts details",
    "details": `Detailed description`"
  },
  {
    "value": "Miscellaneous",
    "title": "Miscellaneous",
    "description": "Brief summary of miscellaneous details",
    "details": `Detailed description`"
  }
    """

    return call_gemini(prompt, user_input, output_data,task_type='tabs')
