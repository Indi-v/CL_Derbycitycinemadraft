# Derby City Cinema Draft 

Github Pages: https://indi-v.github.io/CL_Derbycitycinemadraft/

##Description

The Derby City Cinema Draft is a fantasy league started back in Summer of 2013. We were inspired by Brian Brushwood and Diamond Club's <a href="https://draft.diamondclub.tv/">Movie Draft League</a> The basic idea is fantasy sports for the cinephile!

Every year (or "season"), we each get &#8362;100 to spend on a play auction. We gather over beer and pizza, and settle in for a couple hours of movie trailers. After each trailer, we all bid on the movie, with various strategies used to try and predict the movies that will make the most money for the new "owner." 

Domestic box office gross is calculated as the score for each movie. Here you see the results of DCCD Summer Movie Draft 2018.

A community member of Diamondclub, t2t2, created <a href='https://boxofficedraft.com'>BoxOfficeDraft.com</a>. It unfortunately is defunct due to the login relying on a authentication method, Mozilla Persona, that was abandoned back in 2014. This is a reimagining of that idea. The dream would be to turn this a full featured webapp using MEAN stack.


##Custom CSS Classes

The class(es) I created are:

1. .hiddenRow  - Applied via JavaScript when it builds the tables. At the mobile format it hides the Owner row to display the data in a more readable form. 

2. .site-main / .site - classes for setting up a sticky footer. '.site-main' also is used as a flex container at the widest breakpoint to make 2 columns.

3. .main-nav  - flex container used to adjust the nav items from the site title during breakpoints. 


##Custom JavaScript Functions

The javascript functions I created are:

1. buildMovieTable();  - Function used to itterate through my draftData and build the table out. It adds the class hidden-row to the 2nd column. That is used to hide the collumn on smaller screens. It is added back after the initial brake point via Media query. 
2. buildScoreTable();  - Function uses pure jquery and the .each() function to iterate through the Score object in my data and setup the scoreTable
