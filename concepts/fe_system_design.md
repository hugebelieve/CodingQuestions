>> Steps - FB

> Scope out > login, post, timeline, add friend, search
> Goals > timeline, expectation, MVP, Design readiness, product clarity by product team, OKR for first launch
> 1st Sprint > Design expectation , Error reporting, Interaction expectations (Ripple), Transition between pages
> 1st Sprint > Decide on Design Component, scalable > is it a product need, if product will change a lot with iteration
> 1st Sprint > tech comparision for given scope, team we have, what expertise they have
> Tech > Miro FE, SSR is need, code generation, framework selection, state management, bundler
> BE > Rest or GQL, type safety, API contract with design overview
> Components > to get proper idea of API contracts
> Config > Env setup, take care of security, not all ENV should get exposed
> Theming > Accessibility
> CSS > Styled components > Support SSR
> Screens > molecues and atoms > think PR review easier
> Login > User > Search > Add Friend > Timeline
> Auth Service > Saving User details in Local Storage > Cookies can increase header size
> Post > Input > Button > Char limit > Loader animation on submit
> Search > Paginated > Debounding > Caching > LRU (depends on UI and search effeciency)
> Timeline > get all post from friends and then Random
> Add Friend
> Unit testing > Jest
> Performance > Unsed JS > Proper Code Splitting webpack
> SSR > Hydration > renderToStream > useSuspense > Lazy > srcSet for images
> Analytics > heartbeat in case of video, click
> CI/CD, tooling to check feature performance
> MIS for automated tracking




>> API 

User
uid: string;
name: string;
profileUrl?: string;
gender: string;

Login
user: User;
accessToken?: string; > expires in 1 day, so next day first failed API call will need refresh token call
refreshToken?: string; > exprires in 1 year

Post - mutation
message: string;

Search -  friend list
user: [User];

Add Friend - mutation
uid: string;

Timeline - post array
user: User;
message: String;
like: string;

>> BE can he High Availability and resilient
>> FE can be high Reliability


----------


>> Steps - Jira

> Scope out > Board, workflow, isssueStatus, Issues, IssueType, Drag Drop, Assignee
> Goals > OKR, load time, delivery time
> Design expectation, error state, loading state, transitions, animations
> Design components > scalable
> Tech > team, micro FE for large team, team experience, framework, state management, tools like code gen
> BE > graphql, api, api contract as per design
> Config > env setup, security point of view
> Theming > accessibility, as per need
> CSS > styled components > good SSR support
> Skip login > Go to Board
> Status columns
> Jira Ticket
> Issue Type > Bug, Task
> Drag Drop hook
> Assignee > show user details
> Performance > Unsed JS > Proper Code Splitting webpack
> SSR > Hydration > renderToStream > useSuspense > Lazy > srcSet for images
> Analytics > heartbeat in case of video, click
> CI/CD, tooling to check feature performance
> MIS for automated tracking
