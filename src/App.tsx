// App.tsx
import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import TimeTravel from './TimeTravel';
import SurpriseMe from './SurpriseMe';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    background-color: #FFF8F0;
    color: #4B2C36;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`padding: 1.3rem;`;
const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-family: 'Pacifico', cursive;
  color: rgb(255, 117, 117);
  margin-bottom: 0.3rem;
`;
const Tagline = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(95, 46, 62);
  margin-bottom: 1.5rem;
`;
const ContentRow = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const SideColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) { display: none; }
`;
const CenterColumn = styled.div`flex: 2; max-width: 700px;`;
const SideImage = styled.img`width: 90%; border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);`;
const Card = styled.div`
  background-color: #F7DAD9;
  border-left: 6px solid #FF6B6B;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  white-space: pre-line;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(255,107,107,0.2);
  }
`;
const Message = styled.p`font-size: 1.2rem; line-height: 1.8; margin: 0; color: #4B2C36;`;
const DateText = styled.p`font-size: 0.95rem; text-align: center; color: #6b4b53; margin: 0.3rem 0;`;
const Footer = styled.footer`text-align: center; font-size: 1rem; color: #888; margin-top: 3rem;`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;
const Button = styled.button`
  background-color: #FF6B6B;
  color: #FFF8F0;
  border: none;
  padding: 1.4rem 2.8rem;
  font-size: 1.15rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow: 0 8px 18px rgba(75,44,54,0.2);
  min-width: 220px;
  width: 340px;
  &:hover {
    background-color: #4B2C36;
    color: white;
    animation: ${pulse} 0.6s ease-in-out;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// 365 MESSAGES — Day 1 = August 15, 2026
// Fill in each string for the corresponding day.
// messages[0] = Day 1, messages[1] = Day 2, ... messages[364] = Day 365
// ─────────────────────────────────────────────────────────────────────────────
export const messages: string[] = [
  // DAY 1
  ``,
  // DAY 2
  ``,
  // DAY 3
  ``,
  // DAY 4
  ``,
  // DAY 5
  ``,
  // DAY 6
  ``,
  // DAY 7
  ``,
  // DAY 8
  ``,
  // DAY 9
  ``,
  // DAY 10
  ``,
  // DAY 11
  ``,
  // DAY 12
  ``,
  // DAY 13
  ``,
  // DAY 14
  ``,
  // DAY 15
  ``,
  // DAY 16
  ``,
  // DAY 17
  ``,
  // DAY 18
  ``,
  // DAY 19
  ``,
  // DAY 20
  ``,
  // DAY 21
  ``,
  // DAY 22
  ``,
  // DAY 23
  ``,
  // DAY 24
  ``,
  // DAY 25
  ``,
  // DAY 26
  ``,
  // DAY 27
  ``,
  // DAY 28
  ``,
  // DAY 29
  ``,
  // DAY 30
  ``,
  // DAY 31
  ``,
  // DAY 32
  ``,
  // DAY 33
  ``,
  // DAY 34
  ``,
  // DAY 35
  ``,
  // DAY 36
  ``,
  // DAY 37
  ``,
  // DAY 38
  ``,
  // DAY 39
  ``,
  // DAY 40
  ``,
  // DAY 41
  ``,
  // DAY 42
  ``,
  // DAY 43
  ``,
  // DAY 44
  ``,
  // DAY 45
  ``,
  // DAY 46
  ``,
  // DAY 47
  ``,
  // DAY 48
  ``,
  // DAY 49
  ``,
  // DAY 50
  ``,
  // DAY 51
  ``,
  // DAY 52
  ``,
  // DAY 53
  ``,
  // DAY 54
  ``,
  // DAY 55
  ``,
  // DAY 56
  ``,
  // DAY 57
  ``,
  // DAY 58
  ``,
  // DAY 59
  ``,
  // DAY 60
  ``,
  // DAY 61
  ``,
  // DAY 62
  ``,
  // DAY 63
  ``,
  // DAY 64
  ``,
  // DAY 65
  ``,
  // DAY 66
  ``,
  // DAY 67
  ``,
  // DAY 68
  ``,
  // DAY 69
  ``,
  // DAY 70
  ``,
  // DAY 71
  ``,
  // DAY 72
  ``,
  // DAY 73
  ``,
  // DAY 74
  ``,
  // DAY 75
  ``,
  // DAY 76
  ``,
  // DAY 77
  ``,
  // DAY 78
  ``,
  // DAY 79
  ``,
  // DAY 80
  ``,
  // DAY 81
  ``,
  // DAY 82
  ``,
  // DAY 83
  ``,
  // DAY 84
  ``,
  // DAY 85
  ``,
  // DAY 86
  ``,
  // DAY 87
  ``,
  // DAY 88
  ``,
  // DAY 89
  ``,
  // DAY 90
  ``,
  // DAY 91
  ``,
  // DAY 92
  ``,
  // DAY 93
  ``,
  // DAY 94
  ``,
  // DAY 95
  ``,
  // DAY 96
  ``,
  // DAY 97
  ``,
  // DAY 98
  ``,
  // DAY 99
  ``,
  // DAY 100
  ``,
  // DAY 101
  ``,
  // DAY 102
  ``,
  // DAY 103
  ``,
  // DAY 104
  ``,
  // DAY 105
  ``,
  // DAY 106
  ``,
  // DAY 107
  ``,
  // DAY 108
  ``,
  // DAY 109
  ``,
  // DAY 110
  ``,
  // DAY 111
  ``,
  // DAY 112
  ``,
  // DAY 113
  ``,
  // DAY 114
  ``,
  // DAY 115
  ``,
  // DAY 116
  ``,
  // DAY 117
  ``,
  // DAY 118
  ``,
  // DAY 119
  ``,
  // DAY 120
  ``,
  // DAY 121
  ``,
  // DAY 122
  ``,
  // DAY 123
  ``,
  // DAY 124
  ``,
  // DAY 125
  ``,
  // DAY 126
  ``,
  // DAY 127
  ``,
  // DAY 128
  ``,
  // DAY 129
  ``,
  // DAY 130
  ``,
  // DAY 131
  ``,
  // DAY 132
  ``,
  // DAY 133
  ``,
  // DAY 134
  ``,
  // DAY 135
  ``,
  // DAY 136
  ``,
  // DAY 137
  ``,
  // DAY 138
  ``,
  // DAY 139
  ``,
  // DAY 140
  ``,
  // DAY 141
  ``,
  // DAY 142
  ``,
  // DAY 143
  ``,
  // DAY 144
  ``,
  // DAY 145
  ``,
  // DAY 146
  ``,
  // DAY 147
  ``,
  // DAY 148
  ``,
  // DAY 149
  ``,
  // DAY 150
  ``,
  // DAY 151
  ``,
  // DAY 152
  ``,
  // DAY 153
  ``,
  // DAY 154
  ``,
  // DAY 155
  ``,
  // DAY 156
  ``,
  // DAY 157
  ``,
  // DAY 158
  ``,
  // DAY 159
  ``,
  // DAY 160
  ``,
  // DAY 161
  ``,
  // DAY 162
  ``,
  // DAY 163
  ``,
  // DAY 164
  ``,
  // DAY 165
  ``,
  // DAY 166
  ``,
  // DAY 167
  ``,
  // DAY 168
  ``,
  // DAY 169
  ``,
  // DAY 170
  ``,
  // DAY 171
  ``,
  // DAY 172
  ``,
  // DAY 173
  ``,
  // DAY 174
  ``,
  // DAY 175
  ``,
  // DAY 176
  ``,
  // DAY 177
  ``,
  // DAY 178
  ``,
  // DAY 179
  ``,
  // DAY 180
  ``,
  // DAY 181
  ``,
  // DAY 182
  ``,
  // DAY 183
  ``,
  // DAY 184
  ``,
  // DAY 185
  ``,
  // DAY 186
  ``,
  // DAY 187
  ``,
  // DAY 188
  ``,
  // DAY 189
  ``,
  // DAY 190
  ``,
  // DAY 191
  ``,
  // DAY 192
  ``,
  // DAY 193
  ``,
  // DAY 194
  ``,
  // DAY 195
  ``,
  // DAY 196
  ``,
  // DAY 197
  ``,
  // DAY 198
  ``,
  // DAY 199
  ``,
  // DAY 200
  ``,
  // DAY 201
  ``,
  // DAY 202
  ``,
  // DAY 203
  ``,
  // DAY 204
  ``,
  // DAY 205
  ``,
  // DAY 206
  ``,
  // DAY 207
  ``,
  // DAY 208
  ``,
  // DAY 209
  ``,
  // DAY 210
  ``,
  // DAY 211
  ``,
  // DAY 212
  ``,
  // DAY 213
  ``,
  // DAY 214
  ``,
  // DAY 215
  ``,
  // DAY 216
  ``,
  // DAY 217
  ``,
  // DAY 218
  ``,
  // DAY 219
  ``,
  // DAY 220
  ``,
  // DAY 221
  ``,
  // DAY 222
  ``,
  // DAY 223
  ``,
  // DAY 224
  ``,
  // DAY 225
  ``,
  // DAY 226
  ``,
  // DAY 227
  ``,
  // DAY 228
  ``,
  // DAY 229
  ``,
  // DAY 230
  ``,
  // DAY 231
  ``,
  // DAY 232
  ``,
  // DAY 233
  ``,
  // DAY 234
  ``,
  // DAY 235
  ``,
  // DAY 236
  ``,
  // DAY 237
  ``,
  // DAY 238
  ``,
  // DAY 239
  ``,
  // DAY 240
  ``,
  // DAY 241
  ``,
  // DAY 242
  ``,
  // DAY 243
  ``,
  // DAY 244
  ``,
  // DAY 245
  ``,
  // DAY 246
  ``,
  // DAY 247
  ``,
  // DAY 248
  ``,
  // DAY 249
  ``,
  // DAY 250
  ``,
  // DAY 251
  ``,
  // DAY 252
  ``,
  // DAY 253
  ``,
  // DAY 254
  ``,
  // DAY 255
  ``,
  // DAY 256
  ``,
  // DAY 257
  ``,
  // DAY 258
  ``,
  // DAY 259
  ``,
  // DAY 260
  ``,
  // DAY 261
  ``,
  // DAY 262
  ``,
  // DAY 263
  ``,
  // DAY 264
  ``,
  // DAY 265
  ``,
  // DAY 266
  ``,
  // DAY 267
  ``,
  // DAY 268
  ``,
  // DAY 269
  ``,
  // DAY 270
  ``,
  // DAY 271
  ``,
  // DAY 272
  ``,
  // DAY 273
  ``,
  // DAY 274
  ``,
  // DAY 275
  ``,
  // DAY 276
  ``,
  // DAY 277
  ``,
  // DAY 278
  ``,
  // DAY 279
  ``,
  // DAY 280
  ``,
  // DAY 281
  ``,
  // DAY 282
  ``,
  // DAY 283
  ``,
  // DAY 284
  ``,
  // DAY 285
  ``,
  // DAY 286
  ``,
  // DAY 287
  ``,
  // DAY 288
  ``,
  // DAY 289
  ``,
  // DAY 290
  ``,
  // DAY 291
  ``,
  // DAY 292
  ``,
  // DAY 293
  ``,
  // DAY 294
  ``,
  // DAY 295
  ``,
  // DAY 296
  ``,
  // DAY 297
  ``,
  // DAY 298
  ``,
  // DAY 299
  ``,
  // DAY 300
  ``,
  // DAY 301
  ``,
  // DAY 302
  ``,
  // DAY 303
  ``,
  // DAY 304
  ``,
  // DAY 305
  ``,
  // DAY 306
  ``,
  // DAY 307
  ``,
  // DAY 308
  ``,
  // DAY 309
  ``,
  // DAY 310
  ``,
  // DAY 311
  ``,
  // DAY 312
  ``,
  // DAY 313
  ``,
  // DAY 314
  ``,
  // DAY 315
  ``,
  // DAY 316
  ``,
  // DAY 317
  ``,
  // DAY 318
  ``,
  // DAY 319
  ``,
  // DAY 320
  ``,
  // DAY 321
  ``,
  // DAY 322
  ``,
  // DAY 323
  ``,
  // DAY 324
  ``,
  // DAY 325
  ``,
  // DAY 326
  ``,
  // DAY 327
  ``,
  // DAY 328
  ``,
  // DAY 329
  ``,
  // DAY 330
  ``,
  // DAY 331
  ``,
  // DAY 332
  ``,
  // DAY 333
  ``,
  // DAY 334
  ``,
  // DAY 335
  ``,
  // DAY 336
  ``,
  // DAY 337
  ``,
  // DAY 338
  ``,
  // DAY 339
  ``,
  // DAY 340
  ``,
  // DAY 341
  ``,
  // DAY 342
  ``,
  // DAY 343
  ``,
  // DAY 344
  ``,
  // DAY 345
  ``,
  // DAY 346
  ``,
  // DAY 347
  ``,
  // DAY 348
  ``,
  // DAY 349
  ``,
  // DAY 350
  ``,
  // DAY 351
  ``,
  // DAY 352
  ``,
  // DAY 353
  ``,
  // DAY 354
  ``,
  // DAY 355
  ``,
  // DAY 356
  ``,
  // DAY 357
  ``,
  // DAY 358
  ``,
  // DAY 359
  ``,
  // DAY 360
  ``,
  // DAY 361
  ``,
  // DAY 362
  ``,
  // DAY 363
  ``,
  // DAY 364
  ``,
  // DAY 365
  ``,
];

// ─── HOME COMPONENT ──────────────────────────────────────────────────────────
const Home = () => {
  const navigate = useNavigate();

  // Day 1 = August 15, 2026
  const startDate = new Date(2026, 7, 15);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const dayNumber = Math.max(1, Math.min(diffDays + 1, 365));

  const dayCountText = `🔢 Day ${dayNumber} of 365`;

  // Birthday: March 1, 2027
  const birthday = new Date(2027, 2, 1);
  const timeDiff = birthday.getTime() - today.getTime();
  const daysLeft = Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
  const birthdayCountdown = `🎉 ${daysLeft} day${daysLeft === 1 ? '' : 's'} left until Sejal's Birthday!`;

  const isBirthday = today.getDate() === 1 && today.getMonth() === 2;
  const birthdayMessage = `🎂 Happy Birthday, SEJAL! 🎂\n\nYou are light wrapped in stardust. Today and every day. 🌟`;

  const msgIndex = Math.min(dayNumber - 1, messages.length - 1);
  const dailyMessage = isBirthday
    ? birthdayMessage
    : messages[msgIndex] || `✨ Day ${dayNumber} — something special is coming here soon. 💌`;

  const formattedDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <AppContainer>
      <Title>365 Days Bbg</Title>
      <Tagline>Getting Lost in You? That's My Daily Routine, bbg.</Tagline>

      <ContentRow>
        <SideColumn>
          <SideImage src="/assets/gallery/HomeL.jpg" alt="Left decoration" />
        </SideColumn>

        <CenterColumn>
          <Card>
            <h3 style={{ color: '#C6A5A5', marginBottom: '1rem' }}>Today's Message 💖</h3>
            <Message>{dailyMessage}</Message>
          </Card>
          <DateText>{dayCountText}</DateText>
          <DateText>📅 {formattedDate}</DateText>
          {!isBirthday && <DateText>{birthdayCountdown}</DateText>}
        </CenterColumn>

        <SideColumn>
          <SideImage src="/assets/gallery/Home.jpg" alt="Right decoration" />
        </SideColumn>
      </ContentRow>

      <ButtonContainer>
        <Button onClick={() => navigate('/time-travel')}>Time Travel<br />⏳</Button>
        <Button onClick={() => navigate('/surprise-me')}>Surprise Me<br />🎁</Button>
      </ButtonContainer>

      <Footer>Made with lots of love for the most amazing person I know. 💌</Footer>
    </AppContainer>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-travel" element={<TimeTravel />} />
          <Route path="/surprise-me" element={<SurpriseMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
