<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Your Answer</title>
		<style>
			h1 {
				color: green ;
			}
			.correct {
				color: blue ;
			}
			.incorrect {
				color: red ;
			}
		</style>
	</head>
	<body>
		<h1>Test Score</h1>
		<?php $score = 0 ?>
		<h3>Question 1</h3>
		<?php $q1 = $_POST["question1"] ;
		      if ($q1 == 4 ){
		      	$score++ ;
		      	echo "<h4 class='correct'> Correct</h4>";
		      } else {
		      	echo "<h4 class='incorrect'> Incorrect</h4>";
		      }
		?>
		<h3>Question 2</h1>
		<?php $q2 = $_POST["question2"] ;
			$l = sizeof($q2) ;
		      if ($l == 4 ){
		      	$score++ ;
		      	echo "<h4 class='correct'> Correct</h4>";
		      } else {
		      	echo "<h4 class='incorrect'> Incorrect</h4>";
		      }
		?>
		<h3>Question 3</h3>
		<h4>Your answer is <?php echo $_POST["question3"] ;?></h4>
		<h4 class="correct">Answer is Goals, Acquire, Build , Deliver, and Optimize</h4>

		<h3>Total Scores = <?php echo $score ?></h3>
	</body>
</html>
