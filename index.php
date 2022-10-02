<!DOCTYPE html>
<!-- Coding By CodingNepal - youtube.com/codingnepal -->

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>File Downloader in JavaScript| CodingNepal</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <?php 
    header('Access-Control-Allow-Origin: *'); 

    ?>

  <body>
    <div class="wrapper">
      <header>
        <h1>File Downloader</h1>
        <p>Paste url of image, video, or pdf to download. This tool is made with vanilla javascript.</p>
      </header>
      <form action="#">
        <input type="url" placeholder="Paste file url" required>
        <button>Download File</button>
      </form>
    </div>

    <script src="script.js"></script>
    
  </body>
</html>