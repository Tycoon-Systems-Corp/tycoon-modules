# Delivery
Only tycoon-client-modules-raw is meant to be delivered to customer. Modules are developed here and are to be utilized in website projects. Run obfuscate_modules to obfuscate. Any deliveries to customers are not allowed to occur without L4 approval. Strict disciplinary action will occur if unapproved and or non obfuscated modules are delivered outside of Tycoon.

# This is where the initial application modules are developed, obfuscated and then we copy over to video-streaming-client. That is the repo that our customers developers copy.
# We do not serve this repo to customers.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Publish an npm package
npm login
npm init --scope=@tycoonsystems
npm publish --access=public

# Increase version
npm version patch
