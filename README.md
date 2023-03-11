# equest-solutions


# NodeJS API / Express / Routing prevention with DDOS
Please use latest node.js version.
Ensure to keep your dependencies managed properly within package.json
Make sure to use proper git-ignore for the commit.

# Problem Statement
Please write an API that validates the DDOS attacks
Write a normal API that authenticates using the Bearer Key "mf8nrqICaHYD1y8wRMBksWm7U7gLgXy1mSWjhI0q" in the header.
The API should be blocked for 20 minutes if same bearer is tried for over 10 times in 20 seconds.
Once the 20 minutes are passed, the IP Should be allowed to access again.
If the threshold breaking is crossed over 100 times in a minute's time the IP shuould be blocked parmenentaly.
The error should return a 400 Error response.
Otherwise should return a JSON - with random data- You can generate the data from https://www.mockaroo.com/