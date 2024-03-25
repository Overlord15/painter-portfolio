import os

# Define the directory where the images are located
directory = "."

# Get a list of all files in the directory
files = os.listdir(directory)

# Initialize a counter
counter = 1

# Iterate over all files
for file in files:
    # Check if the file is an image
    if file.endswith(".jpg") or file.endswith(".png") or file.endswith(".jpeg"):
        # Define the new name
        new_name = f"{counter}.jpg"
        
        # Rename the file
        os.rename(os.path.join(directory, file), os.path.join(directory, new_name))
        
        # Increment the counter
        counter += 1

# Print a success message
print("All images have been successfully renamed.")
