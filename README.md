# ShowTime

<p align="center" width="100%" height="100%">
    <img width="33%" src="https://i.pinimg.com/564x/bc/2a/05/bc2a05e398a55163568f0f9b8a66b27a.jpg"> 
</p>

ShowTime is a modern web application for booking movie tickets. The platform offers users an easy and intuitive way to browse movies, check available showtimes, book seats, and view their booking details. The application is built using the MERN stack for the frontend and Flask for the backend.

## Features

- **Movie Browsing**: Browse the latest movies and check their details.
- **Booking System**: Select showtimes and book your preferred seats.
- **User Authentication**: Sign up and sign in securely.
- **Booking Confirmation**: Receive a detailed bill and booking confirmation.
- **Responsive Design**: Access the application across various devices.

## Directory Structure

```plaintext
ShowTime/
├── backend
│   ├── Dockerfile
│   ├── req.txt
│   ├── sample.env
│   └── server.py
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── animations
│   │   │   └── index.js
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── finalbill.jsx
│   │   │   ├── hallselect.jsx
│   │   │   ├── homepage.jsx
│   │   │   ├── login.jsx
│   │   │   ├── logohome.jsx
│   │   │   ├── preloader.css
│   │   │   ├── Preloader.jsx
│   │   │   ├── searchbar.jsx
│   │   │   ├── searchpage.jsx
│   │   │   ├── seatbooking.jsx
│   │   │   ├── seatselection.jsx
│   │   │   └── signup.jsx
│   │   ├── images
│   │   │   ├── image1.png
│   │   │   ├── image2.jpg
│   │   │   ├── image3.jpg
│   │   │   └── screen.svg
│   │   ├── index.css
│   │   └── index.js
│   ├── tailwind.config.js
│   └── yarn.lock
├── node_modules
│   ├── async
│   │   ├── component.json
│   │   ├── lib
│   │   │   └── async.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @babel
│   │   └── runtime
│   │       ├── helpers
│   │       │   ├── applyDecoratedDescriptor.js
│   │       │   ├── applyDecs2203.js
│   │       │   ├── applyDecs2203R.js
│   │       │   ├── applyDecs2301.js
│   │       │   ├── applyDecs2305.js
│   │       │   ├── applyDecs2311.js
│   │       │   ├── applyDecs.js
│   │       │   ├── arrayLikeToArray.js
│   │       │   ├── arrayWithHoles.js
│   │       │   ├── arrayWithoutHoles.js
│   │       │   ├── assertClassBrand.js
│   │       │   ├── assertThisInitialized.js
│   │       │   ├── asyncGeneratorDelegate.js
│   │       │   ├── asyncIterator.js
│   │       │   ├── asyncToGenerator.js
│   │       │   ├── awaitAsyncGenerator.js
│   │       │   ├── AwaitValue.js
│   │       │   ├── callSuper.js
│   │       │   ├── checkInRHS.js
│   │       │   ├── checkPrivateRedeclaration.js
│   │       │   ├── classApplyDescriptorDestructureSet.js
│   │       │   ├── classApplyDescriptorGet.js
│   │       │   ├── classApplyDescriptorSet.js
│   │       │   ├── classCallCheck.js
│   │       │   ├── classCheckPrivateStaticAccess.js
│   │       │   ├── classCheckPrivateStaticFieldDescriptor.js
│   │       │   ├── classExtractFieldDescriptor.js
│   │       │   ├── classNameTDZError.js
│   │       │   ├── classPrivateFieldDestructureSet.js
│   │       │   ├── classPrivateFieldGet2.js
│   │       │   ├── classPrivateFieldGet.js
│   │       │   ├── classPrivateFieldInitSpec.js
│   │       │   ├── classPrivateFieldLooseBase.js
│   │       │   ├── classPrivateFieldLooseKey.js
│   │       │   ├── classPrivateFieldSet2.js
│   │       │   ├── classPrivateFieldSet.js
│   │       │   ├── classPrivateGetter.js
│   │       │   ├── classPrivateMethodGet.js
│   │       │   ├── classPrivateMethodInitSpec.js
│   │       │   ├── classPrivateMethodSet.js
│   │       │   ├── classPrivateSetter.js
│   │       │   ├── classStaticPrivateFieldDestructureSet.js
│   │       │   ├── classStaticPrivateFieldSpecGet.js
│   │       │   ├── classStaticPrivateFieldSpecSet.js
│   │       │   ├── classStaticPrivateMethodGet.js
│   │       │   ├── classStaticPrivateMethodSet.js
│   │       │   ├── construct.js
│   │       │   ├── createClass.js
│   │       │   ├── createForOfIteratorHelper.js
│   │       │   ├── createForOfIteratorHelperLoose.js
│   │       │   ├── createSuper.js
│   │       │   ├── decorate.js
│   │       │   ├── defaults.js
│   │       │   ├── defineAccessor.js
│   │       │   ├── defineEnumerableProperties.js
│   │       │   ├── defineProperty.js
│   │       │   ├── dispose.js
│   │       │   ├── esm
│   │       │   │   ├── applyDecoratedDescriptor.js
│   │       │   │   ├── applyDecs2203.js
│   │       │   │   ├── applyDecs2203R.js
│   │       │   │   ├── applyDecs2301.js
│   │       │   │   ├── applyDecs2305.js
│   │       │   │   ├── applyDecs2311.js
│   │       │   │   ├── applyDecs.js
│   │       │   │   ├── arrayLikeToArray.js
│   │       │   │   ├── arrayWithHoles.js
│   │       │   │   ├── arrayWithoutHoles.js
│   │       │   │   ├── assertClassBrand.js
│   │       │   │   ├── assertThisInitialized.js
│   │       │   │   ├── asyncGeneratorDelegate.js
│   │       │   │   ├── asyncIterator.js
│   │       │   │   ├── asyncToGenerator.js
│   │       │   │   ├── awaitAsyncGenerator.js
│   │       │   │   ├── AwaitValue.js
│   │       │   │   ├── callSuper.js
│   │       │   │   ├── checkInRHS.js
│   │       │   │   ├── checkPrivateRedeclaration.js
│   │       │   │   ├── classApplyDescriptorDestructureSet.js
│   │       │   │   ├── classApplyDescriptorGet.js
│   │       │   │   ├── classApplyDescriptorSet.js
│   │       │   │   ├── classCallCheck.js
│   │       │   │   ├── classCheckPrivateStaticAccess.js
│   │       │   │   ├── classCheckPrivateStaticFieldDescriptor.js
│   │       │   │   ├── classExtractFieldDescriptor.js
│   │       │   │   ├── classNameTDZError.js
│   │       │   │   ├── classPrivateFieldDestructureSet.js
│   │       │   │   ├── classPrivateFieldGet2.js
│   │       │   │   ├── classPrivateFieldGet.js
│   │       │   │   ├── classPrivateFieldInitSpec.js
│   │       │   │   ├── classPrivateFieldLooseBase.js
│   │       │   │   ├── classPrivateFieldLooseKey.js
│   │       │   │   ├── classPrivateFieldSet2.js
│   │       │   │   ├── classPrivateFieldSet.js
│   │       │   │   ├── classPrivateGetter.js
│   │       │   │   ├── classPrivateMethodGet.js
│   │       │   │   ├── classPrivateMethodInitSpec.js
│   │       │   │   ├── classPrivateMethodSet.js
│   │       │   │   ├── classPrivateSetter.js
│   │       │   │   ├── classStaticPrivateFieldDestructureSet.js
│   │       │   │   ├── classStaticPrivateFieldSpecGet.js
│   │       │   │   ├── classStaticPrivateFieldSpecSet.js
│   │       │   │   ├── classStaticPrivateMethodGet.js
│   │       │   │   ├── classStaticPrivateMethodSet.js
│   │       │   │   ├── construct.js
│   │       │   │   ├── createClass.js
│   │       │   │   ├── createForOfIteratorHelper.js
│   │       │   │   ├── createForOfIteratorHelperLoose.js
│   │       │   │   ├── createSuper.js
│   │       │   │   ├── decorate.js
│   │       │   │   ├── defaults.js
│   │       │   │   ├── defineAccessor.js
│   │       │   │   ├── defineEnumerableProperties.js
│   │       │   │   ├── defineProperty.js
│   │       │   │   ├── dispose.js
│   │       │   │   ├── extends.js
│   │       │   │   ├── get.js
│   │       │   │   ├── getPrototypeOf.js
│   │       │   │   ├── identity.js
│   │       │   │   ├── importDeferProxy.js
│   │       │   │   ├── inherits.js
│   │       │   │   ├── inheritsLoose.js
│   │       │   │   ├── initializerDefineProperty.js
│   │       │   │   ├── initializerWarningHelper.js
│   │       │   │   ├── instanceof.js
│   │       │   │   ├── interopRequireDefault.js
│   │       │   │   ├── interopRequireWildcard.js
│   │       │   │   ├── isNativeFunction.js
│   │       │   │   ├── isNativeReflectConstruct.js
│   │       │   │   ├── iterableToArray.js
│   │       │   │   ├── iterableToArrayLimit.js
│   │       │   │   ├── jsx.js
│   │       │   │   ├── maybeArrayLike.js
│   │       │   │   ├── newArrowCheck.js
│   │       │   │   ├── nonIterableRest.js
│   │       │   │   ├── nonIterableSpread.js
│   │       │   │   ├── nullishReceiverError.js
│   │       │   │   ├── objectDestructuringEmpty.js
│   │       │   │   ├── objectSpread2.js
│   │       │   │   ├── objectSpread.js
│   │       │   │   ├── objectWithoutProperties.js
│   │       │   │   ├── objectWithoutPropertiesLoose.js
│   │       │   │   ├── OverloadYield.js
│   │       │   │   ├── package.json
│   │       │   │   ├── possibleConstructorReturn.js
│   │       │   │   ├── readOnlyError.js
│   │       │   │   ├── regeneratorRuntime.js
│   │       │   │   ├── setFunctionName.js
│   │       │   │   ├── set.js
│   │       │   │   ├── setPrototypeOf.js
│   │       │   │   ├── skipFirstGeneratorNext.js
│   │       │   │   ├── slicedToArray.js
│   │       │   │   ├── superPropBase.js
│   │       │   │   ├── superPropGet.js
│   │       │   │   ├── superPropSet.js
│   │       │   │   ├── taggedTemplateLiteral.js
│   │       │   │   ├── taggedTemplateLiteralLoose.js
│   │       │   │   ├── tdz.js
│   │       │   │   ├── temporalRef.js
│   │       │   │   ├── temporalUndefined.js
│   │       │   │   ├── toArray.js
│   │       │   │   ├── toConsumableArray.js
│   │       │   │   ├── toPrimitive.js
│   │       │   │   ├── toPropertyKey.js
│   │       │   │   ├── toSetter.js
│   │       │   │   ├── typeof.js
│   │       │   │   ├── unsupportedIterableToArray.js
│   │       │   │   ├── usingCtx.js
│   │       │   │   ├── using.js
│   │       │   │   ├── wrapAsyncGenerator.js
│   │       │   │   ├── wrapNativeSuper.js
│   │       │   │   ├── wrapRegExp.js
│   │       │   │   └── writeOnlyError.js
│   │       │   ├── extends.js
│   │       │   ├── get.js
│   │       │   ├── getPrototypeOf.js
│   │       │   ├── identity.js
│   │       │   ├── importDeferProxy.js
│   │       │   ├── inherits.js
│   │       │   ├── inheritsLoose.js
│   │       │   ├── initializerDefineProperty.js
│   │       │   ├── initializerWarningHelper.js
│   │       │   ├── instanceof.js
│   │       │   ├── interopRequireDefault.js
│   │       │   ├── interopRequireWildcard.js
│   │       │   ├── isNativeFunction.js
│   │       │   ├── isNativeReflectConstruct.js
│   │       │   ├── iterableToArray.js
│   │       │   ├── iterableToArrayLimit.js
│   │       │   ├── jsx.js
│   │       │   ├── maybeArrayLike.js
│   │       │   ├── newArrowCheck.js
│   │       │   ├── nonIterableRest.js
│   │       │   ├── nonIterableSpread.js
│   │       │   ├── nullishReceiverError.js
│   │       │   ├── objectDestructuringEmpty.js
│   │       │   ├── objectSpread2.js
│   │       │   ├── objectSpread.js
│   │       │   ├── objectWithoutProperties.js
│   │       │   ├── objectWithoutPropertiesLoose.js
│   │       │   ├── OverloadYield.js
│   │       │   ├── possibleConstructorReturn.js
│   │       │   ├── readOnlyError.js
│   │       │   ├── regeneratorRuntime.js
│   │       │   ├── setFunctionName.js
│   │       │   ├── set.js
│   │       │   ├── setPrototypeOf.js
│   │       │   ├── skipFirstGeneratorNext.js
│   │       │   ├── slicedToArray.js
│   │       │   ├── superPropBase.js
│   │       │   ├── superPropGet.js
│   │       │   ├── superPropSet.js
│   │       │   ├── taggedTemplateLiteral.js
│   │       │   ├── taggedTemplateLiteralLoose.js
│   │       │   ├── tdz.js
│   │       │   ├── temporalRef.js
│   │       │   ├── temporalUndefined.js
│   │       │   ├── toArray.js
│   │       │   ├── toConsumableArray.js
│   │       │   ├── toPrimitive.js
│   │       │   ├── toPropertyKey.js
│   │       │   ├── toSetter.js
│   │       │   ├── typeof.js
│   │       │   ├── unsupportedIterableToArray.js
│   │       │   ├── usingCtx.js
│   │       │   ├── using.js
│   │       │   ├── wrapAsyncGenerator.js
│   │       │   ├── wrapNativeSuper.js
│   │       │   ├── wrapRegExp.js
│   │       │   └── writeOnlyError.js
│   │       ├── LICENSE
│   │       ├── package.json
│   │       ├── README.md
│   │       └── regenerator
│   │           └── index.js
│   ├── bson
│   │   ├── bson.d.ts
│   │   ├── etc
│   │   │   └── prepare.js
│   │   ├── lib
│   │   │   ├── bson.bundle.js
│   │   │   ├── bson.bundle.js.map
│   │   │   ├── bson.cjs
│   │   │   ├── bson.cjs.map
│   │   │   ├── bson.mjs
│   │   │   ├── bson.mjs.map
│   │   │   ├── bson.rn.cjs
│   │   │   └── bson.rn.cjs.map
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── src
│   │   │   ├── binary.ts
│   │   │   ├── bson.ts
│   │   │   ├── bson_value.ts
│   │   │   ├── code.ts
│   │   │   ├── constants.ts
│   │   │   ├── db_ref.ts
│   │   │   ├── decimal128.ts
│   │   │   ├── double.ts
│   │   │   ├── error.ts
│   │   │   ├── extended_json.ts
│   │   │   ├── index.ts
│   │   │   ├── int_32.ts
│   │   │   ├── long.ts
│   │   │   ├── max_key.ts
│   │   │   ├── min_key.ts
│   │   │   ├── objectid.ts
│   │   │   ├── parser
│   │   │   │   ├── calculate_size.ts
│   │   │   │   ├── deserializer.ts
│   │   │   │   ├── on_demand
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── parse_to_elements.ts
│   │   │   │   ├── serializer.ts
│   │   │   │   └── utils.ts
│   │   │   ├── parse_utf8.ts
│   │   │   ├── regexp.ts
│   │   │   ├── symbol.ts
│   │   │   ├── timestamp.ts
│   │   │   └── utils
│   │   │       ├── byte_utils.ts
│   │   │       ├── latin.ts
│   │   │       ├── node_byte_utils.ts
│   │   │       ├── number_utils.ts
│   │   │       ├── string_utils.ts
│   │   │       └── web_byte_utils.ts
│   │   └── vendor
│   │       ├── base64
│   │       │   ├── base64.js
│   │       │   ├── LICENSE-MIT.txt
│   │       │   ├── package.json
│   │       │   └── README.md
│   │       └── text-encoding
│   │           ├── index.js
│   │           ├── lib
│   │           │   ├── encoding-indexes.js
│   │           │   └── encoding.js
│   │           ├── LICENSE.md
│   │           ├── package.json
│   │           └── README.md
│   ├── content-type
│   │   ├── HISTORY.md
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── debug
│   │   ├── LICENSE
│   │   ├── node_modules
│   │   │   └── ms
│   │   │       ├── index.js
│   │   │       ├── license.md
│   │   │       ├── package.json
│   │   │       └── readme.md
│   │   ├── package.json
│   │   ├── README.md
│   │   └── src
│   │       ├── browser.js
│   │       ├── common.js
│   │       ├── index.js
│   │       └── node.js
│   ├── goober
│   │   ├── dist
│   │   │   ├── goober.cjs
│   │   │   ├── goober.esm.js
│   │   │   ├── goober.modern.js
│   │   │   └── goober.umd.js
│   │   ├── global
│   │   │   ├── dist
│   │   │   │   ├── goober-global.cjs
│   │   │   │   ├── goober-global.esm.js
│   │   │   │   ├── goober-global.modern.js
│   │   │   │   └── goober-global.umd.js
│   │   │   ├── global.d.ts
│   │   │   ├── package.json
│   │   │   └── src
│   │   │       ├── index.js
│   │   │       └── __tests__
│   │   │           ├── global.test.js
│   │   │           ├── integration.test.js
│   │   │           └── __snapshots__
│   │   │               └── integration.test.js.snap
│   │   ├── goober.d.ts
│   │   ├── LICENSE
│   │   ├── macro
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── package.json
│   │   ├── prefixer
│   │   │   ├── autoprefixer.d.ts
│   │   │   ├── dist
│   │   │   │   ├── goober-autoprefixer.cjs
│   │   │   │   ├── goober-autoprefixer.esm.js
│   │   │   │   ├── goober-autoprefixer.modern.js
│   │   │   │   └── goober-autoprefixer.umd.js
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   └── src
│   │   │       └── index.js
│   │   ├── README.md
│   │   ├── should-forward-prop
│   │   │   ├── dist
│   │   │   │   ├── goober-should-forward-prop.cjs
│   │   │   │   ├── goober-should-forward-prop.esm.js
│   │   │   │   ├── goober-should-forward-prop.modern.js
│   │   │   │   └── goober-should-forward-prop.umd.js
│   │   │   ├── package.json
│   │   │   ├── should-forward-prop.d.ts
│   │   │   └── src
│   │   │       ├── index.js
│   │   │       └── __tests__
│   │   │           └── shouldForwardProp.js
│   │   ├── src
│   │   │   ├── core
│   │   │   │   ├── astish.js
│   │   │   │   ├── compile.js
│   │   │   │   ├── get-sheet.js
│   │   │   │   ├── hash.js
│   │   │   │   ├── parse.js
│   │   │   │   ├── __tests__
│   │   │   │   │   ├── astish.test.js
│   │   │   │   │   ├── compile.test.js
│   │   │   │   │   ├── get-sheet.test.js
│   │   │   │   │   ├── hash.test.js
│   │   │   │   │   ├── parse.test.js
│   │   │   │   │   ├── to-hash.test.js
│   │   │   │   │   └── update.test.js
│   │   │   │   ├── to-hash.js
│   │   │   │   └── update.js
│   │   │   ├── css.js
│   │   │   ├── index.js
│   │   │   ├── styled.js
│   │   │   └── __tests__
│   │   │       ├── css.test.js
│   │   │       ├── index.test.js
│   │   │       ├── integrations.test.js
│   │   │       └── styled.test.js
│   │   └── typings.json
│   ├── gsap
│   │   ├── all.js
│   │   ├── CSSPlugin.js
│   │   ├── CSSRulePlugin.js
│   │   ├── CustomEase.js
│   │   ├── dist
│   │   │   ├── all.js
│   │   │   ├── CSSRulePlugin.js
│   │   │   ├── CSSRulePlugin.min.js
│   │   │   ├── CSSRulePlugin.min.js.map
│   │   │   ├── CustomEase.js
│   │   │   ├── CustomEase.min.js
│   │   │   ├── CustomEase.min.js.map
│   │   │   ├── Draggable.js
│   │   │   ├── Draggable.min.js
│   │   │   ├── Draggable.min.js.map
│   │   │   ├── EaselPlugin.js
│   │   │   ├── EaselPlugin.min.js
│   │   │   ├── EaselPlugin.min.js.map
│   │   │   ├── EasePack.js
│   │   │   ├── EasePack.min.js
│   │   │   ├── EasePack.min.js.map
│   │   │   ├── Flip.js
│   │   │   ├── Flip.min.js
│   │   │   ├── Flip.min.js.map
│   │   │   ├── gsap.js
│   │   │   ├── gsap.min.js
│   │   │   ├── gsap.min.js.map
│   │   │   ├── MotionPathPlugin.js
│   │   │   ├── MotionPathPlugin.min.js
│   │   │   ├── MotionPathPlugin.min.js.map
│   │   │   ├── Observer.js
│   │   │   ├── Observer.min.js
│   │   │   ├── Observer.min.js.map
│   │   │   ├── PixiPlugin.js
│   │   │   ├── PixiPlugin.min.js
│   │   │   ├── PixiPlugin.min.js.map
│   │   │   ├── ScrollToPlugin.js
│   │   │   ├── ScrollToPlugin.min.js
│   │   │   ├── ScrollToPlugin.min.js.map
│   │   │   ├── ScrollTrigger.js
│   │   │   ├── ScrollTrigger.min.js
│   │   │   ├── ScrollTrigger.min.js.map
│   │   │   ├── TextPlugin.js
│   │   │   ├── TextPlugin.min.js
│   │   │   └── TextPlugin.min.js.map
│   │   ├── Draggable.js
│   │   ├── EaselPlugin.js
│   │   ├── EasePack.js
│   │   ├── Flip.js
│   │   ├── gsap-core.js
│   │   ├── index.js
│   │   ├── MotionPathPlugin.js
│   │   ├── Observer.js
│   │   ├── package.json
│   │   ├── PixiPlugin.js
│   │   ├── README.md
│   │   ├── ScrollToPlugin.js
│   │   ├── ScrollTrigger.js
│   │   ├── SECURITY.md
│   │   ├── src
│   │   │   ├── all.js
│   │   │   ├── CSSPlugin.js
│   │   │   ├── CSSRulePlugin.js
│   │   │   ├── CustomEase.js
│   │   │   ├── Draggable.js
│   │   │   ├── EaselPlugin.js
│   │   │   ├── EasePack.js
│   │   │   ├── Flip.js
│   │   │   ├── gsap-core.js
│   │   │   ├── index.js
│   │   │   ├── MotionPathPlugin.js
│   │   │   ├── Observer.js
│   │   │   ├── PixiPlugin.js
│   │   │   ├── ScrollToPlugin.js
│   │   │   ├── ScrollTrigger.js
│   │   │   ├── TextPlugin.js
│   │   │   └── utils
│   │   │       ├── matrix.js
│   │   │       ├── paths.js
│   │   │       └── strings.js
│   │   ├── TextPlugin.js
│   │   ├── types
│   │   │   ├── animation.d.ts
│   │   │   ├── css-plugin.d.ts
│   │   │   ├── css-rule-plugin.d.ts
│   │   │   ├── custom-bounce.d.ts
│   │   │   ├── custom-ease.d.ts
│   │   │   ├── custom-wiggle.d.ts
│   │   │   ├── draggable.d.ts
│   │   │   ├── draw-svg-plugin.d.ts
│   │   │   ├── ease.d.ts
│   │   │   ├── easel-plugin.d.ts
│   │   │   ├── flip.d.ts
│   │   │   ├── gsap-core.d.ts
│   │   │   ├── gsap-plugins.d.ts
│   │   │   ├── gsap-utils.d.ts
│   │   │   ├── gs-dev-tools.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── inertia-plugin.d.ts
│   │   │   ├── morph-svg-plugin.d.ts
│   │   │   ├── motion-path-helper.d.ts
│   │   │   ├── motion-path-plugin.d.ts
│   │   │   ├── observer.d.ts
│   │   │   ├── physics-2d-plugin.d.ts
│   │   │   ├── physics-props-plugin.d.ts
│   │   │   ├── pixi-plugin.d.ts
│   │   │   ├── scramble-text-plugin.d.ts
│   │   │   ├── scroll-smoother.d.ts
│   │   │   ├── scroll-to-plugin.d.ts
│   │   │   ├── scroll-trigger.d.ts
│   │   │   ├── split-text.d.ts
│   │   │   ├── text-plugin.d.ts
│   │   │   ├── timeline.d.ts
│   │   │   ├── tween.d.ts
│   │   │   └── utils
│   │   │       └── velocity-tracker.d.ts
│   │   └── utils
│   │       ├── matrix.js
│   │       ├── paths.js
│   │       └── strings.js
│   ├── ini
│   │   ├── ini.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── js-tokens
│   │   ├── CHANGELOG.md
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── kareem
│   │   ├── CHANGELOG.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── SECURITY.md
│   ├── loose-envify
│   │   ├── cli.js
│   │   ├── custom.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── loose-envify.js
│   │   ├── package.json
│   │   ├── README.md
│   │   └── replace.js
│   ├── memory-pager
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── test.js
│   ├── minimist
│   │   ├── example
│   │   │   └── parse.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   └── test
│   │       ├── bool.js
│   │       ├── dash.js
│   │       ├── default_bool.js
│   │       ├── dotted.js
│   │       ├── long.js
│   │       ├── num.js
│   │       ├── parse.js
│   │       ├── parse_modified.js
│   │       ├── short.js
│   │       └── whitespace.js
│   ├── mongodb
│   │   ├── etc
│   │   │   └── prepare.js
│   │   ├── lib
│   │   │   ├── admin.js
│   │   │   ├── admin.js.map
│   │   │   ├── bson.js
│   │   │   ├── bson.js.map
│   │   │   ├── bulk
│   │   │   │   ├── common.js
│   │   │   │   ├── common.js.map
│   │   │   │   ├── ordered.js
│   │   │   │   ├── ordered.js.map
│   │   │   │   ├── unordered.js
│   │   │   │   └── unordered.js.map
│   │   │   ├── change_stream.js
│   │   │   ├── change_stream.js.map
│   │   │   ├── client-side-encryption
│   │   │   │   ├── auto_encrypter.js
│   │   │   │   ├── auto_encrypter.js.map
│   │   │   │   ├── client_encryption.js
│   │   │   │   ├── client_encryption.js.map
│   │   │   │   ├── crypto_callbacks.js
│   │   │   │   ├── crypto_callbacks.js.map
│   │   │   │   ├── errors.js
│   │   │   │   ├── errors.js.map
│   │   │   │   ├── mongocryptd_manager.js
│   │   │   │   ├── mongocryptd_manager.js.map
│   │   │   │   ├── providers
│   │   │   │   │   ├── aws.js
│   │   │   │   │   ├── aws.js.map
│   │   │   │   │   ├── azure.js
│   │   │   │   │   ├── azure.js.map
│   │   │   │   │   ├── gcp.js
│   │   │   │   │   ├── gcp.js.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   ├── state_machine.js
│   │   │   │   └── state_machine.js.map
│   │   │   ├── cmap
│   │   │   │   ├── auth
│   │   │   │   │   ├── auth_provider.js
│   │   │   │   │   ├── auth_provider.js.map
│   │   │   │   │   ├── aws_temporary_credentials.js
│   │   │   │   │   ├── aws_temporary_credentials.js.map
│   │   │   │   │   ├── gssapi.js
│   │   │   │   │   ├── gssapi.js.map
│   │   │   │   │   ├── mongo_credentials.js
│   │   │   │   │   ├── mongo_credentials.js.map
│   │   │   │   │   ├── mongocr.js
│   │   │   │   │   ├── mongocr.js.map
│   │   │   │   │   ├── mongodb_aws.js
│   │   │   │   │   ├── mongodb_aws.js.map
│   │   │   │   │   ├── mongodb_oidc
│   │   │   │   │   │   ├── automated_callback_workflow.js
│   │   │   │   │   │   ├── automated_callback_workflow.js.map
│   │   │   │   │   │   ├── azure_machine_workflow.js
│   │   │   │   │   │   ├── azure_machine_workflow.js.map
│   │   │   │   │   │   ├── callback_workflow.js
│   │   │   │   │   │   ├── callback_workflow.js.map
│   │   │   │   │   │   ├── command_builders.js
│   │   │   │   │   │   ├── command_builders.js.map
│   │   │   │   │   │   ├── gcp_machine_workflow.js
│   │   │   │   │   │   ├── gcp_machine_workflow.js.map
│   │   │   │   │   │   ├── human_callback_workflow.js
│   │   │   │   │   │   ├── human_callback_workflow.js.map
│   │   │   │   │   │   ├── machine_workflow.js
│   │   │   │   │   │   ├── machine_workflow.js.map
│   │   │   │   │   │   ├── token_cache.js
│   │   │   │   │   │   ├── token_cache.js.map
│   │   │   │   │   │   ├── token_machine_workflow.js
│   │   │   │   │   │   └── token_machine_workflow.js.map
│   │   │   │   │   ├── mongodb_oidc.js
│   │   │   │   │   ├── mongodb_oidc.js.map
│   │   │   │   │   ├── plain.js
│   │   │   │   │   ├── plain.js.map
│   │   │   │   │   ├── providers.js
│   │   │   │   │   ├── providers.js.map
│   │   │   │   │   ├── scram.js
│   │   │   │   │   ├── scram.js.map
│   │   │   │   │   ├── x509.js
│   │   │   │   │   └── x509.js.map
│   │   │   │   ├── command_monitoring_events.js
│   │   │   │   ├── command_monitoring_events.js.map
│   │   │   │   ├── commands.js
│   │   │   │   ├── commands.js.map
│   │   │   │   ├── connection.js
│   │   │   │   ├── connection.js.map
│   │   │   │   ├── connection_pool_events.js
│   │   │   │   ├── connection_pool_events.js.map
│   │   │   │   ├── connection_pool.js
│   │   │   │   ├── connection_pool.js.map
│   │   │   │   ├── connect.js
│   │   │   │   ├── connect.js.map
│   │   │   │   ├── errors.js
│   │   │   │   ├── errors.js.map
│   │   │   │   ├── handshake
│   │   │   │   │   ├── client_metadata.js
│   │   │   │   │   └── client_metadata.js.map
│   │   │   │   ├── metrics.js
│   │   │   │   ├── metrics.js.map
│   │   │   │   ├── stream_description.js
│   │   │   │   ├── stream_description.js.map
│   │   │   │   └── wire_protocol
│   │   │   │       ├── compression.js
│   │   │   │       ├── compression.js.map
│   │   │   │       ├── constants.js
│   │   │   │       ├── constants.js.map
│   │   │   │       ├── on_data.js
│   │   │   │       ├── on_data.js.map
│   │   │   │       ├── on_demand
│   │   │   │       │   ├── document.js
│   │   │   │       │   └── document.js.map
│   │   │   │       ├── responses.js
│   │   │   │       ├── responses.js.map
│   │   │   │       ├── shared.js
│   │   │   │       └── shared.js.map
│   │   │   ├── collection.js
│   │   │   ├── collection.js.map
│   │   │   ├── connection_string.js
│   │   │   ├── connection_string.js.map
│   │   │   ├── constants.js
│   │   │   ├── constants.js.map
│   │   │   ├── cursor
│   │   │   │   ├── abstract_cursor.js
│   │   │   │   ├── abstract_cursor.js.map
│   │   │   │   ├── aggregation_cursor.js
│   │   │   │   ├── aggregation_cursor.js.map
│   │   │   │   ├── change_stream_cursor.js
│   │   │   │   ├── change_stream_cursor.js.map
│   │   │   │   ├── find_cursor.js
│   │   │   │   ├── find_cursor.js.map
│   │   │   │   ├── list_collections_cursor.js
│   │   │   │   ├── list_collections_cursor.js.map
│   │   │   │   ├── list_indexes_cursor.js
│   │   │   │   ├── list_indexes_cursor.js.map
│   │   │   │   ├── list_search_indexes_cursor.js
│   │   │   │   ├── list_search_indexes_cursor.js.map
│   │   │   │   ├── run_command_cursor.js
│   │   │   │   └── run_command_cursor.js.map
│   │   │   ├── db.js
│   │   │   ├── db.js.map
│   │   │   ├── deps.js
│   │   │   ├── deps.js.map
│   │   │   ├── encrypter.js
│   │   │   ├── encrypter.js.map
│   │   │   ├── error.js
│   │   │   ├── error.js.map
│   │   │   ├── explain.js
│   │   │   ├── explain.js.map
│   │   │   ├── gridfs
│   │   │   │   ├── download.js
│   │   │   │   ├── download.js.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── upload.js
│   │   │   │   └── upload.js.map
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── mongo_client_auth_providers.js
│   │   │   ├── mongo_client_auth_providers.js.map
│   │   │   ├── mongo_client.js
│   │   │   ├── mongo_client.js.map
│   │   │   ├── mongo_logger.js
│   │   │   ├── mongo_logger.js.map
│   │   │   ├── mongo_types.js
│   │   │   ├── mongo_types.js.map
│   │   │   ├── operations
│   │   │   │   ├── aggregate.js
│   │   │   │   ├── aggregate.js.map
│   │   │   │   ├── bulk_write.js
│   │   │   │   ├── bulk_write.js.map
│   │   │   │   ├── collections.js
│   │   │   │   ├── collections.js.map
│   │   │   │   ├── command.js
│   │   │   │   ├── command.js.map
│   │   │   │   ├── count_documents.js
│   │   │   │   ├── count_documents.js.map
│   │   │   │   ├── count.js
│   │   │   │   ├── count.js.map
│   │   │   │   ├── create_collection.js
│   │   │   │   ├── create_collection.js.map
│   │   │   │   ├── delete.js
│   │   │   │   ├── delete.js.map
│   │   │   │   ├── distinct.js
│   │   │   │   ├── distinct.js.map
│   │   │   │   ├── drop.js
│   │   │   │   ├── drop.js.map
│   │   │   │   ├── estimated_document_count.js
│   │   │   │   ├── estimated_document_count.js.map
│   │   │   │   ├── execute_operation.js
│   │   │   │   ├── execute_operation.js.map
│   │   │   │   ├── find_and_modify.js
│   │   │   │   ├── find_and_modify.js.map
│   │   │   │   ├── find.js
│   │   │   │   ├── find.js.map
│   │   │   │   ├── get_more.js
│   │   │   │   ├── get_more.js.map
│   │   │   │   ├── indexes.js
│   │   │   │   ├── indexes.js.map
│   │   │   │   ├── insert.js
│   │   │   │   ├── insert.js.map
│   │   │   │   ├── is_capped.js
│   │   │   │   ├── is_capped.js.map
│   │   │   │   ├── kill_cursors.js
│   │   │   │   ├── kill_cursors.js.map
│   │   │   │   ├── list_collections.js
│   │   │   │   ├── list_collections.js.map
│   │   │   │   ├── list_databases.js
│   │   │   │   ├── list_databases.js.map
│   │   │   │   ├── operation.js
│   │   │   │   ├── operation.js.map
│   │   │   │   ├── options_operation.js
│   │   │   │   ├── options_operation.js.map
│   │   │   │   ├── profiling_level.js
│   │   │   │   ├── profiling_level.js.map
│   │   │   │   ├── remove_user.js
│   │   │   │   ├── remove_user.js.map
│   │   │   │   ├── rename.js
│   │   │   │   ├── rename.js.map
│   │   │   │   ├── run_command.js
│   │   │   │   ├── run_command.js.map
│   │   │   │   ├── search_indexes
│   │   │   │   │   ├── create.js
│   │   │   │   │   ├── create.js.map
│   │   │   │   │   ├── drop.js
│   │   │   │   │   ├── drop.js.map
│   │   │   │   │   ├── update.js
│   │   │   │   │   └── update.js.map
│   │   │   │   ├── set_profiling_level.js
│   │   │   │   ├── set_profiling_level.js.map
│   │   │   │   ├── stats.js
│   │   │   │   ├── stats.js.map
│   │   │   │   ├── update.js
│   │   │   │   ├── update.js.map
│   │   │   │   ├── validate_collection.js
│   │   │   │   └── validate_collection.js.map
│   │   │   ├── read_concern.js
│   │   │   ├── read_concern.js.map
│   │   │   ├── read_preference.js
│   │   │   ├── read_preference.js.map
│   │   │   ├── sdam
│   │   │   │   ├── common.js
│   │   │   │   ├── common.js.map
│   │   │   │   ├── events.js
│   │   │   │   ├── events.js.map
│   │   │   │   ├── monitor.js
│   │   │   │   ├── monitor.js.map
│   │   │   │   ├── server_description.js
│   │   │   │   ├── server_description.js.map
│   │   │   │   ├── server.js
│   │   │   │   ├── server.js.map
│   │   │   │   ├── server_selection_events.js
│   │   │   │   ├── server_selection_events.js.map
│   │   │   │   ├── server_selection.js
│   │   │   │   ├── server_selection.js.map
│   │   │   │   ├── srv_polling.js
│   │   │   │   ├── srv_polling.js.map
│   │   │   │   ├── topology_description.js
│   │   │   │   ├── topology_description.js.map
│   │   │   │   ├── topology.js
│   │   │   │   └── topology.js.map
│   │   │   ├── sessions.js
│   │   │   ├── sessions.js.map
│   │   │   ├── sort.js
│   │   │   ├── sort.js.map
│   │   │   ├── timeout.js
│   │   │   ├── timeout.js.map
│   │   │   ├── transactions.js
│   │   │   ├── transactions.js.map
│   │   │   ├── utils.js
│   │   │   ├── utils.js.map
│   │   │   ├── write_concern.js
│   │   │   └── write_concern.js.map
│   │   ├── LICENSE.md
│   │   ├── mongodb.d.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── src
│   │   │   ├── admin.ts
│   │   │   ├── bson.ts
│   │   │   ├── bulk
│   │   │   │   ├── common.ts
│   │   │   │   ├── ordered.ts
│   │   │   │   └── unordered.ts
│   │   │   ├── change_stream.ts
│   │   │   ├── client-side-encryption
│   │   │   │   ├── auto_encrypter.ts
│   │   │   │   ├── client_encryption.ts
│   │   │   │   ├── crypto_callbacks.ts
│   │   │   │   ├── errors.ts
│   │   │   │   ├── mongocryptd_manager.ts
│   │   │   │   ├── providers
│   │   │   │   │   ├── aws.ts
│   │   │   │   │   ├── azure.ts
│   │   │   │   │   ├── gcp.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── state_machine.ts
│   │   │   ├── cmap
│   │   │   │   ├── auth
│   │   │   │   │   ├── auth_provider.ts
│   │   │   │   │   ├── aws_temporary_credentials.ts
│   │   │   │   │   ├── gssapi.ts
│   │   │   │   │   ├── mongo_credentials.ts
│   │   │   │   │   ├── mongocr.ts
│   │   │   │   │   ├── mongodb_aws.ts
│   │   │   │   │   ├── mongodb_oidc
│   │   │   │   │   │   ├── automated_callback_workflow.ts
│   │   │   │   │   │   ├── azure_machine_workflow.ts
│   │   │   │   │   │   ├── callback_workflow.ts
│   │   │   │   │   │   ├── command_builders.ts
│   │   │   │   │   │   ├── gcp_machine_workflow.ts
│   │   │   │   │   │   ├── human_callback_workflow.ts
│   │   │   │   │   │   ├── machine_workflow.ts
│   │   │   │   │   │   ├── token_cache.ts
│   │   │   │   │   │   └── token_machine_workflow.ts
│   │   │   │   │   ├── mongodb_oidc.ts
│   │   │   │   │   ├── plain.ts
│   │   │   │   │   ├── providers.ts
│   │   │   │   │   ├── scram.ts
│   │   │   │   │   └── x509.ts
│   │   │   │   ├── command_monitoring_events.ts
│   │   │   │   ├── commands.ts
│   │   │   │   ├── connection_pool_events.ts
│   │   │   │   ├── connection_pool.ts
│   │   │   │   ├── connection.ts
│   │   │   │   ├── connect.ts
│   │   │   │   ├── errors.ts
│   │   │   │   ├── handshake
│   │   │   │   │   └── client_metadata.ts
│   │   │   │   ├── metrics.ts
│   │   │   │   ├── stream_description.ts
│   │   │   │   └── wire_protocol
│   │   │   │       ├── compression.ts
│   │   │   │       ├── constants.ts
│   │   │   │       ├── on_data.ts
│   │   │   │       ├── on_demand
│   │   │   │       │   └── document.ts
│   │   │   │       ├── responses.ts
│   │   │   │       └── shared.ts
│   │   │   ├── collection.ts
│   │   │   ├── connection_string.ts
│   │   │   ├── constants.ts
│   │   │   ├── cursor
│   │   │   │   ├── abstract_cursor.ts
│   │   │   │   ├── aggregation_cursor.ts
│   │   │   │   ├── change_stream_cursor.ts
│   │   │   │   ├── find_cursor.ts
│   │   │   │   ├── list_collections_cursor.ts
│   │   │   │   ├── list_indexes_cursor.ts
│   │   │   │   ├── list_search_indexes_cursor.ts
│   │   │   │   └── run_command_cursor.ts
│   │   │   ├── db.ts
│   │   │   ├── deps.ts
│   │   │   ├── encrypter.ts
│   │   │   ├── error.ts
│   │   │   ├── explain.ts
│   │   │   ├── gridfs
│   │   │   │   ├── download.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── upload.ts
│   │   │   ├── index.ts
│   │   │   ├── mongo_client_auth_providers.ts
│   │   │   ├── mongo_client.ts
│   │   │   ├── mongo_logger.ts
│   │   │   ├── mongo_types.ts
│   │   │   ├── operations
│   │   │   │   ├── aggregate.ts
│   │   │   │   ├── bulk_write.ts
│   │   │   │   ├── collections.ts
│   │   │   │   ├── command.ts
│   │   │   │   ├── count_documents.ts
│   │   │   │   ├── count.ts
│   │   │   │   ├── create_collection.ts
│   │   │   │   ├── delete.ts
│   │   │   │   ├── distinct.ts
│   │   │   │   ├── drop.ts
│   │   │   │   ├── estimated_document_count.ts
│   │   │   │   ├── execute_operation.ts
│   │   │   │   ├── find_and_modify.ts
│   │   │   │   ├── find.ts
│   │   │   │   ├── get_more.ts
│   │   │   │   ├── indexes.ts
│   │   │   │   ├── insert.ts
│   │   │   │   ├── is_capped.ts
│   │   │   │   ├── kill_cursors.ts
│   │   │   │   ├── list_collections.ts
│   │   │   │   ├── list_databases.ts
│   │   │   │   ├── operation.ts
│   │   │   │   ├── options_operation.ts
│   │   │   │   ├── profiling_level.ts
│   │   │   │   ├── remove_user.ts
│   │   │   │   ├── rename.ts
│   │   │   │   ├── run_command.ts
│   │   │   │   ├── search_indexes
│   │   │   │   │   ├── create.ts
│   │   │   │   │   ├── drop.ts
│   │   │   │   │   └── update.ts
│   │   │   │   ├── set_profiling_level.ts
│   │   │   │   ├── stats.ts
│   │   │   │   ├── update.ts
│   │   │   │   └── validate_collection.ts
│   │   │   ├── read_concern.ts
│   │   │   ├── read_preference.ts
│   │   │   ├── sdam
│   │   │   │   ├── common.ts
│   │   │   │   ├── events.ts
│   │   │   │   ├── monitor.ts
│   │   │   │   ├── server_description.ts
│   │   │   │   ├── server_selection_events.ts
│   │   │   │   ├── server_selection.ts
│   │   │   │   ├── server.ts
│   │   │   │   ├── srv_polling.ts
│   │   │   │   ├── topology_description.ts
│   │   │   │   └── topology.ts
│   │   │   ├── sessions.ts
│   │   │   ├── sort.ts
│   │   │   ├── timeout.ts
│   │   │   ├── transactions.ts
│   │   │   ├── utils.ts
│   │   │   └── write_concern.ts
│   │   └── tsconfig.json
│   ├── mongodb-connection-string-url
│   │   ├── lib
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── redact.d.ts
│   │   │   ├── redact.js
│   │   │   └── redact.js.map
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @mongodb-js
│   │   └── saslprep
│   │       ├── dist
│   │       │   ├── browser.d.ts
│   │       │   ├── browser.d.ts.map
│   │       │   ├── browser.js
│   │       │   ├── browser.js.map
│   │       │   ├── code-points-data-browser.d.ts
│   │       │   ├── code-points-data-browser.d.ts.map
│   │       │   ├── code-points-data-browser.js
│   │       │   ├── code-points-data-browser.js.map
│   │       │   ├── code-points-data.d.ts
│   │       │   ├── code-points-data.d.ts.map
│   │       │   ├── code-points-data.js
│   │       │   ├── code-points-data.js.map
│   │       │   ├── code-points-src.d.ts
│   │       │   ├── code-points-src.d.ts.map
│   │       │   ├── code-points-src.js
│   │       │   ├── code-points-src.js.map
│   │       │   ├── generate-code-points.d.ts
│   │       │   ├── generate-code-points.d.ts.map
│   │       │   ├── generate-code-points.js
│   │       │   ├── generate-code-points.js.map
│   │       │   ├── index.d.ts
│   │       │   ├── index.d.ts.map
│   │       │   ├── index.js
│   │       │   ├── index.js.map
│   │       │   ├── memory-code-points.d.ts
│   │       │   ├── memory-code-points.d.ts.map
│   │       │   ├── memory-code-points.js
│   │       │   ├── memory-code-points.js.map
│   │       │   ├── node.d.ts
│   │       │   ├── node.d.ts.map
│   │       │   ├── node.js
│   │       │   ├── node.js.map
│   │       │   ├── util.d.ts
│   │       │   ├── util.d.ts.map
│   │       │   ├── util.js
│   │       │   └── util.js.map
│   │       ├── LICENSE
│   │       ├── package.json
│   │       └── readme.md
│   ├── mongoose
│   │   ├── browser.js
│   │   ├── dist
│   │   │   └── browser.umd.js
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── aggregate.js
│   │   │   ├── browserDocument.js
│   │   │   ├── browser.js
│   │   │   ├── cast
│   │   │   │   ├── bigint.js
│   │   │   │   ├── boolean.js
│   │   │   │   ├── date.js
│   │   │   │   ├── decimal128.js
│   │   │   │   ├── number.js
│   │   │   │   ├── objectid.js
│   │   │   │   └── string.js
│   │   │   ├── cast.js
│   │   │   ├── collection.js
│   │   │   ├── connection.js
│   │   │   ├── connectionState.js
│   │   │   ├── constants.js
│   │   │   ├── cursor
│   │   │   │   ├── aggregationCursor.js
│   │   │   │   ├── changeStream.js
│   │   │   │   └── queryCursor.js
│   │   │   ├── document.js
│   │   │   ├── documentProvider.js
│   │   │   ├── driver.js
│   │   │   ├── drivers
│   │   │   │   ├── browser
│   │   │   │   │   ├── binary.js
│   │   │   │   │   ├── decimal128.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── objectid.js
│   │   │   │   ├── node-mongodb-native
│   │   │   │   │   ├── collection.js
│   │   │   │   │   ├── connection.js
│   │   │   │   │   └── index.js
│   │   │   │   └── SPEC.md
│   │   │   ├── error
│   │   │   │   ├── browserMissingSchema.js
│   │   │   │   ├── bulkWriteError.js
│   │   │   │   ├── cast.js
│   │   │   │   ├── createCollectionsError.js
│   │   │   │   ├── divergentArray.js
│   │   │   │   ├── eachAsyncMultiError.js
│   │   │   │   ├── index.js
│   │   │   │   ├── invalidSchemaOption.js
│   │   │   │   ├── messages.js
│   │   │   │   ├── missingSchema.js
│   │   │   │   ├── mongooseError.js
│   │   │   │   ├── notFound.js
│   │   │   │   ├── objectExpected.js
│   │   │   │   ├── objectParameter.js
│   │   │   │   ├── overwriteModel.js
│   │   │   │   ├── parallelSave.js
│   │   │   │   ├── parallelValidate.js
│   │   │   │   ├── serverSelection.js
│   │   │   │   ├── setOptionError.js
│   │   │   │   ├── strict.js
│   │   │   │   ├── strictPopulate.js
│   │   │   │   ├── syncIndexes.js
│   │   │   │   ├── validation.js
│   │   │   │   ├── validator.js
│   │   │   │   └── version.js
│   │   │   ├── helpers
│   │   │   │   ├── aggregate
│   │   │   │   │   ├── prepareDiscriminatorPipeline.js
│   │   │   │   │   └── stringifyFunctionOperators.js
│   │   │   │   ├── arrayDepth.js
│   │   │   │   ├── clone.js
│   │   │   │   ├── common.js
│   │   │   │   ├── cursor
│   │   │   │   │   └── eachAsync.js
│   │   │   │   ├── discriminator
│   │   │   │   │   ├── applyEmbeddedDiscriminators.js
│   │   │   │   │   ├── areDiscriminatorValuesEqual.js
│   │   │   │   │   ├── checkEmbeddedDiscriminatorKeyProjection.js
│   │   │   │   │   ├── getConstructor.js
│   │   │   │   │   ├── getDiscriminatorByValue.js
│   │   │   │   │   ├── getSchemaDiscriminatorByValue.js
│   │   │   │   │   └── mergeDiscriminatorSchema.js
│   │   │   │   ├── document
│   │   │   │   │   ├── applyDefaults.js
│   │   │   │   │   ├── cleanModifiedSubpaths.js
│   │   │   │   │   ├── compile.js
│   │   │   │   │   ├── getDeepestSubdocumentForPath.js
│   │   │   │   │   ├── getEmbeddedDiscriminatorPath.js
│   │   │   │   │   └── handleSpreadDoc.js
│   │   │   │   ├── each.js
│   │   │   │   ├── error
│   │   │   │   │   └── combinePathErrors.js
│   │   │   │   ├── firstKey.js
│   │   │   │   ├── getConstructorName.js
│   │   │   │   ├── getDefaultBulkwriteResult.js
│   │   │   │   ├── getFunctionName.js
│   │   │   │   ├── get.js
│   │   │   │   ├── immediate.js
│   │   │   │   ├── indexes
│   │   │   │   │   ├── applySchemaCollation.js
│   │   │   │   │   ├── decorateDiscriminatorIndexOptions.js
│   │   │   │   │   ├── getRelatedIndexes.js
│   │   │   │   │   ├── isDefaultIdIndex.js
│   │   │   │   │   ├── isIndexEqual.js
│   │   │   │   │   └── isTextIndex.js
│   │   │   │   ├── isAsyncFunction.js
│   │   │   │   ├── isBsonType.js
│   │   │   │   ├── isMongooseObject.js
│   │   │   │   ├── isObject.js
│   │   │   │   ├── isPOJO.js
│   │   │   │   ├── isPromise.js
│   │   │   │   ├── isSimpleValidator.js
│   │   │   │   ├── minimize.js
│   │   │   │   ├── model
│   │   │   │   │   ├── applyDefaultsToPOJO.js
│   │   │   │   │   ├── applyHooks.js
│   │   │   │   │   ├── applyMethods.js
│   │   │   │   │   ├── applyStaticHooks.js
│   │   │   │   │   ├── applyStatics.js
│   │   │   │   │   ├── castBulkWrite.js
│   │   │   │   │   ├── discriminator.js
│   │   │   │   │   └── pushNestedArrayPaths.js
│   │   │   │   ├── omitUndefined.js
│   │   │   │   ├── once.js
│   │   │   │   ├── parallelLimit.js
│   │   │   │   ├── path
│   │   │   │   │   ├── parentPaths.js
│   │   │   │   │   └── setDottedPath.js
│   │   │   │   ├── pluralize.js
│   │   │   │   ├── populate
│   │   │   │   │   ├── assignRawDocsToIdStructure.js
│   │   │   │   │   ├── assignVals.js
│   │   │   │   │   ├── createPopulateQueryFilter.js
│   │   │   │   │   ├── getModelsMapForPopulate.js
│   │   │   │   │   ├── getSchemaTypes.js
│   │   │   │   │   ├── getVirtual.js
│   │   │   │   │   ├── leanPopulateMap.js
│   │   │   │   │   ├── lookupLocalFields.js
│   │   │   │   │   ├── markArraySubdocsPopulated.js
│   │   │   │   │   ├── modelNamesFromRefPath.js
│   │   │   │   │   ├── removeDeselectedForeignField.js
│   │   │   │   │   ├── setPopulatedVirtualValue.js
│   │   │   │   │   ├── skipPopulateValue.js
│   │   │   │   │   └── validateRef.js
│   │   │   │   ├── printJestWarning.js
│   │   │   │   ├── processConnectionOptions.js
│   │   │   │   ├── projection
│   │   │   │   │   ├── applyProjection.js
│   │   │   │   │   ├── hasIncludedChildren.js
│   │   │   │   │   ├── isDefiningProjection.js
│   │   │   │   │   ├── isExclusive.js
│   │   │   │   │   ├── isInclusive.js
│   │   │   │   │   ├── isNestedProjection.js
│   │   │   │   │   ├── isPathExcluded.js
│   │   │   │   │   ├── isPathSelectedInclusive.js
│   │   │   │   │   ├── isSubpath.js
│   │   │   │   │   └── parseProjection.js
│   │   │   │   ├── promiseOrCallback.js
│   │   │   │   ├── query
│   │   │   │   │   ├── applyGlobalOption.js
│   │   │   │   │   ├── cast$expr.js
│   │   │   │   │   ├── castFilterPath.js
│   │   │   │   │   ├── castUpdate.js
│   │   │   │   │   ├── getEmbeddedDiscriminatorPath.js
│   │   │   │   │   ├── handleImmutable.js
│   │   │   │   │   ├── handleReadPreferenceAliases.js
│   │   │   │   │   ├── hasDollarKeys.js
│   │   │   │   │   ├── isOperator.js
│   │   │   │   │   ├── sanitizeFilter.js
│   │   │   │   │   ├── sanitizeProjection.js
│   │   │   │   │   ├── selectPopulatedFields.js
│   │   │   │   │   ├── trusted.js
│   │   │   │   │   └── validOps.js
│   │   │   │   ├── schema
│   │   │   │   │   ├── addAutoId.js
│   │   │   │   │   ├── applyBuiltinPlugins.js
│   │   │   │   │   ├── applyPlugins.js
│   │   │   │   │   ├── applyReadConcern.js
│   │   │   │   │   ├── applyWriteConcern.js
│   │   │   │   │   ├── cleanPositionalOperators.js
│   │   │   │   │   ├── getIndexes.js
│   │   │   │   │   ├── getKeysInSchemaOrder.js
│   │   │   │   │   ├── getPath.js
│   │   │   │   │   ├── getSubdocumentStrictValue.js
│   │   │   │   │   ├── handleIdOption.js
│   │   │   │   │   ├── handleTimestampOption.js
│   │   │   │   │   ├── idGetter.js
│   │   │   │   │   └── merge.js
│   │   │   │   ├── schematype
│   │   │   │   │   └── handleImmutable.js
│   │   │   │   ├── setDefaultsOnInsert.js
│   │   │   │   ├── specialProperties.js
│   │   │   │   ├── symbols.js
│   │   │   │   ├── timers.js
│   │   │   │   ├── timestamps
│   │   │   │   │   ├── setDocumentTimestamps.js
│   │   │   │   │   └── setupTimestamps.js
│   │   │   │   ├── topology
│   │   │   │   │   ├── allServersUnknown.js
│   │   │   │   │   ├── isAtlas.js
│   │   │   │   │   └── isSSLError.js
│   │   │   │   ├── update
│   │   │   │   │   ├── applyTimestampsToChildren.js
│   │   │   │   │   ├── applyTimestampsToUpdate.js
│   │   │   │   │   ├── castArrayFilters.js
│   │   │   │   │   ├── decorateUpdateWithVersionKey.js
│   │   │   │   │   ├── modifiedPaths.js
│   │   │   │   │   ├── moveImmutableProperties.js
│   │   │   │   │   ├── removeUnusedArrayFilters.js
│   │   │   │   │   └── updatedPathsByArrayFilter.js
│   │   │   │   └── updateValidators.js
│   │   │   ├── index.js
│   │   │   ├── internal.js
│   │   │   ├── model.js
│   │   │   ├── modifiedPathsSnapshot.js
│   │   │   ├── mongoose.js
│   │   │   ├── options
│   │   │   │   ├── populateOptions.js
│   │   │   │   ├── propertyOptions.js
│   │   │   │   ├── saveOptions.js
│   │   │   │   ├── schemaArrayOptions.js
│   │   │   │   ├── schemaBufferOptions.js
│   │   │   │   ├── schemaDateOptions.js
│   │   │   │   ├── schemaDocumentArrayOptions.js
│   │   │   │   ├── schemaMapOptions.js
│   │   │   │   ├── schemaNumberOptions.js
│   │   │   │   ├── schemaObjectIdOptions.js
│   │   │   │   ├── schemaStringOptions.js
│   │   │   │   ├── schemaSubdocumentOptions.js
│   │   │   │   ├── schemaTypeOptions.js
│   │   │   │   └── virtualOptions.js
│   │   │   ├── options.js
│   │   │   ├── plugins
│   │   │   │   ├── index.js
│   │   │   │   ├── saveSubdocs.js
│   │   │   │   ├── sharding.js
│   │   │   │   ├── trackTransaction.js
│   │   │   │   └── validateBeforeSave.js
│   │   │   ├── queryHelpers.js
│   │   │   ├── query.js
│   │   │   ├── schema
│   │   │   │   ├── array.js
│   │   │   │   ├── bigint.js
│   │   │   │   ├── boolean.js
│   │   │   │   ├── buffer.js
│   │   │   │   ├── date.js
│   │   │   │   ├── decimal128.js
│   │   │   │   ├── documentArrayElement.js
│   │   │   │   ├── documentArray.js
│   │   │   │   ├── index.js
│   │   │   │   ├── map.js
│   │   │   │   ├── mixed.js
│   │   │   │   ├── number.js
│   │   │   │   ├── objectId.js
│   │   │   │   ├── operators
│   │   │   │   │   ├── bitwise.js
│   │   │   │   │   ├── exists.js
│   │   │   │   │   ├── geospatial.js
│   │   │   │   │   ├── helpers.js
│   │   │   │   │   ├── text.js
│   │   │   │   │   └── type.js
│   │   │   │   ├── string.js
│   │   │   │   ├── subdocument.js
│   │   │   │   ├── symbols.js
│   │   │   │   └── uuid.js
│   │   │   ├── schema.js
│   │   │   ├── schemaType.js
│   │   │   ├── stateMachine.js
│   │   │   ├── types
│   │   │   │   ├── array
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── isMongooseArray.js
│   │   │   │   │   └── methods
│   │   │   │   │       └── index.js
│   │   │   │   ├── arraySubdocument.js
│   │   │   │   ├── buffer.js
│   │   │   │   ├── decimal128.js
│   │   │   │   ├── documentArray
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── isMongooseDocumentArray.js
│   │   │   │   │   └── methods
│   │   │   │   │       └── index.js
│   │   │   │   ├── index.js
│   │   │   │   ├── map.js
│   │   │   │   ├── objectid.js
│   │   │   │   ├── subdocument.js
│   │   │   │   └── uuid.js
│   │   │   ├── utils.js
│   │   │   ├── validOptions.js
│   │   │   └── virtualType.js
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   └── types
│   │       ├── aggregate.d.ts
│   │       ├── augmentations.d.ts
│   │       ├── callback.d.ts
│   │       ├── collection.d.ts
│   │       ├── connection.d.ts
│   │       ├── cursor.d.ts
│   │       ├── document.d.ts
│   │       ├── error.d.ts
│   │       ├── expressions.d.ts
│   │       ├── helpers.d.ts
│   │       ├── index.d.ts
│   │       ├── indexes.d.ts
│   │       ├── inferrawdoctype.d.ts
│   │       ├── inferschematype.d.ts
│   │       ├── middlewares.d.ts
│   │       ├── models.d.ts
│   │       ├── mongooseoptions.d.ts
│   │       ├── pipelinestage.d.ts
│   │       ├── populate.d.ts
│   │       ├── query.d.ts
│   │       ├── schemaoptions.d.ts
│   │       ├── schematypes.d.ts
│   │       ├── session.d.ts
│   │       ├── types.d.ts
│   │       ├── utility.d.ts
│   │       ├── validation.d.ts
│   │       └── virtuals.d.ts
│   ├── mpath
│   │   ├── History.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── index.js
│   │   │   └── stringToParts.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   └── test
│   │       ├── index.js
│   │       └── stringToParts.js
│   ├── mquery
│   │   ├── History.md
│   │   ├── lib
│   │   │   ├── collection
│   │   │   │   ├── collection.js
│   │   │   │   ├── index.js
│   │   │   │   └── node.js
│   │   │   ├── env.js
│   │   │   ├── mquery.js
│   │   │   ├── permissions.js
│   │   │   └── utils.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── SECURITY.md
│   ├── ms
│   │   ├── index.js
│   │   ├── license.md
│   │   ├── package.json
│   │   └── readme.md
│   ├── nconf
│   │   ├── CHANGELOG.md
│   │   ├── docs
│   │   │   ├── docco.css
│   │   │   ├── nconf
│   │   │   │   ├── common.html
│   │   │   │   ├── formats.html
│   │   │   │   ├── provider.html
│   │   │   │   ├── stores
│   │   │   │   │   ├── file.html
│   │   │   │   │   ├── memory.html
│   │   │   │   │   └── system.html
│   │   │   │   └── stores.html
│   │   │   └── nconf.html
│   │   ├── lib
│   │   │   ├── nconf
│   │   │   │   ├── common.js
│   │   │   │   ├── formats.js
│   │   │   │   ├── provider.js
│   │   │   │   └── stores
│   │   │   │       ├── argv.js
│   │   │   │       ├── env.js
│   │   │   │       ├── file.js
│   │   │   │       ├── literal.js
│   │   │   │       └── memory.js
│   │   │   └── nconf.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── test
│   │   │   ├── common-test.js
│   │   │   ├── complete-test.js
│   │   │   ├── fixtures
│   │   │   │   ├── bom.json
│   │   │   │   ├── complete.json
│   │   │   │   ├── data.js
│   │   │   │   ├── hierarchy
│   │   │   │   │   ├── global.json
│   │   │   │   │   ├── hierarchical.json
│   │   │   │   │   └── user.json
│   │   │   │   ├── malformed.json
│   │   │   │   ├── merge
│   │   │   │   │   ├── file1.json
│   │   │   │   │   └── file2.json
│   │   │   │   ├── no-bom.json
│   │   │   │   └── scripts
│   │   │   │       ├── nconf-argv.js
│   │   │   │       ├── nconf-change-argv.js
│   │   │   │       ├── nconf-env.js
│   │   │   │       ├── nconf-hierarchical-file-argv.js
│   │   │   │       ├── nconf-hierarchical-load-merge.js
│   │   │   │       ├── nconf-hierarchical-load-save.js
│   │   │   │       ├── nconf-nested-env.js
│   │   │   │       ├── provider-argv.js
│   │   │   │       └── provider-env.js
│   │   │   ├── helpers.js
│   │   │   ├── hierarchy-test.js
│   │   │   ├── mocks
│   │   │   │   └── mock-store.js
│   │   │   ├── nconf-test.js
│   │   │   ├── provider-save-test.js
│   │   │   ├── provider-test.js
│   │   │   └── stores
│   │   │       ├── argv-test.js
│   │   │       ├── env-test.js
│   │   │       ├── file-store-test.js
│   │   │       ├── literal-test.js
│   │   │       └── memory-store-test.js
│   │   └── usage.js
│   ├── object-assign
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── optimist
│   │   ├── example
│   │   │   ├── boolean_double.js
│   │   │   ├── boolean_single.js
│   │   │   ├── bool.js
│   │   │   ├── default_hash.js
│   │   │   ├── default_singles.js
│   │   │   ├── divide.js
│   │   │   ├── line_count.js
│   │   │   ├── line_count_options.js
│   │   │   ├── line_count_wrap.js
│   │   │   ├── nonopt.js
│   │   │   ├── reflect.js
│   │   │   ├── short.js
│   │   │   ├── string.js
│   │   │   ├── usage-options.js
│   │   │   └── xup.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   └── test
│   │       ├── _
│   │       │   ├── argv.js
│   │       │   └── bin.js
│   │       ├── dash.js
│   │       ├── _.js
│   │       ├── parse.js
│   │       ├── parse_modified.js
│   │       ├── short.js
│   │       ├── usage.js
│   │       └── whitespace.js
│   ├── prop-types
│   │   ├── checkPropTypes.js
│   │   ├── factory.js
│   │   ├── factoryWithThrowingShims.js
│   │   ├── factoryWithTypeCheckers.js
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── has.js
│   │   │   └── ReactPropTypesSecret.js
│   │   ├── LICENSE
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── prop-types.js
│   │   ├── prop-types.min.js
│   │   └── README.md
│   ├── punycode
│   │   ├── LICENSE-MIT.txt
│   │   ├── package.json
│   │   ├── punycode.es6.js
│   │   ├── punycode.js
│   │   └── README.md
│   ├── react-hot-toast
│   │   ├── dist
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   └── index.mjs.map
│   │   ├── headless
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   └── index.mjs.map
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── src
│   │       ├── components
│   │       │   ├── checkmark.tsx
│   │       │   ├── error.tsx
│   │       │   ├── loader.tsx
│   │       │   ├── toast-bar.tsx
│   │       │   ├── toaster.tsx
│   │       │   └── toast-icon.tsx
│   │       ├── core
│   │       │   ├── store.ts
│   │       │   ├── toast.ts
│   │       │   ├── types.ts
│   │       │   ├── use-toaster.ts
│   │       │   └── utils.ts
│   │       ├── headless
│   │       │   └── index.ts
│   │       └── index.ts
│   ├── react-is
│   │   ├── build-info.json
│   │   ├── cjs
│   │   │   ├── react-is.development.js
│   │   │   └── react-is.production.min.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── umd
│   │       ├── react-is.development.js
│   │       └── react-is.production.min.js
│   ├── react-svg
│   │   ├── dist
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── owner-window.d.ts
│   │   │   ├── react-svg.cjs.development.js
│   │   │   ├── react-svg.cjs.development.js.map
│   │   │   ├── react-svg.cjs.production.js
│   │   │   ├── react-svg.cjs.production.js.map
│   │   │   ├── ReactSVG.d.ts
│   │   │   ├── react-svg.esm.js
│   │   │   ├── react-svg.esm.js.map
│   │   │   ├── react-svg.umd.development.js
│   │   │   ├── react-svg.umd.development.js.map
│   │   │   ├── react-svg.umd.production.js
│   │   │   ├── react-svg.umd.production.js.map
│   │   │   ├── shallow-differs.d.ts
│   │   │   └── types.d.ts
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── redirect
│   │   ├── bin
│   │   │   └── server
│   │   ├── config.json
│   │   ├── lib
│   │   │   └── redirect.js
│   │   ├── package.json
│   │   └── README.md
│   ├── regenerator-runtime
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── path.js
│   │   ├── README.md
│   │   └── runtime.js
│   ├── sift
│   │   ├── es
│   │   │   ├── index.js
│   │   │   └── index.js.map
│   │   ├── es5m
│   │   │   ├── index.js
│   │   │   └── index.js.map
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── core.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── operations.d.ts
│   │   │   └── utils.d.ts
│   │   ├── MIT-LICENSE.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── sift.csp.min.js
│   │   ├── sift.csp.min.js.map
│   │   ├── sift.min.js
│   │   ├── sift.min.js.map
│   │   └── src
│   │       ├── core.ts
│   │       ├── index.ts
│   │       ├── operations.ts
│   │       └── utils.ts
│   ├── slick-carousel
│   │   ├── bower.json
│   │   ├── component.json
│   │   ├── CONTRIBUTING.markdown
│   │   ├── index.html
│   │   ├── ISSUE_TEMPLATE.md
│   │   ├── LICENSE
│   │   ├── Makefile
│   │   ├── package.json
│   │   ├── README.markdown
│   │   ├── slick
│   │   │   ├── ajax-loader.gif
│   │   │   ├── config.rb
│   │   │   ├── fonts
│   │   │   │   ├── slick.eot
│   │   │   │   ├── slick.svg
│   │   │   │   ├── slick.ttf
│   │   │   │   └── slick.woff
│   │   │   ├── slick.css
│   │   │   ├── slick.js
│   │   │   ├── slick.less
│   │   │   ├── slick.min.js
│   │   │   ├── slick.scss
│   │   │   ├── slick-theme.css
│   │   │   ├── slick-theme.less
│   │   │   └── slick-theme.scss
│   │   └── slick.jquery.json
│   ├── sparse-bitfield
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── test.js
│   ├── @tanem
│   │   └── svg-injector
│   │       ├── dist
│   │       │   ├── cache.d.ts
│   │       │   ├── clone-svg.d.ts
│   │       │   ├── index.d.ts
│   │       │   ├── index.js
│   │       │   ├── inject-element.d.ts
│   │       │   ├── is-local.d.ts
│   │       │   ├── load-svg-cached.d.ts
│   │       │   ├── load-svg-uncached.d.ts
│   │       │   ├── make-ajax-request.d.ts
│   │       │   ├── request-queue.d.ts
│   │       │   ├── svg-injector.cjs.development.js
│   │       │   ├── svg-injector.cjs.development.js.map
│   │       │   ├── svg-injector.cjs.production.js
│   │       │   ├── svg-injector.cjs.production.js.map
│   │       │   ├── svg-injector.d.ts
│   │       │   ├── svg-injector.esm.js
│   │       │   ├── svg-injector.esm.js.map
│   │       │   ├── svg-injector.umd.development.js
│   │       │   ├── svg-injector.umd.development.js.map
│   │       │   ├── svg-injector.umd.production.js
│   │       │   ├── svg-injector.umd.production.js.map
│   │       │   ├── types.d.ts
│   │       │   └── unique-id.d.ts
│   │       ├── LICENSE
│   │       ├── package.json
│   │       └── README.md
│   ├── tr46
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── mappingTable.json
│   │   │   ├── regexes.js
│   │   │   └── statusMapping.js
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── tslib
│   │   ├── CopyrightNotice.txt
│   │   ├── LICENSE.txt
│   │   ├── modules
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── tslib.d.ts
│   │   ├── tslib.es6.html
│   │   ├── tslib.es6.js
│   │   ├── tslib.es6.mjs
│   │   ├── tslib.html
│   │   └── tslib.js
│   ├── @types
│   │   ├── prop-types
│   │   │   ├── index.d.ts
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   └── README.md
│   │   ├── webidl-conversions
│   │   │   ├── index.d.ts
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   └── README.md
│   │   └── whatwg-url
│   │       ├── index.d.ts
│   │       ├── lib
│   │       │   ├── URL.d.ts
│   │       │   ├── URL-impl.d.ts
│   │       │   ├── URLSearchParams.d.ts
│   │       │   └── URLSearchParams-impl.d.ts
│   │       ├── LICENSE
│   │       ├── package.json
│   │       ├── README.md
│   │       └── webidl2js-wrapper.d.ts
│   ├── webidl-conversions
│   │   ├── lib
│   │   │   └── index.js
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── whatwg-url
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── encoding.js
│   │   │   ├── Function.js
│   │   │   ├── infra.js
│   │   │   ├── percent-encoding.js
│   │   │   ├── urlencoded.js
│   │   │   ├── URL-impl.js
│   │   │   ├── URL.js
│   │   │   ├── URLSearchParams-impl.js
│   │   │   ├── URLSearchParams.js
│   │   │   ├── url-state-machine.js
│   │   │   ├── utils.js
│   │   │   └── VoidFunction.js
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   └── webidl2js-wrapper.js
│   ├── wordwrap
│   │   ├── example
│   │   │   ├── center.js
│   │   │   └── meat.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.markdown
│   │   └── test
│   │       ├── break.js
│   │       ├── idleness.txt
│   │       └── wrap.js
│   └── yarn
│       ├── bin
│       │   ├── yarn
│       │   ├── yarn.cmd
│       │   ├── yarn.js
│       │   ├── yarnpkg
│       │   └── yarnpkg.cmd
│       ├── lib
│       │   ├── cli.js
│       │   └── v8-compile-cache.js
│       ├── LICENSE
│       ├── package.json
│       ├── preinstall.js
│       └── README.md
├── package.json
├── package-lock.json
├── README.md
└── yarn.lock
```

## Screenshots

### Home Page

![alt text](<WhatsApp Image 2024-08-31 at 1.17.14 AM (1).jpeg>)
### Sign-In Page

![alt text](<WhatsApp Image 2024-08-31 at 1.17.12 AM2.jpeg>)
### Movie Selection

![alt text](<WhatsApp Image 2024-08-31 at 1.17.14 AM.jpeg>)

### Theatre Selection
![alt text](<WhatsApp Image 2024-08-31 at 1.17.13 AM2.jpeg>)
### Seat Booking

![alt text](<WhatsApp Image 2024-08-31 at 1.17.12 AM.jpeg>)
### Booking Confirmation

![alt text](<WhatsApp Image 2024-08-31 at 1.17.12 AM (1).jpeg>)
## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Python with Flask

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TensorTrove/ShowTime.git
   ```
2. **Install dependencies:**
   ```bash
   cd showtime/frontend
   npm install -g yarn
   yarn install
   ```
3. **Set up environment variables:**
   Create a `.env` file and add the necessary environment variables, such as:
   ```
   MOVIE_API='Your TheMovieDB API key'
   MONGO='tankit999'
   HALL_ID=66bf46afe053d1e3839094eb
   ```
4. **Start the development server:**
   ```bash
   yarn start
   ```
5. **Run the Flask server:**
   ```bash
   cd backend
   python -m venv env
   .\env\Scripts\activate
   pip install -r req.txt
   python .\server.py
   ```

### Usage

1. Sign up or sign in.
2. Browse available movies, select your desired showtime, and book your seats.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any bug fixes or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- [@ankitdey-marsh](https://www.github.com/ankitdey-marsh)
- [@Terminal127](https://www.github.com/Terminal127)
- [@debjit-mandal](https://www.github.com/debjit-mandal)
- [@nilotpal-basu](https://www.github.com/nilotpal-basu)