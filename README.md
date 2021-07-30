# Tic-Tac-Toe
This is a simple Tic-Tac-Toe game that uses the factory functions to generate players.

# Preview
<p align="center">
  <img src="https://user-images.githubusercontent.com/81805471/125594741-4b3a7783-c460-4cdc-af99-42d3d742f36e.png" alt="Homepage"/>
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/81805471/125594864-c7c5f8c1-3241-4428-9631-30c97a8e43e1.png" alt="Details"/>
</p>
<p align='center'>
  <img src='https://user-images.githubusercontent.com/81805471/126028161-55ee3844-6371-4582-b2d1-130e0cdc636f.png' alt='localstorage'/>
</p>

# Table of Contents
- [Preview](#preview)
- [Usage](#usage)
- [Learning Points](#learning-points)
- [Contribute](#contribute)
  - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [Feedback](#feedback)
- [License](#license)
- [Footer](#footer)

# Usage
Simply head to https://naduhz.github.io/odin-project-library/ to begin using the app! Alternatively, if you wish to host the project locally and make edits, you may clone the repository by doing:

```shell
cd your-directory-name
git clone https://github.com/naduhz/odin-project-library.git
```

and launching `index.html`.

[(Back to top)](#table-of-contents)

# Learning Points
There were 3 main takeaways from this project:

1. Objects
2. Order of operations
3. localStorage()

I learnt that objects are great for storing data for items with similar attributes, and the fact that methods can be added to objects makes retrieving the data even easier. The importance of getting the right order of operations was another key takeaway I had from this project as it became painfully apparent that adding event listeners under the wrong code block could result in some very undesired outcomes. For instance, when programming the toggle read button, I constantly encountered a bug where the toggle would affect the read states of all books, which was not what I had intended. It turned out that I had nested the event listener under the event listener for each book, which caused me a great amount of frustration. The localStorage() proved to be useful in maintaining the data that was created. However, a drawback is that data would have to be parsed as JSON objects, and any methods in custom objects would be lost in the process. Thankfully, I could just pass the data back into the constructor function to give the objects the intended attributes and methods.

[(Back to top)](#table-of-contents)

# Contribute
Please feel free to make any suggestions, edits or raise issues. Forks and pull requests are always welcome. I am not likely to maintain the code from here on as I have to move on to other projects.

[(Back to top)](#table-of-contents)

## Adding new features or fixing bugs
As mentioned above, I am not likely to maintain the code and as such, if you would like to build on this project, you could always fork or clone this repository.

[(Back to top)](#table-of-contents)

# Feedback
As this was done within a month of learning Javascript, the code is written in a very amateurish manner. Criticism is always appreciated with regard to how I can better write or refactor my code.

[(Back to top)](#table-of-contents)

# License
Project License can be found [here](https://github.com/naduhz/odin-project-library/blob/main/LICENSE).

[(Back to top)](#table-of-contents)

# Footer
I would like to thank [The Odin Project](https://www.theodinproject.com/) for providing the inspiration for this project.

[(Back to top)](#table-of-contents)
