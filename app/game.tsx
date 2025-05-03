import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight, Trophy } from "lucide-react-native";
import { theme } from "@/constants/colors";
import { gameQuestions } from "@/mocks/game-questions";
import { useGameStore } from "@/hooks/use-game-store";
import { GameOption } from "@/components/GameOption";
import { Button } from "@/components/Button";

export default function GameScreen() {
  const router = useRouter();
  const { 
    currentQuestionIndex, 
    score, 
    answers, 
    gameCompleted,
    selectAnswer,
    nextQuestion,
    resetGame
  } = useGameStore();
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').width));

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + (showResult ? 1 : 0)) / gameQuestions.length) * 100;
  
  useEffect(() => {
    // Reset game state when component mounts
    resetGame();
  }, []);

  useEffect(() => {
    // Animate new question in
    if (!showResult) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [currentQuestionIndex, showResult]);

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption) return;
    
    // Record the answer
    selectAnswer(currentQuestion.id, selectedOption);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    // Animate out
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get('window').width,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Move to next question
      nextQuestion();
      setSelectedOption(null);
      setShowResult(false);
      
      // Reset animations for next question
      slideAnim.setValue(Dimensions.get('window').width);
    });
  };

  const handleFinishGame = () => {
    router.push('/contact');
  };

  const handleRestartGame = () => {
    resetGame();
    setSelectedOption(null);
    setShowResult(false);
    slideAnim.setValue(Dimensions.get('window').width);
  };

  const getSelectedOptionDetails = () => {
    if (!selectedOption) return null;
    return currentQuestion.options.find(option => option.id === selectedOption);
  };

  const selectedOptionDetails = getSelectedOptionDetails();
  const isCorrectAnswer = selectedOptionDetails?.isCorrect;

  if (gameCompleted) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <LinearGradient
          colors={['rgba(100, 190, 255, 0.2)', 'rgba(169, 135, 255, 0.1)', 'transparent']}
          style={styles.resultGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.resultContainer}>
            <View style={styles.trophyContainer}>
              <Trophy size={64} color={theme.accent} />
            </View>
            
            <Text style={styles.resultTitle}>Quiz Completed!</Text>
            <Text style={styles.resultScore}>
              Your Score: {score}/{gameQuestions.length}
            </Text>
            
            <View style={styles.resultMessage}>
              {score === gameQuestions.length ? (
                <Text style={styles.resultMessageText}>
                  Perfect score! You really know our work. We'd love to collaborate with you!
                </Text>
              ) : score >= gameQuestions.length / 2 ? (
                <Text style={styles.resultMessageText}>
                  Great job! You know quite a bit about our projects. Let's talk about how we can work together!
                </Text>
              ) : (
                <Text style={styles.resultMessageText}>
                  Thanks for playing! Now you know more about what we do. Let's discuss how we can help with your project!
                </Text>
              )}
            </View>
            
            <View style={styles.resultActions}>
              <Button
                title="Contact Us"
                onPress={handleFinishGame}
                style={styles.resultButton}
              />
              <Button
                title="Play Again"
                variant="outline"
                onPress={handleRestartGame}
                style={styles.resultButton}
              />
            </View>
          </View>
        </LinearGradient>
        
        <View style={styles.answersReview}>
          <Text style={styles.reviewTitle}>Your Answers</Text>
          
          {gameQuestions.map((question, index) => {
            const answer = answers.find(a => a.questionId === question.id);
            const selectedOption = answer 
              ? question.options.find(opt => opt.id === answer.selectedOptionId)
              : null;
              
            return (
              <View key={index} style={styles.reviewItem}>
                <Text style={styles.reviewQuestion}>
                  {index + 1}. {question.question}
                </Text>
                <View style={styles.reviewAnswer}>
                  <View style={[
                    styles.reviewStatus,
                    { backgroundColor: answer?.isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)' }
                  ]}>
                    <Text style={[
                      styles.reviewStatusText,
                      { color: answer?.isCorrect ? theme.success : theme.error }
                    ]}>
                      {answer?.isCorrect ? 'Correct' : 'Incorrect'}
                    </Text>
                  </View>
                  <Text style={styles.reviewSelected}>
                    You selected: {selectedOption?.title || 'N/A'}
                  </Text>
                </View>
                <Text style={styles.reviewFact}>{question.fact}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {/* Progress bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Animated.View 
          style={[
            styles.questionContainer,
            { 
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          <Text style={styles.questionNumber}>
            Question {currentQuestionIndex + 1} of {gameQuestions.length}
          </Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
              <GameOption
                key={option.id}
                id={option.id}
                title={option.title}
                imageUrl={option.imageUrl}
                isSelected={selectedOption === option.id}
                isRevealed={showResult}
                isCorrect={option.isCorrect}
                onSelect={handleSelectOption}
              />
            ))}
          </View>
          
          {showResult ? (
            <View style={styles.resultFeedback}>
              <View style={[
                styles.resultStatus,
                { backgroundColor: isCorrectAnswer ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)' }
              ]}>
                <Text style={[
                  styles.resultStatusText,
                  { color: isCorrectAnswer ? theme.success : theme.error }
                ]}>
                  {isCorrectAnswer ? 'Correct!' : 'Incorrect!'}
                </Text>
              </View>
              
              <Text style={styles.resultDescription}>
                {selectedOptionDetails?.description}
              </Text>
              
              <View style={styles.factContainer}>
                <Text style={styles.factTitle}>Did you know?</Text>
                <Text style={styles.factText}>{currentQuestion.fact}</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.nextButton}
                onPress={handleNextQuestion}
              >
                <Text style={styles.nextButtonText}>
                  {currentQuestionIndex < gameQuestions.length - 1 ? 'Next Question' : 'See Results'}
                </Text>
                <ArrowRight size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          ) : (
            <Button
              title="Confirm Answer"
              onPress={handleConfirmAnswer}
              disabled={!selectedOption}
              style={styles.confirmButton}
            />
          )}
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.accent,
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
  questionContainer: {
    flex: 1,
  },
  questionNumber: {
    fontSize: 14,
    color: theme.secondaryText,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 24,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  confirmButton: {
    marginTop: 8,
  },
  resultFeedback: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  resultStatus: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 12,
  },
  resultStatusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  resultDescription: {
    fontSize: 15,
    color: theme.secondaryText,
    marginBottom: 16,
    lineHeight: 22,
  },
  factContainer: {
    backgroundColor: 'rgba(100, 190, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  factTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  factText: {
    fontSize: 14,
    color: theme.secondaryText,
    lineHeight: 20,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.accent,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  resultGradient: {
    borderRadius: 20,
    marginBottom: 24,
    overflow: 'hidden',
  },
  resultContainer: {
    padding: 24,
    alignItems: 'center',
  },
  trophyContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(100, 190, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 18,
    color: theme.accent,
    fontWeight: '600',
    marginBottom: 16,
  },
  resultMessage: {
    backgroundColor: theme.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
  },
  resultMessageText: {
    fontSize: 15,
    color: theme.secondaryText,
    textAlign: 'center',
    lineHeight: 22,
  },
  resultActions: {
    flexDirection: 'row',
    gap: 12,
  },
  resultButton: {
    minWidth: 140,
  },
  answersReview: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
  reviewItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  reviewQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  reviewAnswer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 8,
  },
  reviewStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  reviewStatusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  reviewSelected: {
    fontSize: 14,
    color: theme.secondaryText,
  },
  reviewFact: {
    fontSize: 14,
    color: theme.secondaryText,
    fontStyle: 'italic',
    backgroundColor: 'rgba(100, 190, 255, 0.05)',
    padding: 12,
    borderRadius: 8,
  },
});