/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from "@/src/components/style";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Calculadora() {
  const [input, setInput] = useState("");
  
  // Variável com todos os operadores
  const isOperator = (value: string) => ["÷", "×", "-", "+", "%"].includes(value);

  
  const calculate = (expression: string) => {
    try {
      const result = eval(
        // Substitui os sinais por seus respectivos operadores
        expression.replace("×", "*").replace("÷", "/").replace("%", "/100")
      );
      return result.toString();
    } catch {
      return "Erro";
    }
  };

  const handlePress = (value: string) => {
    // Caso o botão "C" seja selecionado o valor retorna a ser zero
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "=") {
      const result = calculate(input);
      setInput(result);
      return;
    }
    
    if (value === "⌫") {
      // Caso o valor seja "Erro" no próximo input a string será cortada
      setInput((prev) => (prev === "Erro" ? "" : prev.slice(0, -1)));
      return;
    }

    setInput((prev) => {
      if (prev === "Erro") return value;

      if (isOperator(value)) {
        const lastChar = prev.slice(-1);

        // Se o último caractere também é operador, substitui
        if (isOperator(lastChar)) {
          return prev.slice(0, -1) + value;
        }
         
        // Se algum erro ocorrer, retorna string "erro"
        const result = calculate(prev);
        if (result === "Erro") return "Erro";
        
        // Se o operador for selecionado mais de uma vez a operação é automaticamente resolvida
        return result + value;
      }
        
      // retorna o valor da operação
      return prev + value;
    });
  };
  
  const buttons = [
    ["C", "÷", "%", "⌫"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "", "="],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screenText} numberOfLines={1}>
          {input || "0"}
        </Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((btn, i) => {
              if (btn === "") return <View key={i} style={styles.empty} />;
              const isOperator = ["÷", "×", "-", "+", "=", "%", "⌫"].includes(
                btn
              );
              const isClear = btn === "C";
              const isZero = btn === "0";
              const buttonStyle = isOperator
                ? styles.buttonOperator
                : isClear
                ? styles.buttonClear
                : styles.button;

              return (
                <TouchableOpacity
                  key={i}
                  style={isZero ? styles.buttonZero : buttonStyle}
                  onPress={() => handlePress(btn)}
                >
                  <Text style={styles.buttonText}>{btn}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}