<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <title></title>
  <style type="text/css">
    body {
      background: #C8C7CC;
    }

    #root {
      width: 100%;
      overflow: hidden;
    }

    .spinner {
      display: inline-block;
      font-size: 8px;
      height: 8px;
      position: relative;
      text-align: center;
      vertical-align: middle;
    }

    .spinner_dot {
      -webkit-animation: pulse 1s infinite ease-in-out;
      -o-animation: pulse 1s infinite ease-in-out;
      animation: pulse 1s infinite ease-in-out;
      height: 1em;
      width: 1em;
      border-radius: 50%;
      display: inline-block;
      vertical-align: top;
    }

    .spinner_dot--second {
      -webkit-animation-delay: 160ms;
      animation-delay: 160ms;
      margin-left: 1em;
    }

    .spinner_dot--third {
      -webkit-animation-delay: 320ms;
      animation-delay: 320ms;
      margin-left: 1em;
    }

    .spinner--default > .spinner_dot {
      background-color: #999;
    }

    .spinner--primary > .spinner_dot {
      background-color: #1385e5;
    }

    .spinner--inverted > .spinner_dot {
      background-color: white;
    }

    .spinner--default > .spinner_dot {
      background-color: #999;
    }

    .spinner--primary > .spinner_dot {
      background-color: #1385e5;
    }

    .spinner--inverted > .spinner_dot {
      background-color: white;
    }

    .spinner--sm {
      font-size: 4px;
      height: 4px;
    }

    .spinner--lg {
      font-size: 16px;
      height: 16px;
    }

    .loader {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @-webkit-keyframes pulse {
      0%,
      80%,
      100% {
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
    }

    @keyframes pulse {
      0%,
      80%,
      100% {
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
    }
  </style>
</head>
<body>
<div id="root">
  <div class="loader">
    <div class="spinner spinner--default spinner--lg">
      <span class="spinner_dot spinner_dot--first"></span>
      <span class="spinner_dot spinner_dot--second"></span><span
        class="spinner_dot spinner_dot--third"></span></div>
  </div>
</div>
<div id="vk-api-transport"></div>

<script>
  __REACT_DEVTOOLS_GLOBAL_HOOK__ = parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
</script>
</body>
