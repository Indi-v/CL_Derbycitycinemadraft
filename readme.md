# Derby City Cinima Draft 

##Description

The Derby City Cinema Draft is a fantasy league started back in Summer 2013. We were inspired Brian Brushwood and Diamond Club's <a href="https://draft.diamondclub.tv/">Movie Draft League</a>. Fantasy Sports for the cinephile. 

We each got &#8362;100 to spend on a play auction. We gathered over beer and pizza and watched movie trailers. After each we would bid on it for our team. Domestic box office gross is calculated as the score for each movie. Here you see the results of DCCD Summer Movie Draft 2018. 


##Custom CSS Classes

The class(es) I created are:

1. .hiddenRow  - It is applied via JavaScript when it builds the  tables. At the mobile format it hides the Owner row to display the data in a more readable form. 

2. .site-main / .site - classes for setting up a sticky footer. '.site-main' also is used as a flex container at the widest breakpoint to make 2 columns.

3. .main-nav  - flex container used to adjust the nav items from the site title during breakpoints. 


##Custom JavaScript Functions

The javascript functions I created are:

1. buildMovieTable();
  - Function used to itterate through my draftData and build the table out. It adds the class hidden-row to the 2nd column. That is used to hide the collumn on smaller screens. It is added back after the initial brake point via Media query. 
1. buildScoreTable();
  - Function uses pure jquery and the .each() function to iterate through the Score object in my data and setup the scoreTable
