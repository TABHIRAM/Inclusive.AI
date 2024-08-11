from google.api_core.exceptions import DeadlineExceeded, ResourceExhausted
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure the Gemini API client
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

# Define the generation configuration
generation_config = {
    "temperature": 0.8,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "application/json",
}

# Initialize the model
model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    generation_config=generation_config
)

response = None

def call_gemini(prompt, user_input, output_data, task_type):
    # chat_session = model.start_chat()
    
    # Define instructions based on the task type
    if task_type == 'budget':
        additional_instructions = (
           "Do not alter or add any fields. Ensure that the budget estimation is in the correct currency format (e.g., $, ₹) and matches the specified budget. Note: Submit only the requested JSON without any extra comments."
        )
        instructions = (
            " and update only the amounts in the BudgetAllocation JSON list of 6: "
        )
        instructions_1 = " "
        final_instructions = " "
    elif task_type == 'timeline':
        additional_instructions = (
            "Ensure that all updates adhere to the existing timeline format and structure. "
            "Note: Provide only the requested JSON with no additional comments."
        )
        instructions = "and update the timelines in the EventTimeline JSON "
        instructions_1 = (
            "Feel free to add min 12 to max 24 timelines as per the format."
        )
        final_instructions = " "
    elif task_type == 'tabs':
        additional_instructions = (
            "Ensure that all updates adhere to the existing tab format and structure."
            "Note: Provide only the requested JSON with no additional comments."
        )
        instructions = (
            "You can use with <br/> for line breaks, and additional <br/><br/> for extra spacing. Use <b></b> for Sub-Headings only in details field where you fill Detailed description "
        )
        instructions_1 = " "
        final_instructions = (
            "Update only description and details do not change value and title fields."
            "Feel free to add min 2 to max 4 rows per tab as per the format."
        )
    else:
        raise ValueError("Invalid task_type. Must be 'budget', 'timeline', or 'tabs'.")
    
    try:
        # response = chat_session.send_message(
        #     f'{prompt} {user_input} {instructions} {output_data}. {instructions_1} {additional_instructions} {final_instructions}'
        # )
        response = model.generate_content(
            f'{prompt} {user_input} {instructions} {output_data}. {instructions_1} {additional_instructions} {final_instructions}'
        )
        print("response.text: " + response.text)
        return response.text
    except DeadlineExceeded as e:
        print(f"Request timed out: {e}")
        return None
    except ResourceExhausted as e:
        print(f"Quota exceeded: {e}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

