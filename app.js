<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Star Wars - Express</title>
  <!-- Latest compiled and minified CSS & JS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</head>

<body>

  <div class="container">
    <div class="jumbotron">
      <h1>Star Wars Express</h1>
      <h3>The greatest resource in the galaxy for Star Wars statistics!</h3>
      <hr>
      <a href="/add">
        <button class="btn btn-danger btn-lg">
          <span class="fa fa-plus"></span> Add New Character
        </button>
      </a>
    </div>
    <div class="row">

      <div class="col-12">

        <div class="card mb-4">
          <div class="card-header">
            <h3><strong>Character Search</strong></h3>
          </div>
          <div class="card-body">
            <input type="text" id="character-search" class="form-control">
            <br>
            <div class="text-right">
              <button type="submit" class="btn btn-primary btn-md" id="search-btn"><span class="fa fa-search"></span> Search
                Your Feelings. You know it to be true.</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3><strong>Character Statistics</strong></h3>
          </div>
          <div class="card-body">
            <h2 id="name">Yoda</h2>
            <div id="stats">
              <h3><strong>Role:</strong> <span id="role">Jedi Master</span></h3>
              <h3><strong>Age:</strong> <span id="age">900</span></h3>
              <h3><strong>Force Points:</strong> <span id="force-points">2000</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    $("#search-btn").on("click", function() {
      console.log("search button clicked");
      var searchedCharacter = $("#character-search").val().trim();

      searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

      $.get("/api/characters/" + searchedCharacter, function(data) {
        console.log(data);
        if(data) {
          $("#stats").show();
          $("#name").text(data.name);
          $("#role").text(data.role);
          $("#age").text(data.age);
          $("#force-points").text(data.forcePoints);
        }
        else {
          $("#name").text("The force is not strong with this one.");
          $("#stats").hide();
        }
      });
    });
  </script>

</body>

</html>