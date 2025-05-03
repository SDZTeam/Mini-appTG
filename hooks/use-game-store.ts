import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { gameQuestions } from '@/mocks/game-questions';

interface GameState {
  currentQuestionIndex: number;
  score: number;
  answers: {
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }[];
  gameCompleted: boolean;
  // Actions
  selectAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      gameCompleted: false,

      selectAnswer: (questionId, optionId) => {
        const currentQuestion = gameQuestions[get().currentQuestionIndex];
        const selectedOption = currentQuestion.options.find(option => option.id === optionId);
        
        if (!selectedOption) return;
        
        const isCorrect = selectedOption.isCorrect;
        
        set(state => ({
          answers: [
            ...state.answers,
            { questionId, selectedOptionId: optionId, isCorrect }
          ],
          score: isCorrect ? state.score + 1 : state.score
        }));
      },

      nextQuestion: () => {
        const nextIndex = get().currentQuestionIndex + 1;
        const isLastQuestion = nextIndex >= gameQuestions.length;
        
        set({
          currentQuestionIndex: isLastQuestion ? get().currentQuestionIndex : nextIndex,
          gameCompleted: isLastQuestion
        });
      },

      resetGame: () => {
        set({
          currentQuestionIndex: 0,
          score: 0,
          answers: [],
          gameCompleted: false
        });
      }
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);