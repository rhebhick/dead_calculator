import React, { useState } from 'react';
import { addYears, format } from 'date-fns';
import './App.css';
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
function App() {
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [smoking, setSmoking] = useState('');
  const [drinking, setDrinking] = useState('');
  const [medications, setMedications] = useState('');
  const [exercise, setExercise] = useState('');
  const [junkFood, setJunkFood] = useState('');
  const [result, setResult] = useState('');
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');

  const handleNext = () => {
    if ((step === 0 && !dob) || 
        (step === 1 && !gender) || 
        (step === 2 && !smoking) || 
        (step === 3 && !drinking) || 
        (step === 4 && !medications) || 
        (step === 5 && !exercise) || 
        (step === 6 && !junkFood)) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const resetForm = () => {
    setDob('');
    setGender('');
    setSmoking('');
    setDrinking('');
    setMedications('');
    setExercise('');
    setJunkFood('');
    setResult('');
    setStep(0);
    setError('');
  };

  const calculateLifeExpectancy = () => {
    let lifeExpectancy = gender === 'male' ? 69.51 : 72.2;
  
    if (smoking === 'yes') lifeExpectancy -= 10;
    if (drinking === 'frequent') lifeExpectancy -= 5;
    else if (drinking === 'occasional') lifeExpectancy -= 2;
  
    if (medications === 'yes') lifeExpectancy -= 5;
    if (exercise === 'yes') lifeExpectancy += 3;
    if (junkFood === 'daily') lifeExpectancy -= 4;
    else if (junkFood === 'occasionally') lifeExpectancy -= 2;
  
    const dobDate = new Date(dob);
    const estimatedDeathDate = addYears(dobDate, Math.round(lifeExpectancy));

    const randomMonthOffset = Math.floor(Math.random() * 12);
    const randomDayOffset = Math.floor(Math.random() * 30); 
  
    estimatedDeathDate.setMonth(estimatedDeathDate.getMonth() + randomMonthOffset);
    estimatedDeathDate.setDate(estimatedDeathDate.getDate() + randomDayOffset);
  
    setResult(`Estimated date of death: ${format(estimatedDeathDate, 'MMMM d, yyyy')}`);
  };
  
  return (
    
    <div className='set'>
      <div className='properise'></div>
      <div id='innerbox' className='inbox'>
      <h1 className='rubik-wet-paint-regular' >Death Calculator</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {step === 0 && (
        <div>
          <label className='silkscreen-regular'>Date of Birth:</label>
          <input className='form-control' type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <label className='silkscreen-regular'>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="" class="form-control">Select Gender</option>
            <option value="male" class="form-control">Male</option>
            <option value="female" class="form-control">Female</option>
          </select>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label className='silkscreen-regular'>Do you smoke?</label>
          <select value={smoking} onChange={(e) => setSmoking(e.target.value)} required>
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <label className='silkscreen-regular'>How often do you drink?</label>
          <select value={drinking} onChange={(e) => setDrinking(e.target.value)} required>
            <option value="">Select Option</option>
            <option value="none">None</option>
            <option value="occasional">Occasional</option>
            <option value="frequent">Frequent</option>
          </select>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <label className='silkscreen-regular'>Are you taking medications for sugar, cholesterol, or blood pressure?</label>
          <select value={medications} onChange={(e) => setMedications(e.target.value)} required>
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      )}
      {step === 5 && (
        <div>
          <label className='silkscreen-regular'>Are you doing yoga or exercise regularly?</label>
          <select value={exercise} onChange={(e) => setExercise(e.target.value)} required>
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      )}
      {step === 6 && (
        <div>
          <label className='silkscreen-regular'>How often do you eat junk food?</label>
          <select value={junkFood} onChange={(e) => setJunkFood(e.target.value)} required>
            <option value="">Select Option</option>
            <option value="never">Never</option>
            <option value="occasionally">Occasionally</option>
            <option value="daily">Daily</option>
          </select>
          <button className='submit' onClick={() => {
            handleNext();
            calculateLifeExpectancy();
          }}>submit</button>
        </div>
      )}
      {result && (
        <div>
          <div className='result'>{result}</div>
          <button onClick={resetForm} className='next'>Start Over</button>
        </div>
      )}
</div>
    </div>
  );
}

export default App;
