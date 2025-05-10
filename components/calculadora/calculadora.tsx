/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from "@/components/calculadora/style";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Calculadora() {
  const [input, setInput] = useState("");

  const handlePress = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(
          input.replace("×", "*").replace("÷", "/").replace("%", "/100")
        );
        setInput(result.toString());
      } catch (e) {
        setInput("Erro");
      }
    } else if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["C", "÷", "%", "⌫"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "=", ""],
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