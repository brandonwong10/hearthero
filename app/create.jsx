import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { LineChart, ProgressChart, BarChart } from 'react-native-chart-kit';

const ChartExample = () => {
  const screenWidth = Dimensions.get('window').width;

  // Bezier Line Chart Data
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(230, 127, 185, ${opacity})` // optional
      }
    ],
    legend: ['Rainy Days'] // optional
  };

  // Progress Ring Data
  const progressChartData = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8]
  };

  // Bar Chart Data
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Blood Pressure</Text>
      <LineChart
        data={lineChartData}
        width={screenWidth - 40} // Reduce width for margin
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#94B9F6',
          backgroundGradientTo: '#2d518e',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ee9dcb'
          }
        }}
        bezier
        style={styles.chart}
      />

      <Text style={styles.title}>Movement</Text>
      <ProgressChart
        data={progressChartData}
        width={screenWidth - 40} // Reduce width for margin
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
        }}
        style={styles.chart}
      />

      <Text style={styles.title}>Report Summary</Text>
      <BarChart
        data={barChartData}
        width={screenWidth - 40} // Reduce width for margin
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={styles.chart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#F8F3F1',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginHorizontal: 20
  }
});

export default ChartExample;
