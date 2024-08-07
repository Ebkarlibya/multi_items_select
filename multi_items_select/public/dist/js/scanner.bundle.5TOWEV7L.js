(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/third_party/zxing-js.umd.js
  var require_zxing_js_umd = __commonJS({
    "../multi_items_select/multi_items_select/node_modules/html5-qrcode/third_party/zxing-js.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.ZXing = {}));
      })(exports, function(exports2) {
        "use strict";
        function isNullOrUndefined2(obj) {
          return obj === null || obj === void 0;
        }
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        function __extends3(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        function fixProto(target, prototype) {
          var setPrototypeOf = Object.setPrototypeOf;
          setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
        }
        function fixStack(target, fn) {
          if (fn === void 0) {
            fn = target.constructor;
          }
          var captureStackTrace = Error.captureStackTrace;
          captureStackTrace && captureStackTrace(target, fn);
        }
        var CustomError = function(_super) {
          __extends3(CustomError2, _super);
          function CustomError2(message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message) || this;
            Object.defineProperty(_this, "name", {
              value: _newTarget.name,
              enumerable: false
            });
            fixProto(_this, _newTarget.prototype);
            fixStack(_this);
            return _this;
          }
          return CustomError2;
        }(Error);
        class Exception extends CustomError {
          constructor(message = void 0) {
            super(message);
            this.message = message;
          }
          getKind() {
            const ex = this.constructor;
            return ex.kind;
          }
        }
        Exception.kind = "Exception";
        class ArgumentException extends Exception {
        }
        ArgumentException.kind = "ArgumentException";
        class IllegalArgumentException extends Exception {
        }
        IllegalArgumentException.kind = "IllegalArgumentException";
        class BinaryBitmap2 {
          constructor(binarizer) {
            this.binarizer = binarizer;
            if (binarizer === null) {
              throw new IllegalArgumentException("Binarizer must be non-null.");
            }
          }
          getWidth() {
            return this.binarizer.getWidth();
          }
          getHeight() {
            return this.binarizer.getHeight();
          }
          getBlackRow(y, row) {
            return this.binarizer.getBlackRow(y, row);
          }
          getBlackMatrix() {
            if (this.matrix === null || this.matrix === void 0) {
              this.matrix = this.binarizer.getBlackMatrix();
            }
            return this.matrix;
          }
          isCropSupported() {
            return this.binarizer.getLuminanceSource().isCropSupported();
          }
          crop(left, top, width, height) {
            const newSource = this.binarizer.getLuminanceSource().crop(left, top, width, height);
            return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
          }
          isRotateSupported() {
            return this.binarizer.getLuminanceSource().isRotateSupported();
          }
          rotateCounterClockwise() {
            const newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise();
            return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
          }
          rotateCounterClockwise45() {
            const newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
            return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
          }
          toString() {
            try {
              return this.getBlackMatrix().toString();
            } catch (e) {
              return "";
            }
          }
        }
        class ChecksumException extends Exception {
          static getChecksumInstance() {
            return new ChecksumException();
          }
        }
        ChecksumException.kind = "ChecksumException";
        class Binarizer {
          constructor(source) {
            this.source = source;
          }
          getLuminanceSource() {
            return this.source;
          }
          getWidth() {
            return this.source.getWidth();
          }
          getHeight() {
            return this.source.getHeight();
          }
        }
        class System {
          static arraycopy(src, srcPos, dest, destPos, length) {
            while (length--) {
              dest[destPos++] = src[srcPos++];
            }
          }
          static currentTimeMillis() {
            return Date.now();
          }
        }
        class IndexOutOfBoundsException extends Exception {
        }
        IndexOutOfBoundsException.kind = "IndexOutOfBoundsException";
        class ArrayIndexOutOfBoundsException extends IndexOutOfBoundsException {
          constructor(index = void 0, message = void 0) {
            super(message);
            this.index = index;
            this.message = message;
          }
        }
        ArrayIndexOutOfBoundsException.kind = "ArrayIndexOutOfBoundsException";
        class Arrays {
          static fill(a, val) {
            for (let i = 0, len = a.length; i < len; i++)
              a[i] = val;
          }
          static fillWithin(a, fromIndex, toIndex, val) {
            Arrays.rangeCheck(a.length, fromIndex, toIndex);
            for (let i = fromIndex; i < toIndex; i++)
              a[i] = val;
          }
          static rangeCheck(arrayLength, fromIndex, toIndex) {
            if (fromIndex > toIndex) {
              throw new IllegalArgumentException("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")");
            }
            if (fromIndex < 0) {
              throw new ArrayIndexOutOfBoundsException(fromIndex);
            }
            if (toIndex > arrayLength) {
              throw new ArrayIndexOutOfBoundsException(toIndex);
            }
          }
          static asList(...args) {
            return args;
          }
          static create(rows, cols, value) {
            let arr = Array.from({ length: rows });
            return arr.map((x) => Array.from({ length: cols }).fill(value));
          }
          static createInt32Array(rows, cols, value) {
            let arr = Array.from({ length: rows });
            return arr.map((x) => Int32Array.from({ length: cols }).fill(value));
          }
          static equals(first, second) {
            if (!first) {
              return false;
            }
            if (!second) {
              return false;
            }
            if (!first.length) {
              return false;
            }
            if (!second.length) {
              return false;
            }
            if (first.length !== second.length) {
              return false;
            }
            for (let i = 0, length = first.length; i < length; i++) {
              if (first[i] !== second[i]) {
                return false;
              }
            }
            return true;
          }
          static hashCode(a) {
            if (a === null) {
              return 0;
            }
            let result = 1;
            for (const element of a) {
              result = 31 * result + element;
            }
            return result;
          }
          static fillUint8Array(a, value) {
            for (let i = 0; i !== a.length; i++) {
              a[i] = value;
            }
          }
          static copyOf(original, newLength) {
            return original.slice(0, newLength);
          }
          static copyOfUint8Array(original, newLength) {
            if (original.length <= newLength) {
              const newArray = new Uint8Array(newLength);
              newArray.set(original);
              return newArray;
            }
            return original.slice(0, newLength);
          }
          static copyOfRange(original, from, to) {
            const newLength = to - from;
            const copy = new Int32Array(newLength);
            System.arraycopy(original, from, copy, 0, newLength);
            return copy;
          }
          static binarySearch(ar, el, comparator) {
            if (comparator === void 0) {
              comparator = Arrays.numberComparator;
            }
            let m = 0;
            let n = ar.length - 1;
            while (m <= n) {
              const k = n + m >> 1;
              const cmp = comparator(el, ar[k]);
              if (cmp > 0) {
                m = k + 1;
              } else if (cmp < 0) {
                n = k - 1;
              } else {
                return k;
              }
            }
            return -m - 1;
          }
          static numberComparator(a, b) {
            return a - b;
          }
        }
        class Integer {
          static numberOfTrailingZeros(i) {
            let y;
            if (i === 0)
              return 32;
            let n = 31;
            y = i << 16;
            if (y !== 0) {
              n -= 16;
              i = y;
            }
            y = i << 8;
            if (y !== 0) {
              n -= 8;
              i = y;
            }
            y = i << 4;
            if (y !== 0) {
              n -= 4;
              i = y;
            }
            y = i << 2;
            if (y !== 0) {
              n -= 2;
              i = y;
            }
            return n - (i << 1 >>> 31);
          }
          static numberOfLeadingZeros(i) {
            if (i === 0) {
              return 32;
            }
            let n = 1;
            if (i >>> 16 === 0) {
              n += 16;
              i <<= 16;
            }
            if (i >>> 24 === 0) {
              n += 8;
              i <<= 8;
            }
            if (i >>> 28 === 0) {
              n += 4;
              i <<= 4;
            }
            if (i >>> 30 === 0) {
              n += 2;
              i <<= 2;
            }
            n -= i >>> 31;
            return n;
          }
          static toHexString(i) {
            return i.toString(16);
          }
          static toBinaryString(intNumber) {
            return String(parseInt(String(intNumber), 2));
          }
          static bitCount(i) {
            i = i - (i >>> 1 & 1431655765);
            i = (i & 858993459) + (i >>> 2 & 858993459);
            i = i + (i >>> 4) & 252645135;
            i = i + (i >>> 8);
            i = i + (i >>> 16);
            return i & 63;
          }
          static truncDivision(dividend, divisor) {
            return Math.trunc(dividend / divisor);
          }
          static parseInt(num, radix = void 0) {
            return parseInt(num, radix);
          }
        }
        Integer.MIN_VALUE_32_BITS = -2147483648;
        Integer.MAX_VALUE = Number.MAX_SAFE_INTEGER;
        class BitArray {
          constructor(size, bits) {
            if (size === void 0) {
              this.size = 0;
              this.bits = new Int32Array(1);
            } else {
              this.size = size;
              if (bits === void 0 || bits === null) {
                this.bits = BitArray.makeArray(size);
              } else {
                this.bits = bits;
              }
            }
          }
          getSize() {
            return this.size;
          }
          getSizeInBytes() {
            return Math.floor((this.size + 7) / 8);
          }
          ensureCapacity(size) {
            if (size > this.bits.length * 32) {
              const newBits = BitArray.makeArray(size);
              System.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
              this.bits = newBits;
            }
          }
          get(i) {
            return (this.bits[Math.floor(i / 32)] & 1 << (i & 31)) !== 0;
          }
          set(i) {
            this.bits[Math.floor(i / 32)] |= 1 << (i & 31);
          }
          flip(i) {
            this.bits[Math.floor(i / 32)] ^= 1 << (i & 31);
          }
          getNextSet(from) {
            const size = this.size;
            if (from >= size) {
              return size;
            }
            const bits = this.bits;
            let bitsOffset = Math.floor(from / 32);
            let currentBits = bits[bitsOffset];
            currentBits &= ~((1 << (from & 31)) - 1);
            const length = bits.length;
            while (currentBits === 0) {
              if (++bitsOffset === length) {
                return size;
              }
              currentBits = bits[bitsOffset];
            }
            const result = bitsOffset * 32 + Integer.numberOfTrailingZeros(currentBits);
            return result > size ? size : result;
          }
          getNextUnset(from) {
            const size = this.size;
            if (from >= size) {
              return size;
            }
            const bits = this.bits;
            let bitsOffset = Math.floor(from / 32);
            let currentBits = ~bits[bitsOffset];
            currentBits &= ~((1 << (from & 31)) - 1);
            const length = bits.length;
            while (currentBits === 0) {
              if (++bitsOffset === length) {
                return size;
              }
              currentBits = ~bits[bitsOffset];
            }
            const result = bitsOffset * 32 + Integer.numberOfTrailingZeros(currentBits);
            return result > size ? size : result;
          }
          setBulk(i, newBits) {
            this.bits[Math.floor(i / 32)] = newBits;
          }
          setRange(start, end) {
            if (end < start || start < 0 || end > this.size) {
              throw new IllegalArgumentException();
            }
            if (end === start) {
              return;
            }
            end--;
            const firstInt = Math.floor(start / 32);
            const lastInt = Math.floor(end / 32);
            const bits = this.bits;
            for (let i = firstInt; i <= lastInt; i++) {
              const firstBit = i > firstInt ? 0 : start & 31;
              const lastBit = i < lastInt ? 31 : end & 31;
              const mask = (2 << lastBit) - (1 << firstBit);
              bits[i] |= mask;
            }
          }
          clear() {
            const max = this.bits.length;
            const bits = this.bits;
            for (let i = 0; i < max; i++) {
              bits[i] = 0;
            }
          }
          isRange(start, end, value) {
            if (end < start || start < 0 || end > this.size) {
              throw new IllegalArgumentException();
            }
            if (end === start) {
              return true;
            }
            end--;
            const firstInt = Math.floor(start / 32);
            const lastInt = Math.floor(end / 32);
            const bits = this.bits;
            for (let i = firstInt; i <= lastInt; i++) {
              const firstBit = i > firstInt ? 0 : start & 31;
              const lastBit = i < lastInt ? 31 : end & 31;
              const mask = (2 << lastBit) - (1 << firstBit) & 4294967295;
              if ((bits[i] & mask) !== (value ? mask : 0)) {
                return false;
              }
            }
            return true;
          }
          appendBit(bit) {
            this.ensureCapacity(this.size + 1);
            if (bit) {
              this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31);
            }
            this.size++;
          }
          appendBits(value, numBits) {
            if (numBits < 0 || numBits > 32) {
              throw new IllegalArgumentException("Num bits must be between 0 and 32");
            }
            this.ensureCapacity(this.size + numBits);
            for (let numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
              this.appendBit((value >> numBitsLeft - 1 & 1) === 1);
            }
          }
          appendBitArray(other) {
            const otherSize = other.size;
            this.ensureCapacity(this.size + otherSize);
            for (let i = 0; i < otherSize; i++) {
              this.appendBit(other.get(i));
            }
          }
          xor(other) {
            if (this.size !== other.size) {
              throw new IllegalArgumentException("Sizes don't match");
            }
            const bits = this.bits;
            for (let i = 0, length = bits.length; i < length; i++) {
              bits[i] ^= other.bits[i];
            }
          }
          toBytes(bitOffset, array, offset, numBytes) {
            for (let i = 0; i < numBytes; i++) {
              let theByte = 0;
              for (let j = 0; j < 8; j++) {
                if (this.get(bitOffset)) {
                  theByte |= 1 << 7 - j;
                }
                bitOffset++;
              }
              array[offset + i] = theByte;
            }
          }
          getBitArray() {
            return this.bits;
          }
          reverse() {
            const newBits = new Int32Array(this.bits.length);
            const len = Math.floor((this.size - 1) / 32);
            const oldBitsLen = len + 1;
            const bits = this.bits;
            for (let i = 0; i < oldBitsLen; i++) {
              let x = bits[i];
              x = x >> 1 & 1431655765 | (x & 1431655765) << 1;
              x = x >> 2 & 858993459 | (x & 858993459) << 2;
              x = x >> 4 & 252645135 | (x & 252645135) << 4;
              x = x >> 8 & 16711935 | (x & 16711935) << 8;
              x = x >> 16 & 65535 | (x & 65535) << 16;
              newBits[len - i] = x;
            }
            if (this.size !== oldBitsLen * 32) {
              const leftOffset = oldBitsLen * 32 - this.size;
              let currentInt = newBits[0] >>> leftOffset;
              for (let i = 1; i < oldBitsLen; i++) {
                const nextInt = newBits[i];
                currentInt |= nextInt << 32 - leftOffset;
                newBits[i - 1] = currentInt;
                currentInt = nextInt >>> leftOffset;
              }
              newBits[oldBitsLen - 1] = currentInt;
            }
            this.bits = newBits;
          }
          static makeArray(size) {
            return new Int32Array(Math.floor((size + 31) / 32));
          }
          equals(o) {
            if (!(o instanceof BitArray)) {
              return false;
            }
            const other = o;
            return this.size === other.size && Arrays.equals(this.bits, other.bits);
          }
          hashCode() {
            return 31 * this.size + Arrays.hashCode(this.bits);
          }
          toString() {
            let result = "";
            for (let i = 0, size = this.size; i < size; i++) {
              if ((i & 7) === 0) {
                result += " ";
              }
              result += this.get(i) ? "X" : ".";
            }
            return result;
          }
          clone() {
            return new BitArray(this.size, this.bits.slice());
          }
        }
        var DecodeHintType2;
        (function(DecodeHintType3) {
          DecodeHintType3[DecodeHintType3["OTHER"] = 0] = "OTHER";
          DecodeHintType3[DecodeHintType3["PURE_BARCODE"] = 1] = "PURE_BARCODE";
          DecodeHintType3[DecodeHintType3["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS";
          DecodeHintType3[DecodeHintType3["TRY_HARDER"] = 3] = "TRY_HARDER";
          DecodeHintType3[DecodeHintType3["CHARACTER_SET"] = 4] = "CHARACTER_SET";
          DecodeHintType3[DecodeHintType3["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS";
          DecodeHintType3[DecodeHintType3["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT";
          DecodeHintType3[DecodeHintType3["ASSUME_GS1"] = 7] = "ASSUME_GS1";
          DecodeHintType3[DecodeHintType3["RETURN_CODABAR_START_END"] = 8] = "RETURN_CODABAR_START_END";
          DecodeHintType3[DecodeHintType3["NEED_RESULT_POINT_CALLBACK"] = 9] = "NEED_RESULT_POINT_CALLBACK";
          DecodeHintType3[DecodeHintType3["ALLOWED_EAN_EXTENSIONS"] = 10] = "ALLOWED_EAN_EXTENSIONS";
        })(DecodeHintType2 || (DecodeHintType2 = {}));
        var DecodeHintType$1 = DecodeHintType2;
        class FormatException extends Exception {
          static getFormatInstance() {
            return new FormatException();
          }
        }
        FormatException.kind = "FormatException";
        var CharacterSetValueIdentifiers;
        (function(CharacterSetValueIdentifiers2) {
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp437"] = 0] = "Cp437";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_1"] = 1] = "ISO8859_1";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_2"] = 2] = "ISO8859_2";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_3"] = 3] = "ISO8859_3";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_4"] = 4] = "ISO8859_4";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_5"] = 5] = "ISO8859_5";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_6"] = 6] = "ISO8859_6";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_7"] = 7] = "ISO8859_7";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_8"] = 8] = "ISO8859_8";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_9"] = 9] = "ISO8859_9";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_10"] = 10] = "ISO8859_10";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_11"] = 11] = "ISO8859_11";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_13"] = 12] = "ISO8859_13";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_14"] = 13] = "ISO8859_14";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_15"] = 14] = "ISO8859_15";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_16"] = 15] = "ISO8859_16";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["SJIS"] = 16] = "SJIS";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1250"] = 17] = "Cp1250";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1251"] = 18] = "Cp1251";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1252"] = 19] = "Cp1252";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1256"] = 20] = "Cp1256";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UTF8"] = 22] = "UTF8";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ASCII"] = 23] = "ASCII";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Big5"] = 24] = "Big5";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["GB18030"] = 25] = "GB18030";
          CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["EUC_KR"] = 26] = "EUC_KR";
        })(CharacterSetValueIdentifiers || (CharacterSetValueIdentifiers = {}));
        class CharacterSetECI {
          constructor(valueIdentifier, valuesParam, name, ...otherEncodingNames) {
            this.valueIdentifier = valueIdentifier;
            this.name = name;
            if (typeof valuesParam === "number") {
              this.values = Int32Array.from([valuesParam]);
            } else {
              this.values = valuesParam;
            }
            this.otherEncodingNames = otherEncodingNames;
            CharacterSetECI.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
            CharacterSetECI.NAME_TO_ECI.set(name, this);
            const values = this.values;
            for (let i = 0, length = values.length; i !== length; i++) {
              const v = values[i];
              CharacterSetECI.VALUES_TO_ECI.set(v, this);
            }
            for (const otherName of otherEncodingNames) {
              CharacterSetECI.NAME_TO_ECI.set(otherName, this);
            }
          }
          getValueIdentifier() {
            return this.valueIdentifier;
          }
          getName() {
            return this.name;
          }
          getValue() {
            return this.values[0];
          }
          static getCharacterSetECIByValue(value) {
            if (value < 0 || value >= 900) {
              throw new FormatException("incorect value");
            }
            const characterSet = CharacterSetECI.VALUES_TO_ECI.get(value);
            if (characterSet === void 0) {
              throw new FormatException("incorect value");
            }
            return characterSet;
          }
          static getCharacterSetECIByName(name) {
            const characterSet = CharacterSetECI.NAME_TO_ECI.get(name);
            if (characterSet === void 0) {
              throw new FormatException("incorect value");
            }
            return characterSet;
          }
          equals(o) {
            if (!(o instanceof CharacterSetECI)) {
              return false;
            }
            const other = o;
            return this.getName() === other.getName();
          }
        }
        CharacterSetECI.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map();
        CharacterSetECI.VALUES_TO_ECI = /* @__PURE__ */ new Map();
        CharacterSetECI.NAME_TO_ECI = /* @__PURE__ */ new Map();
        CharacterSetECI.Cp437 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), "Cp437");
        CharacterSetECI.ISO8859_1 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1");
        CharacterSetECI.ISO8859_2 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2");
        CharacterSetECI.ISO8859_3 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3");
        CharacterSetECI.ISO8859_4 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4");
        CharacterSetECI.ISO8859_5 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5");
        CharacterSetECI.ISO8859_6 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6");
        CharacterSetECI.ISO8859_7 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7");
        CharacterSetECI.ISO8859_8 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8");
        CharacterSetECI.ISO8859_9 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9");
        CharacterSetECI.ISO8859_10 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10");
        CharacterSetECI.ISO8859_11 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11");
        CharacterSetECI.ISO8859_13 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13");
        CharacterSetECI.ISO8859_14 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14");
        CharacterSetECI.ISO8859_15 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15");
        CharacterSetECI.ISO8859_16 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16");
        CharacterSetECI.SJIS = new CharacterSetECI(CharacterSetValueIdentifiers.SJIS, 20, "SJIS", "Shift_JIS");
        CharacterSetECI.Cp1250 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1250, 21, "Cp1250", "windows-1250");
        CharacterSetECI.Cp1251 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1251, 22, "Cp1251", "windows-1251");
        CharacterSetECI.Cp1252 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1252, 23, "Cp1252", "windows-1252");
        CharacterSetECI.Cp1256 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1256, 24, "Cp1256", "windows-1256");
        CharacterSetECI.UnicodeBigUnmarked = new CharacterSetECI(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig");
        CharacterSetECI.UTF8 = new CharacterSetECI(CharacterSetValueIdentifiers.UTF8, 26, "UTF8", "UTF-8");
        CharacterSetECI.ASCII = new CharacterSetECI(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII");
        CharacterSetECI.Big5 = new CharacterSetECI(CharacterSetValueIdentifiers.Big5, 28, "Big5");
        CharacterSetECI.GB18030 = new CharacterSetECI(CharacterSetValueIdentifiers.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK");
        CharacterSetECI.EUC_KR = new CharacterSetECI(CharacterSetValueIdentifiers.EUC_KR, 30, "EUC_KR", "EUC-KR");
        class UnsupportedOperationException extends Exception {
        }
        UnsupportedOperationException.kind = "UnsupportedOperationException";
        class StringEncoding {
          static decode(bytes, encoding) {
            const encodingName = this.encodingName(encoding);
            if (this.customDecoder) {
              return this.customDecoder(bytes, encodingName);
            }
            if (typeof TextDecoder === "undefined" || this.shouldDecodeOnFallback(encodingName)) {
              return this.decodeFallback(bytes, encodingName);
            }
            return new TextDecoder(encodingName).decode(bytes);
          }
          static shouldDecodeOnFallback(encodingName) {
            return !StringEncoding.isBrowser() && encodingName === "ISO-8859-1";
          }
          static encode(s, encoding) {
            const encodingName = this.encodingName(encoding);
            if (this.customEncoder) {
              return this.customEncoder(s, encodingName);
            }
            if (typeof TextEncoder === "undefined") {
              return this.encodeFallback(s);
            }
            return new TextEncoder().encode(s);
          }
          static isBrowser() {
            return typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";
          }
          static encodingName(encoding) {
            return typeof encoding === "string" ? encoding : encoding.getName();
          }
          static encodingCharacterSet(encoding) {
            if (encoding instanceof CharacterSetECI) {
              return encoding;
            }
            return CharacterSetECI.getCharacterSetECIByName(encoding);
          }
          static decodeFallback(bytes, encoding) {
            const characterSet = this.encodingCharacterSet(encoding);
            if (StringEncoding.isDecodeFallbackSupported(characterSet)) {
              let s = "";
              for (let i = 0, length = bytes.length; i < length; i++) {
                let h = bytes[i].toString(16);
                if (h.length < 2) {
                  h = "0" + h;
                }
                s += "%" + h;
              }
              return decodeURIComponent(s);
            }
            if (characterSet.equals(CharacterSetECI.UnicodeBigUnmarked)) {
              return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
            }
            throw new UnsupportedOperationException(`Encoding ${this.encodingName(encoding)} not supported by fallback.`);
          }
          static isDecodeFallbackSupported(characterSet) {
            return characterSet.equals(CharacterSetECI.UTF8) || characterSet.equals(CharacterSetECI.ISO8859_1) || characterSet.equals(CharacterSetECI.ASCII);
          }
          static encodeFallback(s) {
            const encodedURIstring = btoa(unescape(encodeURIComponent(s)));
            const charList = encodedURIstring.split("");
            const uintArray = [];
            for (let i = 0; i < charList.length; i++) {
              uintArray.push(charList[i].charCodeAt(0));
            }
            return new Uint8Array(uintArray);
          }
        }
        class StringUtils {
          static castAsNonUtf8Char(code, encoding = null) {
            const e = encoding ? encoding.getName() : this.ISO88591;
            return StringEncoding.decode(new Uint8Array([code]), e);
          }
          static guessEncoding(bytes, hints) {
            if (hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.CHARACTER_SET) !== void 0) {
              return hints.get(DecodeHintType$1.CHARACTER_SET).toString();
            }
            const length = bytes.length;
            let canBeISO88591 = true;
            let canBeShiftJIS = true;
            let canBeUTF8 = true;
            let utf8BytesLeft = 0;
            let utf2BytesChars = 0;
            let utf3BytesChars = 0;
            let utf4BytesChars = 0;
            let sjisBytesLeft = 0;
            let sjisKatakanaChars = 0;
            let sjisCurKatakanaWordLength = 0;
            let sjisCurDoubleBytesWordLength = 0;
            let sjisMaxKatakanaWordLength = 0;
            let sjisMaxDoubleBytesWordLength = 0;
            let isoHighOther = 0;
            const utf8bom = bytes.length > 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191;
            for (let i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
              const value = bytes[i] & 255;
              if (canBeUTF8) {
                if (utf8BytesLeft > 0) {
                  if ((value & 128) === 0) {
                    canBeUTF8 = false;
                  } else {
                    utf8BytesLeft--;
                  }
                } else if ((value & 128) !== 0) {
                  if ((value & 64) === 0) {
                    canBeUTF8 = false;
                  } else {
                    utf8BytesLeft++;
                    if ((value & 32) === 0) {
                      utf2BytesChars++;
                    } else {
                      utf8BytesLeft++;
                      if ((value & 16) === 0) {
                        utf3BytesChars++;
                      } else {
                        utf8BytesLeft++;
                        if ((value & 8) === 0) {
                          utf4BytesChars++;
                        } else {
                          canBeUTF8 = false;
                        }
                      }
                    }
                  }
                }
              }
              if (canBeISO88591) {
                if (value > 127 && value < 160) {
                  canBeISO88591 = false;
                } else if (value > 159) {
                  if (value < 192 || value === 215 || value === 247) {
                    isoHighOther++;
                  }
                }
              }
              if (canBeShiftJIS) {
                if (sjisBytesLeft > 0) {
                  if (value < 64 || value === 127 || value > 252) {
                    canBeShiftJIS = false;
                  } else {
                    sjisBytesLeft--;
                  }
                } else if (value === 128 || value === 160 || value > 239) {
                  canBeShiftJIS = false;
                } else if (value > 160 && value < 224) {
                  sjisKatakanaChars++;
                  sjisCurDoubleBytesWordLength = 0;
                  sjisCurKatakanaWordLength++;
                  if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
                    sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
                  }
                } else if (value > 127) {
                  sjisBytesLeft++;
                  sjisCurKatakanaWordLength = 0;
                  sjisCurDoubleBytesWordLength++;
                  if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
                    sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
                  }
                } else {
                  sjisCurKatakanaWordLength = 0;
                  sjisCurDoubleBytesWordLength = 0;
                }
              }
            }
            if (canBeUTF8 && utf8BytesLeft > 0) {
              canBeUTF8 = false;
            }
            if (canBeShiftJIS && sjisBytesLeft > 0) {
              canBeShiftJIS = false;
            }
            if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
              return StringUtils.UTF8;
            }
            if (canBeShiftJIS && (StringUtils.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
              return StringUtils.SHIFT_JIS;
            }
            if (canBeISO88591 && canBeShiftJIS) {
              return sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2 || isoHighOther * 10 >= length ? StringUtils.SHIFT_JIS : StringUtils.ISO88591;
            }
            if (canBeISO88591) {
              return StringUtils.ISO88591;
            }
            if (canBeShiftJIS) {
              return StringUtils.SHIFT_JIS;
            }
            if (canBeUTF8) {
              return StringUtils.UTF8;
            }
            return StringUtils.PLATFORM_DEFAULT_ENCODING;
          }
          static format(append, ...args) {
            let i = -1;
            function callback(exp, p0, p1, p2, p3, p4) {
              if (exp === "%%")
                return "%";
              if (args[++i] === void 0)
                return void 0;
              exp = p2 ? parseInt(p2.substr(1)) : void 0;
              let base = p3 ? parseInt(p3.substr(1)) : void 0;
              let val;
              switch (p4) {
                case "s":
                  val = args[i];
                  break;
                case "c":
                  val = args[i][0];
                  break;
                case "f":
                  val = parseFloat(args[i]).toFixed(exp);
                  break;
                case "p":
                  val = parseFloat(args[i]).toPrecision(exp);
                  break;
                case "e":
                  val = parseFloat(args[i]).toExponential(exp);
                  break;
                case "x":
                  val = parseInt(args[i]).toString(base ? base : 16);
                  break;
                case "d":
                  val = parseFloat(parseInt(args[i], base ? base : 10).toPrecision(exp)).toFixed(0);
                  break;
              }
              val = typeof val === "object" ? JSON.stringify(val) : (+val).toString(base);
              let size = parseInt(p1);
              let ch = p1 && p1[0] + "" === "0" ? "0" : " ";
              while (val.length < size)
                val = p0 !== void 0 ? val + ch : ch + val;
              return val;
            }
            let regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
            return append.replace(regex, callback);
          }
          static getBytes(str, encoding) {
            return StringEncoding.encode(str, encoding);
          }
          static getCharCode(str, index = 0) {
            return str.charCodeAt(index);
          }
          static getCharAt(charCode) {
            return String.fromCharCode(charCode);
          }
        }
        StringUtils.SHIFT_JIS = CharacterSetECI.SJIS.getName();
        StringUtils.GB2312 = "GB2312";
        StringUtils.ISO88591 = CharacterSetECI.ISO8859_1.getName();
        StringUtils.EUC_JP = "EUC_JP";
        StringUtils.UTF8 = CharacterSetECI.UTF8.getName();
        StringUtils.PLATFORM_DEFAULT_ENCODING = StringUtils.UTF8;
        StringUtils.ASSUME_SHIFT_JIS = false;
        class StringBuilder {
          constructor(value = "") {
            this.value = value;
          }
          enableDecoding(encoding) {
            this.encoding = encoding;
            return this;
          }
          append(s) {
            if (typeof s === "string") {
              this.value += s.toString();
            } else if (this.encoding) {
              this.value += StringUtils.castAsNonUtf8Char(s, this.encoding);
            } else {
              this.value += String.fromCharCode(s);
            }
            return this;
          }
          appendChars(str, offset, len) {
            for (let i = offset; offset < offset + len; i++) {
              this.append(str[i]);
            }
            return this;
          }
          length() {
            return this.value.length;
          }
          charAt(n) {
            return this.value.charAt(n);
          }
          deleteCharAt(n) {
            this.value = this.value.substr(0, n) + this.value.substring(n + 1);
          }
          setCharAt(n, c) {
            this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
          }
          substring(start, end) {
            return this.value.substring(start, end);
          }
          setLengthToZero() {
            this.value = "";
          }
          toString() {
            return this.value;
          }
          insert(n, c) {
            this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
          }
        }
        class BitMatrix {
          constructor(width, height, rowSize, bits) {
            this.width = width;
            this.height = height;
            this.rowSize = rowSize;
            this.bits = bits;
            if (height === void 0 || height === null) {
              height = width;
            }
            this.height = height;
            if (width < 1 || height < 1) {
              throw new IllegalArgumentException("Both dimensions must be greater than 0");
            }
            if (rowSize === void 0 || rowSize === null) {
              rowSize = Math.floor((width + 31) / 32);
            }
            this.rowSize = rowSize;
            if (bits === void 0 || bits === null) {
              this.bits = new Int32Array(this.rowSize * this.height);
            }
          }
          static parseFromBooleanArray(image) {
            const height = image.length;
            const width = image[0].length;
            const bits = new BitMatrix(width, height);
            for (let i = 0; i < height; i++) {
              const imageI = image[i];
              for (let j = 0; j < width; j++) {
                if (imageI[j]) {
                  bits.set(j, i);
                }
              }
            }
            return bits;
          }
          static parseFromString(stringRepresentation, setString, unsetString) {
            if (stringRepresentation === null) {
              throw new IllegalArgumentException("stringRepresentation cannot be null");
            }
            const bits = new Array(stringRepresentation.length);
            let bitsPos = 0;
            let rowStartPos = 0;
            let rowLength = -1;
            let nRows = 0;
            let pos = 0;
            while (pos < stringRepresentation.length) {
              if (stringRepresentation.charAt(pos) === "\n" || stringRepresentation.charAt(pos) === "\r") {
                if (bitsPos > rowStartPos) {
                  if (rowLength === -1) {
                    rowLength = bitsPos - rowStartPos;
                  } else if (bitsPos - rowStartPos !== rowLength) {
                    throw new IllegalArgumentException("row lengths do not match");
                  }
                  rowStartPos = bitsPos;
                  nRows++;
                }
                pos++;
              } else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
                pos += setString.length;
                bits[bitsPos] = true;
                bitsPos++;
              } else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
                pos += unsetString.length;
                bits[bitsPos] = false;
                bitsPos++;
              } else {
                throw new IllegalArgumentException("illegal character encountered: " + stringRepresentation.substring(pos));
              }
            }
            if (bitsPos > rowStartPos) {
              if (rowLength === -1) {
                rowLength = bitsPos - rowStartPos;
              } else if (bitsPos - rowStartPos !== rowLength) {
                throw new IllegalArgumentException("row lengths do not match");
              }
              nRows++;
            }
            const matrix = new BitMatrix(rowLength, nRows);
            for (let i = 0; i < bitsPos; i++) {
              if (bits[i]) {
                matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
              }
            }
            return matrix;
          }
          get(x, y) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            return (this.bits[offset] >>> (x & 31) & 1) !== 0;
          }
          set(x, y) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            this.bits[offset] |= 1 << (x & 31) & 4294967295;
          }
          unset(x, y) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            this.bits[offset] &= ~(1 << (x & 31) & 4294967295);
          }
          flip(x, y) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            this.bits[offset] ^= 1 << (x & 31) & 4294967295;
          }
          xor(mask) {
            if (this.width !== mask.getWidth() || this.height !== mask.getHeight() || this.rowSize !== mask.getRowSize()) {
              throw new IllegalArgumentException("input matrix dimensions do not match");
            }
            const rowArray = new BitArray(Math.floor(this.width / 32) + 1);
            const rowSize = this.rowSize;
            const bits = this.bits;
            for (let y = 0, height = this.height; y < height; y++) {
              const offset = y * rowSize;
              const row = mask.getRow(y, rowArray).getBitArray();
              for (let x = 0; x < rowSize; x++) {
                bits[offset + x] ^= row[x];
              }
            }
          }
          clear() {
            const bits = this.bits;
            const max = bits.length;
            for (let i = 0; i < max; i++) {
              bits[i] = 0;
            }
          }
          setRegion(left, top, width, height) {
            if (top < 0 || left < 0) {
              throw new IllegalArgumentException("Left and top must be nonnegative");
            }
            if (height < 1 || width < 1) {
              throw new IllegalArgumentException("Height and width must be at least 1");
            }
            const right = left + width;
            const bottom = top + height;
            if (bottom > this.height || right > this.width) {
              throw new IllegalArgumentException("The region must fit inside the matrix");
            }
            const rowSize = this.rowSize;
            const bits = this.bits;
            for (let y = top; y < bottom; y++) {
              const offset = y * rowSize;
              for (let x = left; x < right; x++) {
                bits[offset + Math.floor(x / 32)] |= 1 << (x & 31) & 4294967295;
              }
            }
          }
          getRow(y, row) {
            if (row === null || row === void 0 || row.getSize() < this.width) {
              row = new BitArray(this.width);
            } else {
              row.clear();
            }
            const rowSize = this.rowSize;
            const bits = this.bits;
            const offset = y * rowSize;
            for (let x = 0; x < rowSize; x++) {
              row.setBulk(x * 32, bits[offset + x]);
            }
            return row;
          }
          setRow(y, row) {
            System.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
          }
          rotate180() {
            const width = this.getWidth();
            const height = this.getHeight();
            let topRow = new BitArray(width);
            let bottomRow = new BitArray(width);
            for (let i = 0, length = Math.floor((height + 1) / 2); i < length; i++) {
              topRow = this.getRow(i, topRow);
              bottomRow = this.getRow(height - 1 - i, bottomRow);
              topRow.reverse();
              bottomRow.reverse();
              this.setRow(i, bottomRow);
              this.setRow(height - 1 - i, topRow);
            }
          }
          getEnclosingRectangle() {
            const width = this.width;
            const height = this.height;
            const rowSize = this.rowSize;
            const bits = this.bits;
            let left = width;
            let top = height;
            let right = -1;
            let bottom = -1;
            for (let y = 0; y < height; y++) {
              for (let x32 = 0; x32 < rowSize; x32++) {
                const theBits = bits[y * rowSize + x32];
                if (theBits !== 0) {
                  if (y < top) {
                    top = y;
                  }
                  if (y > bottom) {
                    bottom = y;
                  }
                  if (x32 * 32 < left) {
                    let bit = 0;
                    while ((theBits << 31 - bit & 4294967295) === 0) {
                      bit++;
                    }
                    if (x32 * 32 + bit < left) {
                      left = x32 * 32 + bit;
                    }
                  }
                  if (x32 * 32 + 31 > right) {
                    let bit = 31;
                    while (theBits >>> bit === 0) {
                      bit--;
                    }
                    if (x32 * 32 + bit > right) {
                      right = x32 * 32 + bit;
                    }
                  }
                }
              }
            }
            if (right < left || bottom < top) {
              return null;
            }
            return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
          }
          getTopLeftOnBit() {
            const rowSize = this.rowSize;
            const bits = this.bits;
            let bitsOffset = 0;
            while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
              bitsOffset++;
            }
            if (bitsOffset === bits.length) {
              return null;
            }
            const y = bitsOffset / rowSize;
            let x = bitsOffset % rowSize * 32;
            const theBits = bits[bitsOffset];
            let bit = 0;
            while ((theBits << 31 - bit & 4294967295) === 0) {
              bit++;
            }
            x += bit;
            return Int32Array.from([x, y]);
          }
          getBottomRightOnBit() {
            const rowSize = this.rowSize;
            const bits = this.bits;
            let bitsOffset = bits.length - 1;
            while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
              bitsOffset--;
            }
            if (bitsOffset < 0) {
              return null;
            }
            const y = Math.floor(bitsOffset / rowSize);
            let x = Math.floor(bitsOffset % rowSize) * 32;
            const theBits = bits[bitsOffset];
            let bit = 31;
            while (theBits >>> bit === 0) {
              bit--;
            }
            x += bit;
            return Int32Array.from([x, y]);
          }
          getWidth() {
            return this.width;
          }
          getHeight() {
            return this.height;
          }
          getRowSize() {
            return this.rowSize;
          }
          equals(o) {
            if (!(o instanceof BitMatrix)) {
              return false;
            }
            const other = o;
            return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize && Arrays.equals(this.bits, other.bits);
          }
          hashCode() {
            let hash = this.width;
            hash = 31 * hash + this.width;
            hash = 31 * hash + this.height;
            hash = 31 * hash + this.rowSize;
            hash = 31 * hash + Arrays.hashCode(this.bits);
            return hash;
          }
          toString(setString = "X ", unsetString = "  ", lineSeparator = "\n") {
            return this.buildToString(setString, unsetString, lineSeparator);
          }
          buildToString(setString, unsetString, lineSeparator) {
            let result = new StringBuilder();
            for (let y = 0, height = this.height; y < height; y++) {
              for (let x = 0, width = this.width; x < width; x++) {
                result.append(this.get(x, y) ? setString : unsetString);
              }
              result.append(lineSeparator);
            }
            return result.toString();
          }
          clone() {
            return new BitMatrix(this.width, this.height, this.rowSize, this.bits.slice());
          }
        }
        class NotFoundException extends Exception {
          static getNotFoundInstance() {
            return new NotFoundException();
          }
        }
        NotFoundException.kind = "NotFoundException";
        class GlobalHistogramBinarizer extends Binarizer {
          constructor(source) {
            super(source);
            this.luminances = GlobalHistogramBinarizer.EMPTY;
            this.buckets = new Int32Array(GlobalHistogramBinarizer.LUMINANCE_BUCKETS);
          }
          getBlackRow(y, row) {
            const source = this.getLuminanceSource();
            const width = source.getWidth();
            if (row === void 0 || row === null || row.getSize() < width) {
              row = new BitArray(width);
            } else {
              row.clear();
            }
            this.initArrays(width);
            const localLuminances = source.getRow(y, this.luminances);
            const localBuckets = this.buckets;
            for (let x = 0; x < width; x++) {
              localBuckets[(localLuminances[x] & 255) >> GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;
            }
            const blackPoint = GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);
            if (width < 3) {
              for (let x = 0; x < width; x++) {
                if ((localLuminances[x] & 255) < blackPoint) {
                  row.set(x);
                }
              }
            } else {
              let left = localLuminances[0] & 255;
              let center = localLuminances[1] & 255;
              for (let x = 1; x < width - 1; x++) {
                const right = localLuminances[x + 1] & 255;
                if ((center * 4 - left - right) / 2 < blackPoint) {
                  row.set(x);
                }
                left = center;
                center = right;
              }
            }
            return row;
          }
          getBlackMatrix() {
            const source = this.getLuminanceSource();
            const width = source.getWidth();
            const height = source.getHeight();
            const matrix = new BitMatrix(width, height);
            this.initArrays(width);
            const localBuckets = this.buckets;
            for (let y = 1; y < 5; y++) {
              const row = Math.floor(height * y / 5);
              const localLuminances2 = source.getRow(row, this.luminances);
              const right = Math.floor(width * 4 / 5);
              for (let x = Math.floor(width / 5); x < right; x++) {
                const pixel = localLuminances2[x] & 255;
                localBuckets[pixel >> GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;
              }
            }
            const blackPoint = GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);
            const localLuminances = source.getMatrix();
            for (let y = 0; y < height; y++) {
              const offset = y * width;
              for (let x = 0; x < width; x++) {
                const pixel = localLuminances[offset + x] & 255;
                if (pixel < blackPoint) {
                  matrix.set(x, y);
                }
              }
            }
            return matrix;
          }
          createBinarizer(source) {
            return new GlobalHistogramBinarizer(source);
          }
          initArrays(luminanceSize) {
            if (this.luminances.length < luminanceSize) {
              this.luminances = new Uint8ClampedArray(luminanceSize);
            }
            const buckets = this.buckets;
            for (let x = 0; x < GlobalHistogramBinarizer.LUMINANCE_BUCKETS; x++) {
              buckets[x] = 0;
            }
          }
          static estimateBlackPoint(buckets) {
            const numBuckets = buckets.length;
            let maxBucketCount = 0;
            let firstPeak = 0;
            let firstPeakSize = 0;
            for (let x = 0; x < numBuckets; x++) {
              if (buckets[x] > firstPeakSize) {
                firstPeak = x;
                firstPeakSize = buckets[x];
              }
              if (buckets[x] > maxBucketCount) {
                maxBucketCount = buckets[x];
              }
            }
            let secondPeak = 0;
            let secondPeakScore = 0;
            for (let x = 0; x < numBuckets; x++) {
              const distanceToBiggest = x - firstPeak;
              const score = buckets[x] * distanceToBiggest * distanceToBiggest;
              if (score > secondPeakScore) {
                secondPeak = x;
                secondPeakScore = score;
              }
            }
            if (firstPeak > secondPeak) {
              const temp = firstPeak;
              firstPeak = secondPeak;
              secondPeak = temp;
            }
            if (secondPeak - firstPeak <= numBuckets / 16) {
              throw new NotFoundException();
            }
            let bestValley = secondPeak - 1;
            let bestValleyScore = -1;
            for (let x = secondPeak - 1; x > firstPeak; x--) {
              const fromFirst = x - firstPeak;
              const score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
              if (score > bestValleyScore) {
                bestValley = x;
                bestValleyScore = score;
              }
            }
            return bestValley << GlobalHistogramBinarizer.LUMINANCE_SHIFT;
          }
        }
        GlobalHistogramBinarizer.LUMINANCE_BITS = 5;
        GlobalHistogramBinarizer.LUMINANCE_SHIFT = 8 - GlobalHistogramBinarizer.LUMINANCE_BITS;
        GlobalHistogramBinarizer.LUMINANCE_BUCKETS = 1 << GlobalHistogramBinarizer.LUMINANCE_BITS;
        GlobalHistogramBinarizer.EMPTY = Uint8ClampedArray.from([0]);
        class HybridBinarizer2 extends GlobalHistogramBinarizer {
          constructor(source) {
            super(source);
            this.matrix = null;
          }
          getBlackMatrix() {
            if (this.matrix !== null) {
              return this.matrix;
            }
            const source = this.getLuminanceSource();
            const width = source.getWidth();
            const height = source.getHeight();
            if (width >= HybridBinarizer2.MINIMUM_DIMENSION && height >= HybridBinarizer2.MINIMUM_DIMENSION) {
              const luminances = source.getMatrix();
              let subWidth = width >> HybridBinarizer2.BLOCK_SIZE_POWER;
              if ((width & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
                subWidth++;
              }
              let subHeight = height >> HybridBinarizer2.BLOCK_SIZE_POWER;
              if ((height & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
                subHeight++;
              }
              const blackPoints = HybridBinarizer2.calculateBlackPoints(luminances, subWidth, subHeight, width, height);
              const newMatrix = new BitMatrix(width, height);
              HybridBinarizer2.calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, newMatrix);
              this.matrix = newMatrix;
            } else {
              this.matrix = super.getBlackMatrix();
            }
            return this.matrix;
          }
          createBinarizer(source) {
            return new HybridBinarizer2(source);
          }
          static calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, matrix) {
            const maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
            const maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
            for (let y = 0; y < subHeight; y++) {
              let yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
              if (yoffset > maxYOffset) {
                yoffset = maxYOffset;
              }
              const top = HybridBinarizer2.cap(y, 2, subHeight - 3);
              for (let x = 0; x < subWidth; x++) {
                let xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
                if (xoffset > maxXOffset) {
                  xoffset = maxXOffset;
                }
                const left = HybridBinarizer2.cap(x, 2, subWidth - 3);
                let sum = 0;
                for (let z = -2; z <= 2; z++) {
                  const blackRow = blackPoints[top + z];
                  sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
                }
                const average = sum / 25;
                HybridBinarizer2.thresholdBlock(luminances, xoffset, yoffset, average, width, matrix);
              }
            }
          }
          static cap(value, min, max) {
            return value < min ? min : value > max ? max : value;
          }
          static thresholdBlock(luminances, xoffset, yoffset, threshold, stride, matrix) {
            for (let y = 0, offset = yoffset * stride + xoffset; y < HybridBinarizer2.BLOCK_SIZE; y++, offset += stride) {
              for (let x = 0; x < HybridBinarizer2.BLOCK_SIZE; x++) {
                if ((luminances[offset + x] & 255) <= threshold) {
                  matrix.set(xoffset + x, yoffset + y);
                }
              }
            }
          }
          static calculateBlackPoints(luminances, subWidth, subHeight, width, height) {
            const maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
            const maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
            const blackPoints = new Array(subHeight);
            for (let y = 0; y < subHeight; y++) {
              blackPoints[y] = new Int32Array(subWidth);
              let yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
              if (yoffset > maxYOffset) {
                yoffset = maxYOffset;
              }
              for (let x = 0; x < subWidth; x++) {
                let xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
                if (xoffset > maxXOffset) {
                  xoffset = maxXOffset;
                }
                let sum = 0;
                let min = 255;
                let max = 0;
                for (let yy = 0, offset = yoffset * width + xoffset; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
                  for (let xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
                    const pixel = luminances[offset + xx] & 255;
                    sum += pixel;
                    if (pixel < min) {
                      min = pixel;
                    }
                    if (pixel > max) {
                      max = pixel;
                    }
                  }
                  if (max - min > HybridBinarizer2.MIN_DYNAMIC_RANGE) {
                    for (yy++, offset += width; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
                      for (let xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
                        sum += luminances[offset + xx] & 255;
                      }
                    }
                  }
                }
                let average = sum >> HybridBinarizer2.BLOCK_SIZE_POWER * 2;
                if (max - min <= HybridBinarizer2.MIN_DYNAMIC_RANGE) {
                  average = min / 2;
                  if (y > 0 && x > 0) {
                    const averageNeighborBlackPoint = (blackPoints[y - 1][x] + 2 * blackPoints[y][x - 1] + blackPoints[y - 1][x - 1]) / 4;
                    if (min < averageNeighborBlackPoint) {
                      average = averageNeighborBlackPoint;
                    }
                  }
                }
                blackPoints[y][x] = average;
              }
            }
            return blackPoints;
          }
        }
        HybridBinarizer2.BLOCK_SIZE_POWER = 3;
        HybridBinarizer2.BLOCK_SIZE = 1 << HybridBinarizer2.BLOCK_SIZE_POWER;
        HybridBinarizer2.BLOCK_SIZE_MASK = HybridBinarizer2.BLOCK_SIZE - 1;
        HybridBinarizer2.MINIMUM_DIMENSION = HybridBinarizer2.BLOCK_SIZE * 5;
        HybridBinarizer2.MIN_DYNAMIC_RANGE = 24;
        class LuminanceSource {
          constructor(width, height) {
            this.width = width;
            this.height = height;
          }
          getWidth() {
            return this.width;
          }
          getHeight() {
            return this.height;
          }
          isCropSupported() {
            return false;
          }
          crop(left, top, width, height) {
            throw new UnsupportedOperationException("This luminance source does not support cropping.");
          }
          isRotateSupported() {
            return false;
          }
          rotateCounterClockwise() {
            throw new UnsupportedOperationException("This luminance source does not support rotation by 90 degrees.");
          }
          rotateCounterClockwise45() {
            throw new UnsupportedOperationException("This luminance source does not support rotation by 45 degrees.");
          }
          toString() {
            const row = new Uint8ClampedArray(this.width);
            let result = new StringBuilder();
            for (let y = 0; y < this.height; y++) {
              const sourceRow = this.getRow(y, row);
              for (let x = 0; x < this.width; x++) {
                const luminance = sourceRow[x] & 255;
                let c;
                if (luminance < 64) {
                  c = "#";
                } else if (luminance < 128) {
                  c = "+";
                } else if (luminance < 192) {
                  c = ".";
                } else {
                  c = " ";
                }
                result.append(c);
              }
              result.append("\n");
            }
            return result.toString();
          }
        }
        class InvertedLuminanceSource extends LuminanceSource {
          constructor(delegate) {
            super(delegate.getWidth(), delegate.getHeight());
            this.delegate = delegate;
          }
          getRow(y, row) {
            const sourceRow = this.delegate.getRow(y, row);
            const width = this.getWidth();
            for (let i = 0; i < width; i++) {
              sourceRow[i] = 255 - (sourceRow[i] & 255);
            }
            return sourceRow;
          }
          getMatrix() {
            const matrix = this.delegate.getMatrix();
            const length = this.getWidth() * this.getHeight();
            const invertedMatrix = new Uint8ClampedArray(length);
            for (let i = 0; i < length; i++) {
              invertedMatrix[i] = 255 - (matrix[i] & 255);
            }
            return invertedMatrix;
          }
          isCropSupported() {
            return this.delegate.isCropSupported();
          }
          crop(left, top, width, height) {
            return new InvertedLuminanceSource(this.delegate.crop(left, top, width, height));
          }
          isRotateSupported() {
            return this.delegate.isRotateSupported();
          }
          invert() {
            return this.delegate;
          }
          rotateCounterClockwise() {
            return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise());
          }
          rotateCounterClockwise45() {
            return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise45());
          }
        }
        class HTMLCanvasElementLuminanceSource2 extends LuminanceSource {
          constructor(canvas) {
            super(canvas.width, canvas.height);
            this.canvas = canvas;
            this.tempCanvasElement = null;
            this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(canvas);
          }
          static makeBufferFromCanvasImageData(canvas) {
            const imageData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
            return HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
          }
          static toGrayscaleBuffer(imageBuffer, width, height) {
            const grayscaleBuffer = new Uint8ClampedArray(width * height);
            for (let i = 0, j = 0, length = imageBuffer.length; i < length; i += 4, j++) {
              let gray;
              const alpha = imageBuffer[i + 3];
              if (alpha === 0) {
                gray = 255;
              } else {
                const pixelR = imageBuffer[i];
                const pixelG = imageBuffer[i + 1];
                const pixelB = imageBuffer[i + 2];
                gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 512 >> 10;
              }
              grayscaleBuffer[j] = gray;
            }
            return grayscaleBuffer;
          }
          getRow(y, row) {
            if (y < 0 || y >= this.getHeight()) {
              throw new IllegalArgumentException("Requested row is outside the image: " + y);
            }
            const width = this.getWidth();
            const start = y * width;
            if (row === null) {
              row = this.buffer.slice(start, start + width);
            } else {
              if (row.length < width) {
                row = new Uint8ClampedArray(width);
              }
              row.set(this.buffer.slice(start, start + width));
            }
            return row;
          }
          getMatrix() {
            return this.buffer;
          }
          isCropSupported() {
            return true;
          }
          crop(left, top, width, height) {
            super.crop(left, top, width, height);
            return this;
          }
          isRotateSupported() {
            return true;
          }
          rotateCounterClockwise() {
            this.rotate(-90);
            return this;
          }
          rotateCounterClockwise45() {
            this.rotate(-45);
            return this;
          }
          getTempCanvasElement() {
            if (this.tempCanvasElement === null) {
              const tempCanvasElement = this.canvas.ownerDocument.createElement("canvas");
              tempCanvasElement.width = this.canvas.width;
              tempCanvasElement.height = this.canvas.height;
              this.tempCanvasElement = tempCanvasElement;
            }
            return this.tempCanvasElement;
          }
          rotate(angle) {
            const tempCanvasElement = this.getTempCanvasElement();
            const tempContext = tempCanvasElement.getContext("2d");
            const angleRadians = angle * HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS;
            const width = this.canvas.width;
            const height = this.canvas.height;
            const newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
            const newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
            tempCanvasElement.width = newWidth;
            tempCanvasElement.height = newHeight;
            tempContext.translate(newWidth / 2, newHeight / 2);
            tempContext.rotate(angleRadians);
            tempContext.drawImage(this.canvas, width / -2, height / -2);
            this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(tempCanvasElement);
            return this;
          }
          invert() {
            return new InvertedLuminanceSource(this);
          }
        }
        HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS = Math.PI / 180;
        class VideoInputDevice {
          constructor(deviceId, label, groupId) {
            this.deviceId = deviceId;
            this.label = label;
            this.kind = "videoinput";
            this.groupId = groupId || void 0;
          }
          toJSON() {
            return {
              kind: this.kind,
              groupId: this.groupId,
              deviceId: this.deviceId,
              label: this.label
            };
          }
        }
        var __awaiter8 = (globalThis || global || self || window || void 0) && (globalThis || global || self || window || void 0).__awaiter || function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        class BrowserCodeReader {
          constructor(reader, timeBetweenScansMillis = 500, _hints) {
            this.reader = reader;
            this.timeBetweenScansMillis = timeBetweenScansMillis;
            this._hints = _hints;
            this._stopContinuousDecode = false;
            this._stopAsyncDecode = false;
            this._timeBetweenDecodingAttempts = 0;
          }
          get hasNavigator() {
            return typeof navigator !== "undefined";
          }
          get isMediaDevicesSuported() {
            return this.hasNavigator && !!navigator.mediaDevices;
          }
          get canEnumerateDevices() {
            return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
          }
          get timeBetweenDecodingAttempts() {
            return this._timeBetweenDecodingAttempts;
          }
          set timeBetweenDecodingAttempts(millis) {
            this._timeBetweenDecodingAttempts = millis < 0 ? 0 : millis;
          }
          set hints(hints) {
            this._hints = hints || null;
          }
          get hints() {
            return this._hints;
          }
          listVideoInputDevices() {
            return __awaiter8(this, void 0, void 0, function* () {
              if (!this.hasNavigator) {
                throw new Error("Can't enumerate devices, navigator is not present.");
              }
              if (!this.canEnumerateDevices) {
                throw new Error("Can't enumerate devices, method not supported.");
              }
              const devices = yield navigator.mediaDevices.enumerateDevices();
              const videoDevices = [];
              for (const device of devices) {
                const kind = device.kind === "video" ? "videoinput" : device.kind;
                if (kind !== "videoinput") {
                  continue;
                }
                const deviceId = device.deviceId || device.id;
                const label = device.label || `Video device ${videoDevices.length + 1}`;
                const groupId = device.groupId;
                const videoDevice = { deviceId, label, kind, groupId };
                videoDevices.push(videoDevice);
              }
              return videoDevices;
            });
          }
          getVideoInputDevices() {
            return __awaiter8(this, void 0, void 0, function* () {
              const devices = yield this.listVideoInputDevices();
              return devices.map((d) => new VideoInputDevice(d.deviceId, d.label));
            });
          }
          findDeviceById(deviceId) {
            return __awaiter8(this, void 0, void 0, function* () {
              const devices = yield this.listVideoInputDevices();
              if (!devices) {
                return null;
              }
              return devices.find((x) => x.deviceId === deviceId);
            });
          }
          decodeFromInputVideoDevice(deviceId, videoSource) {
            return __awaiter8(this, void 0, void 0, function* () {
              return yield this.decodeOnceFromVideoDevice(deviceId, videoSource);
            });
          }
          decodeOnceFromVideoDevice(deviceId, videoSource) {
            return __awaiter8(this, void 0, void 0, function* () {
              this.reset();
              let videoConstraints;
              if (!deviceId) {
                videoConstraints = { facingMode: "environment" };
              } else {
                videoConstraints = { deviceId: { exact: deviceId } };
              }
              const constraints = { video: videoConstraints };
              return yield this.decodeOnceFromConstraints(constraints, videoSource);
            });
          }
          decodeOnceFromConstraints(constraints, videoSource) {
            return __awaiter8(this, void 0, void 0, function* () {
              const stream = yield navigator.mediaDevices.getUserMedia(constraints);
              return yield this.decodeOnceFromStream(stream, videoSource);
            });
          }
          decodeOnceFromStream(stream, videoSource) {
            return __awaiter8(this, void 0, void 0, function* () {
              this.reset();
              const video = yield this.attachStreamToVideo(stream, videoSource);
              const result = yield this.decodeOnce(video);
              return result;
            });
          }
          decodeFromInputVideoDeviceContinuously(deviceId, videoSource, callbackFn) {
            return __awaiter8(this, void 0, void 0, function* () {
              return yield this.decodeFromVideoDevice(deviceId, videoSource, callbackFn);
            });
          }
          decodeFromVideoDevice(deviceId, videoSource, callbackFn) {
            return __awaiter8(this, void 0, void 0, function* () {
              let videoConstraints;
              if (!deviceId) {
                videoConstraints = { facingMode: "environment" };
              } else {
                videoConstraints = { deviceId: { exact: deviceId } };
              }
              const constraints = { video: videoConstraints };
              return yield this.decodeFromConstraints(constraints, videoSource, callbackFn);
            });
          }
          decodeFromConstraints(constraints, videoSource, callbackFn) {
            return __awaiter8(this, void 0, void 0, function* () {
              const stream = yield navigator.mediaDevices.getUserMedia(constraints);
              return yield this.decodeFromStream(stream, videoSource, callbackFn);
            });
          }
          decodeFromStream(stream, videoSource, callbackFn) {
            return __awaiter8(this, void 0, void 0, function* () {
              this.reset();
              const video = yield this.attachStreamToVideo(stream, videoSource);
              return yield this.decodeContinuously(video, callbackFn);
            });
          }
          stopAsyncDecode() {
            this._stopAsyncDecode = true;
          }
          stopContinuousDecode() {
            this._stopContinuousDecode = true;
          }
          attachStreamToVideo(stream, videoSource) {
            return __awaiter8(this, void 0, void 0, function* () {
              const videoElement = this.prepareVideoElement(videoSource);
              this.addVideoSource(videoElement, stream);
              this.videoElement = videoElement;
              this.stream = stream;
              yield this.playVideoOnLoadAsync(videoElement);
              return videoElement;
            });
          }
          playVideoOnLoadAsync(videoElement) {
            return new Promise((resolve, reject) => this.playVideoOnLoad(videoElement, () => resolve()));
          }
          playVideoOnLoad(element, callbackFn) {
            this.videoEndedListener = () => this.stopStreams();
            this.videoCanPlayListener = () => this.tryPlayVideo(element);
            element.addEventListener("ended", this.videoEndedListener);
            element.addEventListener("canplay", this.videoCanPlayListener);
            element.addEventListener("playing", callbackFn);
            this.tryPlayVideo(element);
          }
          isVideoPlaying(video) {
            return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
          }
          tryPlayVideo(videoElement) {
            return __awaiter8(this, void 0, void 0, function* () {
              if (this.isVideoPlaying(videoElement)) {
                console.warn("Trying to play video that is already playing.");
                return;
              }
              try {
                yield videoElement.play();
              } catch (_a) {
                console.warn("It was not possible to play the video.");
              }
            });
          }
          getMediaElement(mediaElementId, type) {
            const mediaElement = document.getElementById(mediaElementId);
            if (!mediaElement) {
              throw new ArgumentException(`element with id '${mediaElementId}' not found`);
            }
            if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
              throw new ArgumentException(`element with id '${mediaElementId}' must be an ${type} element`);
            }
            return mediaElement;
          }
          decodeFromImage(source, url) {
            if (!source && !url) {
              throw new ArgumentException("either imageElement with a src set or an url must be provided");
            }
            if (url && !source) {
              return this.decodeFromImageUrl(url);
            }
            return this.decodeFromImageElement(source);
          }
          decodeFromVideo(source, url) {
            if (!source && !url) {
              throw new ArgumentException("Either an element with a src set or an URL must be provided");
            }
            if (url && !source) {
              return this.decodeFromVideoUrl(url);
            }
            return this.decodeFromVideoElement(source);
          }
          decodeFromVideoContinuously(source, url, callbackFn) {
            if (source === void 0 && url === void 0) {
              throw new ArgumentException("Either an element with a src set or an URL must be provided");
            }
            if (url && !source) {
              return this.decodeFromVideoUrlContinuously(url, callbackFn);
            }
            return this.decodeFromVideoElementContinuously(source, callbackFn);
          }
          decodeFromImageElement(source) {
            if (!source) {
              throw new ArgumentException("An image element must be provided.");
            }
            this.reset();
            const element = this.prepareImageElement(source);
            this.imageElement = element;
            let task;
            if (this.isImageLoaded(element)) {
              task = this.decodeOnce(element, false, true);
            } else {
              task = this._decodeOnLoadImage(element);
            }
            return task;
          }
          decodeFromVideoElement(source) {
            const element = this._decodeFromVideoElementSetup(source);
            return this._decodeOnLoadVideo(element);
          }
          decodeFromVideoElementContinuously(source, callbackFn) {
            const element = this._decodeFromVideoElementSetup(source);
            return this._decodeOnLoadVideoContinuously(element, callbackFn);
          }
          _decodeFromVideoElementSetup(source) {
            if (!source) {
              throw new ArgumentException("A video element must be provided.");
            }
            this.reset();
            const element = this.prepareVideoElement(source);
            this.videoElement = element;
            return element;
          }
          decodeFromImageUrl(url) {
            if (!url) {
              throw new ArgumentException("An URL must be provided.");
            }
            this.reset();
            const element = this.prepareImageElement();
            this.imageElement = element;
            const decodeTask = this._decodeOnLoadImage(element);
            element.src = url;
            return decodeTask;
          }
          decodeFromVideoUrl(url) {
            if (!url) {
              throw new ArgumentException("An URL must be provided.");
            }
            this.reset();
            const element = this.prepareVideoElement();
            const decodeTask = this.decodeFromVideoElement(element);
            element.src = url;
            return decodeTask;
          }
          decodeFromVideoUrlContinuously(url, callbackFn) {
            if (!url) {
              throw new ArgumentException("An URL must be provided.");
            }
            this.reset();
            const element = this.prepareVideoElement();
            const decodeTask = this.decodeFromVideoElementContinuously(element, callbackFn);
            element.src = url;
            return decodeTask;
          }
          _decodeOnLoadImage(element) {
            return new Promise((resolve, reject) => {
              this.imageLoadedListener = () => this.decodeOnce(element, false, true).then(resolve, reject);
              element.addEventListener("load", this.imageLoadedListener);
            });
          }
          _decodeOnLoadVideo(videoElement) {
            return __awaiter8(this, void 0, void 0, function* () {
              yield this.playVideoOnLoadAsync(videoElement);
              return yield this.decodeOnce(videoElement);
            });
          }
          _decodeOnLoadVideoContinuously(videoElement, callbackFn) {
            return __awaiter8(this, void 0, void 0, function* () {
              yield this.playVideoOnLoadAsync(videoElement);
              this.decodeContinuously(videoElement, callbackFn);
            });
          }
          isImageLoaded(img) {
            if (!img.complete) {
              return false;
            }
            if (img.naturalWidth === 0) {
              return false;
            }
            return true;
          }
          prepareImageElement(imageSource) {
            let imageElement;
            if (typeof imageSource === "undefined") {
              imageElement = document.createElement("img");
              imageElement.width = 200;
              imageElement.height = 200;
            }
            if (typeof imageSource === "string") {
              imageElement = this.getMediaElement(imageSource, "img");
            }
            if (imageSource instanceof HTMLImageElement) {
              imageElement = imageSource;
            }
            return imageElement;
          }
          prepareVideoElement(videoSource) {
            let videoElement;
            if (!videoSource && typeof document !== "undefined") {
              videoElement = document.createElement("video");
              videoElement.width = 200;
              videoElement.height = 200;
            }
            if (typeof videoSource === "string") {
              videoElement = this.getMediaElement(videoSource, "video");
            }
            if (videoSource instanceof HTMLVideoElement) {
              videoElement = videoSource;
            }
            videoElement.setAttribute("autoplay", "true");
            videoElement.setAttribute("muted", "true");
            videoElement.setAttribute("playsinline", "true");
            return videoElement;
          }
          decodeOnce(element, retryIfNotFound = true, retryIfChecksumOrFormatError = true) {
            this._stopAsyncDecode = false;
            const loop = (resolve, reject) => {
              if (this._stopAsyncDecode) {
                reject(new NotFoundException("Video stream has ended before any code could be detected."));
                this._stopAsyncDecode = void 0;
                return;
              }
              try {
                const result = this.decode(element);
                resolve(result);
              } catch (e) {
                const ifNotFound = retryIfNotFound && e instanceof NotFoundException;
                const isChecksumOrFormatError = e instanceof ChecksumException || e instanceof FormatException;
                const ifChecksumOrFormat = isChecksumOrFormatError && retryIfChecksumOrFormatError;
                if (ifNotFound || ifChecksumOrFormat) {
                  return setTimeout(loop, this._timeBetweenDecodingAttempts, resolve, reject);
                }
                reject(e);
              }
            };
            return new Promise((resolve, reject) => loop(resolve, reject));
          }
          decodeContinuously(element, callbackFn) {
            this._stopContinuousDecode = false;
            const loop = () => {
              if (this._stopContinuousDecode) {
                this._stopContinuousDecode = void 0;
                return;
              }
              try {
                const result = this.decode(element);
                callbackFn(result, null);
                setTimeout(loop, this.timeBetweenScansMillis);
              } catch (e) {
                callbackFn(null, e);
                const isChecksumOrFormatError = e instanceof ChecksumException || e instanceof FormatException;
                const isNotFound = e instanceof NotFoundException;
                if (isChecksumOrFormatError || isNotFound) {
                  setTimeout(loop, this._timeBetweenDecodingAttempts);
                }
              }
            };
            loop();
          }
          decode(element) {
            const binaryBitmap = this.createBinaryBitmap(element);
            return this.decodeBitmap(binaryBitmap);
          }
          _isHTMLVideoElement(mediaElement) {
            const potentialVideo = mediaElement;
            return potentialVideo.videoWidth !== 0;
          }
          drawFrameOnCanvas(srcElement, dimensions, canvasElementContext) {
            if (!dimensions) {
              dimensions = {
                sx: 0,
                sy: 0,
                sWidth: srcElement.videoWidth,
                sHeight: srcElement.videoHeight,
                dx: 0,
                dy: 0,
                dWidth: srcElement.videoWidth,
                dHeight: srcElement.videoHeight
              };
            }
            if (!canvasElementContext) {
              canvasElementContext = this.captureCanvasContext;
            }
            canvasElementContext.drawImage(srcElement, dimensions.sx, dimensions.sy, dimensions.sWidth, dimensions.sHeight, dimensions.dx, dimensions.dy, dimensions.dWidth, dimensions.dHeight);
          }
          drawImageOnCanvas(srcElement, dimensions, canvasElementContext = this.captureCanvasContext) {
            if (!dimensions) {
              dimensions = {
                sx: 0,
                sy: 0,
                sWidth: srcElement.naturalWidth,
                sHeight: srcElement.naturalHeight,
                dx: 0,
                dy: 0,
                dWidth: srcElement.naturalWidth,
                dHeight: srcElement.naturalHeight
              };
            }
            if (!canvasElementContext) {
              canvasElementContext = this.captureCanvasContext;
            }
            canvasElementContext.drawImage(srcElement, dimensions.sx, dimensions.sy, dimensions.sWidth, dimensions.sHeight, dimensions.dx, dimensions.dy, dimensions.dWidth, dimensions.dHeight);
          }
          createBinaryBitmap(mediaElement) {
            const ctx = this.getCaptureCanvasContext(mediaElement);
            if (this._isHTMLVideoElement(mediaElement)) {
              this.drawFrameOnCanvas(mediaElement);
            } else {
              this.drawImageOnCanvas(mediaElement);
            }
            const canvas = this.getCaptureCanvas(mediaElement);
            const luminanceSource = new HTMLCanvasElementLuminanceSource2(canvas);
            const hybridBinarizer = new HybridBinarizer2(luminanceSource);
            return new BinaryBitmap2(hybridBinarizer);
          }
          getCaptureCanvasContext(mediaElement) {
            if (!this.captureCanvasContext) {
              const elem = this.getCaptureCanvas(mediaElement);
              const ctx = elem.getContext("2d");
              this.captureCanvasContext = ctx;
            }
            return this.captureCanvasContext;
          }
          getCaptureCanvas(mediaElement) {
            if (!this.captureCanvas) {
              const elem = this.createCaptureCanvas(mediaElement);
              this.captureCanvas = elem;
            }
            return this.captureCanvas;
          }
          decodeBitmap(binaryBitmap) {
            return this.reader.decode(binaryBitmap, this._hints);
          }
          createCaptureCanvas(mediaElement) {
            if (typeof document === "undefined") {
              this._destroyCaptureCanvas();
              return null;
            }
            const canvasElement = document.createElement("canvas");
            let width;
            let height;
            if (typeof mediaElement !== "undefined") {
              if (mediaElement instanceof HTMLVideoElement) {
                width = mediaElement.videoWidth;
                height = mediaElement.videoHeight;
              } else if (mediaElement instanceof HTMLImageElement) {
                width = mediaElement.naturalWidth || mediaElement.width;
                height = mediaElement.naturalHeight || mediaElement.height;
              }
            }
            canvasElement.style.width = width + "px";
            canvasElement.style.height = height + "px";
            canvasElement.width = width;
            canvasElement.height = height;
            return canvasElement;
          }
          stopStreams() {
            if (this.stream) {
              this.stream.getVideoTracks().forEach((t) => t.stop());
              this.stream = void 0;
            }
            if (this._stopAsyncDecode === false) {
              this.stopAsyncDecode();
            }
            if (this._stopContinuousDecode === false) {
              this.stopContinuousDecode();
            }
          }
          reset() {
            this.stopStreams();
            this._destroyVideoElement();
            this._destroyImageElement();
            this._destroyCaptureCanvas();
          }
          _destroyVideoElement() {
            if (!this.videoElement) {
              return;
            }
            if (typeof this.videoEndedListener !== "undefined") {
              this.videoElement.removeEventListener("ended", this.videoEndedListener);
            }
            if (typeof this.videoPlayingEventListener !== "undefined") {
              this.videoElement.removeEventListener("playing", this.videoPlayingEventListener);
            }
            if (typeof this.videoCanPlayListener !== "undefined") {
              this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener);
            }
            this.cleanVideoSource(this.videoElement);
            this.videoElement = void 0;
          }
          _destroyImageElement() {
            if (!this.imageElement) {
              return;
            }
            if (this.imageLoadedListener !== void 0) {
              this.imageElement.removeEventListener("load", this.imageLoadedListener);
            }
            this.imageElement.src = void 0;
            this.imageElement.removeAttribute("src");
            this.imageElement = void 0;
          }
          _destroyCaptureCanvas() {
            this.captureCanvasContext = void 0;
            this.captureCanvas = void 0;
          }
          addVideoSource(videoElement, stream) {
            try {
              videoElement.srcObject = stream;
            } catch (err) {
              videoElement.src = URL.createObjectURL(stream);
            }
          }
          cleanVideoSource(videoElement) {
            try {
              videoElement.srcObject = null;
            } catch (err) {
              videoElement.src = "";
            }
            this.videoElement.removeAttribute("src");
          }
        }
        class Result {
          constructor(text, rawBytes, numBits = rawBytes == null ? 0 : 8 * rawBytes.length, resultPoints, format, timestamp = System.currentTimeMillis()) {
            this.text = text;
            this.rawBytes = rawBytes;
            this.numBits = numBits;
            this.resultPoints = resultPoints;
            this.format = format;
            this.timestamp = timestamp;
            this.text = text;
            this.rawBytes = rawBytes;
            if (numBits === void 0 || numBits === null) {
              this.numBits = rawBytes === null || rawBytes === void 0 ? 0 : 8 * rawBytes.length;
            } else {
              this.numBits = numBits;
            }
            this.resultPoints = resultPoints;
            this.format = format;
            this.resultMetadata = null;
            if (timestamp === void 0 || timestamp === null) {
              this.timestamp = System.currentTimeMillis();
            } else {
              this.timestamp = timestamp;
            }
          }
          getText() {
            return this.text;
          }
          getRawBytes() {
            return this.rawBytes;
          }
          getNumBits() {
            return this.numBits;
          }
          getResultPoints() {
            return this.resultPoints;
          }
          getBarcodeFormat() {
            return this.format;
          }
          getResultMetadata() {
            return this.resultMetadata;
          }
          putMetadata(type, value) {
            if (this.resultMetadata === null) {
              this.resultMetadata = /* @__PURE__ */ new Map();
            }
            this.resultMetadata.set(type, value);
          }
          putAllMetadata(metadata) {
            if (metadata !== null) {
              if (this.resultMetadata === null) {
                this.resultMetadata = metadata;
              } else {
                this.resultMetadata = new Map(metadata);
              }
            }
          }
          addResultPoints(newPoints) {
            const oldPoints = this.resultPoints;
            if (oldPoints === null) {
              this.resultPoints = newPoints;
            } else if (newPoints !== null && newPoints.length > 0) {
              const allPoints = new Array(oldPoints.length + newPoints.length);
              System.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
              System.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
              this.resultPoints = allPoints;
            }
          }
          getTimestamp() {
            return this.timestamp;
          }
          toString() {
            return this.text;
          }
        }
        var BarcodeFormat2;
        (function(BarcodeFormat3) {
          BarcodeFormat3[BarcodeFormat3["AZTEC"] = 0] = "AZTEC";
          BarcodeFormat3[BarcodeFormat3["CODABAR"] = 1] = "CODABAR";
          BarcodeFormat3[BarcodeFormat3["CODE_39"] = 2] = "CODE_39";
          BarcodeFormat3[BarcodeFormat3["CODE_93"] = 3] = "CODE_93";
          BarcodeFormat3[BarcodeFormat3["CODE_128"] = 4] = "CODE_128";
          BarcodeFormat3[BarcodeFormat3["DATA_MATRIX"] = 5] = "DATA_MATRIX";
          BarcodeFormat3[BarcodeFormat3["EAN_8"] = 6] = "EAN_8";
          BarcodeFormat3[BarcodeFormat3["EAN_13"] = 7] = "EAN_13";
          BarcodeFormat3[BarcodeFormat3["ITF"] = 8] = "ITF";
          BarcodeFormat3[BarcodeFormat3["MAXICODE"] = 9] = "MAXICODE";
          BarcodeFormat3[BarcodeFormat3["PDF_417"] = 10] = "PDF_417";
          BarcodeFormat3[BarcodeFormat3["QR_CODE"] = 11] = "QR_CODE";
          BarcodeFormat3[BarcodeFormat3["RSS_14"] = 12] = "RSS_14";
          BarcodeFormat3[BarcodeFormat3["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
          BarcodeFormat3[BarcodeFormat3["UPC_A"] = 14] = "UPC_A";
          BarcodeFormat3[BarcodeFormat3["UPC_E"] = 15] = "UPC_E";
          BarcodeFormat3[BarcodeFormat3["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
        })(BarcodeFormat2 || (BarcodeFormat2 = {}));
        var BarcodeFormat$1 = BarcodeFormat2;
        var ResultMetadataType;
        (function(ResultMetadataType2) {
          ResultMetadataType2[ResultMetadataType2["OTHER"] = 0] = "OTHER";
          ResultMetadataType2[ResultMetadataType2["ORIENTATION"] = 1] = "ORIENTATION";
          ResultMetadataType2[ResultMetadataType2["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
          ResultMetadataType2[ResultMetadataType2["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
          ResultMetadataType2[ResultMetadataType2["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
          ResultMetadataType2[ResultMetadataType2["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
          ResultMetadataType2[ResultMetadataType2["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
          ResultMetadataType2[ResultMetadataType2["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
          ResultMetadataType2[ResultMetadataType2["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
          ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
          ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
        })(ResultMetadataType || (ResultMetadataType = {}));
        var ResultMetadataType$1 = ResultMetadataType;
        class DecoderResult {
          constructor(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber = -1, structuredAppendParity = -1) {
            this.rawBytes = rawBytes;
            this.text = text;
            this.byteSegments = byteSegments;
            this.ecLevel = ecLevel;
            this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
            this.structuredAppendParity = structuredAppendParity;
            this.numBits = rawBytes === void 0 || rawBytes === null ? 0 : 8 * rawBytes.length;
          }
          getRawBytes() {
            return this.rawBytes;
          }
          getNumBits() {
            return this.numBits;
          }
          setNumBits(numBits) {
            this.numBits = numBits;
          }
          getText() {
            return this.text;
          }
          getByteSegments() {
            return this.byteSegments;
          }
          getECLevel() {
            return this.ecLevel;
          }
          getErrorsCorrected() {
            return this.errorsCorrected;
          }
          setErrorsCorrected(errorsCorrected) {
            this.errorsCorrected = errorsCorrected;
          }
          getErasures() {
            return this.erasures;
          }
          setErasures(erasures) {
            this.erasures = erasures;
          }
          getOther() {
            return this.other;
          }
          setOther(other) {
            this.other = other;
          }
          hasStructuredAppend() {
            return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
          }
          getStructuredAppendParity() {
            return this.structuredAppendParity;
          }
          getStructuredAppendSequenceNumber() {
            return this.structuredAppendSequenceNumber;
          }
        }
        class AbstractGenericGF {
          exp(a) {
            return this.expTable[a];
          }
          log(a) {
            if (a === 0) {
              throw new IllegalArgumentException();
            }
            return this.logTable[a];
          }
          static addOrSubtract(a, b) {
            return a ^ b;
          }
        }
        class GenericGFPoly {
          constructor(field, coefficients) {
            if (coefficients.length === 0) {
              throw new IllegalArgumentException();
            }
            this.field = field;
            const coefficientsLength = coefficients.length;
            if (coefficientsLength > 1 && coefficients[0] === 0) {
              let firstNonZero = 1;
              while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                firstNonZero++;
              }
              if (firstNonZero === coefficientsLength) {
                this.coefficients = Int32Array.from([0]);
              } else {
                this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
              }
            } else {
              this.coefficients = coefficients;
            }
          }
          getCoefficients() {
            return this.coefficients;
          }
          getDegree() {
            return this.coefficients.length - 1;
          }
          isZero() {
            return this.coefficients[0] === 0;
          }
          getCoefficient(degree) {
            return this.coefficients[this.coefficients.length - 1 - degree];
          }
          evaluateAt(a) {
            if (a === 0) {
              return this.getCoefficient(0);
            }
            const coefficients = this.coefficients;
            let result;
            if (a === 1) {
              result = 0;
              for (let i = 0, length = coefficients.length; i !== length; i++) {
                const coefficient = coefficients[i];
                result = AbstractGenericGF.addOrSubtract(result, coefficient);
              }
              return result;
            }
            result = coefficients[0];
            const size = coefficients.length;
            const field = this.field;
            for (let i = 1; i < size; i++) {
              result = AbstractGenericGF.addOrSubtract(field.multiply(a, result), coefficients[i]);
            }
            return result;
          }
          addOrSubtract(other) {
            if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException("GenericGFPolys do not have same GenericGF field");
            }
            if (this.isZero()) {
              return other;
            }
            if (other.isZero()) {
              return this;
            }
            let smallerCoefficients = this.coefficients;
            let largerCoefficients = other.coefficients;
            if (smallerCoefficients.length > largerCoefficients.length) {
              const temp = smallerCoefficients;
              smallerCoefficients = largerCoefficients;
              largerCoefficients = temp;
            }
            let sumDiff = new Int32Array(largerCoefficients.length);
            const lengthDiff = largerCoefficients.length - smallerCoefficients.length;
            System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
            for (let i = lengthDiff; i < largerCoefficients.length; i++) {
              sumDiff[i] = AbstractGenericGF.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
            }
            return new GenericGFPoly(this.field, sumDiff);
          }
          multiply(other) {
            if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException("GenericGFPolys do not have same GenericGF field");
            }
            if (this.isZero() || other.isZero()) {
              return this.field.getZero();
            }
            const aCoefficients = this.coefficients;
            const aLength = aCoefficients.length;
            const bCoefficients = other.coefficients;
            const bLength = bCoefficients.length;
            const product = new Int32Array(aLength + bLength - 1);
            const field = this.field;
            for (let i = 0; i < aLength; i++) {
              const aCoeff = aCoefficients[i];
              for (let j = 0; j < bLength; j++) {
                product[i + j] = AbstractGenericGF.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
              }
            }
            return new GenericGFPoly(field, product);
          }
          multiplyScalar(scalar) {
            if (scalar === 0) {
              return this.field.getZero();
            }
            if (scalar === 1) {
              return this;
            }
            const size = this.coefficients.length;
            const field = this.field;
            const product = new Int32Array(size);
            const coefficients = this.coefficients;
            for (let i = 0; i < size; i++) {
              product[i] = field.multiply(coefficients[i], scalar);
            }
            return new GenericGFPoly(field, product);
          }
          multiplyByMonomial(degree, coefficient) {
            if (degree < 0) {
              throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
              return this.field.getZero();
            }
            const coefficients = this.coefficients;
            const size = coefficients.length;
            const product = new Int32Array(size + degree);
            const field = this.field;
            for (let i = 0; i < size; i++) {
              product[i] = field.multiply(coefficients[i], coefficient);
            }
            return new GenericGFPoly(field, product);
          }
          divide(other) {
            if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException("GenericGFPolys do not have same GenericGF field");
            }
            if (other.isZero()) {
              throw new IllegalArgumentException("Divide by 0");
            }
            const field = this.field;
            let quotient = field.getZero();
            let remainder = this;
            const denominatorLeadingTerm = other.getCoefficient(other.getDegree());
            const inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
            while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
              const degreeDifference = remainder.getDegree() - other.getDegree();
              const scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
              const term = other.multiplyByMonomial(degreeDifference, scale);
              const iterationQuotient = field.buildMonomial(degreeDifference, scale);
              quotient = quotient.addOrSubtract(iterationQuotient);
              remainder = remainder.addOrSubtract(term);
            }
            return [quotient, remainder];
          }
          toString() {
            let result = "";
            for (let degree = this.getDegree(); degree >= 0; degree--) {
              let coefficient = this.getCoefficient(degree);
              if (coefficient !== 0) {
                if (coefficient < 0) {
                  result += " - ";
                  coefficient = -coefficient;
                } else {
                  if (result.length > 0) {
                    result += " + ";
                  }
                }
                if (degree === 0 || coefficient !== 1) {
                  const alphaPower = this.field.log(coefficient);
                  if (alphaPower === 0) {
                    result += "1";
                  } else if (alphaPower === 1) {
                    result += "a";
                  } else {
                    result += "a^";
                    result += alphaPower;
                  }
                }
                if (degree !== 0) {
                  if (degree === 1) {
                    result += "x";
                  } else {
                    result += "x^";
                    result += degree;
                  }
                }
              }
            }
            return result;
          }
        }
        class ArithmeticException extends Exception {
        }
        ArithmeticException.kind = "ArithmeticException";
        class GenericGF extends AbstractGenericGF {
          constructor(primitive, size, generatorBase) {
            super();
            this.primitive = primitive;
            this.size = size;
            this.generatorBase = generatorBase;
            const expTable = new Int32Array(size);
            let x = 1;
            for (let i = 0; i < size; i++) {
              expTable[i] = x;
              x *= 2;
              if (x >= size) {
                x ^= primitive;
                x &= size - 1;
              }
            }
            this.expTable = expTable;
            const logTable = new Int32Array(size);
            for (let i = 0; i < size - 1; i++) {
              logTable[expTable[i]] = i;
            }
            this.logTable = logTable;
            this.zero = new GenericGFPoly(this, Int32Array.from([0]));
            this.one = new GenericGFPoly(this, Int32Array.from([1]));
          }
          getZero() {
            return this.zero;
          }
          getOne() {
            return this.one;
          }
          buildMonomial(degree, coefficient) {
            if (degree < 0) {
              throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
              return this.zero;
            }
            const coefficients = new Int32Array(degree + 1);
            coefficients[0] = coefficient;
            return new GenericGFPoly(this, coefficients);
          }
          inverse(a) {
            if (a === 0) {
              throw new ArithmeticException();
            }
            return this.expTable[this.size - this.logTable[a] - 1];
          }
          multiply(a, b) {
            if (a === 0 || b === 0) {
              return 0;
            }
            return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
          }
          getSize() {
            return this.size;
          }
          getGeneratorBase() {
            return this.generatorBase;
          }
          toString() {
            return "GF(0x" + Integer.toHexString(this.primitive) + "," + this.size + ")";
          }
          equals(o) {
            return o === this;
          }
        }
        GenericGF.AZTEC_DATA_12 = new GenericGF(4201, 4096, 1);
        GenericGF.AZTEC_DATA_10 = new GenericGF(1033, 1024, 1);
        GenericGF.AZTEC_DATA_6 = new GenericGF(67, 64, 1);
        GenericGF.AZTEC_PARAM = new GenericGF(19, 16, 1);
        GenericGF.QR_CODE_FIELD_256 = new GenericGF(285, 256, 0);
        GenericGF.DATA_MATRIX_FIELD_256 = new GenericGF(301, 256, 1);
        GenericGF.AZTEC_DATA_8 = GenericGF.DATA_MATRIX_FIELD_256;
        GenericGF.MAXICODE_FIELD_64 = GenericGF.AZTEC_DATA_6;
        class ReedSolomonException extends Exception {
        }
        ReedSolomonException.kind = "ReedSolomonException";
        class IllegalStateException extends Exception {
        }
        IllegalStateException.kind = "IllegalStateException";
        class ReedSolomonDecoder {
          constructor(field) {
            this.field = field;
          }
          decode(received, twoS) {
            const field = this.field;
            const poly = new GenericGFPoly(field, received);
            const syndromeCoefficients = new Int32Array(twoS);
            let noError = true;
            for (let i = 0; i < twoS; i++) {
              const evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
              syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
              if (evalResult !== 0) {
                noError = false;
              }
            }
            if (noError) {
              return;
            }
            const syndrome = new GenericGFPoly(field, syndromeCoefficients);
            const sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
            const sigma = sigmaOmega[0];
            const omega = sigmaOmega[1];
            const errorLocations = this.findErrorLocations(sigma);
            const errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
            for (let i = 0; i < errorLocations.length; i++) {
              const position = received.length - 1 - field.log(errorLocations[i]);
              if (position < 0) {
                throw new ReedSolomonException("Bad error location");
              }
              received[position] = GenericGF.addOrSubtract(received[position], errorMagnitudes[i]);
            }
          }
          runEuclideanAlgorithm(a, b, R) {
            if (a.getDegree() < b.getDegree()) {
              const temp = a;
              a = b;
              b = temp;
            }
            const field = this.field;
            let rLast = a;
            let r = b;
            let tLast = field.getZero();
            let t = field.getOne();
            while (r.getDegree() >= (R / 2 | 0)) {
              let rLastLast = rLast;
              let tLastLast = tLast;
              rLast = r;
              tLast = t;
              if (rLast.isZero()) {
                throw new ReedSolomonException("r_{i-1} was zero");
              }
              r = rLastLast;
              let q = field.getZero();
              const denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
              const dltInverse = field.inverse(denominatorLeadingTerm);
              while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
                const degreeDiff = r.getDegree() - rLast.getDegree();
                const scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
                q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
                r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
              }
              t = q.multiply(tLast).addOrSubtract(tLastLast);
              if (r.getDegree() >= rLast.getDegree()) {
                throw new IllegalStateException("Division algorithm failed to reduce polynomial?");
              }
            }
            const sigmaTildeAtZero = t.getCoefficient(0);
            if (sigmaTildeAtZero === 0) {
              throw new ReedSolomonException("sigmaTilde(0) was zero");
            }
            const inverse = field.inverse(sigmaTildeAtZero);
            const sigma = t.multiplyScalar(inverse);
            const omega = r.multiplyScalar(inverse);
            return [sigma, omega];
          }
          findErrorLocations(errorLocator) {
            const numErrors = errorLocator.getDegree();
            if (numErrors === 1) {
              return Int32Array.from([errorLocator.getCoefficient(1)]);
            }
            const result = new Int32Array(numErrors);
            let e = 0;
            const field = this.field;
            for (let i = 1; i < field.getSize() && e < numErrors; i++) {
              if (errorLocator.evaluateAt(i) === 0) {
                result[e] = field.inverse(i);
                e++;
              }
            }
            if (e !== numErrors) {
              throw new ReedSolomonException("Error locator degree does not match number of roots");
            }
            return result;
          }
          findErrorMagnitudes(errorEvaluator, errorLocations) {
            const s = errorLocations.length;
            const result = new Int32Array(s);
            const field = this.field;
            for (let i = 0; i < s; i++) {
              const xiInverse = field.inverse(errorLocations[i]);
              let denominator = 1;
              for (let j = 0; j < s; j++) {
                if (i !== j) {
                  const term = field.multiply(errorLocations[j], xiInverse);
                  const termPlus1 = (term & 1) === 0 ? term | 1 : term & ~1;
                  denominator = field.multiply(denominator, termPlus1);
                }
              }
              result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
              if (field.getGeneratorBase() !== 0) {
                result[i] = field.multiply(result[i], xiInverse);
              }
            }
            return result;
          }
        }
        var Table;
        (function(Table2) {
          Table2[Table2["UPPER"] = 0] = "UPPER";
          Table2[Table2["LOWER"] = 1] = "LOWER";
          Table2[Table2["MIXED"] = 2] = "MIXED";
          Table2[Table2["DIGIT"] = 3] = "DIGIT";
          Table2[Table2["PUNCT"] = 4] = "PUNCT";
          Table2[Table2["BINARY"] = 5] = "BINARY";
        })(Table || (Table = {}));
        class Decoder {
          decode(detectorResult) {
            this.ddata = detectorResult;
            let matrix = detectorResult.getBits();
            let rawbits = this.extractBits(matrix);
            let correctedBits = this.correctBits(rawbits);
            let rawBytes = Decoder.convertBoolArrayToByteArray(correctedBits);
            let result = Decoder.getEncodedData(correctedBits);
            let decoderResult = new DecoderResult(rawBytes, result, null, null);
            decoderResult.setNumBits(correctedBits.length);
            return decoderResult;
          }
          static highLevelDecode(correctedBits) {
            return this.getEncodedData(correctedBits);
          }
          static getEncodedData(correctedBits) {
            let endIndex = correctedBits.length;
            let latchTable = Table.UPPER;
            let shiftTable = Table.UPPER;
            let result = "";
            let index = 0;
            while (index < endIndex) {
              if (shiftTable === Table.BINARY) {
                if (endIndex - index < 5) {
                  break;
                }
                let length = Decoder.readCode(correctedBits, index, 5);
                index += 5;
                if (length === 0) {
                  if (endIndex - index < 11) {
                    break;
                  }
                  length = Decoder.readCode(correctedBits, index, 11) + 31;
                  index += 11;
                }
                for (let charCount = 0; charCount < length; charCount++) {
                  if (endIndex - index < 8) {
                    index = endIndex;
                    break;
                  }
                  const code = Decoder.readCode(correctedBits, index, 8);
                  result += StringUtils.castAsNonUtf8Char(code);
                  index += 8;
                }
                shiftTable = latchTable;
              } else {
                let size = shiftTable === Table.DIGIT ? 4 : 5;
                if (endIndex - index < size) {
                  break;
                }
                let code = Decoder.readCode(correctedBits, index, size);
                index += size;
                let str = Decoder.getCharacter(shiftTable, code);
                if (str.startsWith("CTRL_")) {
                  latchTable = shiftTable;
                  shiftTable = Decoder.getTable(str.charAt(5));
                  if (str.charAt(6) === "L") {
                    latchTable = shiftTable;
                  }
                } else {
                  result += str;
                  shiftTable = latchTable;
                }
              }
            }
            return result;
          }
          static getTable(t) {
            switch (t) {
              case "L":
                return Table.LOWER;
              case "P":
                return Table.PUNCT;
              case "M":
                return Table.MIXED;
              case "D":
                return Table.DIGIT;
              case "B":
                return Table.BINARY;
              case "U":
              default:
                return Table.UPPER;
            }
          }
          static getCharacter(table, code) {
            switch (table) {
              case Table.UPPER:
                return Decoder.UPPER_TABLE[code];
              case Table.LOWER:
                return Decoder.LOWER_TABLE[code];
              case Table.MIXED:
                return Decoder.MIXED_TABLE[code];
              case Table.PUNCT:
                return Decoder.PUNCT_TABLE[code];
              case Table.DIGIT:
                return Decoder.DIGIT_TABLE[code];
              default:
                throw new IllegalStateException("Bad table");
            }
          }
          correctBits(rawbits) {
            let gf;
            let codewordSize;
            if (this.ddata.getNbLayers() <= 2) {
              codewordSize = 6;
              gf = GenericGF.AZTEC_DATA_6;
            } else if (this.ddata.getNbLayers() <= 8) {
              codewordSize = 8;
              gf = GenericGF.AZTEC_DATA_8;
            } else if (this.ddata.getNbLayers() <= 22) {
              codewordSize = 10;
              gf = GenericGF.AZTEC_DATA_10;
            } else {
              codewordSize = 12;
              gf = GenericGF.AZTEC_DATA_12;
            }
            let numDataCodewords = this.ddata.getNbDatablocks();
            let numCodewords = rawbits.length / codewordSize;
            if (numCodewords < numDataCodewords) {
              throw new FormatException();
            }
            let offset = rawbits.length % codewordSize;
            let dataWords = new Int32Array(numCodewords);
            for (let i = 0; i < numCodewords; i++, offset += codewordSize) {
              dataWords[i] = Decoder.readCode(rawbits, offset, codewordSize);
            }
            try {
              let rsDecoder = new ReedSolomonDecoder(gf);
              rsDecoder.decode(dataWords, numCodewords - numDataCodewords);
            } catch (ex) {
              throw new FormatException(ex);
            }
            let mask = (1 << codewordSize) - 1;
            let stuffedBits = 0;
            for (let i = 0; i < numDataCodewords; i++) {
              let dataWord = dataWords[i];
              if (dataWord === 0 || dataWord === mask) {
                throw new FormatException();
              } else if (dataWord === 1 || dataWord === mask - 1) {
                stuffedBits++;
              }
            }
            let correctedBits = new Array(numDataCodewords * codewordSize - stuffedBits);
            let index = 0;
            for (let i = 0; i < numDataCodewords; i++) {
              let dataWord = dataWords[i];
              if (dataWord === 1 || dataWord === mask - 1) {
                correctedBits.fill(dataWord > 1, index, index + codewordSize - 1);
                index += codewordSize - 1;
              } else {
                for (let bit = codewordSize - 1; bit >= 0; --bit) {
                  correctedBits[index++] = (dataWord & 1 << bit) !== 0;
                }
              }
            }
            return correctedBits;
          }
          extractBits(matrix) {
            let compact = this.ddata.isCompact();
            let layers = this.ddata.getNbLayers();
            let baseMatrixSize = (compact ? 11 : 14) + layers * 4;
            let alignmentMap = new Int32Array(baseMatrixSize);
            let rawbits = new Array(this.totalBitsInLayer(layers, compact));
            if (compact) {
              for (let i = 0; i < alignmentMap.length; i++) {
                alignmentMap[i] = i;
              }
            } else {
              let matrixSize = baseMatrixSize + 1 + 2 * Integer.truncDivision(Integer.truncDivision(baseMatrixSize, 2) - 1, 15);
              let origCenter = baseMatrixSize / 2;
              let center = Integer.truncDivision(matrixSize, 2);
              for (let i = 0; i < origCenter; i++) {
                let newOffset = i + Integer.truncDivision(i, 15);
                alignmentMap[origCenter - i - 1] = center - newOffset - 1;
                alignmentMap[origCenter + i] = center + newOffset + 1;
              }
            }
            for (let i = 0, rowOffset = 0; i < layers; i++) {
              let rowSize = (layers - i) * 4 + (compact ? 9 : 12);
              let low = i * 2;
              let high = baseMatrixSize - 1 - low;
              for (let j = 0; j < rowSize; j++) {
                let columnOffset = j * 2;
                for (let k = 0; k < 2; k++) {
                  rawbits[rowOffset + columnOffset + k] = matrix.get(alignmentMap[low + k], alignmentMap[low + j]);
                  rawbits[rowOffset + 2 * rowSize + columnOffset + k] = matrix.get(alignmentMap[low + j], alignmentMap[high - k]);
                  rawbits[rowOffset + 4 * rowSize + columnOffset + k] = matrix.get(alignmentMap[high - k], alignmentMap[high - j]);
                  rawbits[rowOffset + 6 * rowSize + columnOffset + k] = matrix.get(alignmentMap[high - j], alignmentMap[low + k]);
                }
              }
              rowOffset += rowSize * 8;
            }
            return rawbits;
          }
          static readCode(rawbits, startIndex, length) {
            let res = 0;
            for (let i = startIndex; i < startIndex + length; i++) {
              res <<= 1;
              if (rawbits[i]) {
                res |= 1;
              }
            }
            return res;
          }
          static readByte(rawbits, startIndex) {
            let n = rawbits.length - startIndex;
            if (n >= 8) {
              return Decoder.readCode(rawbits, startIndex, 8);
            }
            return Decoder.readCode(rawbits, startIndex, n) << 8 - n;
          }
          static convertBoolArrayToByteArray(boolArr) {
            let byteArr = new Uint8Array((boolArr.length + 7) / 8);
            for (let i = 0; i < byteArr.length; i++) {
              byteArr[i] = Decoder.readByte(boolArr, 8 * i);
            }
            return byteArr;
          }
          totalBitsInLayer(layers, compact) {
            return ((compact ? 88 : 112) + 16 * layers) * layers;
          }
        }
        Decoder.UPPER_TABLE = [
          "CTRL_PS",
          " ",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "CTRL_LL",
          "CTRL_ML",
          "CTRL_DL",
          "CTRL_BS"
        ];
        Decoder.LOWER_TABLE = [
          "CTRL_PS",
          " ",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "CTRL_US",
          "CTRL_ML",
          "CTRL_DL",
          "CTRL_BS"
        ];
        Decoder.MIXED_TABLE = [
          "CTRL_PS",
          " ",
          "\\1",
          "\\2",
          "\\3",
          "\\4",
          "\\5",
          "\\6",
          "\\7",
          "\b",
          "	",
          "\n",
          "\\13",
          "\f",
          "\r",
          "\\33",
          "\\34",
          "\\35",
          "\\36",
          "\\37",
          "@",
          "\\",
          "^",
          "_",
          "`",
          "|",
          "~",
          "\\177",
          "CTRL_LL",
          "CTRL_UL",
          "CTRL_PL",
          "CTRL_BS"
        ];
        Decoder.PUNCT_TABLE = [
          "",
          "\r",
          "\r\n",
          ". ",
          ", ",
          ": ",
          "!",
          '"',
          "#",
          "$",
          "%",
          "&",
          "'",
          "(",
          ")",
          "*",
          "+",
          ",",
          "-",
          ".",
          "/",
          ":",
          ";",
          "<",
          "=",
          ">",
          "?",
          "[",
          "]",
          "{",
          "}",
          "CTRL_UL"
        ];
        Decoder.DIGIT_TABLE = [
          "CTRL_PS",
          " ",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ",",
          ".",
          "CTRL_UL",
          "CTRL_US"
        ];
        class MathUtils {
          constructor() {
          }
          static round(d) {
            if (d === NaN)
              return 0;
            if (d <= Number.MIN_SAFE_INTEGER)
              return Number.MIN_SAFE_INTEGER;
            if (d >= Number.MAX_SAFE_INTEGER)
              return Number.MAX_SAFE_INTEGER;
            return d + (d < 0 ? -0.5 : 0.5) | 0;
          }
          static distance(aX, aY, bX, bY) {
            const xDiff = aX - bX;
            const yDiff = aY - bY;
            return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
          }
          static sum(array) {
            let count = 0;
            for (let i = 0, length = array.length; i !== length; i++) {
              const a = array[i];
              count += a;
            }
            return count;
          }
        }
        class Float {
          static floatToIntBits(f) {
            return f;
          }
        }
        Float.MAX_VALUE = Number.MAX_SAFE_INTEGER;
        class ResultPoint {
          constructor(x, y) {
            this.x = x;
            this.y = y;
          }
          getX() {
            return this.x;
          }
          getY() {
            return this.y;
          }
          equals(other) {
            if (other instanceof ResultPoint) {
              const otherPoint = other;
              return this.x === otherPoint.x && this.y === otherPoint.y;
            }
            return false;
          }
          hashCode() {
            return 31 * Float.floatToIntBits(this.x) + Float.floatToIntBits(this.y);
          }
          toString() {
            return "(" + this.x + "," + this.y + ")";
          }
          static orderBestPatterns(patterns) {
            const zeroOneDistance = this.distance(patterns[0], patterns[1]);
            const oneTwoDistance = this.distance(patterns[1], patterns[2]);
            const zeroTwoDistance = this.distance(patterns[0], patterns[2]);
            let pointA;
            let pointB;
            let pointC;
            if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
              pointB = patterns[0];
              pointA = patterns[1];
              pointC = patterns[2];
            } else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
              pointB = patterns[1];
              pointA = patterns[0];
              pointC = patterns[2];
            } else {
              pointB = patterns[2];
              pointA = patterns[0];
              pointC = patterns[1];
            }
            if (this.crossProductZ(pointA, pointB, pointC) < 0) {
              const temp = pointA;
              pointA = pointC;
              pointC = temp;
            }
            patterns[0] = pointA;
            patterns[1] = pointB;
            patterns[2] = pointC;
          }
          static distance(pattern1, pattern2) {
            return MathUtils.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
          }
          static crossProductZ(pointA, pointB, pointC) {
            const bX = pointB.x;
            const bY = pointB.y;
            return (pointC.x - bX) * (pointA.y - bY) - (pointC.y - bY) * (pointA.x - bX);
          }
        }
        class DetectorResult {
          constructor(bits, points) {
            this.bits = bits;
            this.points = points;
          }
          getBits() {
            return this.bits;
          }
          getPoints() {
            return this.points;
          }
        }
        class AztecDetectorResult extends DetectorResult {
          constructor(bits, points, compact, nbDatablocks, nbLayers) {
            super(bits, points);
            this.compact = compact;
            this.nbDatablocks = nbDatablocks;
            this.nbLayers = nbLayers;
          }
          getNbLayers() {
            return this.nbLayers;
          }
          getNbDatablocks() {
            return this.nbDatablocks;
          }
          isCompact() {
            return this.compact;
          }
        }
        class WhiteRectangleDetector {
          constructor(image, initSize, x, y) {
            this.image = image;
            this.height = image.getHeight();
            this.width = image.getWidth();
            if (initSize === void 0 || initSize === null) {
              initSize = WhiteRectangleDetector.INIT_SIZE;
            }
            if (x === void 0 || x === null) {
              x = image.getWidth() / 2 | 0;
            }
            if (y === void 0 || y === null) {
              y = image.getHeight() / 2 | 0;
            }
            const halfsize = initSize / 2 | 0;
            this.leftInit = x - halfsize;
            this.rightInit = x + halfsize;
            this.upInit = y - halfsize;
            this.downInit = y + halfsize;
            if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
              throw new NotFoundException();
            }
          }
          detect() {
            let left = this.leftInit;
            let right = this.rightInit;
            let up = this.upInit;
            let down = this.downInit;
            let sizeExceeded = false;
            let aBlackPointFoundOnBorder = true;
            let atLeastOneBlackPointFoundOnBorder = false;
            let atLeastOneBlackPointFoundOnRight = false;
            let atLeastOneBlackPointFoundOnBottom = false;
            let atLeastOneBlackPointFoundOnLeft = false;
            let atLeastOneBlackPointFoundOnTop = false;
            const width = this.width;
            const height = this.height;
            while (aBlackPointFoundOnBorder) {
              aBlackPointFoundOnBorder = false;
              let rightBorderNotWhite = true;
              while ((rightBorderNotWhite || !atLeastOneBlackPointFoundOnRight) && right < width) {
                rightBorderNotWhite = this.containsBlackPoint(up, down, right, false);
                if (rightBorderNotWhite) {
                  right++;
                  aBlackPointFoundOnBorder = true;
                  atLeastOneBlackPointFoundOnRight = true;
                } else if (!atLeastOneBlackPointFoundOnRight) {
                  right++;
                }
              }
              if (right >= width) {
                sizeExceeded = true;
                break;
              }
              let bottomBorderNotWhite = true;
              while ((bottomBorderNotWhite || !atLeastOneBlackPointFoundOnBottom) && down < height) {
                bottomBorderNotWhite = this.containsBlackPoint(left, right, down, true);
                if (bottomBorderNotWhite) {
                  down++;
                  aBlackPointFoundOnBorder = true;
                  atLeastOneBlackPointFoundOnBottom = true;
                } else if (!atLeastOneBlackPointFoundOnBottom) {
                  down++;
                }
              }
              if (down >= height) {
                sizeExceeded = true;
                break;
              }
              let leftBorderNotWhite = true;
              while ((leftBorderNotWhite || !atLeastOneBlackPointFoundOnLeft) && left >= 0) {
                leftBorderNotWhite = this.containsBlackPoint(up, down, left, false);
                if (leftBorderNotWhite) {
                  left--;
                  aBlackPointFoundOnBorder = true;
                  atLeastOneBlackPointFoundOnLeft = true;
                } else if (!atLeastOneBlackPointFoundOnLeft) {
                  left--;
                }
              }
              if (left < 0) {
                sizeExceeded = true;
                break;
              }
              let topBorderNotWhite = true;
              while ((topBorderNotWhite || !atLeastOneBlackPointFoundOnTop) && up >= 0) {
                topBorderNotWhite = this.containsBlackPoint(left, right, up, true);
                if (topBorderNotWhite) {
                  up--;
                  aBlackPointFoundOnBorder = true;
                  atLeastOneBlackPointFoundOnTop = true;
                } else if (!atLeastOneBlackPointFoundOnTop) {
                  up--;
                }
              }
              if (up < 0) {
                sizeExceeded = true;
                break;
              }
              if (aBlackPointFoundOnBorder) {
                atLeastOneBlackPointFoundOnBorder = true;
              }
            }
            if (!sizeExceeded && atLeastOneBlackPointFoundOnBorder) {
              const maxSize = right - left;
              let z = null;
              for (let i = 1; z === null && i < maxSize; i++) {
                z = this.getBlackPointOnSegment(left, down - i, left + i, down);
              }
              if (z == null) {
                throw new NotFoundException();
              }
              let t = null;
              for (let i = 1; t === null && i < maxSize; i++) {
                t = this.getBlackPointOnSegment(left, up + i, left + i, up);
              }
              if (t == null) {
                throw new NotFoundException();
              }
              let x = null;
              for (let i = 1; x === null && i < maxSize; i++) {
                x = this.getBlackPointOnSegment(right, up + i, right - i, up);
              }
              if (x == null) {
                throw new NotFoundException();
              }
              let y = null;
              for (let i = 1; y === null && i < maxSize; i++) {
                y = this.getBlackPointOnSegment(right, down - i, right - i, down);
              }
              if (y == null) {
                throw new NotFoundException();
              }
              return this.centerEdges(y, z, x, t);
            } else {
              throw new NotFoundException();
            }
          }
          getBlackPointOnSegment(aX, aY, bX, bY) {
            const dist = MathUtils.round(MathUtils.distance(aX, aY, bX, bY));
            const xStep = (bX - aX) / dist;
            const yStep = (bY - aY) / dist;
            const image = this.image;
            for (let i = 0; i < dist; i++) {
              const x = MathUtils.round(aX + i * xStep);
              const y = MathUtils.round(aY + i * yStep);
              if (image.get(x, y)) {
                return new ResultPoint(x, y);
              }
            }
            return null;
          }
          centerEdges(y, z, x, t) {
            const yi = y.getX();
            const yj = y.getY();
            const zi = z.getX();
            const zj = z.getY();
            const xi = x.getX();
            const xj = x.getY();
            const ti = t.getX();
            const tj = t.getY();
            const CORR = WhiteRectangleDetector.CORR;
            if (yi < this.width / 2) {
              return [
                new ResultPoint(ti - CORR, tj + CORR),
                new ResultPoint(zi + CORR, zj + CORR),
                new ResultPoint(xi - CORR, xj - CORR),
                new ResultPoint(yi + CORR, yj - CORR)
              ];
            } else {
              return [
                new ResultPoint(ti + CORR, tj + CORR),
                new ResultPoint(zi + CORR, zj - CORR),
                new ResultPoint(xi - CORR, xj + CORR),
                new ResultPoint(yi - CORR, yj - CORR)
              ];
            }
          }
          containsBlackPoint(a, b, fixed, horizontal) {
            const image = this.image;
            if (horizontal) {
              for (let x = a; x <= b; x++) {
                if (image.get(x, fixed)) {
                  return true;
                }
              }
            } else {
              for (let y = a; y <= b; y++) {
                if (image.get(fixed, y)) {
                  return true;
                }
              }
            }
            return false;
          }
        }
        WhiteRectangleDetector.INIT_SIZE = 10;
        WhiteRectangleDetector.CORR = 1;
        class GridSampler {
          static checkAndNudgePoints(image, points) {
            const width = image.getWidth();
            const height = image.getHeight();
            let nudged = true;
            for (let offset = 0; offset < points.length && nudged; offset += 2) {
              const x = Math.floor(points[offset]);
              const y = Math.floor(points[offset + 1]);
              if (x < -1 || x > width || y < -1 || y > height) {
                throw new NotFoundException();
              }
              nudged = false;
              if (x === -1) {
                points[offset] = 0;
                nudged = true;
              } else if (x === width) {
                points[offset] = width - 1;
                nudged = true;
              }
              if (y === -1) {
                points[offset + 1] = 0;
                nudged = true;
              } else if (y === height) {
                points[offset + 1] = height - 1;
                nudged = true;
              }
            }
            nudged = true;
            for (let offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
              const x = Math.floor(points[offset]);
              const y = Math.floor(points[offset + 1]);
              if (x < -1 || x > width || y < -1 || y > height) {
                throw new NotFoundException();
              }
              nudged = false;
              if (x === -1) {
                points[offset] = 0;
                nudged = true;
              } else if (x === width) {
                points[offset] = width - 1;
                nudged = true;
              }
              if (y === -1) {
                points[offset + 1] = 0;
                nudged = true;
              } else if (y === height) {
                points[offset + 1] = height - 1;
                nudged = true;
              }
            }
          }
        }
        class PerspectiveTransform {
          constructor(a11, a21, a31, a12, a22, a32, a13, a23, a33) {
            this.a11 = a11;
            this.a21 = a21;
            this.a31 = a31;
            this.a12 = a12;
            this.a22 = a22;
            this.a32 = a32;
            this.a13 = a13;
            this.a23 = a23;
            this.a33 = a33;
          }
          static quadrilateralToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
            const qToS = PerspectiveTransform.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
            const sToQ = PerspectiveTransform.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
            return sToQ.times(qToS);
          }
          transformPoints(points) {
            const max = points.length;
            const a11 = this.a11;
            const a12 = this.a12;
            const a13 = this.a13;
            const a21 = this.a21;
            const a22 = this.a22;
            const a23 = this.a23;
            const a31 = this.a31;
            const a32 = this.a32;
            const a33 = this.a33;
            for (let i = 0; i < max; i += 2) {
              const x = points[i];
              const y = points[i + 1];
              const denominator = a13 * x + a23 * y + a33;
              points[i] = (a11 * x + a21 * y + a31) / denominator;
              points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
            }
          }
          transformPointsWithValues(xValues, yValues) {
            const a11 = this.a11;
            const a12 = this.a12;
            const a13 = this.a13;
            const a21 = this.a21;
            const a22 = this.a22;
            const a23 = this.a23;
            const a31 = this.a31;
            const a32 = this.a32;
            const a33 = this.a33;
            const n = xValues.length;
            for (let i = 0; i < n; i++) {
              const x = xValues[i];
              const y = yValues[i];
              const denominator = a13 * x + a23 * y + a33;
              xValues[i] = (a11 * x + a21 * y + a31) / denominator;
              yValues[i] = (a12 * x + a22 * y + a32) / denominator;
            }
          }
          static squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3) {
            const dx3 = x0 - x1 + x2 - x3;
            const dy3 = y0 - y1 + y2 - y3;
            if (dx3 === 0 && dy3 === 0) {
              return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0, 1);
            } else {
              const dx1 = x1 - x2;
              const dx2 = x3 - x2;
              const dy1 = y1 - y2;
              const dy2 = y3 - y2;
              const denominator = dx1 * dy2 - dx2 * dy1;
              const a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
              const a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
              return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1);
            }
          }
          static quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3) {
            return PerspectiveTransform.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
          }
          buildAdjoint() {
            return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
          }
          times(other) {
            return new PerspectiveTransform(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
          }
        }
        class DefaultGridSampler extends GridSampler {
          sampleGrid(image, dimensionX, dimensionY, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
            const transform = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
            return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
          }
          sampleGridWithTransform(image, dimensionX, dimensionY, transform) {
            if (dimensionX <= 0 || dimensionY <= 0) {
              throw new NotFoundException();
            }
            const bits = new BitMatrix(dimensionX, dimensionY);
            const points = new Float32Array(2 * dimensionX);
            for (let y = 0; y < dimensionY; y++) {
              const max = points.length;
              const iValue = y + 0.5;
              for (let x = 0; x < max; x += 2) {
                points[x] = x / 2 + 0.5;
                points[x + 1] = iValue;
              }
              transform.transformPoints(points);
              GridSampler.checkAndNudgePoints(image, points);
              try {
                for (let x = 0; x < max; x += 2) {
                  if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
                    bits.set(x / 2, y);
                  }
                }
              } catch (aioobe) {
                throw new NotFoundException();
              }
            }
            return bits;
          }
        }
        class GridSamplerInstance {
          static setGridSampler(newGridSampler) {
            GridSamplerInstance.gridSampler = newGridSampler;
          }
          static getInstance() {
            return GridSamplerInstance.gridSampler;
          }
        }
        GridSamplerInstance.gridSampler = new DefaultGridSampler();
        class Point {
          constructor(x, y) {
            this.x = x;
            this.y = y;
          }
          toResultPoint() {
            return new ResultPoint(this.getX(), this.getY());
          }
          getX() {
            return this.x;
          }
          getY() {
            return this.y;
          }
        }
        class Detector {
          constructor(image) {
            this.EXPECTED_CORNER_BITS = new Int32Array([
              3808,
              476,
              2107,
              1799
            ]);
            this.image = image;
          }
          detect() {
            return this.detectMirror(false);
          }
          detectMirror(isMirror) {
            let pCenter = this.getMatrixCenter();
            let bullsEyeCorners = this.getBullsEyeCorners(pCenter);
            if (isMirror) {
              let temp = bullsEyeCorners[0];
              bullsEyeCorners[0] = bullsEyeCorners[2];
              bullsEyeCorners[2] = temp;
            }
            this.extractParameters(bullsEyeCorners);
            let bits = this.sampleGrid(this.image, bullsEyeCorners[this.shift % 4], bullsEyeCorners[(this.shift + 1) % 4], bullsEyeCorners[(this.shift + 2) % 4], bullsEyeCorners[(this.shift + 3) % 4]);
            let corners = this.getMatrixCornerPoints(bullsEyeCorners);
            return new AztecDetectorResult(bits, corners, this.compact, this.nbDataBlocks, this.nbLayers);
          }
          extractParameters(bullsEyeCorners) {
            if (!this.isValidPoint(bullsEyeCorners[0]) || !this.isValidPoint(bullsEyeCorners[1]) || !this.isValidPoint(bullsEyeCorners[2]) || !this.isValidPoint(bullsEyeCorners[3])) {
              throw new NotFoundException();
            }
            let length = 2 * this.nbCenterLayers;
            let sides = new Int32Array([
              this.sampleLine(bullsEyeCorners[0], bullsEyeCorners[1], length),
              this.sampleLine(bullsEyeCorners[1], bullsEyeCorners[2], length),
              this.sampleLine(bullsEyeCorners[2], bullsEyeCorners[3], length),
              this.sampleLine(bullsEyeCorners[3], bullsEyeCorners[0], length)
            ]);
            this.shift = this.getRotation(sides, length);
            let parameterData = 0;
            for (let i = 0; i < 4; i++) {
              let side = sides[(this.shift + i) % 4];
              if (this.compact) {
                parameterData <<= 7;
                parameterData += side >> 1 & 127;
              } else {
                parameterData <<= 10;
                parameterData += (side >> 2 & 31 << 5) + (side >> 1 & 31);
              }
            }
            let correctedData = this.getCorrectedParameterData(parameterData, this.compact);
            if (this.compact) {
              this.nbLayers = (correctedData >> 6) + 1;
              this.nbDataBlocks = (correctedData & 63) + 1;
            } else {
              this.nbLayers = (correctedData >> 11) + 1;
              this.nbDataBlocks = (correctedData & 2047) + 1;
            }
          }
          getRotation(sides, length) {
            let cornerBits = 0;
            sides.forEach((side, idx, arr) => {
              let t = (side >> length - 2 << 1) + (side & 1);
              cornerBits = (cornerBits << 3) + t;
            });
            cornerBits = ((cornerBits & 1) << 11) + (cornerBits >> 1);
            for (let shift = 0; shift < 4; shift++) {
              if (Integer.bitCount(cornerBits ^ this.EXPECTED_CORNER_BITS[shift]) <= 2) {
                return shift;
              }
            }
            throw new NotFoundException();
          }
          getCorrectedParameterData(parameterData, compact) {
            let numCodewords;
            let numDataCodewords;
            if (compact) {
              numCodewords = 7;
              numDataCodewords = 2;
            } else {
              numCodewords = 10;
              numDataCodewords = 4;
            }
            let numECCodewords = numCodewords - numDataCodewords;
            let parameterWords = new Int32Array(numCodewords);
            for (let i = numCodewords - 1; i >= 0; --i) {
              parameterWords[i] = parameterData & 15;
              parameterData >>= 4;
            }
            try {
              let rsDecoder = new ReedSolomonDecoder(GenericGF.AZTEC_PARAM);
              rsDecoder.decode(parameterWords, numECCodewords);
            } catch (ignored) {
              throw new NotFoundException();
            }
            let result = 0;
            for (let i = 0; i < numDataCodewords; i++) {
              result = (result << 4) + parameterWords[i];
            }
            return result;
          }
          getBullsEyeCorners(pCenter) {
            let pina = pCenter;
            let pinb = pCenter;
            let pinc = pCenter;
            let pind = pCenter;
            let color = true;
            for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
              let pouta = this.getFirstDifferent(pina, color, 1, -1);
              let poutb = this.getFirstDifferent(pinb, color, 1, 1);
              let poutc = this.getFirstDifferent(pinc, color, -1, 1);
              let poutd = this.getFirstDifferent(pind, color, -1, -1);
              if (this.nbCenterLayers > 2) {
                let q = this.distancePoint(poutd, pouta) * this.nbCenterLayers / (this.distancePoint(pind, pina) * (this.nbCenterLayers + 2));
                if (q < 0.75 || q > 1.25 || !this.isWhiteOrBlackRectangle(pouta, poutb, poutc, poutd)) {
                  break;
                }
              }
              pina = pouta;
              pinb = poutb;
              pinc = poutc;
              pind = poutd;
              color = !color;
            }
            if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7) {
              throw new NotFoundException();
            }
            this.compact = this.nbCenterLayers === 5;
            let pinax = new ResultPoint(pina.getX() + 0.5, pina.getY() - 0.5);
            let pinbx = new ResultPoint(pinb.getX() + 0.5, pinb.getY() + 0.5);
            let pincx = new ResultPoint(pinc.getX() - 0.5, pinc.getY() + 0.5);
            let pindx = new ResultPoint(pind.getX() - 0.5, pind.getY() - 0.5);
            return this.expandSquare([pinax, pinbx, pincx, pindx], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
          }
          getMatrixCenter() {
            let pointA;
            let pointB;
            let pointC;
            let pointD;
            try {
              let cornerPoints = new WhiteRectangleDetector(this.image).detect();
              pointA = cornerPoints[0];
              pointB = cornerPoints[1];
              pointC = cornerPoints[2];
              pointD = cornerPoints[3];
            } catch (e) {
              let cx2 = this.image.getWidth() / 2;
              let cy2 = this.image.getHeight() / 2;
              pointA = this.getFirstDifferent(new Point(cx2 + 7, cy2 - 7), false, 1, -1).toResultPoint();
              pointB = this.getFirstDifferent(new Point(cx2 + 7, cy2 + 7), false, 1, 1).toResultPoint();
              pointC = this.getFirstDifferent(new Point(cx2 - 7, cy2 + 7), false, -1, 1).toResultPoint();
              pointD = this.getFirstDifferent(new Point(cx2 - 7, cy2 - 7), false, -1, -1).toResultPoint();
            }
            let cx = MathUtils.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4);
            let cy = MathUtils.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4);
            try {
              let cornerPoints = new WhiteRectangleDetector(this.image, 15, cx, cy).detect();
              pointA = cornerPoints[0];
              pointB = cornerPoints[1];
              pointC = cornerPoints[2];
              pointD = cornerPoints[3];
            } catch (e) {
              pointA = this.getFirstDifferent(new Point(cx + 7, cy - 7), false, 1, -1).toResultPoint();
              pointB = this.getFirstDifferent(new Point(cx + 7, cy + 7), false, 1, 1).toResultPoint();
              pointC = this.getFirstDifferent(new Point(cx - 7, cy + 7), false, -1, 1).toResultPoint();
              pointD = this.getFirstDifferent(new Point(cx - 7, cy - 7), false, -1, -1).toResultPoint();
            }
            cx = MathUtils.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4);
            cy = MathUtils.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4);
            return new Point(cx, cy);
          }
          getMatrixCornerPoints(bullsEyeCorners) {
            return this.expandSquare(bullsEyeCorners, 2 * this.nbCenterLayers, this.getDimension());
          }
          sampleGrid(image, topLeft, topRight, bottomRight, bottomLeft) {
            let sampler = GridSamplerInstance.getInstance();
            let dimension = this.getDimension();
            let low = dimension / 2 - this.nbCenterLayers;
            let high = dimension / 2 + this.nbCenterLayers;
            return sampler.sampleGrid(image, dimension, dimension, low, low, high, low, high, high, low, high, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
          }
          sampleLine(p1, p2, size) {
            let result = 0;
            let d = this.distanceResultPoint(p1, p2);
            let moduleSize = d / size;
            let px = p1.getX();
            let py = p1.getY();
            let dx = moduleSize * (p2.getX() - p1.getX()) / d;
            let dy = moduleSize * (p2.getY() - p1.getY()) / d;
            for (let i = 0; i < size; i++) {
              if (this.image.get(MathUtils.round(px + i * dx), MathUtils.round(py + i * dy))) {
                result |= 1 << size - i - 1;
              }
            }
            return result;
          }
          isWhiteOrBlackRectangle(p1, p2, p3, p4) {
            let corr = 3;
            p1 = new Point(p1.getX() - corr, p1.getY() + corr);
            p2 = new Point(p2.getX() - corr, p2.getY() - corr);
            p3 = new Point(p3.getX() + corr, p3.getY() - corr);
            p4 = new Point(p4.getX() + corr, p4.getY() + corr);
            let cInit = this.getColor(p4, p1);
            if (cInit === 0) {
              return false;
            }
            let c = this.getColor(p1, p2);
            if (c !== cInit) {
              return false;
            }
            c = this.getColor(p2, p3);
            if (c !== cInit) {
              return false;
            }
            c = this.getColor(p3, p4);
            return c === cInit;
          }
          getColor(p1, p2) {
            let d = this.distancePoint(p1, p2);
            let dx = (p2.getX() - p1.getX()) / d;
            let dy = (p2.getY() - p1.getY()) / d;
            let error = 0;
            let px = p1.getX();
            let py = p1.getY();
            let colorModel = this.image.get(p1.getX(), p1.getY());
            let iMax = Math.ceil(d);
            for (let i = 0; i < iMax; i++) {
              px += dx;
              py += dy;
              if (this.image.get(MathUtils.round(px), MathUtils.round(py)) !== colorModel) {
                error++;
              }
            }
            let errRatio = error / d;
            if (errRatio > 0.1 && errRatio < 0.9) {
              return 0;
            }
            return errRatio <= 0.1 === colorModel ? 1 : -1;
          }
          getFirstDifferent(init, color, dx, dy) {
            let x = init.getX() + dx;
            let y = init.getY() + dy;
            while (this.isValid(x, y) && this.image.get(x, y) === color) {
              x += dx;
              y += dy;
            }
            x -= dx;
            y -= dy;
            while (this.isValid(x, y) && this.image.get(x, y) === color) {
              x += dx;
            }
            x -= dx;
            while (this.isValid(x, y) && this.image.get(x, y) === color) {
              y += dy;
            }
            y -= dy;
            return new Point(x, y);
          }
          expandSquare(cornerPoints, oldSide, newSide) {
            let ratio = newSide / (2 * oldSide);
            let dx = cornerPoints[0].getX() - cornerPoints[2].getX();
            let dy = cornerPoints[0].getY() - cornerPoints[2].getY();
            let centerx = (cornerPoints[0].getX() + cornerPoints[2].getX()) / 2;
            let centery = (cornerPoints[0].getY() + cornerPoints[2].getY()) / 2;
            let result0 = new ResultPoint(centerx + ratio * dx, centery + ratio * dy);
            let result2 = new ResultPoint(centerx - ratio * dx, centery - ratio * dy);
            dx = cornerPoints[1].getX() - cornerPoints[3].getX();
            dy = cornerPoints[1].getY() - cornerPoints[3].getY();
            centerx = (cornerPoints[1].getX() + cornerPoints[3].getX()) / 2;
            centery = (cornerPoints[1].getY() + cornerPoints[3].getY()) / 2;
            let result1 = new ResultPoint(centerx + ratio * dx, centery + ratio * dy);
            let result3 = new ResultPoint(centerx - ratio * dx, centery - ratio * dy);
            let results = [result0, result1, result2, result3];
            return results;
          }
          isValid(x, y) {
            return x >= 0 && x < this.image.getWidth() && y > 0 && y < this.image.getHeight();
          }
          isValidPoint(point) {
            let x = MathUtils.round(point.getX());
            let y = MathUtils.round(point.getY());
            return this.isValid(x, y);
          }
          distancePoint(a, b) {
            return MathUtils.distance(a.getX(), a.getY(), b.getX(), b.getY());
          }
          distanceResultPoint(a, b) {
            return MathUtils.distance(a.getX(), a.getY(), b.getX(), b.getY());
          }
          getDimension() {
            if (this.compact) {
              return 4 * this.nbLayers + 11;
            }
            if (this.nbLayers <= 4) {
              return 4 * this.nbLayers + 15;
            }
            return 4 * this.nbLayers + 2 * (Integer.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
          }
        }
        class AztecReader {
          decode(image, hints = null) {
            let exception = null;
            let detector = new Detector(image.getBlackMatrix());
            let points = null;
            let decoderResult = null;
            try {
              let detectorResult = detector.detectMirror(false);
              points = detectorResult.getPoints();
              this.reportFoundResultPoints(hints, points);
              decoderResult = new Decoder().decode(detectorResult);
            } catch (e) {
              exception = e;
            }
            if (decoderResult == null) {
              try {
                let detectorResult = detector.detectMirror(true);
                points = detectorResult.getPoints();
                this.reportFoundResultPoints(hints, points);
                decoderResult = new Decoder().decode(detectorResult);
              } catch (e) {
                if (exception != null) {
                  throw exception;
                }
                throw e;
              }
            }
            let result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), decoderResult.getNumBits(), points, BarcodeFormat$1.AZTEC, System.currentTimeMillis());
            let byteSegments = decoderResult.getByteSegments();
            if (byteSegments != null) {
              result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
            }
            let ecLevel = decoderResult.getECLevel();
            if (ecLevel != null) {
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
            }
            return result;
          }
          reportFoundResultPoints(hints, points) {
            if (hints != null) {
              let rpcb = hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
              if (rpcb != null) {
                points.forEach((point, idx, arr) => {
                  rpcb.foundPossibleResultPoint(point);
                });
              }
            }
          }
          reset() {
          }
        }
        class BrowserAztecCodeReader extends BrowserCodeReader {
          constructor(timeBetweenScansMillis = 500) {
            super(new AztecReader(), timeBetweenScansMillis);
          }
        }
        class OneDReader {
          decode(image, hints) {
            try {
              return this.doDecode(image, hints);
            } catch (nfe) {
              const tryHarder = hints && hints.get(DecodeHintType$1.TRY_HARDER) === true;
              if (tryHarder && image.isRotateSupported()) {
                const rotatedImage = image.rotateCounterClockwise();
                const result = this.doDecode(rotatedImage, hints);
                const metadata = result.getResultMetadata();
                let orientation = 270;
                if (metadata !== null && metadata.get(ResultMetadataType$1.ORIENTATION) === true) {
                  orientation = orientation + metadata.get(ResultMetadataType$1.ORIENTATION) % 360;
                }
                result.putMetadata(ResultMetadataType$1.ORIENTATION, orientation);
                const points = result.getResultPoints();
                if (points !== null) {
                  const height = rotatedImage.getHeight();
                  for (let i = 0; i < points.length; i++) {
                    points[i] = new ResultPoint(height - points[i].getY() - 1, points[i].getX());
                  }
                }
                return result;
              } else {
                throw new NotFoundException();
              }
            }
          }
          reset() {
          }
          doDecode(image, hints) {
            const width = image.getWidth();
            const height = image.getHeight();
            let row = new BitArray(width);
            const tryHarder = hints && hints.get(DecodeHintType$1.TRY_HARDER) === true;
            const rowStep = Math.max(1, height >> (tryHarder ? 8 : 5));
            let maxLines;
            if (tryHarder) {
              maxLines = height;
            } else {
              maxLines = 15;
            }
            const middle = Math.trunc(height / 2);
            for (let x = 0; x < maxLines; x++) {
              const rowStepsAboveOrBelow = Math.trunc((x + 1) / 2);
              const isAbove = (x & 1) === 0;
              const rowNumber = middle + rowStep * (isAbove ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
              if (rowNumber < 0 || rowNumber >= height) {
                break;
              }
              try {
                row = image.getBlackRow(rowNumber, row);
              } catch (ignored) {
                continue;
              }
              for (let attempt = 0; attempt < 2; attempt++) {
                if (attempt === 1) {
                  row.reverse();
                  if (hints && hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK) === true) {
                    const newHints = /* @__PURE__ */ new Map();
                    hints.forEach((hint, key) => newHints.set(key, hint));
                    newHints.delete(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
                    hints = newHints;
                  }
                }
                try {
                  const result = this.decodeRow(rowNumber, row, hints);
                  if (attempt === 1) {
                    result.putMetadata(ResultMetadataType$1.ORIENTATION, 180);
                    const points = result.getResultPoints();
                    if (points !== null) {
                      points[0] = new ResultPoint(width - points[0].getX() - 1, points[0].getY());
                      points[1] = new ResultPoint(width - points[1].getX() - 1, points[1].getY());
                    }
                  }
                  return result;
                } catch (re) {
                }
              }
            }
            throw new NotFoundException();
          }
          static recordPattern(row, start, counters) {
            const numCounters = counters.length;
            for (let index = 0; index < numCounters; index++)
              counters[index] = 0;
            const end = row.getSize();
            if (start >= end) {
              throw new NotFoundException();
            }
            let isWhite = !row.get(start);
            let counterPosition = 0;
            let i = start;
            while (i < end) {
              if (row.get(i) !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (++counterPosition === numCounters) {
                  break;
                } else {
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
                }
              }
              i++;
            }
            if (!(counterPosition === numCounters || counterPosition === numCounters - 1 && i === end)) {
              throw new NotFoundException();
            }
          }
          static recordPatternInReverse(row, start, counters) {
            let numTransitionsLeft = counters.length;
            let last = row.get(start);
            while (start > 0 && numTransitionsLeft >= 0) {
              if (row.get(--start) !== last) {
                numTransitionsLeft--;
                last = !last;
              }
            }
            if (numTransitionsLeft >= 0) {
              throw new NotFoundException();
            }
            OneDReader.recordPattern(row, start + 1, counters);
          }
          static patternMatchVariance(counters, pattern, maxIndividualVariance) {
            const numCounters = counters.length;
            let total = 0;
            let patternLength = 0;
            for (let i = 0; i < numCounters; i++) {
              total += counters[i];
              patternLength += pattern[i];
            }
            if (total < patternLength) {
              return Number.POSITIVE_INFINITY;
            }
            const unitBarWidth = total / patternLength;
            maxIndividualVariance *= unitBarWidth;
            let totalVariance = 0;
            for (let x = 0; x < numCounters; x++) {
              const counter = counters[x];
              const scaledPattern = pattern[x] * unitBarWidth;
              const variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
              if (variance > maxIndividualVariance) {
                return Number.POSITIVE_INFINITY;
              }
              totalVariance += variance;
            }
            return totalVariance / total;
          }
        }
        class Code128Reader extends OneDReader {
          static findStartPattern(row) {
            const width = row.getSize();
            const rowOffset = row.getNextSet(0);
            let counterPosition = 0;
            let counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
            let patternStart = rowOffset;
            let isWhite = false;
            const patternLength = 6;
            for (let i = rowOffset; i < width; i++) {
              if (row.get(i) !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition === patternLength - 1) {
                  let bestVariance = Code128Reader.MAX_AVG_VARIANCE;
                  let bestMatch = -1;
                  for (let startCode = Code128Reader.CODE_START_A; startCode <= Code128Reader.CODE_START_C; startCode++) {
                    const variance = OneDReader.patternMatchVariance(counters, Code128Reader.CODE_PATTERNS[startCode], Code128Reader.MAX_INDIVIDUAL_VARIANCE);
                    if (variance < bestVariance) {
                      bestVariance = variance;
                      bestMatch = startCode;
                    }
                  }
                  if (bestMatch >= 0 && row.isRange(Math.max(0, patternStart - (i - patternStart) / 2), patternStart, false)) {
                    return Int32Array.from([patternStart, i, bestMatch]);
                  }
                  patternStart += counters[0] + counters[1];
                  counters = counters.slice(2, counters.length - 1);
                  counters[counterPosition - 1] = 0;
                  counters[counterPosition] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            throw new NotFoundException();
          }
          static decodeCode(row, counters, rowOffset) {
            OneDReader.recordPattern(row, rowOffset, counters);
            let bestVariance = Code128Reader.MAX_AVG_VARIANCE;
            let bestMatch = -1;
            for (let d = 0; d < Code128Reader.CODE_PATTERNS.length; d++) {
              const pattern = Code128Reader.CODE_PATTERNS[d];
              const variance = this.patternMatchVariance(counters, pattern, Code128Reader.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = d;
              }
            }
            if (bestMatch >= 0) {
              return bestMatch;
            } else {
              throw new NotFoundException();
            }
          }
          decodeRow(rowNumber, row, hints) {
            const convertFNC1 = hints && hints.get(DecodeHintType$1.ASSUME_GS1) === true;
            const startPatternInfo = Code128Reader.findStartPattern(row);
            const startCode = startPatternInfo[2];
            let currentRawCodesIndex = 0;
            const rawCodes = new Uint8Array(20);
            rawCodes[currentRawCodesIndex++] = startCode;
            let codeSet;
            switch (startCode) {
              case Code128Reader.CODE_START_A:
                codeSet = Code128Reader.CODE_CODE_A;
                break;
              case Code128Reader.CODE_START_B:
                codeSet = Code128Reader.CODE_CODE_B;
                break;
              case Code128Reader.CODE_START_C:
                codeSet = Code128Reader.CODE_CODE_C;
                break;
              default:
                throw new FormatException();
            }
            let done = false;
            let isNextShifted = false;
            let result = "";
            let lastStart = startPatternInfo[0];
            let nextStart = startPatternInfo[1];
            const counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
            let lastCode = 0;
            let code = 0;
            let checksumTotal = startCode;
            let multiplier = 0;
            let lastCharacterWasPrintable = true;
            let upperMode = false;
            let shiftUpperMode = false;
            while (!done) {
              const unshift = isNextShifted;
              isNextShifted = false;
              lastCode = code;
              code = Code128Reader.decodeCode(row, counters, nextStart);
              rawCodes[currentRawCodesIndex++] = code;
              if (code !== Code128Reader.CODE_STOP) {
                lastCharacterWasPrintable = true;
              }
              if (code !== Code128Reader.CODE_STOP) {
                multiplier++;
                checksumTotal += multiplier * code;
              }
              lastStart = nextStart;
              nextStart += counters.reduce((previous, current) => previous + current, 0);
              switch (code) {
                case Code128Reader.CODE_START_A:
                case Code128Reader.CODE_START_B:
                case Code128Reader.CODE_START_C:
                  throw new FormatException();
              }
              switch (codeSet) {
                case Code128Reader.CODE_CODE_A:
                  if (code < 64) {
                    if (shiftUpperMode === upperMode) {
                      result += String.fromCharCode(" ".charCodeAt(0) + code);
                    } else {
                      result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
                    }
                    shiftUpperMode = false;
                  } else if (code < 96) {
                    if (shiftUpperMode === upperMode) {
                      result += String.fromCharCode(code - 64);
                    } else {
                      result += String.fromCharCode(code + 64);
                    }
                    shiftUpperMode = false;
                  } else {
                    if (code !== Code128Reader.CODE_STOP) {
                      lastCharacterWasPrintable = false;
                    }
                    switch (code) {
                      case Code128Reader.CODE_FNC_1:
                        if (convertFNC1) {
                          if (result.length === 0) {
                            result += "]C1";
                          } else {
                            result += String.fromCharCode(29);
                          }
                        }
                        break;
                      case Code128Reader.CODE_FNC_2:
                      case Code128Reader.CODE_FNC_3:
                        break;
                      case Code128Reader.CODE_FNC_4_A:
                        if (!upperMode && shiftUpperMode) {
                          upperMode = true;
                          shiftUpperMode = false;
                        } else if (upperMode && shiftUpperMode) {
                          upperMode = false;
                          shiftUpperMode = false;
                        } else {
                          shiftUpperMode = true;
                        }
                        break;
                      case Code128Reader.CODE_SHIFT:
                        isNextShifted = true;
                        codeSet = Code128Reader.CODE_CODE_B;
                        break;
                      case Code128Reader.CODE_CODE_B:
                        codeSet = Code128Reader.CODE_CODE_B;
                        break;
                      case Code128Reader.CODE_CODE_C:
                        codeSet = Code128Reader.CODE_CODE_C;
                        break;
                      case Code128Reader.CODE_STOP:
                        done = true;
                        break;
                    }
                  }
                  break;
                case Code128Reader.CODE_CODE_B:
                  if (code < 96) {
                    if (shiftUpperMode === upperMode) {
                      result += String.fromCharCode(" ".charCodeAt(0) + code);
                    } else {
                      result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
                    }
                    shiftUpperMode = false;
                  } else {
                    if (code !== Code128Reader.CODE_STOP) {
                      lastCharacterWasPrintable = false;
                    }
                    switch (code) {
                      case Code128Reader.CODE_FNC_1:
                        if (convertFNC1) {
                          if (result.length === 0) {
                            result += "]C1";
                          } else {
                            result += String.fromCharCode(29);
                          }
                        }
                        break;
                      case Code128Reader.CODE_FNC_2:
                      case Code128Reader.CODE_FNC_3:
                        break;
                      case Code128Reader.CODE_FNC_4_B:
                        if (!upperMode && shiftUpperMode) {
                          upperMode = true;
                          shiftUpperMode = false;
                        } else if (upperMode && shiftUpperMode) {
                          upperMode = false;
                          shiftUpperMode = false;
                        } else {
                          shiftUpperMode = true;
                        }
                        break;
                      case Code128Reader.CODE_SHIFT:
                        isNextShifted = true;
                        codeSet = Code128Reader.CODE_CODE_A;
                        break;
                      case Code128Reader.CODE_CODE_A:
                        codeSet = Code128Reader.CODE_CODE_A;
                        break;
                      case Code128Reader.CODE_CODE_C:
                        codeSet = Code128Reader.CODE_CODE_C;
                        break;
                      case Code128Reader.CODE_STOP:
                        done = true;
                        break;
                    }
                  }
                  break;
                case Code128Reader.CODE_CODE_C:
                  if (code < 100) {
                    if (code < 10) {
                      result += "0";
                    }
                    result += code;
                  } else {
                    if (code !== Code128Reader.CODE_STOP) {
                      lastCharacterWasPrintable = false;
                    }
                    switch (code) {
                      case Code128Reader.CODE_FNC_1:
                        if (convertFNC1) {
                          if (result.length === 0) {
                            result += "]C1";
                          } else {
                            result += String.fromCharCode(29);
                          }
                        }
                        break;
                      case Code128Reader.CODE_CODE_A:
                        codeSet = Code128Reader.CODE_CODE_A;
                        break;
                      case Code128Reader.CODE_CODE_B:
                        codeSet = Code128Reader.CODE_CODE_B;
                        break;
                      case Code128Reader.CODE_STOP:
                        done = true;
                        break;
                    }
                  }
                  break;
              }
              if (unshift) {
                codeSet = codeSet === Code128Reader.CODE_CODE_A ? Code128Reader.CODE_CODE_B : Code128Reader.CODE_CODE_A;
              }
            }
            const lastPatternSize = nextStart - lastStart;
            nextStart = row.getNextUnset(nextStart);
            if (!row.isRange(nextStart, Math.min(row.getSize(), nextStart + (nextStart - lastStart) / 2), false)) {
              throw new NotFoundException();
            }
            checksumTotal -= multiplier * lastCode;
            if (checksumTotal % 103 !== lastCode) {
              throw new ChecksumException();
            }
            const resultLength = result.length;
            if (resultLength === 0) {
              throw new NotFoundException();
            }
            if (resultLength > 0 && lastCharacterWasPrintable) {
              if (codeSet === Code128Reader.CODE_CODE_C) {
                result = result.substring(0, resultLength - 2);
              } else {
                result = result.substring(0, resultLength - 1);
              }
            }
            const left = (startPatternInfo[1] + startPatternInfo[0]) / 2;
            const right = lastStart + lastPatternSize / 2;
            const rawCodesSize = rawCodes.length;
            const rawBytes = new Uint8Array(rawCodesSize);
            for (let i = 0; i < rawCodesSize; i++) {
              rawBytes[i] = rawCodes[i];
            }
            const points = [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)];
            return new Result(result, rawBytes, 0, points, BarcodeFormat$1.CODE_128, new Date().getTime());
          }
        }
        Code128Reader.CODE_PATTERNS = [
          Int32Array.from([2, 1, 2, 2, 2, 2]),
          Int32Array.from([2, 2, 2, 1, 2, 2]),
          Int32Array.from([2, 2, 2, 2, 2, 1]),
          Int32Array.from([1, 2, 1, 2, 2, 3]),
          Int32Array.from([1, 2, 1, 3, 2, 2]),
          Int32Array.from([1, 3, 1, 2, 2, 2]),
          Int32Array.from([1, 2, 2, 2, 1, 3]),
          Int32Array.from([1, 2, 2, 3, 1, 2]),
          Int32Array.from([1, 3, 2, 2, 1, 2]),
          Int32Array.from([2, 2, 1, 2, 1, 3]),
          Int32Array.from([2, 2, 1, 3, 1, 2]),
          Int32Array.from([2, 3, 1, 2, 1, 2]),
          Int32Array.from([1, 1, 2, 2, 3, 2]),
          Int32Array.from([1, 2, 2, 1, 3, 2]),
          Int32Array.from([1, 2, 2, 2, 3, 1]),
          Int32Array.from([1, 1, 3, 2, 2, 2]),
          Int32Array.from([1, 2, 3, 1, 2, 2]),
          Int32Array.from([1, 2, 3, 2, 2, 1]),
          Int32Array.from([2, 2, 3, 2, 1, 1]),
          Int32Array.from([2, 2, 1, 1, 3, 2]),
          Int32Array.from([2, 2, 1, 2, 3, 1]),
          Int32Array.from([2, 1, 3, 2, 1, 2]),
          Int32Array.from([2, 2, 3, 1, 1, 2]),
          Int32Array.from([3, 1, 2, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 2, 2, 2]),
          Int32Array.from([3, 2, 1, 1, 2, 2]),
          Int32Array.from([3, 2, 1, 2, 2, 1]),
          Int32Array.from([3, 1, 2, 2, 1, 2]),
          Int32Array.from([3, 2, 2, 1, 1, 2]),
          Int32Array.from([3, 2, 2, 2, 1, 1]),
          Int32Array.from([2, 1, 2, 1, 2, 3]),
          Int32Array.from([2, 1, 2, 3, 2, 1]),
          Int32Array.from([2, 3, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 1, 3, 2, 3]),
          Int32Array.from([1, 3, 1, 1, 2, 3]),
          Int32Array.from([1, 3, 1, 3, 2, 1]),
          Int32Array.from([1, 1, 2, 3, 1, 3]),
          Int32Array.from([1, 3, 2, 1, 1, 3]),
          Int32Array.from([1, 3, 2, 3, 1, 1]),
          Int32Array.from([2, 1, 1, 3, 1, 3]),
          Int32Array.from([2, 3, 1, 1, 1, 3]),
          Int32Array.from([2, 3, 1, 3, 1, 1]),
          Int32Array.from([1, 1, 2, 1, 3, 3]),
          Int32Array.from([1, 1, 2, 3, 3, 1]),
          Int32Array.from([1, 3, 2, 1, 3, 1]),
          Int32Array.from([1, 1, 3, 1, 2, 3]),
          Int32Array.from([1, 1, 3, 3, 2, 1]),
          Int32Array.from([1, 3, 3, 1, 2, 1]),
          Int32Array.from([3, 1, 3, 1, 2, 1]),
          Int32Array.from([2, 1, 1, 3, 3, 1]),
          Int32Array.from([2, 3, 1, 1, 3, 1]),
          Int32Array.from([2, 1, 3, 1, 1, 3]),
          Int32Array.from([2, 1, 3, 3, 1, 1]),
          Int32Array.from([2, 1, 3, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 2, 3]),
          Int32Array.from([3, 1, 1, 3, 2, 1]),
          Int32Array.from([3, 3, 1, 1, 2, 1]),
          Int32Array.from([3, 1, 2, 1, 1, 3]),
          Int32Array.from([3, 1, 2, 3, 1, 1]),
          Int32Array.from([3, 3, 2, 1, 1, 1]),
          Int32Array.from([3, 1, 4, 1, 1, 1]),
          Int32Array.from([2, 2, 1, 4, 1, 1]),
          Int32Array.from([4, 3, 1, 1, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 2, 4]),
          Int32Array.from([1, 1, 1, 4, 2, 2]),
          Int32Array.from([1, 2, 1, 1, 2, 4]),
          Int32Array.from([1, 2, 1, 4, 2, 1]),
          Int32Array.from([1, 4, 1, 1, 2, 2]),
          Int32Array.from([1, 4, 1, 2, 2, 1]),
          Int32Array.from([1, 1, 2, 2, 1, 4]),
          Int32Array.from([1, 1, 2, 4, 1, 2]),
          Int32Array.from([1, 2, 2, 1, 1, 4]),
          Int32Array.from([1, 2, 2, 4, 1, 1]),
          Int32Array.from([1, 4, 2, 1, 1, 2]),
          Int32Array.from([1, 4, 2, 2, 1, 1]),
          Int32Array.from([2, 4, 1, 2, 1, 1]),
          Int32Array.from([2, 2, 1, 1, 1, 4]),
          Int32Array.from([4, 1, 3, 1, 1, 1]),
          Int32Array.from([2, 4, 1, 1, 1, 2]),
          Int32Array.from([1, 3, 4, 1, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 4, 2]),
          Int32Array.from([1, 2, 1, 1, 4, 2]),
          Int32Array.from([1, 2, 1, 2, 4, 1]),
          Int32Array.from([1, 1, 4, 2, 1, 2]),
          Int32Array.from([1, 2, 4, 1, 1, 2]),
          Int32Array.from([1, 2, 4, 2, 1, 1]),
          Int32Array.from([4, 1, 1, 2, 1, 2]),
          Int32Array.from([4, 2, 1, 1, 1, 2]),
          Int32Array.from([4, 2, 1, 2, 1, 1]),
          Int32Array.from([2, 1, 2, 1, 4, 1]),
          Int32Array.from([2, 1, 4, 1, 2, 1]),
          Int32Array.from([4, 1, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 1, 1, 4, 3]),
          Int32Array.from([1, 1, 1, 3, 4, 1]),
          Int32Array.from([1, 3, 1, 1, 4, 1]),
          Int32Array.from([1, 1, 4, 1, 1, 3]),
          Int32Array.from([1, 1, 4, 3, 1, 1]),
          Int32Array.from([4, 1, 1, 1, 1, 3]),
          Int32Array.from([4, 1, 1, 3, 1, 1]),
          Int32Array.from([1, 1, 3, 1, 4, 1]),
          Int32Array.from([1, 1, 4, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 4, 1]),
          Int32Array.from([4, 1, 1, 1, 3, 1]),
          Int32Array.from([2, 1, 1, 4, 1, 2]),
          Int32Array.from([2, 1, 1, 2, 1, 4]),
          Int32Array.from([2, 1, 1, 2, 3, 2]),
          Int32Array.from([2, 3, 3, 1, 1, 1, 2])
        ];
        Code128Reader.MAX_AVG_VARIANCE = 0.25;
        Code128Reader.MAX_INDIVIDUAL_VARIANCE = 0.7;
        Code128Reader.CODE_SHIFT = 98;
        Code128Reader.CODE_CODE_C = 99;
        Code128Reader.CODE_CODE_B = 100;
        Code128Reader.CODE_CODE_A = 101;
        Code128Reader.CODE_FNC_1 = 102;
        Code128Reader.CODE_FNC_2 = 97;
        Code128Reader.CODE_FNC_3 = 96;
        Code128Reader.CODE_FNC_4_A = 101;
        Code128Reader.CODE_FNC_4_B = 100;
        Code128Reader.CODE_START_A = 103;
        Code128Reader.CODE_START_B = 104;
        Code128Reader.CODE_START_C = 105;
        Code128Reader.CODE_STOP = 106;
        class Code39Reader extends OneDReader {
          constructor(usingCheckDigit = false, extendedMode = false) {
            super();
            this.usingCheckDigit = usingCheckDigit;
            this.extendedMode = extendedMode;
            this.decodeRowResult = "";
            this.counters = new Int32Array(9);
          }
          decodeRow(rowNumber, row, hints) {
            let theCounters = this.counters;
            theCounters.fill(0);
            this.decodeRowResult = "";
            let start = Code39Reader.findAsteriskPattern(row, theCounters);
            let nextStart = row.getNextSet(start[1]);
            let end = row.getSize();
            let decodedChar;
            let lastStart;
            do {
              Code39Reader.recordPattern(row, nextStart, theCounters);
              let pattern = Code39Reader.toNarrowWidePattern(theCounters);
              if (pattern < 0) {
                throw new NotFoundException();
              }
              decodedChar = Code39Reader.patternToChar(pattern);
              this.decodeRowResult += decodedChar;
              lastStart = nextStart;
              for (let counter of theCounters) {
                nextStart += counter;
              }
              nextStart = row.getNextSet(nextStart);
            } while (decodedChar !== "*");
            this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
            let lastPatternSize = 0;
            for (let counter of theCounters) {
              lastPatternSize += counter;
            }
            let whiteSpaceAfterEnd = nextStart - lastStart - lastPatternSize;
            if (nextStart !== end && whiteSpaceAfterEnd * 2 < lastPatternSize) {
              throw new NotFoundException();
            }
            if (this.usingCheckDigit) {
              let max = this.decodeRowResult.length - 1;
              let total = 0;
              for (let i = 0; i < max; i++) {
                total += Code39Reader.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));
              }
              if (this.decodeRowResult.charAt(max) !== Code39Reader.ALPHABET_STRING.charAt(total % 43)) {
                throw new ChecksumException();
              }
              this.decodeRowResult = this.decodeRowResult.substring(0, max);
            }
            if (this.decodeRowResult.length === 0) {
              throw new NotFoundException();
            }
            let resultString;
            if (this.extendedMode) {
              resultString = Code39Reader.decodeExtended(this.decodeRowResult);
            } else {
              resultString = this.decodeRowResult;
            }
            let left = (start[1] + start[0]) / 2;
            let right = lastStart + lastPatternSize / 2;
            return new Result(resultString, null, 0, [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)], BarcodeFormat$1.CODE_39, new Date().getTime());
          }
          static findAsteriskPattern(row, counters) {
            let width = row.getSize();
            let rowOffset = row.getNextSet(0);
            let counterPosition = 0;
            let patternStart = rowOffset;
            let isWhite = false;
            let patternLength = counters.length;
            for (let i = rowOffset; i < width; i++) {
              if (row.get(i) !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition === patternLength - 1) {
                  if (this.toNarrowWidePattern(counters) === Code39Reader.ASTERISK_ENCODING && row.isRange(Math.max(0, patternStart - Math.floor((i - patternStart) / 2)), patternStart, false)) {
                    return [patternStart, i];
                  }
                  patternStart += counters[0] + counters[1];
                  counters.copyWithin(0, 2, 2 + counterPosition - 1);
                  counters[counterPosition - 1] = 0;
                  counters[counterPosition] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            throw new NotFoundException();
          }
          static toNarrowWidePattern(counters) {
            let numCounters = counters.length;
            let maxNarrowCounter = 0;
            let wideCounters;
            do {
              let minCounter = 2147483647;
              for (let counter of counters) {
                if (counter < minCounter && counter > maxNarrowCounter) {
                  minCounter = counter;
                }
              }
              maxNarrowCounter = minCounter;
              wideCounters = 0;
              let totalWideCountersWidth = 0;
              let pattern = 0;
              for (let i = 0; i < numCounters; i++) {
                let counter = counters[i];
                if (counter > maxNarrowCounter) {
                  pattern |= 1 << numCounters - 1 - i;
                  wideCounters++;
                  totalWideCountersWidth += counter;
                }
              }
              if (wideCounters === 3) {
                for (let i = 0; i < numCounters && wideCounters > 0; i++) {
                  let counter = counters[i];
                  if (counter > maxNarrowCounter) {
                    wideCounters--;
                    if (counter * 2 >= totalWideCountersWidth) {
                      return -1;
                    }
                  }
                }
                return pattern;
              }
            } while (wideCounters > 3);
            return -1;
          }
          static patternToChar(pattern) {
            for (let i = 0; i < Code39Reader.CHARACTER_ENCODINGS.length; i++) {
              if (Code39Reader.CHARACTER_ENCODINGS[i] === pattern) {
                return Code39Reader.ALPHABET_STRING.charAt(i);
              }
            }
            if (pattern === Code39Reader.ASTERISK_ENCODING) {
              return "*";
            }
            throw new NotFoundException();
          }
          static decodeExtended(encoded) {
            let length = encoded.length;
            let decoded = "";
            for (let i = 0; i < length; i++) {
              let c = encoded.charAt(i);
              if (c === "+" || c === "$" || c === "%" || c === "/") {
                let next = encoded.charAt(i + 1);
                let decodedChar = "\0";
                switch (c) {
                  case "+":
                    if (next >= "A" && next <= "Z") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
                    } else {
                      throw new FormatException();
                    }
                    break;
                  case "$":
                    if (next >= "A" && next <= "Z") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
                    } else {
                      throw new FormatException();
                    }
                    break;
                  case "%":
                    if (next >= "A" && next <= "E") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
                    } else if (next >= "F" && next <= "J") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
                    } else if (next >= "K" && next <= "O") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
                    } else if (next >= "P" && next <= "T") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
                    } else if (next === "U") {
                      decodedChar = "\0";
                    } else if (next === "V") {
                      decodedChar = "@";
                    } else if (next === "W") {
                      decodedChar = "`";
                    } else if (next === "X" || next === "Y" || next === "Z") {
                      decodedChar = "\x7F";
                    } else {
                      throw new FormatException();
                    }
                    break;
                  case "/":
                    if (next >= "A" && next <= "O") {
                      decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
                    } else if (next === "Z") {
                      decodedChar = ":";
                    } else {
                      throw new FormatException();
                    }
                    break;
                }
                decoded += decodedChar;
                i++;
              } else {
                decoded += c;
              }
            }
            return decoded;
          }
        }
        Code39Reader.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
        Code39Reader.CHARACTER_ENCODINGS = [
          52,
          289,
          97,
          352,
          49,
          304,
          112,
          37,
          292,
          100,
          265,
          73,
          328,
          25,
          280,
          88,
          13,
          268,
          76,
          28,
          259,
          67,
          322,
          19,
          274,
          82,
          7,
          262,
          70,
          22,
          385,
          193,
          448,
          145,
          400,
          208,
          133,
          388,
          196,
          168,
          162,
          138,
          42
        ];
        Code39Reader.ASTERISK_ENCODING = 148;
        class ITFReader extends OneDReader {
          constructor() {
            super(...arguments);
            this.narrowLineWidth = -1;
          }
          decodeRow(rowNumber, row, hints) {
            let startRange = this.decodeStart(row);
            let endRange = this.decodeEnd(row);
            let result = new StringBuilder();
            ITFReader.decodeMiddle(row, startRange[1], endRange[0], result);
            let resultString = result.toString();
            let allowedLengths = null;
            if (hints != null) {
              allowedLengths = hints.get(DecodeHintType$1.ALLOWED_LENGTHS);
            }
            if (allowedLengths == null) {
              allowedLengths = ITFReader.DEFAULT_ALLOWED_LENGTHS;
            }
            let length = resultString.length;
            let lengthOK = false;
            let maxAllowedLength = 0;
            for (let value of allowedLengths) {
              if (length === value) {
                lengthOK = true;
                break;
              }
              if (value > maxAllowedLength) {
                maxAllowedLength = value;
              }
            }
            if (!lengthOK && length > maxAllowedLength) {
              lengthOK = true;
            }
            if (!lengthOK) {
              throw new FormatException();
            }
            const points = [new ResultPoint(startRange[1], rowNumber), new ResultPoint(endRange[0], rowNumber)];
            let resultReturn = new Result(resultString, null, 0, points, BarcodeFormat$1.ITF, new Date().getTime());
            return resultReturn;
          }
          static decodeMiddle(row, payloadStart, payloadEnd, resultString) {
            let counterDigitPair = new Int32Array(10);
            let counterBlack = new Int32Array(5);
            let counterWhite = new Int32Array(5);
            counterDigitPair.fill(0);
            counterBlack.fill(0);
            counterWhite.fill(0);
            while (payloadStart < payloadEnd) {
              OneDReader.recordPattern(row, payloadStart, counterDigitPair);
              for (let k = 0; k < 5; k++) {
                let twoK = 2 * k;
                counterBlack[k] = counterDigitPair[twoK];
                counterWhite[k] = counterDigitPair[twoK + 1];
              }
              let bestMatch = ITFReader.decodeDigit(counterBlack);
              resultString.append(bestMatch.toString());
              bestMatch = this.decodeDigit(counterWhite);
              resultString.append(bestMatch.toString());
              counterDigitPair.forEach(function(counterDigit) {
                payloadStart += counterDigit;
              });
            }
          }
          decodeStart(row) {
            let endStart = ITFReader.skipWhiteSpace(row);
            let startPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.START_PATTERN);
            this.narrowLineWidth = (startPattern[1] - startPattern[0]) / 4;
            this.validateQuietZone(row, startPattern[0]);
            return startPattern;
          }
          validateQuietZone(row, startPattern) {
            let quietCount = this.narrowLineWidth * 10;
            quietCount = quietCount < startPattern ? quietCount : startPattern;
            for (let i = startPattern - 1; quietCount > 0 && i >= 0; i--) {
              if (row.get(i)) {
                break;
              }
              quietCount--;
            }
            if (quietCount !== 0) {
              throw new NotFoundException();
            }
          }
          static skipWhiteSpace(row) {
            const width = row.getSize();
            const endStart = row.getNextSet(0);
            if (endStart === width) {
              throw new NotFoundException();
            }
            return endStart;
          }
          decodeEnd(row) {
            row.reverse();
            try {
              let endStart = ITFReader.skipWhiteSpace(row);
              let endPattern;
              try {
                endPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.END_PATTERN_REVERSED[0]);
              } catch (error) {
                if (error instanceof NotFoundException) {
                  endPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.END_PATTERN_REVERSED[1]);
                }
              }
              this.validateQuietZone(row, endPattern[0]);
              let temp = endPattern[0];
              endPattern[0] = row.getSize() - endPattern[1];
              endPattern[1] = row.getSize() - temp;
              return endPattern;
            } finally {
              row.reverse();
            }
          }
          static findGuardPattern(row, rowOffset, pattern) {
            let patternLength = pattern.length;
            let counters = new Int32Array(patternLength);
            let width = row.getSize();
            let isWhite = false;
            let counterPosition = 0;
            let patternStart = rowOffset;
            counters.fill(0);
            for (let x = rowOffset; x < width; x++) {
              if (row.get(x) !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition === patternLength - 1) {
                  if (OneDReader.patternMatchVariance(counters, pattern, ITFReader.MAX_INDIVIDUAL_VARIANCE) < ITFReader.MAX_AVG_VARIANCE) {
                    return [patternStart, x];
                  }
                  patternStart += counters[0] + counters[1];
                  System.arraycopy(counters, 2, counters, 0, counterPosition - 1);
                  counters[counterPosition - 1] = 0;
                  counters[counterPosition] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            throw new NotFoundException();
          }
          static decodeDigit(counters) {
            let bestVariance = ITFReader.MAX_AVG_VARIANCE;
            let bestMatch = -1;
            let max = ITFReader.PATTERNS.length;
            for (let i = 0; i < max; i++) {
              let pattern = ITFReader.PATTERNS[i];
              let variance = OneDReader.patternMatchVariance(counters, pattern, ITFReader.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = i;
              } else if (variance === bestVariance) {
                bestMatch = -1;
              }
            }
            if (bestMatch >= 0) {
              return bestMatch % 10;
            } else {
              throw new NotFoundException();
            }
          }
        }
        ITFReader.PATTERNS = [
          Int32Array.from([1, 1, 2, 2, 1]),
          Int32Array.from([2, 1, 1, 1, 2]),
          Int32Array.from([1, 2, 1, 1, 2]),
          Int32Array.from([2, 2, 1, 1, 1]),
          Int32Array.from([1, 1, 2, 1, 2]),
          Int32Array.from([2, 1, 2, 1, 1]),
          Int32Array.from([1, 2, 2, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 2]),
          Int32Array.from([2, 1, 1, 2, 1]),
          Int32Array.from([1, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 3, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 3]),
          Int32Array.from([1, 3, 1, 1, 3]),
          Int32Array.from([3, 3, 1, 1, 1]),
          Int32Array.from([1, 1, 3, 1, 3]),
          Int32Array.from([3, 1, 3, 1, 1]),
          Int32Array.from([1, 3, 3, 1, 1]),
          Int32Array.from([1, 1, 1, 3, 3]),
          Int32Array.from([3, 1, 1, 3, 1]),
          Int32Array.from([1, 3, 1, 3, 1])
        ];
        ITFReader.MAX_AVG_VARIANCE = 0.38;
        ITFReader.MAX_INDIVIDUAL_VARIANCE = 0.5;
        ITFReader.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
        ITFReader.START_PATTERN = Int32Array.from([1, 1, 1, 1]);
        ITFReader.END_PATTERN_REVERSED = [
          Int32Array.from([1, 1, 2]),
          Int32Array.from([1, 1, 3])
        ];
        class AbstractUPCEANReader extends OneDReader {
          constructor() {
            super(...arguments);
            this.decodeRowStringBuffer = "";
          }
          static findStartGuardPattern(row) {
            let foundStart = false;
            let startRange;
            let nextStart = 0;
            let counters = Int32Array.from([0, 0, 0]);
            while (!foundStart) {
              counters = Int32Array.from([0, 0, 0]);
              startRange = AbstractUPCEANReader.findGuardPattern(row, nextStart, false, this.START_END_PATTERN, counters);
              let start = startRange[0];
              nextStart = startRange[1];
              let quietStart = start - (nextStart - start);
              if (quietStart >= 0) {
                foundStart = row.isRange(quietStart, start, false);
              }
            }
            return startRange;
          }
          static checkChecksum(s) {
            return AbstractUPCEANReader.checkStandardUPCEANChecksum(s);
          }
          static checkStandardUPCEANChecksum(s) {
            let length = s.length;
            if (length === 0)
              return false;
            let check = parseInt(s.charAt(length - 1), 10);
            return AbstractUPCEANReader.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
          }
          static getStandardUPCEANChecksum(s) {
            let length = s.length;
            let sum = 0;
            for (let i = length - 1; i >= 0; i -= 2) {
              let digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
              if (digit < 0 || digit > 9) {
                throw new FormatException();
              }
              sum += digit;
            }
            sum *= 3;
            for (let i = length - 2; i >= 0; i -= 2) {
              let digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
              if (digit < 0 || digit > 9) {
                throw new FormatException();
              }
              sum += digit;
            }
            return (1e3 - sum) % 10;
          }
          static decodeEnd(row, endStart) {
            return AbstractUPCEANReader.findGuardPattern(row, endStart, false, AbstractUPCEANReader.START_END_PATTERN, new Int32Array(AbstractUPCEANReader.START_END_PATTERN.length).fill(0));
          }
          static findGuardPatternWithoutCounters(row, rowOffset, whiteFirst, pattern) {
            return this.findGuardPattern(row, rowOffset, whiteFirst, pattern, new Int32Array(pattern.length));
          }
          static findGuardPattern(row, rowOffset, whiteFirst, pattern, counters) {
            let width = row.getSize();
            rowOffset = whiteFirst ? row.getNextUnset(rowOffset) : row.getNextSet(rowOffset);
            let counterPosition = 0;
            let patternStart = rowOffset;
            let patternLength = pattern.length;
            let isWhite = whiteFirst;
            for (let x = rowOffset; x < width; x++) {
              if (row.get(x) !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition === patternLength - 1) {
                  if (OneDReader.patternMatchVariance(counters, pattern, AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE) < AbstractUPCEANReader.MAX_AVG_VARIANCE) {
                    return Int32Array.from([patternStart, x]);
                  }
                  patternStart += counters[0] + counters[1];
                  let slice = counters.slice(2, counters.length - 1);
                  for (let i = 0; i < counterPosition - 1; i++) {
                    counters[i] = slice[i];
                  }
                  counters[counterPosition - 1] = 0;
                  counters[counterPosition] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            throw new NotFoundException();
          }
          static decodeDigit(row, counters, rowOffset, patterns) {
            this.recordPattern(row, rowOffset, counters);
            let bestVariance = this.MAX_AVG_VARIANCE;
            let bestMatch = -1;
            let max = patterns.length;
            for (let i = 0; i < max; i++) {
              let pattern = patterns[i];
              let variance = OneDReader.patternMatchVariance(counters, pattern, AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = i;
              }
            }
            if (bestMatch >= 0) {
              return bestMatch;
            } else {
              throw new NotFoundException();
            }
          }
        }
        AbstractUPCEANReader.MAX_AVG_VARIANCE = 0.48;
        AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE = 0.7;
        AbstractUPCEANReader.START_END_PATTERN = Int32Array.from([1, 1, 1]);
        AbstractUPCEANReader.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]);
        AbstractUPCEANReader.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
        AbstractUPCEANReader.L_PATTERNS = [
          Int32Array.from([3, 2, 1, 1]),
          Int32Array.from([2, 2, 2, 1]),
          Int32Array.from([2, 1, 2, 2]),
          Int32Array.from([1, 4, 1, 1]),
          Int32Array.from([1, 1, 3, 2]),
          Int32Array.from([1, 2, 3, 1]),
          Int32Array.from([1, 1, 1, 4]),
          Int32Array.from([1, 3, 1, 2]),
          Int32Array.from([1, 2, 1, 3]),
          Int32Array.from([3, 1, 1, 2])
        ];
        class UPCEANExtension5Support {
          constructor() {
            this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
            this.decodeRowStringBuffer = "";
          }
          decodeRow(rowNumber, row, extensionStartRange) {
            let result = this.decodeRowStringBuffer;
            let end = this.decodeMiddle(row, extensionStartRange, result);
            let resultString = result.toString();
            let extensionData = UPCEANExtension5Support.parseExtensionString(resultString);
            let resultPoints = [
              new ResultPoint((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber),
              new ResultPoint(end, rowNumber)
            ];
            let extensionResult = new Result(resultString, null, 0, resultPoints, BarcodeFormat$1.UPC_EAN_EXTENSION, new Date().getTime());
            if (extensionData != null) {
              extensionResult.putAllMetadata(extensionData);
            }
            return extensionResult;
          }
          decodeMiddle(row, startRange, resultString) {
            let counters = this.decodeMiddleCounters;
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            let end = row.getSize();
            let rowOffset = startRange[1];
            let lgPatternFound = 0;
            for (let x = 0; x < 5 && rowOffset < end; x++) {
              let bestMatch = AbstractUPCEANReader.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader.L_AND_G_PATTERNS);
              resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
              for (let counter of counters) {
                rowOffset += counter;
              }
              if (bestMatch >= 10) {
                lgPatternFound |= 1 << 4 - x;
              }
              if (x !== 4) {
                rowOffset = row.getNextSet(rowOffset);
                rowOffset = row.getNextUnset(rowOffset);
              }
            }
            if (resultString.length !== 5) {
              throw new NotFoundException();
            }
            let checkDigit = this.determineCheckDigit(lgPatternFound);
            if (UPCEANExtension5Support.extensionChecksum(resultString.toString()) !== checkDigit) {
              throw new NotFoundException();
            }
            return rowOffset;
          }
          static extensionChecksum(s) {
            let length = s.length;
            let sum = 0;
            for (let i = length - 2; i >= 0; i -= 2) {
              sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
            }
            sum *= 3;
            for (let i = length - 1; i >= 0; i -= 2) {
              sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
            }
            sum *= 3;
            return sum % 10;
          }
          determineCheckDigit(lgPatternFound) {
            for (let d = 0; d < 10; d++) {
              if (lgPatternFound === this.CHECK_DIGIT_ENCODINGS[d]) {
                return d;
              }
            }
            throw new NotFoundException();
          }
          static parseExtensionString(raw) {
            if (raw.length !== 5) {
              return null;
            }
            let value = UPCEANExtension5Support.parseExtension5String(raw);
            if (value == null) {
              return null;
            }
            return /* @__PURE__ */ new Map([[ResultMetadataType$1.SUGGESTED_PRICE, value]]);
          }
          static parseExtension5String(raw) {
            let currency;
            switch (raw.charAt(0)) {
              case "0":
                currency = "\xA3";
                break;
              case "5":
                currency = "$";
                break;
              case "9":
                switch (raw) {
                  case "90000":
                    return null;
                  case "99991":
                    return "0.00";
                  case "99990":
                    return "Used";
                }
                currency = "";
                break;
              default:
                currency = "";
                break;
            }
            let rawAmount = parseInt(raw.substring(1));
            let unitsString = (rawAmount / 100).toString();
            let hundredths = rawAmount % 100;
            let hundredthsString = hundredths < 10 ? "0" + hundredths : hundredths.toString();
            return currency + unitsString + "." + hundredthsString;
          }
        }
        class UPCEANExtension2Support {
          constructor() {
            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
            this.decodeRowStringBuffer = "";
          }
          decodeRow(rowNumber, row, extensionStartRange) {
            let result = this.decodeRowStringBuffer;
            let end = this.decodeMiddle(row, extensionStartRange, result);
            let resultString = result.toString();
            let extensionData = UPCEANExtension2Support.parseExtensionString(resultString);
            let resultPoints = [
              new ResultPoint((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber),
              new ResultPoint(end, rowNumber)
            ];
            let extensionResult = new Result(resultString, null, 0, resultPoints, BarcodeFormat$1.UPC_EAN_EXTENSION, new Date().getTime());
            if (extensionData != null) {
              extensionResult.putAllMetadata(extensionData);
            }
            return extensionResult;
          }
          decodeMiddle(row, startRange, resultString) {
            let counters = this.decodeMiddleCounters;
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            let end = row.getSize();
            let rowOffset = startRange[1];
            let checkParity = 0;
            for (let x = 0; x < 2 && rowOffset < end; x++) {
              let bestMatch = AbstractUPCEANReader.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader.L_AND_G_PATTERNS);
              resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
              for (let counter of counters) {
                rowOffset += counter;
              }
              if (bestMatch >= 10) {
                checkParity |= 1 << 1 - x;
              }
              if (x !== 1) {
                rowOffset = row.getNextSet(rowOffset);
                rowOffset = row.getNextUnset(rowOffset);
              }
            }
            if (resultString.length !== 2) {
              throw new NotFoundException();
            }
            if (parseInt(resultString.toString()) % 4 !== checkParity) {
              throw new NotFoundException();
            }
            return rowOffset;
          }
          static parseExtensionString(raw) {
            if (raw.length !== 2) {
              return null;
            }
            return /* @__PURE__ */ new Map([[ResultMetadataType$1.ISSUE_NUMBER, parseInt(raw)]]);
          }
        }
        class UPCEANExtensionSupport {
          static decodeRow(rowNumber, row, rowOffset) {
            let extensionStartRange = AbstractUPCEANReader.findGuardPattern(row, rowOffset, false, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
            try {
              let fiveSupport = new UPCEANExtension5Support();
              return fiveSupport.decodeRow(rowNumber, row, extensionStartRange);
            } catch (err) {
              let twoSupport = new UPCEANExtension2Support();
              return twoSupport.decodeRow(rowNumber, row, extensionStartRange);
            }
          }
        }
        UPCEANExtensionSupport.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
        class UPCEANReader extends AbstractUPCEANReader {
          constructor() {
            super();
            this.decodeRowStringBuffer = "";
            UPCEANReader.L_AND_G_PATTERNS = UPCEANReader.L_PATTERNS.map((arr) => Int32Array.from(arr));
            for (let i = 10; i < 20; i++) {
              let widths = UPCEANReader.L_PATTERNS[i - 10];
              let reversedWidths = new Int32Array(widths.length);
              for (let j = 0; j < widths.length; j++) {
                reversedWidths[j] = widths[widths.length - j - 1];
              }
              UPCEANReader.L_AND_G_PATTERNS[i] = reversedWidths;
            }
          }
          decodeRow(rowNumber, row, hints) {
            let startGuardRange = UPCEANReader.findStartGuardPattern(row);
            let resultPointCallback = hints == null ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
            if (resultPointCallback != null) {
              const resultPoint2 = new ResultPoint((startGuardRange[0] + startGuardRange[1]) / 2, rowNumber);
              resultPointCallback.foundPossibleResultPoint(resultPoint2);
            }
            let budello = this.decodeMiddle(row, startGuardRange, this.decodeRowStringBuffer);
            let endStart = budello.rowOffset;
            let result = budello.resultString;
            if (resultPointCallback != null) {
              const resultPoint2 = new ResultPoint(endStart, rowNumber);
              resultPointCallback.foundPossibleResultPoint(resultPoint2);
            }
            let endRange = this.decodeEnd(row, endStart);
            if (resultPointCallback != null) {
              const resultPoint2 = new ResultPoint((endRange[0] + endRange[1]) / 2, rowNumber);
              resultPointCallback.foundPossibleResultPoint(resultPoint2);
            }
            let end = endRange[1];
            let quietEnd = end + (end - endRange[0]);
            if (quietEnd >= row.getSize() || !row.isRange(end, quietEnd, false)) {
              throw new NotFoundException();
            }
            let resultString = result.toString();
            if (resultString.length < 8) {
              throw new FormatException();
            }
            if (!UPCEANReader.checkChecksum(resultString)) {
              throw new ChecksumException();
            }
            let left = (startGuardRange[1] + startGuardRange[0]) / 2;
            let right = (endRange[1] + endRange[0]) / 2;
            let format = this.getBarcodeFormat();
            let resultPoint = [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)];
            let decodeResult = new Result(resultString, null, 0, resultPoint, format, new Date().getTime());
            let extensionLength = 0;
            try {
              let extensionResult = UPCEANExtensionSupport.decodeRow(rowNumber, row, endRange[1]);
              decodeResult.putMetadata(ResultMetadataType$1.UPC_EAN_EXTENSION, extensionResult.getText());
              decodeResult.putAllMetadata(extensionResult.getResultMetadata());
              decodeResult.addResultPoints(extensionResult.getResultPoints());
              extensionLength = extensionResult.getText().length;
            } catch (ignoreError) {
            }
            let allowedExtensions = hints == null ? null : hints.get(DecodeHintType$1.ALLOWED_EAN_EXTENSIONS);
            if (allowedExtensions != null) {
              let valid = false;
              for (let length in allowedExtensions) {
                if (extensionLength.toString() === length) {
                  valid = true;
                  break;
                }
              }
              if (!valid) {
                throw new NotFoundException();
              }
            }
            return decodeResult;
          }
          decodeEnd(row, endStart) {
            return UPCEANReader.findGuardPattern(row, endStart, false, UPCEANReader.START_END_PATTERN, new Int32Array(UPCEANReader.START_END_PATTERN.length).fill(0));
          }
          static checkChecksum(s) {
            return UPCEANReader.checkStandardUPCEANChecksum(s);
          }
          static checkStandardUPCEANChecksum(s) {
            let length = s.length;
            if (length === 0)
              return false;
            let check = parseInt(s.charAt(length - 1), 10);
            return UPCEANReader.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
          }
          static getStandardUPCEANChecksum(s) {
            let length = s.length;
            let sum = 0;
            for (let i = length - 1; i >= 0; i -= 2) {
              let digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
              if (digit < 0 || digit > 9) {
                throw new FormatException();
              }
              sum += digit;
            }
            sum *= 3;
            for (let i = length - 2; i >= 0; i -= 2) {
              let digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
              if (digit < 0 || digit > 9) {
                throw new FormatException();
              }
              sum += digit;
            }
            return (1e3 - sum) % 10;
          }
        }
        class EAN13Reader extends UPCEANReader {
          constructor() {
            super();
            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
          }
          decodeMiddle(row, startRange, resultString) {
            let counters = this.decodeMiddleCounters;
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            let end = row.getSize();
            let rowOffset = startRange[1];
            let lgPatternFound = 0;
            for (let x = 0; x < 6 && rowOffset < end; x++) {
              let bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_AND_G_PATTERNS);
              resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
              for (let counter of counters) {
                rowOffset += counter;
              }
              if (bestMatch >= 10) {
                lgPatternFound |= 1 << 5 - x;
              }
            }
            resultString = EAN13Reader.determineFirstDigit(resultString, lgPatternFound);
            let middleRange = UPCEANReader.findGuardPattern(row, rowOffset, true, UPCEANReader.MIDDLE_PATTERN, new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));
            rowOffset = middleRange[1];
            for (let x = 0; x < 6 && rowOffset < end; x++) {
              let bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
              resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
              for (let counter of counters) {
                rowOffset += counter;
              }
            }
            return { rowOffset, resultString };
          }
          getBarcodeFormat() {
            return BarcodeFormat$1.EAN_13;
          }
          static determineFirstDigit(resultString, lgPatternFound) {
            for (let d = 0; d < 10; d++) {
              if (lgPatternFound === this.FIRST_DIGIT_ENCODINGS[d]) {
                resultString = String.fromCharCode("0".charCodeAt(0) + d) + resultString;
                return resultString;
              }
            }
            throw new NotFoundException();
          }
        }
        EAN13Reader.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
        class EAN8Reader extends UPCEANReader {
          constructor() {
            super();
            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
          }
          decodeMiddle(row, startRange, resultString) {
            const counters = this.decodeMiddleCounters;
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            let end = row.getSize();
            let rowOffset = startRange[1];
            for (let x = 0; x < 4 && rowOffset < end; x++) {
              let bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
              resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
              for (let counter of counters) {
                rowOffset += counter;
              }
            }
            let middleRange = UPCEANReader.findGuardPattern(row, rowOffset, true, UPCEANReader.MIDDLE_PATTERN, new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));
            rowOffset = middleRange[1];
            for (let x = 0; x < 4 && rowOffset < end; x++) {
              let bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
              resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
              for (let counter of counters) {
                rowOffset += counter;
              }
            }
            return { rowOffset, resultString };
          }
          getBarcodeFormat() {
            return BarcodeFormat$1.EAN_8;
          }
        }
        class UPCAReader extends UPCEANReader {
          constructor() {
            super(...arguments);
            this.ean13Reader = new EAN13Reader();
          }
          getBarcodeFormat() {
            return BarcodeFormat$1.UPC_A;
          }
          decode(image, hints) {
            return this.maybeReturnResult(this.ean13Reader.decode(image));
          }
          decodeRow(rowNumber, row, hints) {
            return this.maybeReturnResult(this.ean13Reader.decodeRow(rowNumber, row, hints));
          }
          decodeMiddle(row, startRange, resultString) {
            return this.ean13Reader.decodeMiddle(row, startRange, resultString);
          }
          maybeReturnResult(result) {
            let text = result.getText();
            if (text.charAt(0) === "0") {
              let upcaResult = new Result(text.substring(1), null, null, result.getResultPoints(), BarcodeFormat$1.UPC_A);
              if (result.getResultMetadata() != null) {
                upcaResult.putAllMetadata(result.getResultMetadata());
              }
              return upcaResult;
            } else {
              throw new NotFoundException();
            }
          }
          reset() {
            this.ean13Reader.reset();
          }
        }
        class UPCEReader extends UPCEANReader {
          constructor() {
            super();
            this.decodeMiddleCounters = new Int32Array(4);
          }
          decodeMiddle(row, startRange, result) {
            const counters = this.decodeMiddleCounters.map((x) => x);
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            const end = row.getSize();
            let rowOffset = startRange[1];
            let lgPatternFound = 0;
            for (let x = 0; x < 6 && rowOffset < end; x++) {
              const bestMatch = UPCEReader.decodeDigit(row, counters, rowOffset, UPCEReader.L_AND_G_PATTERNS);
              result += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
              for (let counter of counters) {
                rowOffset += counter;
              }
              if (bestMatch >= 10) {
                lgPatternFound |= 1 << 5 - x;
              }
            }
            let resultString = UPCEReader.determineNumSysAndCheckDigit(result, lgPatternFound);
            return { rowOffset, resultString };
          }
          decodeEnd(row, endStart) {
            return UPCEReader.findGuardPatternWithoutCounters(row, endStart, true, UPCEReader.MIDDLE_END_PATTERN);
          }
          checkChecksum(s) {
            return UPCEANReader.checkChecksum(UPCEReader.convertUPCEtoUPCA(s));
          }
          static determineNumSysAndCheckDigit(resultString, lgPatternFound) {
            for (let numSys = 0; numSys <= 1; numSys++) {
              for (let d = 0; d < 10; d++) {
                if (lgPatternFound === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[numSys][d]) {
                  let prefix = String.fromCharCode("0".charCodeAt(0) + numSys);
                  let suffix = String.fromCharCode("0".charCodeAt(0) + d);
                  return prefix + resultString + suffix;
                }
              }
            }
            throw NotFoundException.getNotFoundInstance();
          }
          getBarcodeFormat() {
            return BarcodeFormat$1.UPC_E;
          }
          static convertUPCEtoUPCA(upce) {
            const upceChars = upce.slice(1, 7).split("").map((x) => x.charCodeAt(0));
            const result = new StringBuilder();
            result.append(upce.charAt(0));
            let lastChar = upceChars[5];
            switch (lastChar) {
              case 0:
              case 1:
              case 2:
                result.appendChars(upceChars, 0, 2);
                result.append(lastChar);
                result.append("0000");
                result.appendChars(upceChars, 2, 3);
                break;
              case 3:
                result.appendChars(upceChars, 0, 3);
                result.append("00000");
                result.appendChars(upceChars, 3, 2);
                break;
              case 4:
                result.appendChars(upceChars, 0, 4);
                result.append("00000");
                result.append(upceChars[4]);
                break;
              default:
                result.appendChars(upceChars, 0, 5);
                result.append("0000");
                result.append(lastChar);
                break;
            }
            if (upce.length >= 8) {
              result.append(upce.charAt(7));
            }
            return result.toString();
          }
        }
        UPCEReader.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
        UPCEReader.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
          Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
          Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 26])
        ];
        class MultiFormatUPCEANReader extends OneDReader {
          constructor(hints) {
            super();
            let possibleFormats = hints == null ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
            let readers = [];
            if (!isNullOrUndefined2(possibleFormats)) {
              if (possibleFormats.indexOf(BarcodeFormat$1.EAN_13) > -1) {
                readers.push(new EAN13Reader());
              }
              if (possibleFormats.indexOf(BarcodeFormat$1.UPC_A) > -1) {
                readers.push(new UPCAReader());
              }
              if (possibleFormats.indexOf(BarcodeFormat$1.EAN_8) > -1) {
                readers.push(new EAN8Reader());
              }
              if (possibleFormats.indexOf(BarcodeFormat$1.UPC_E) > -1) {
                readers.push(new UPCEReader());
              }
            } else {
              readers.push(new EAN13Reader());
              readers.push(new UPCAReader());
              readers.push(new EAN8Reader());
              readers.push(new UPCEReader());
            }
            this.readers = readers;
          }
          decodeRow(rowNumber, row, hints) {
            for (let reader of this.readers) {
              try {
                const result = reader.decodeRow(rowNumber, row, hints);
                const ean13MayBeUPCA = result.getBarcodeFormat() === BarcodeFormat$1.EAN_13 && result.getText().charAt(0) === "0";
                const possibleFormats = hints == null ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
                const canReturnUPCA = possibleFormats == null || possibleFormats.includes(BarcodeFormat$1.UPC_A);
                if (ean13MayBeUPCA && canReturnUPCA) {
                  const rawBytes = result.getRawBytes();
                  const resultUPCA = new Result(result.getText().substring(1), rawBytes, rawBytes ? rawBytes.length : null, result.getResultPoints(), BarcodeFormat$1.UPC_A);
                  resultUPCA.putAllMetadata(result.getResultMetadata());
                  return resultUPCA;
                }
                return result;
              } catch (err) {
              }
            }
            throw new NotFoundException();
          }
          reset() {
            for (let reader of this.readers) {
              reader.reset();
            }
          }
        }
        class AbstractRSSReader extends OneDReader {
          constructor() {
            super();
            this.decodeFinderCounters = new Int32Array(4);
            this.dataCharacterCounters = new Int32Array(8);
            this.oddRoundingErrors = new Array(4);
            this.evenRoundingErrors = new Array(4);
            this.oddCounts = new Array(this.dataCharacterCounters.length / 2);
            this.evenCounts = new Array(this.dataCharacterCounters.length / 2);
          }
          getDecodeFinderCounters() {
            return this.decodeFinderCounters;
          }
          getDataCharacterCounters() {
            return this.dataCharacterCounters;
          }
          getOddRoundingErrors() {
            return this.oddRoundingErrors;
          }
          getEvenRoundingErrors() {
            return this.evenRoundingErrors;
          }
          getOddCounts() {
            return this.oddCounts;
          }
          getEvenCounts() {
            return this.evenCounts;
          }
          parseFinderValue(counters, finderPatterns) {
            for (let value = 0; value < finderPatterns.length; value++) {
              if (OneDReader.patternMatchVariance(counters, finderPatterns[value], AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE) < AbstractRSSReader.MAX_AVG_VARIANCE) {
                return value;
              }
            }
            throw new NotFoundException();
          }
          static count(array) {
            return MathUtils.sum(new Int32Array(array));
          }
          static increment(array, errors) {
            let index = 0;
            let biggestError = errors[0];
            for (let i = 1; i < array.length; i++) {
              if (errors[i] > biggestError) {
                biggestError = errors[i];
                index = i;
              }
            }
            array[index]++;
          }
          static decrement(array, errors) {
            let index = 0;
            let biggestError = errors[0];
            for (let i = 1; i < array.length; i++) {
              if (errors[i] < biggestError) {
                biggestError = errors[i];
                index = i;
              }
            }
            array[index]--;
          }
          static isFinderPattern(counters) {
            let firstTwoSum = counters[0] + counters[1];
            let sum = firstTwoSum + counters[2] + counters[3];
            let ratio = firstTwoSum / sum;
            if (ratio >= AbstractRSSReader.MIN_FINDER_PATTERN_RATIO && ratio <= AbstractRSSReader.MAX_FINDER_PATTERN_RATIO) {
              let minCounter = Number.MAX_SAFE_INTEGER;
              let maxCounter = Number.MIN_SAFE_INTEGER;
              for (let counter of counters) {
                if (counter > maxCounter) {
                  maxCounter = counter;
                }
                if (counter < minCounter) {
                  minCounter = counter;
                }
              }
              return maxCounter < 10 * minCounter;
            }
            return false;
          }
        }
        AbstractRSSReader.MAX_AVG_VARIANCE = 0.2;
        AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE = 0.45;
        AbstractRSSReader.MIN_FINDER_PATTERN_RATIO = 9.5 / 12;
        AbstractRSSReader.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
        class DataCharacter {
          constructor(value, checksumPortion) {
            this.value = value;
            this.checksumPortion = checksumPortion;
          }
          getValue() {
            return this.value;
          }
          getChecksumPortion() {
            return this.checksumPortion;
          }
          toString() {
            return this.value + "(" + this.checksumPortion + ")";
          }
          equals(o) {
            if (!(o instanceof DataCharacter)) {
              return false;
            }
            const that = o;
            return this.value === that.value && this.checksumPortion === that.checksumPortion;
          }
          hashCode() {
            return this.value ^ this.checksumPortion;
          }
        }
        class FinderPattern {
          constructor(value, startEnd, start, end, rowNumber) {
            this.value = value;
            this.startEnd = startEnd;
            this.value = value;
            this.startEnd = startEnd;
            this.resultPoints = new Array();
            this.resultPoints.push(new ResultPoint(start, rowNumber));
            this.resultPoints.push(new ResultPoint(end, rowNumber));
          }
          getValue() {
            return this.value;
          }
          getStartEnd() {
            return this.startEnd;
          }
          getResultPoints() {
            return this.resultPoints;
          }
          equals(o) {
            if (!(o instanceof FinderPattern)) {
              return false;
            }
            const that = o;
            return this.value === that.value;
          }
          hashCode() {
            return this.value;
          }
        }
        class RSSUtils {
          constructor() {
          }
          static getRSSvalue(widths, maxWidth, noNarrow) {
            let n = 0;
            for (let width of widths) {
              n += width;
            }
            let val = 0;
            let narrowMask = 0;
            let elements = widths.length;
            for (let bar = 0; bar < elements - 1; bar++) {
              let elmWidth;
              for (elmWidth = 1, narrowMask |= 1 << bar; elmWidth < widths[bar]; elmWidth++, narrowMask &= ~(1 << bar)) {
                let subVal = RSSUtils.combins(n - elmWidth - 1, elements - bar - 2);
                if (noNarrow && narrowMask === 0 && n - elmWidth - (elements - bar - 1) >= elements - bar - 1) {
                  subVal -= RSSUtils.combins(n - elmWidth - (elements - bar), elements - bar - 2);
                }
                if (elements - bar - 1 > 1) {
                  let lessVal = 0;
                  for (let mxwElement = n - elmWidth - (elements - bar - 2); mxwElement > maxWidth; mxwElement--) {
                    lessVal += RSSUtils.combins(n - elmWidth - mxwElement - 1, elements - bar - 3);
                  }
                  subVal -= lessVal * (elements - 1 - bar);
                } else if (n - elmWidth > maxWidth) {
                  subVal--;
                }
                val += subVal;
              }
              n -= elmWidth;
            }
            return val;
          }
          static combins(n, r) {
            let maxDenom;
            let minDenom;
            if (n - r > r) {
              minDenom = r;
              maxDenom = n - r;
            } else {
              minDenom = n - r;
              maxDenom = r;
            }
            let val = 1;
            let j = 1;
            for (let i = n; i > maxDenom; i--) {
              val *= i;
              if (j <= minDenom) {
                val /= j;
                j++;
              }
            }
            while (j <= minDenom) {
              val /= j;
              j++;
            }
            return val;
          }
        }
        class BitArrayBuilder {
          static buildBitArray(pairs) {
            let charNumber = pairs.length * 2 - 1;
            if (pairs[pairs.length - 1].getRightChar() == null) {
              charNumber -= 1;
            }
            let size = 12 * charNumber;
            let binary = new BitArray(size);
            let accPos = 0;
            let firstPair = pairs[0];
            let firstValue = firstPair.getRightChar().getValue();
            for (let i = 11; i >= 0; --i) {
              if ((firstValue & 1 << i) != 0) {
                binary.set(accPos);
              }
              accPos++;
            }
            for (let i = 1; i < pairs.length; ++i) {
              let currentPair = pairs[i];
              let leftValue = currentPair.getLeftChar().getValue();
              for (let j = 11; j >= 0; --j) {
                if ((leftValue & 1 << j) != 0) {
                  binary.set(accPos);
                }
                accPos++;
              }
              if (currentPair.getRightChar() != null) {
                let rightValue = currentPair.getRightChar().getValue();
                for (let j = 11; j >= 0; --j) {
                  if ((rightValue & 1 << j) != 0) {
                    binary.set(accPos);
                  }
                  accPos++;
                }
              }
            }
            return binary;
          }
        }
        class BlockParsedResult {
          constructor(finished, decodedInformation) {
            if (decodedInformation) {
              this.decodedInformation = null;
            } else {
              this.finished = finished;
              this.decodedInformation = decodedInformation;
            }
          }
          getDecodedInformation() {
            return this.decodedInformation;
          }
          isFinished() {
            return this.finished;
          }
        }
        class DecodedObject {
          constructor(newPosition) {
            this.newPosition = newPosition;
          }
          getNewPosition() {
            return this.newPosition;
          }
        }
        class DecodedChar extends DecodedObject {
          constructor(newPosition, value) {
            super(newPosition);
            this.value = value;
          }
          getValue() {
            return this.value;
          }
          isFNC1() {
            return this.value === DecodedChar.FNC1;
          }
        }
        DecodedChar.FNC1 = "$";
        class DecodedInformation extends DecodedObject {
          constructor(newPosition, newString, remainingValue) {
            super(newPosition);
            if (remainingValue) {
              this.remaining = true;
              this.remainingValue = this.remainingValue;
            } else {
              this.remaining = false;
              this.remainingValue = 0;
            }
            this.newString = newString;
          }
          getNewString() {
            return this.newString;
          }
          isRemaining() {
            return this.remaining;
          }
          getRemainingValue() {
            return this.remainingValue;
          }
        }
        class DecodedNumeric extends DecodedObject {
          constructor(newPosition, firstDigit, secondDigit) {
            super(newPosition);
            if (firstDigit < 0 || firstDigit > 10 || secondDigit < 0 || secondDigit > 10) {
              throw new FormatException();
            }
            this.firstDigit = firstDigit;
            this.secondDigit = secondDigit;
          }
          getFirstDigit() {
            return this.firstDigit;
          }
          getSecondDigit() {
            return this.secondDigit;
          }
          getValue() {
            return this.firstDigit * 10 + this.secondDigit;
          }
          isFirstDigitFNC1() {
            return this.firstDigit === DecodedNumeric.FNC1;
          }
          isSecondDigitFNC1() {
            return this.secondDigit === DecodedNumeric.FNC1;
          }
          isAnyFNC1() {
            return this.firstDigit === DecodedNumeric.FNC1 || this.secondDigit === DecodedNumeric.FNC1;
          }
        }
        DecodedNumeric.FNC1 = 10;
        class FieldParser {
          constructor() {
          }
          static parseFieldsInGeneralPurpose(rawInformation) {
            if (!rawInformation) {
              return null;
            }
            if (rawInformation.length < 2) {
              throw new NotFoundException();
            }
            let firstTwoDigits = rawInformation.substring(0, 2);
            for (let dataLength of FieldParser.TWO_DIGIT_DATA_LENGTH) {
              if (dataLength[0] === firstTwoDigits) {
                if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                  return FieldParser.processVariableAI(2, dataLength[2], rawInformation);
                }
                return FieldParser.processFixedAI(2, dataLength[1], rawInformation);
              }
            }
            if (rawInformation.length < 3) {
              throw new NotFoundException();
            }
            let firstThreeDigits = rawInformation.substring(0, 3);
            for (let dataLength of FieldParser.THREE_DIGIT_DATA_LENGTH) {
              if (dataLength[0] === firstThreeDigits) {
                if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                  return FieldParser.processVariableAI(3, dataLength[2], rawInformation);
                }
                return FieldParser.processFixedAI(3, dataLength[1], rawInformation);
              }
            }
            for (let dataLength of FieldParser.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH) {
              if (dataLength[0] === firstThreeDigits) {
                if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                  return FieldParser.processVariableAI(4, dataLength[2], rawInformation);
                }
                return FieldParser.processFixedAI(4, dataLength[1], rawInformation);
              }
            }
            if (rawInformation.length < 4) {
              throw new NotFoundException();
            }
            let firstFourDigits = rawInformation.substring(0, 4);
            for (let dataLength of FieldParser.FOUR_DIGIT_DATA_LENGTH) {
              if (dataLength[0] === firstFourDigits) {
                if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                  return FieldParser.processVariableAI(4, dataLength[2], rawInformation);
                }
                return FieldParser.processFixedAI(4, dataLength[1], rawInformation);
              }
            }
            throw new NotFoundException();
          }
          static processFixedAI(aiSize, fieldSize, rawInformation) {
            if (rawInformation.length < aiSize) {
              throw new NotFoundException();
            }
            let ai = rawInformation.substring(0, aiSize);
            if (rawInformation.length < aiSize + fieldSize) {
              throw new NotFoundException();
            }
            let field = rawInformation.substring(aiSize, aiSize + fieldSize);
            let remaining = rawInformation.substring(aiSize + fieldSize);
            let result = "(" + ai + ")" + field;
            let parsedAI = FieldParser.parseFieldsInGeneralPurpose(remaining);
            return parsedAI == null ? result : result + parsedAI;
          }
          static processVariableAI(aiSize, variableFieldSize, rawInformation) {
            let ai = rawInformation.substring(0, aiSize);
            let maxSize;
            if (rawInformation.length < aiSize + variableFieldSize) {
              maxSize = rawInformation.length;
            } else {
              maxSize = aiSize + variableFieldSize;
            }
            let field = rawInformation.substring(aiSize, maxSize);
            let remaining = rawInformation.substring(maxSize);
            let result = "(" + ai + ")" + field;
            let parsedAI = FieldParser.parseFieldsInGeneralPurpose(remaining);
            return parsedAI == null ? result : result + parsedAI;
          }
        }
        FieldParser.VARIABLE_LENGTH = [];
        FieldParser.TWO_DIGIT_DATA_LENGTH = [
          ["00", 18],
          ["01", 14],
          ["02", 14],
          ["10", FieldParser.VARIABLE_LENGTH, 20],
          ["11", 6],
          ["12", 6],
          ["13", 6],
          ["15", 6],
          ["17", 6],
          ["20", 2],
          ["21", FieldParser.VARIABLE_LENGTH, 20],
          ["22", FieldParser.VARIABLE_LENGTH, 29],
          ["30", FieldParser.VARIABLE_LENGTH, 8],
          ["37", FieldParser.VARIABLE_LENGTH, 8],
          ["90", FieldParser.VARIABLE_LENGTH, 30],
          ["91", FieldParser.VARIABLE_LENGTH, 30],
          ["92", FieldParser.VARIABLE_LENGTH, 30],
          ["93", FieldParser.VARIABLE_LENGTH, 30],
          ["94", FieldParser.VARIABLE_LENGTH, 30],
          ["95", FieldParser.VARIABLE_LENGTH, 30],
          ["96", FieldParser.VARIABLE_LENGTH, 30],
          ["97", FieldParser.VARIABLE_LENGTH, 3],
          ["98", FieldParser.VARIABLE_LENGTH, 30],
          ["99", FieldParser.VARIABLE_LENGTH, 30]
        ];
        FieldParser.THREE_DIGIT_DATA_LENGTH = [
          ["240", FieldParser.VARIABLE_LENGTH, 30],
          ["241", FieldParser.VARIABLE_LENGTH, 30],
          ["242", FieldParser.VARIABLE_LENGTH, 6],
          ["250", FieldParser.VARIABLE_LENGTH, 30],
          ["251", FieldParser.VARIABLE_LENGTH, 30],
          ["253", FieldParser.VARIABLE_LENGTH, 17],
          ["254", FieldParser.VARIABLE_LENGTH, 20],
          ["400", FieldParser.VARIABLE_LENGTH, 30],
          ["401", FieldParser.VARIABLE_LENGTH, 30],
          ["402", 17],
          ["403", FieldParser.VARIABLE_LENGTH, 30],
          ["410", 13],
          ["411", 13],
          ["412", 13],
          ["413", 13],
          ["414", 13],
          ["420", FieldParser.VARIABLE_LENGTH, 20],
          ["421", FieldParser.VARIABLE_LENGTH, 15],
          ["422", 3],
          ["423", FieldParser.VARIABLE_LENGTH, 15],
          ["424", 3],
          ["425", 3],
          ["426", 3]
        ];
        FieldParser.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
          ["310", 6],
          ["311", 6],
          ["312", 6],
          ["313", 6],
          ["314", 6],
          ["315", 6],
          ["316", 6],
          ["320", 6],
          ["321", 6],
          ["322", 6],
          ["323", 6],
          ["324", 6],
          ["325", 6],
          ["326", 6],
          ["327", 6],
          ["328", 6],
          ["329", 6],
          ["330", 6],
          ["331", 6],
          ["332", 6],
          ["333", 6],
          ["334", 6],
          ["335", 6],
          ["336", 6],
          ["340", 6],
          ["341", 6],
          ["342", 6],
          ["343", 6],
          ["344", 6],
          ["345", 6],
          ["346", 6],
          ["347", 6],
          ["348", 6],
          ["349", 6],
          ["350", 6],
          ["351", 6],
          ["352", 6],
          ["353", 6],
          ["354", 6],
          ["355", 6],
          ["356", 6],
          ["357", 6],
          ["360", 6],
          ["361", 6],
          ["362", 6],
          ["363", 6],
          ["364", 6],
          ["365", 6],
          ["366", 6],
          ["367", 6],
          ["368", 6],
          ["369", 6],
          ["390", FieldParser.VARIABLE_LENGTH, 15],
          ["391", FieldParser.VARIABLE_LENGTH, 18],
          ["392", FieldParser.VARIABLE_LENGTH, 15],
          ["393", FieldParser.VARIABLE_LENGTH, 18],
          ["703", FieldParser.VARIABLE_LENGTH, 30]
        ];
        FieldParser.FOUR_DIGIT_DATA_LENGTH = [
          ["7001", 13],
          ["7002", FieldParser.VARIABLE_LENGTH, 30],
          ["7003", 10],
          ["8001", 14],
          ["8002", FieldParser.VARIABLE_LENGTH, 20],
          ["8003", FieldParser.VARIABLE_LENGTH, 30],
          ["8004", FieldParser.VARIABLE_LENGTH, 30],
          ["8005", 6],
          ["8006", 18],
          ["8007", FieldParser.VARIABLE_LENGTH, 30],
          ["8008", FieldParser.VARIABLE_LENGTH, 12],
          ["8018", 18],
          ["8020", FieldParser.VARIABLE_LENGTH, 25],
          ["8100", 6],
          ["8101", 10],
          ["8102", 2],
          ["8110", FieldParser.VARIABLE_LENGTH, 70],
          ["8200", FieldParser.VARIABLE_LENGTH, 70]
        ];
        class GeneralAppIdDecoder {
          constructor(information) {
            this.buffer = new StringBuilder();
            this.information = information;
          }
          decodeAllCodes(buff, initialPosition) {
            let currentPosition = initialPosition;
            let remaining = null;
            do {
              let info = this.decodeGeneralPurposeField(currentPosition, remaining);
              let parsedFields = FieldParser.parseFieldsInGeneralPurpose(info.getNewString());
              if (parsedFields != null) {
                buff.append(parsedFields);
              }
              if (info.isRemaining()) {
                remaining = "" + info.getRemainingValue();
              } else {
                remaining = null;
              }
              if (currentPosition === info.getNewPosition()) {
                break;
              }
              currentPosition = info.getNewPosition();
            } while (true);
            return buff.toString();
          }
          isStillNumeric(pos) {
            if (pos + 7 > this.information.getSize()) {
              return pos + 4 <= this.information.getSize();
            }
            for (let i = pos; i < pos + 3; ++i) {
              if (this.information.get(i)) {
                return true;
              }
            }
            return this.information.get(pos + 3);
          }
          decodeNumeric(pos) {
            if (pos + 7 > this.information.getSize()) {
              let numeric2 = this.extractNumericValueFromBitArray(pos, 4);
              if (numeric2 === 0) {
                return new DecodedNumeric(this.information.getSize(), DecodedNumeric.FNC1, DecodedNumeric.FNC1);
              }
              return new DecodedNumeric(this.information.getSize(), numeric2 - 1, DecodedNumeric.FNC1);
            }
            let numeric = this.extractNumericValueFromBitArray(pos, 7);
            let digit1 = (numeric - 8) / 11;
            let digit2 = (numeric - 8) % 11;
            return new DecodedNumeric(pos + 7, digit1, digit2);
          }
          extractNumericValueFromBitArray(pos, bits) {
            return GeneralAppIdDecoder.extractNumericValueFromBitArray(this.information, pos, bits);
          }
          static extractNumericValueFromBitArray(information, pos, bits) {
            let value = 0;
            for (let i = 0; i < bits; ++i) {
              if (information.get(pos + i)) {
                value |= 1 << bits - i - 1;
              }
            }
            return value;
          }
          decodeGeneralPurposeField(pos, remaining) {
            this.buffer.setLengthToZero();
            if (remaining != null) {
              this.buffer.append(remaining);
            }
            this.current.setPosition(pos);
            let lastDecoded = this.parseBlocks();
            if (lastDecoded != null && lastDecoded.isRemaining()) {
              return new DecodedInformation(this.current.getPosition(), this.buffer.toString(), lastDecoded.getRemainingValue());
            }
            return new DecodedInformation(this.current.getPosition(), this.buffer.toString());
          }
          parseBlocks() {
            let isFinished;
            let result;
            do {
              let initialPosition = this.current.getPosition();
              if (this.current.isAlpha()) {
                result = this.parseAlphaBlock();
                isFinished = result.isFinished();
              } else if (this.current.isIsoIec646()) {
                result = this.parseIsoIec646Block();
                isFinished = result.isFinished();
              } else {
                result = this.parseNumericBlock();
                isFinished = result.isFinished();
              }
              let positionChanged = initialPosition !== this.current.getPosition();
              if (!positionChanged && !isFinished) {
                break;
              }
            } while (!isFinished);
            return result.getDecodedInformation();
          }
          parseNumericBlock() {
            while (this.isStillNumeric(this.current.getPosition())) {
              let numeric = this.decodeNumeric(this.current.getPosition());
              this.current.setPosition(numeric.getNewPosition());
              if (numeric.isFirstDigitFNC1()) {
                let information;
                if (numeric.isSecondDigitFNC1()) {
                  information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                } else {
                  information = new DecodedInformation(this.current.getPosition(), this.buffer.toString(), numeric.getSecondDigit());
                }
                return new BlockParsedResult(true, information);
              }
              this.buffer.append(numeric.getFirstDigit());
              if (numeric.isSecondDigitFNC1()) {
                let information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                return new BlockParsedResult(true, information);
              }
              this.buffer.append(numeric.getSecondDigit());
            }
            if (this.isNumericToAlphaNumericLatch(this.current.getPosition())) {
              this.current.setAlpha();
              this.current.incrementPosition(4);
            }
            return new BlockParsedResult(false);
          }
          parseIsoIec646Block() {
            while (this.isStillIsoIec646(this.current.getPosition())) {
              let iso = this.decodeIsoIec646(this.current.getPosition());
              this.current.setPosition(iso.getNewPosition());
              if (iso.isFNC1()) {
                let information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                return new BlockParsedResult(true, information);
              }
              this.buffer.append(iso.getValue());
            }
            if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
              this.current.incrementPosition(3);
              this.current.setNumeric();
            } else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
              if (this.current.getPosition() + 5 < this.information.getSize()) {
                this.current.incrementPosition(5);
              } else {
                this.current.setPosition(this.information.getSize());
              }
              this.current.setAlpha();
            }
            return new BlockParsedResult(false);
          }
          parseAlphaBlock() {
            while (this.isStillAlpha(this.current.getPosition())) {
              let alpha = this.decodeAlphanumeric(this.current.getPosition());
              this.current.setPosition(alpha.getNewPosition());
              if (alpha.isFNC1()) {
                let information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                return new BlockParsedResult(true, information);
              }
              this.buffer.append(alpha.getValue());
            }
            if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
              this.current.incrementPosition(3);
              this.current.setNumeric();
            } else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
              if (this.current.getPosition() + 5 < this.information.getSize()) {
                this.current.incrementPosition(5);
              } else {
                this.current.setPosition(this.information.getSize());
              }
              this.current.setIsoIec646();
            }
            return new BlockParsedResult(false);
          }
          isStillIsoIec646(pos) {
            if (pos + 5 > this.information.getSize()) {
              return false;
            }
            let fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
            if (fiveBitValue >= 5 && fiveBitValue < 16) {
              return true;
            }
            if (pos + 7 > this.information.getSize()) {
              return false;
            }
            let sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
            if (sevenBitValue >= 64 && sevenBitValue < 116) {
              return true;
            }
            if (pos + 8 > this.information.getSize()) {
              return false;
            }
            let eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
            return eightBitValue >= 232 && eightBitValue < 253;
          }
          decodeIsoIec646(pos) {
            let fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
            if (fiveBitValue === 15) {
              return new DecodedChar(pos + 5, DecodedChar.FNC1);
            }
            if (fiveBitValue >= 5 && fiveBitValue < 15) {
              return new DecodedChar(pos + 5, "0" + (fiveBitValue - 5));
            }
            let sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
            if (sevenBitValue >= 64 && sevenBitValue < 90) {
              return new DecodedChar(pos + 7, "" + (sevenBitValue + 1));
            }
            if (sevenBitValue >= 90 && sevenBitValue < 116) {
              return new DecodedChar(pos + 7, "" + (sevenBitValue + 7));
            }
            let eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
            let c;
            switch (eightBitValue) {
              case 232:
                c = "!";
                break;
              case 233:
                c = '"';
                break;
              case 234:
                c = "%";
                break;
              case 235:
                c = "&";
                break;
              case 236:
                c = "'";
                break;
              case 237:
                c = "(";
                break;
              case 238:
                c = ")";
                break;
              case 239:
                c = "*";
                break;
              case 240:
                c = "+";
                break;
              case 241:
                c = ",";
                break;
              case 242:
                c = "-";
                break;
              case 243:
                c = ".";
                break;
              case 244:
                c = "/";
                break;
              case 245:
                c = ":";
                break;
              case 246:
                c = ";";
                break;
              case 247:
                c = "<";
                break;
              case 248:
                c = "=";
                break;
              case 249:
                c = ">";
                break;
              case 250:
                c = "?";
                break;
              case 251:
                c = "_";
                break;
              case 252:
                c = " ";
                break;
              default:
                throw new FormatException();
            }
            return new DecodedChar(pos + 8, c);
          }
          isStillAlpha(pos) {
            if (pos + 5 > this.information.getSize()) {
              return false;
            }
            let fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
            if (fiveBitValue >= 5 && fiveBitValue < 16) {
              return true;
            }
            if (pos + 6 > this.information.getSize()) {
              return false;
            }
            let sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
            return sixBitValue >= 16 && sixBitValue < 63;
          }
          decodeAlphanumeric(pos) {
            let fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
            if (fiveBitValue === 15) {
              return new DecodedChar(pos + 5, DecodedChar.FNC1);
            }
            if (fiveBitValue >= 5 && fiveBitValue < 15) {
              return new DecodedChar(pos + 5, "0" + (fiveBitValue - 5));
            }
            let sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
            if (sixBitValue >= 32 && sixBitValue < 58) {
              return new DecodedChar(pos + 6, "" + (sixBitValue + 33));
            }
            let c;
            switch (sixBitValue) {
              case 58:
                c = "*";
                break;
              case 59:
                c = ",";
                break;
              case 60:
                c = "-";
                break;
              case 61:
                c = ".";
                break;
              case 62:
                c = "/";
                break;
              default:
                throw new IllegalStateException("Decoding invalid alphanumeric value: " + sixBitValue);
            }
            return new DecodedChar(pos + 6, c);
          }
          isAlphaTo646ToAlphaLatch(pos) {
            if (pos + 1 > this.information.getSize()) {
              return false;
            }
            for (let i = 0; i < 5 && i + pos < this.information.getSize(); ++i) {
              if (i === 2) {
                if (!this.information.get(pos + 2)) {
                  return false;
                }
              } else if (this.information.get(pos + i)) {
                return false;
              }
            }
            return true;
          }
          isAlphaOr646ToNumericLatch(pos) {
            if (pos + 3 > this.information.getSize()) {
              return false;
            }
            for (let i = pos; i < pos + 3; ++i) {
              if (this.information.get(i)) {
                return false;
              }
            }
            return true;
          }
          isNumericToAlphaNumericLatch(pos) {
            if (pos + 1 > this.information.getSize()) {
              return false;
            }
            for (let i = 0; i < 4 && i + pos < this.information.getSize(); ++i) {
              if (this.information.get(pos + i)) {
                return false;
              }
            }
            return true;
          }
        }
        class AbstractExpandedDecoder {
          constructor(information) {
            this.information = information;
            this.generalDecoder = new GeneralAppIdDecoder(information);
          }
          getInformation() {
            return this.information;
          }
          getGeneralDecoder() {
            return this.generalDecoder;
          }
        }
        class AI01decoder extends AbstractExpandedDecoder {
          constructor(information) {
            super(information);
          }
          encodeCompressedGtin(buf, currentPos) {
            buf.append("(01)");
            let initialPosition = buf.length();
            buf.append("9");
            this.encodeCompressedGtinWithoutAI(buf, currentPos, initialPosition);
          }
          encodeCompressedGtinWithoutAI(buf, currentPos, initialBufferPosition) {
            for (let i = 0; i < 4; ++i) {
              let currentBlock = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos + 10 * i, 10);
              if (currentBlock / 100 === 0) {
                buf.append("0");
              }
              if (currentBlock / 10 === 0) {
                buf.append("0");
              }
              buf.append(currentBlock);
            }
            AI01decoder.appendCheckDigit(buf, initialBufferPosition);
          }
          static appendCheckDigit(buf, currentPos) {
            let checkDigit = 0;
            for (let i = 0; i < 13; i++) {
              let digit = buf.charAt(i + currentPos).charCodeAt(0) - "0".charCodeAt(0);
              checkDigit += (i & 1) === 0 ? 3 * digit : digit;
            }
            checkDigit = 10 - checkDigit % 10;
            if (checkDigit === 10) {
              checkDigit = 0;
            }
            buf.append(checkDigit);
          }
        }
        AI01decoder.GTIN_SIZE = 40;
        class AI01AndOtherAIs extends AI01decoder {
          constructor(information) {
            super(information);
          }
          parseInformation() {
            let buff = new StringBuilder();
            buff.append("(01)");
            let initialGtinPosition = buff.length();
            let firstGtinDigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01AndOtherAIs.HEADER_SIZE, 4);
            buff.append(firstGtinDigit);
            this.encodeCompressedGtinWithoutAI(buff, AI01AndOtherAIs.HEADER_SIZE + 4, initialGtinPosition);
            return this.getGeneralDecoder().decodeAllCodes(buff, AI01AndOtherAIs.HEADER_SIZE + 44);
          }
        }
        AI01AndOtherAIs.HEADER_SIZE = 1 + 1 + 2;
        class AnyAIDecoder extends AbstractExpandedDecoder {
          constructor(information) {
            super(information);
          }
          parseInformation() {
            let buf = new StringBuilder();
            return this.getGeneralDecoder().decodeAllCodes(buf, AnyAIDecoder.HEADER_SIZE);
          }
        }
        AnyAIDecoder.HEADER_SIZE = 2 + 1 + 2;
        class AI01weightDecoder extends AI01decoder {
          constructor(information) {
            super(information);
          }
          encodeCompressedWeight(buf, currentPos, weightSize) {
            let originalWeightNumeric = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, weightSize);
            this.addWeightCode(buf, originalWeightNumeric);
            let weightNumeric = this.checkWeight(originalWeightNumeric);
            let currentDivisor = 1e5;
            for (let i = 0; i < 5; ++i) {
              if (weightNumeric / currentDivisor === 0) {
                buf.append("0");
              }
              currentDivisor /= 10;
            }
            buf.append(weightNumeric);
          }
        }
        class AI013x0xDecoder extends AI01weightDecoder {
          constructor(information) {
            super(information);
          }
          parseInformation() {
            if (this.getInformation().getSize() != AI013x0xDecoder.HEADER_SIZE + AI01weightDecoder.GTIN_SIZE + AI013x0xDecoder.WEIGHT_SIZE) {
              throw new NotFoundException();
            }
            let buf = new StringBuilder();
            this.encodeCompressedGtin(buf, AI013x0xDecoder.HEADER_SIZE);
            this.encodeCompressedWeight(buf, AI013x0xDecoder.HEADER_SIZE + AI01weightDecoder.GTIN_SIZE, AI013x0xDecoder.WEIGHT_SIZE);
            return buf.toString();
          }
        }
        AI013x0xDecoder.HEADER_SIZE = 4 + 1;
        AI013x0xDecoder.WEIGHT_SIZE = 15;
        class AI013103decoder extends AI013x0xDecoder {
          constructor(information) {
            super(information);
          }
          addWeightCode(buf, weight) {
            buf.append("(3103)");
          }
          checkWeight(weight) {
            return weight;
          }
        }
        class AI01320xDecoder extends AI013x0xDecoder {
          constructor(information) {
            super(information);
          }
          addWeightCode(buf, weight) {
            if (weight < 1e4) {
              buf.append("(3202)");
            } else {
              buf.append("(3203)");
            }
          }
          checkWeight(weight) {
            if (weight < 1e4) {
              return weight;
            }
            return weight - 1e4;
          }
        }
        class AI01392xDecoder extends AI01decoder {
          constructor(information) {
            super(information);
          }
          parseInformation() {
            if (this.getInformation().getSize() < AI01392xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE) {
              throw new NotFoundException();
            }
            let buf = new StringBuilder();
            this.encodeCompressedGtin(buf, AI01392xDecoder.HEADER_SIZE);
            let lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01392xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE, AI01392xDecoder.LAST_DIGIT_SIZE);
            buf.append("(392");
            buf.append(lastAIdigit);
            buf.append(")");
            let decodedInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01392xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01392xDecoder.LAST_DIGIT_SIZE, null);
            buf.append(decodedInformation.getNewString());
            return buf.toString();
          }
        }
        AI01392xDecoder.HEADER_SIZE = 5 + 1 + 2;
        AI01392xDecoder.LAST_DIGIT_SIZE = 2;
        class AI01393xDecoder extends AI01decoder {
          constructor(information) {
            super(information);
          }
          parseInformation() {
            if (this.getInformation().getSize() < AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE) {
              throw new NotFoundException();
            }
            let buf = new StringBuilder();
            this.encodeCompressedGtin(buf, AI01393xDecoder.HEADER_SIZE);
            let lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE, AI01393xDecoder.LAST_DIGIT_SIZE);
            buf.append("(393");
            buf.append(lastAIdigit);
            buf.append(")");
            let firstThreeDigits = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01393xDecoder.LAST_DIGIT_SIZE, AI01393xDecoder.FIRST_THREE_DIGITS_SIZE);
            if (firstThreeDigits / 100 == 0) {
              buf.append("0");
            }
            if (firstThreeDigits / 10 == 0) {
              buf.append("0");
            }
            buf.append(firstThreeDigits);
            let generalInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01393xDecoder.LAST_DIGIT_SIZE + AI01393xDecoder.FIRST_THREE_DIGITS_SIZE, null);
            buf.append(generalInformation.getNewString());
            return buf.toString();
          }
        }
        AI01393xDecoder.HEADER_SIZE = 5 + 1 + 2;
        AI01393xDecoder.LAST_DIGIT_SIZE = 2;
        AI01393xDecoder.FIRST_THREE_DIGITS_SIZE = 10;
        class AI013x0x1xDecoder extends AI01weightDecoder {
          constructor(information, firstAIdigits, dateCode) {
            super(information);
            this.dateCode = dateCode;
            this.firstAIdigits = firstAIdigits;
          }
          parseInformation() {
            if (this.getInformation().getSize() != AI013x0x1xDecoder.HEADER_SIZE + AI013x0x1xDecoder.GTIN_SIZE + AI013x0x1xDecoder.WEIGHT_SIZE + AI013x0x1xDecoder.DATE_SIZE) {
              throw new NotFoundException();
            }
            let buf = new StringBuilder();
            this.encodeCompressedGtin(buf, AI013x0x1xDecoder.HEADER_SIZE);
            this.encodeCompressedWeight(buf, AI013x0x1xDecoder.HEADER_SIZE + AI013x0x1xDecoder.GTIN_SIZE, AI013x0x1xDecoder.WEIGHT_SIZE);
            this.encodeCompressedDate(buf, AI013x0x1xDecoder.HEADER_SIZE + AI013x0x1xDecoder.GTIN_SIZE + AI013x0x1xDecoder.WEIGHT_SIZE);
            return buf.toString();
          }
          encodeCompressedDate(buf, currentPos) {
            let numericDate = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, AI013x0x1xDecoder.DATE_SIZE);
            if (numericDate == 38400) {
              return;
            }
            buf.append("(");
            buf.append(this.dateCode);
            buf.append(")");
            let day = numericDate % 32;
            numericDate /= 32;
            let month = numericDate % 12 + 1;
            numericDate /= 12;
            let year = numericDate;
            if (year / 10 == 0) {
              buf.append("0");
            }
            buf.append(year);
            if (month / 10 == 0) {
              buf.append("0");
            }
            buf.append(month);
            if (day / 10 == 0) {
              buf.append("0");
            }
            buf.append(day);
          }
          addWeightCode(buf, weight) {
            buf.append("(");
            buf.append(this.firstAIdigits);
            buf.append(weight / 1e5);
            buf.append(")");
          }
          checkWeight(weight) {
            return weight % 1e5;
          }
        }
        AI013x0x1xDecoder.HEADER_SIZE = 7 + 1;
        AI013x0x1xDecoder.WEIGHT_SIZE = 20;
        AI013x0x1xDecoder.DATE_SIZE = 16;
        function createDecoder(information) {
          try {
            if (information.get(1)) {
              return new AI01AndOtherAIs(information);
            }
            if (!information.get(2)) {
              return new AnyAIDecoder(information);
            }
            let fourBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 4);
            switch (fourBitEncodationMethod) {
              case 4:
                return new AI013103decoder(information);
              case 5:
                return new AI01320xDecoder(information);
            }
            let fiveBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 5);
            switch (fiveBitEncodationMethod) {
              case 12:
                return new AI01392xDecoder(information);
              case 13:
                return new AI01393xDecoder(information);
            }
            let sevenBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 7);
            switch (sevenBitEncodationMethod) {
              case 56:
                return new AI013x0x1xDecoder(information, "310", "11");
              case 57:
                return new AI013x0x1xDecoder(information, "320", "11");
              case 58:
                return new AI013x0x1xDecoder(information, "310", "13");
              case 59:
                return new AI013x0x1xDecoder(information, "320", "13");
              case 60:
                return new AI013x0x1xDecoder(information, "310", "15");
              case 61:
                return new AI013x0x1xDecoder(information, "320", "15");
              case 62:
                return new AI013x0x1xDecoder(information, "310", "17");
              case 63:
                return new AI013x0x1xDecoder(information, "320", "17");
            }
          } catch (e) {
            console.log(e);
            throw new IllegalStateException("unknown decoder: " + information);
          }
        }
        class ExpandedPair {
          constructor(leftChar, rightChar, finderPatter, mayBeLast) {
            this.leftchar = leftChar;
            this.rightchar = rightChar;
            this.finderpattern = finderPatter;
            this.maybeLast = mayBeLast;
          }
          mayBeLast() {
            return this.maybeLast;
          }
          getLeftChar() {
            return this.leftchar;
          }
          getRightChar() {
            return this.rightchar;
          }
          getFinderPattern() {
            return this.finderpattern;
          }
          mustBeLast() {
            return this.rightchar == null;
          }
          toString() {
            return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
          }
          static equals(o1, o2) {
            if (!(o1 instanceof ExpandedPair)) {
              return false;
            }
            return ExpandedPair.equalsOrNull(o1.leftchar, o2.leftchar) && ExpandedPair.equalsOrNull(o1.rightchar, o2.rightchar) && ExpandedPair.equalsOrNull(o1.finderpattern, o2.finderpattern);
          }
          static equalsOrNull(o1, o2) {
            return o1 === null ? o2 === null : ExpandedPair.equals(o1, o2);
          }
          hashCode() {
            let value = this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
            return value;
          }
        }
        class ExpandedRow {
          constructor(pairs, rowNumber, wasReversed) {
            this.pairs = pairs;
            this.rowNumber = rowNumber;
            this.wasReversed = wasReversed;
          }
          getPairs() {
            return this.pairs;
          }
          getRowNumber() {
            return this.rowNumber;
          }
          isReversed() {
            return this.wasReversed;
          }
          isEquivalent(otherPairs) {
            return this.checkEqualitity(this, otherPairs);
          }
          toString() {
            return "{ " + this.pairs + " }";
          }
          equals(o1, o2) {
            if (!(o1 instanceof ExpandedRow)) {
              return false;
            }
            return this.checkEqualitity(o1, o2) && o1.wasReversed === o2.wasReversed;
          }
          checkEqualitity(pair1, pair2) {
            if (!pair1 || !pair2)
              return;
            let result;
            pair1.forEach((e1, i) => {
              pair2.forEach((e2) => {
                if (e1.getLeftChar().getValue() === e2.getLeftChar().getValue() && e1.getRightChar().getValue() === e2.getRightChar().getValue() && e1.getFinderPatter().getValue() === e2.getFinderPatter().getValue()) {
                  result = true;
                }
              });
            });
            return result;
          }
        }
        class RSSExpandedReader extends AbstractRSSReader {
          constructor(verbose) {
            super(...arguments);
            this.pairs = new Array(RSSExpandedReader.MAX_PAIRS);
            this.rows = new Array();
            this.startEnd = [2];
            this.verbose = verbose === true;
          }
          decodeRow(rowNumber, row, hints) {
            this.pairs.length = 0;
            this.startFromEven = false;
            try {
              return RSSExpandedReader.constructResult(this.decodeRow2pairs(rowNumber, row));
            } catch (e) {
              if (this.verbose) {
                console.log(e);
              }
            }
            this.pairs.length = 0;
            this.startFromEven = true;
            return RSSExpandedReader.constructResult(this.decodeRow2pairs(rowNumber, row));
          }
          reset() {
            this.pairs.length = 0;
            this.rows.length = 0;
          }
          decodeRow2pairs(rowNumber, row) {
            let done = false;
            while (!done) {
              try {
                this.pairs.push(this.retrieveNextPair(row, this.pairs, rowNumber));
              } catch (error) {
                if (error instanceof NotFoundException) {
                  if (!this.pairs.length) {
                    throw new NotFoundException();
                  }
                  done = true;
                }
              }
            }
            if (this.checkChecksum()) {
              return this.pairs;
            }
            let tryStackedDecode;
            if (this.rows.length) {
              tryStackedDecode = true;
            } else {
              tryStackedDecode = false;
            }
            this.storeRow(rowNumber, false);
            if (tryStackedDecode) {
              let ps = this.checkRowsBoolean(false);
              if (ps != null) {
                return ps;
              }
              ps = this.checkRowsBoolean(true);
              if (ps != null) {
                return ps;
              }
            }
            throw new NotFoundException();
          }
          checkRowsBoolean(reverse) {
            if (this.rows.length > 25) {
              this.rows.length = 0;
              return null;
            }
            this.pairs.length = 0;
            if (reverse) {
              this.rows = this.rows.reverse();
            }
            let ps = null;
            try {
              ps = this.checkRows(new Array(), 0);
            } catch (e) {
              if (this.verbose) {
                console.log(e);
              }
            }
            if (reverse) {
              this.rows = this.rows.reverse();
            }
            return ps;
          }
          checkRows(collectedRows, currentRow) {
            for (let i = currentRow; i < this.rows.length; i++) {
              let row = this.rows[i];
              this.pairs.length = 0;
              for (let collectedRow of collectedRows) {
                this.pairs.push(collectedRow.getPairs());
              }
              this.pairs.push(row.getPairs());
              if (!RSSExpandedReader.isValidSequence(this.pairs)) {
                continue;
              }
              if (this.checkChecksum()) {
                return this.pairs;
              }
              let rs = new Array(collectedRows);
              rs.push(row);
              try {
                return this.checkRows(rs, i + 1);
              } catch (e) {
                if (this.verbose) {
                  console.log(e);
                }
              }
            }
            throw new NotFoundException();
          }
          static isValidSequence(pairs) {
            for (let sequence of RSSExpandedReader.FINDER_PATTERN_SEQUENCES) {
              if (pairs.length > sequence.length) {
                continue;
              }
              let stop = true;
              for (let j = 0; j < pairs.length; j++) {
                if (pairs[j].getFinderPattern().getValue() != sequence[j]) {
                  stop = false;
                  break;
                }
              }
              if (stop) {
                return true;
              }
            }
            return false;
          }
          storeRow(rowNumber, wasReversed) {
            let insertPos = 0;
            let prevIsSame = false;
            let nextIsSame = false;
            while (insertPos < this.rows.length) {
              let erow = this.rows[insertPos];
              if (erow.getRowNumber() > rowNumber) {
                nextIsSame = erow.isEquivalent(this.pairs);
                break;
              }
              prevIsSame = erow.isEquivalent(this.pairs);
              insertPos++;
            }
            if (nextIsSame || prevIsSame) {
              return;
            }
            if (RSSExpandedReader.isPartialRow(this.pairs, this.rows)) {
              return;
            }
            this.rows.push(insertPos, new ExpandedRow(this.pairs, rowNumber, wasReversed));
            this.removePartialRows(this.pairs, this.rows);
          }
          removePartialRows(pairs, rows) {
            for (let row of rows) {
              if (row.getPairs().length === pairs.length) {
                continue;
              }
              for (let p of row.getPairs()) {
                for (let pp of pairs) {
                  if (ExpandedPair.equals(p, pp)) {
                    break;
                  }
                }
              }
            }
          }
          static isPartialRow(pairs, rows) {
            for (let r of rows) {
              let allFound = true;
              for (let p of pairs) {
                let found = false;
                for (let pp of r.getPairs()) {
                  if (p.equals(pp)) {
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  allFound = false;
                  break;
                }
              }
              if (allFound) {
                return true;
              }
            }
            return false;
          }
          getRows() {
            return this.rows;
          }
          static constructResult(pairs) {
            let binary = BitArrayBuilder.buildBitArray(pairs);
            let decoder = createDecoder(binary);
            let resultingString = decoder.parseInformation();
            let firstPoints = pairs[0].getFinderPattern().getResultPoints();
            let lastPoints = pairs[pairs.length - 1].getFinderPattern().getResultPoints();
            let points = [firstPoints[0], firstPoints[1], lastPoints[0], lastPoints[1]];
            return new Result(resultingString, null, null, points, BarcodeFormat$1.RSS_EXPANDED, null);
          }
          checkChecksum() {
            let firstPair = this.pairs.get(0);
            let checkCharacter = firstPair.getLeftChar();
            let firstCharacter = firstPair.getRightChar();
            if (firstCharacter == null) {
              return false;
            }
            let checksum = firstCharacter.getChecksumPortion();
            let s = 2;
            for (let i = 1; i < this.pairs.size(); ++i) {
              let currentPair = this.pairs.get(i);
              checksum += currentPair.getLeftChar().getChecksumPortion();
              s++;
              let currentRightChar = currentPair.getRightChar();
              if (currentRightChar != null) {
                checksum += currentRightChar.getChecksumPortion();
                s++;
              }
            }
            checksum %= 211;
            let checkCharacterValue = 211 * (s - 4) + checksum;
            return checkCharacterValue == checkCharacter.getValue();
          }
          static getNextSecondBar(row, initialPos) {
            let currentPos;
            if (row.get(initialPos)) {
              currentPos = row.getNextUnset(initialPos);
              currentPos = row.getNextSet(currentPos);
            } else {
              currentPos = row.getNextSet(initialPos);
              currentPos = row.getNextUnset(currentPos);
            }
            return currentPos;
          }
          retrieveNextPair(row, previousPairs, rowNumber) {
            let isOddPattern = previousPairs.length % 2 == 0;
            if (this.startFromEven) {
              isOddPattern = !isOddPattern;
            }
            let pattern;
            let keepFinding = true;
            let forcedOffset = -1;
            do {
              this.findNextPair(row, previousPairs, forcedOffset);
              pattern = this.parseFoundFinderPattern(row, rowNumber, isOddPattern);
              if (pattern == null) {
                forcedOffset = RSSExpandedReader.getNextSecondBar(row, this.startEnd[0]);
              } else {
                keepFinding = false;
              }
            } while (keepFinding);
            let leftChar = this.decodeDataCharacter(row, pattern, isOddPattern, true);
            if (!this.isEmptyPair(previousPairs) && previousPairs[previousPairs.length - 1].mustBeLast()) {
              throw new NotFoundException();
            }
            let rightChar;
            try {
              rightChar = this.decodeDataCharacter(row, pattern, isOddPattern, false);
            } catch (e) {
              rightChar = null;
              if (this.verbose) {
                console.log(e);
              }
            }
            return new ExpandedPair(leftChar, rightChar, pattern, true);
          }
          isEmptyPair(pairs) {
            if (pairs.length === 0) {
              return true;
            }
            return false;
          }
          findNextPair(row, previousPairs, forcedOffset) {
            let counters = this.getDecodeFinderCounters();
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            let width = row.getSize();
            let rowOffset;
            if (forcedOffset >= 0) {
              rowOffset = forcedOffset;
            } else if (this.isEmptyPair(previousPairs)) {
              rowOffset = 0;
            } else {
              let lastPair = previousPairs[previousPairs.length - 1];
              rowOffset = lastPair.getFinderPattern().getStartEnd()[1];
            }
            let searchingEvenPair = previousPairs.length % 2 != 0;
            if (this.startFromEven) {
              searchingEvenPair = !searchingEvenPair;
            }
            let isWhite = false;
            while (rowOffset < width) {
              isWhite = !row.get(rowOffset);
              if (!isWhite) {
                break;
              }
              rowOffset++;
            }
            let counterPosition = 0;
            let patternStart = rowOffset;
            for (let x = rowOffset; x < width; x++) {
              if (row.get(x) != isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition == 3) {
                  if (searchingEvenPair) {
                    RSSExpandedReader.reverseCounters(counters);
                  }
                  if (RSSExpandedReader.isFinderPattern(counters)) {
                    this.startEnd[0] = patternStart;
                    this.startEnd[1] = x;
                    return;
                  }
                  if (searchingEvenPair) {
                    RSSExpandedReader.reverseCounters(counters);
                  }
                  patternStart += counters[0] + counters[1];
                  counters[0] = counters[2];
                  counters[1] = counters[3];
                  counters[2] = 0;
                  counters[3] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            throw new NotFoundException();
          }
          static reverseCounters(counters) {
            let length = counters.length;
            for (let i = 0; i < length / 2; ++i) {
              let tmp = counters[i];
              counters[i] = counters[length - i - 1];
              counters[length - i - 1] = tmp;
            }
          }
          parseFoundFinderPattern(row, rowNumber, oddPattern) {
            let firstCounter;
            let start;
            let end;
            if (oddPattern) {
              let firstElementStart = this.startEnd[0] - 1;
              while (firstElementStart >= 0 && !row.get(firstElementStart)) {
                firstElementStart--;
              }
              firstElementStart++;
              firstCounter = this.startEnd[0] - firstElementStart;
              start = firstElementStart;
              end = this.startEnd[1];
            } else {
              start = this.startEnd[0];
              end = row.getNextUnset(this.startEnd[1] + 1);
              firstCounter = end - this.startEnd[1];
            }
            let counters = this.getDecodeFinderCounters();
            System.arraycopy(counters, 0, counters, 1, counters.length - 1);
            counters[0] = firstCounter;
            let value;
            try {
              value = this.parseFinderValue(counters, RSSExpandedReader.FINDER_PATTERNS);
            } catch (e) {
              return null;
            }
            return new FinderPattern(value, [start, end], start, end, rowNumber);
          }
          decodeDataCharacter(row, pattern, isOddPattern, leftChar) {
            let counters = this.getDataCharacterCounters();
            for (let x = 0; x < counters.length; x++) {
              counters[x] = 0;
            }
            if (leftChar) {
              RSSExpandedReader.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
            } else {
              RSSExpandedReader.recordPattern(row, pattern.getStartEnd()[1], counters);
              for (let i = 0, j = counters.length - 1; i < j; i++, j--) {
                let temp = counters[i];
                counters[i] = counters[j];
                counters[j] = temp;
              }
            }
            let numModules = 17;
            let elementWidth = MathUtils.sum(new Int32Array(counters)) / numModules;
            let expectedElementWidth = (pattern.getStartEnd()[1] - pattern.getStartEnd()[0]) / 15;
            if (Math.abs(elementWidth - expectedElementWidth) / expectedElementWidth > 0.3) {
              throw new NotFoundException();
            }
            let oddCounts = this.getOddCounts();
            let evenCounts = this.getEvenCounts();
            let oddRoundingErrors = this.getOddRoundingErrors();
            let evenRoundingErrors = this.getEvenRoundingErrors();
            for (let i = 0; i < counters.length; i++) {
              let value2 = 1 * counters[i] / elementWidth;
              let count = value2 + 0.5;
              if (count < 1) {
                if (value2 < 0.3) {
                  throw new NotFoundException();
                }
                count = 1;
              } else if (count > 8) {
                if (value2 > 8.7) {
                  throw new NotFoundException();
                }
                count = 8;
              }
              let offset = i / 2;
              if ((i & 1) == 0) {
                oddCounts[offset] = count;
                oddRoundingErrors[offset] = value2 - count;
              } else {
                evenCounts[offset] = count;
                evenRoundingErrors[offset] = value2 - count;
              }
            }
            this.adjustOddEvenCounts(numModules);
            let weightRowNumber = 4 * pattern.getValue() + (isOddPattern ? 0 : 2) + (leftChar ? 0 : 1) - 1;
            let oddSum = 0;
            let oddChecksumPortion = 0;
            for (let i = oddCounts.length - 1; i >= 0; i--) {
              if (RSSExpandedReader.isNotA1left(pattern, isOddPattern, leftChar)) {
                let weight = RSSExpandedReader.WEIGHTS[weightRowNumber][2 * i];
                oddChecksumPortion += oddCounts[i] * weight;
              }
              oddSum += oddCounts[i];
            }
            let evenChecksumPortion = 0;
            for (let i = evenCounts.length - 1; i >= 0; i--) {
              if (RSSExpandedReader.isNotA1left(pattern, isOddPattern, leftChar)) {
                let weight = RSSExpandedReader.WEIGHTS[weightRowNumber][2 * i + 1];
                evenChecksumPortion += evenCounts[i] * weight;
              }
            }
            let checksumPortion = oddChecksumPortion + evenChecksumPortion;
            if ((oddSum & 1) != 0 || oddSum > 13 || oddSum < 4) {
              throw new NotFoundException();
            }
            let group = (13 - oddSum) / 2;
            let oddWidest = RSSExpandedReader.SYMBOL_WIDEST[group];
            let evenWidest = 9 - oddWidest;
            let vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, true);
            let vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, false);
            let tEven = RSSExpandedReader.EVEN_TOTAL_SUBSET[group];
            let gSum = RSSExpandedReader.GSUM[group];
            let value = vOdd * tEven + vEven + gSum;
            return new DataCharacter(value, checksumPortion);
          }
          static isNotA1left(pattern, isOddPattern, leftChar) {
            return !(pattern.getValue() == 0 && isOddPattern && leftChar);
          }
          adjustOddEvenCounts(numModules) {
            let oddSum = MathUtils.sum(new Int32Array(this.getOddCounts()));
            let evenSum = MathUtils.sum(new Int32Array(this.getEvenCounts()));
            let incrementOdd = false;
            let decrementOdd = false;
            if (oddSum > 13) {
              decrementOdd = true;
            } else if (oddSum < 4) {
              incrementOdd = true;
            }
            let incrementEven = false;
            let decrementEven = false;
            if (evenSum > 13) {
              decrementEven = true;
            } else if (evenSum < 4) {
              incrementEven = true;
            }
            let mismatch = oddSum + evenSum - numModules;
            let oddParityBad = (oddSum & 1) == 1;
            let evenParityBad = (evenSum & 1) == 0;
            if (mismatch == 1) {
              if (oddParityBad) {
                if (evenParityBad) {
                  throw new NotFoundException();
                }
                decrementOdd = true;
              } else {
                if (!evenParityBad) {
                  throw new NotFoundException();
                }
                decrementEven = true;
              }
            } else if (mismatch == -1) {
              if (oddParityBad) {
                if (evenParityBad) {
                  throw new NotFoundException();
                }
                incrementOdd = true;
              } else {
                if (!evenParityBad) {
                  throw new NotFoundException();
                }
                incrementEven = true;
              }
            } else if (mismatch == 0) {
              if (oddParityBad) {
                if (!evenParityBad) {
                  throw new NotFoundException();
                }
                if (oddSum < evenSum) {
                  incrementOdd = true;
                  decrementEven = true;
                } else {
                  decrementOdd = true;
                  incrementEven = true;
                }
              } else {
                if (evenParityBad) {
                  throw new NotFoundException();
                }
              }
            } else {
              throw new NotFoundException();
            }
            if (incrementOdd) {
              if (decrementOdd) {
                throw new NotFoundException();
              }
              RSSExpandedReader.increment(this.getOddCounts(), this.getOddRoundingErrors());
            }
            if (decrementOdd) {
              RSSExpandedReader.decrement(this.getOddCounts(), this.getOddRoundingErrors());
            }
            if (incrementEven) {
              if (decrementEven) {
                throw new NotFoundException();
              }
              RSSExpandedReader.increment(this.getEvenCounts(), this.getOddRoundingErrors());
            }
            if (decrementEven) {
              RSSExpandedReader.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
            }
          }
        }
        RSSExpandedReader.SYMBOL_WIDEST = [7, 5, 4, 3, 1];
        RSSExpandedReader.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204];
        RSSExpandedReader.GSUM = [0, 348, 1388, 2948, 3988];
        RSSExpandedReader.FINDER_PATTERNS = [
          Int32Array.from([1, 8, 4, 1]),
          Int32Array.from([3, 6, 4, 1]),
          Int32Array.from([3, 4, 6, 1]),
          Int32Array.from([3, 2, 8, 1]),
          Int32Array.from([2, 6, 5, 1]),
          Int32Array.from([2, 2, 9, 1])
        ];
        RSSExpandedReader.WEIGHTS = [
          [1, 3, 9, 27, 81, 32, 96, 77],
          [20, 60, 180, 118, 143, 7, 21, 63],
          [189, 145, 13, 39, 117, 140, 209, 205],
          [193, 157, 49, 147, 19, 57, 171, 91],
          [62, 186, 136, 197, 169, 85, 44, 132],
          [185, 133, 188, 142, 4, 12, 36, 108],
          [113, 128, 173, 97, 80, 29, 87, 50],
          [150, 28, 84, 41, 123, 158, 52, 156],
          [46, 138, 203, 187, 139, 206, 196, 166],
          [76, 17, 51, 153, 37, 111, 122, 155],
          [43, 129, 176, 106, 107, 110, 119, 146],
          [16, 48, 144, 10, 30, 90, 59, 177],
          [109, 116, 137, 200, 178, 112, 125, 164],
          [70, 210, 208, 202, 184, 130, 179, 115],
          [134, 191, 151, 31, 93, 68, 204, 190],
          [148, 22, 66, 198, 172, 94, 71, 2],
          [6, 18, 54, 162, 64, 192, 154, 40],
          [120, 149, 25, 75, 14, 42, 126, 167],
          [79, 26, 78, 23, 69, 207, 199, 175],
          [103, 98, 83, 38, 114, 131, 182, 124],
          [161, 61, 183, 127, 170, 88, 53, 159],
          [55, 165, 73, 8, 24, 72, 5, 15],
          [45, 135, 194, 160, 58, 174, 100, 89]
        ];
        RSSExpandedReader.FINDER_PAT_A = 0;
        RSSExpandedReader.FINDER_PAT_B = 1;
        RSSExpandedReader.FINDER_PAT_C = 2;
        RSSExpandedReader.FINDER_PAT_D = 3;
        RSSExpandedReader.FINDER_PAT_E = 4;
        RSSExpandedReader.FINDER_PAT_F = 5;
        RSSExpandedReader.FINDER_PATTERN_SEQUENCES = [
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_C],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_F],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_F, RSSExpandedReader.FINDER_PAT_F],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_D],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_E],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_F, RSSExpandedReader.FINDER_PAT_F],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_F, RSSExpandedReader.FINDER_PAT_F]
        ];
        RSSExpandedReader.MAX_PAIRS = 11;
        class Pair extends DataCharacter {
          constructor(value, checksumPortion, finderPattern) {
            super(value, checksumPortion);
            this.count = 0;
            this.finderPattern = finderPattern;
          }
          getFinderPattern() {
            return this.finderPattern;
          }
          getCount() {
            return this.count;
          }
          incrementCount() {
            this.count++;
          }
        }
        class RSS14Reader extends AbstractRSSReader {
          constructor() {
            super(...arguments);
            this.possibleLeftPairs = [];
            this.possibleRightPairs = [];
          }
          decodeRow(rowNumber, row, hints) {
            const leftPair = this.decodePair(row, false, rowNumber, hints);
            RSS14Reader.addOrTally(this.possibleLeftPairs, leftPair);
            row.reverse();
            let rightPair = this.decodePair(row, true, rowNumber, hints);
            RSS14Reader.addOrTally(this.possibleRightPairs, rightPair);
            row.reverse();
            for (let left of this.possibleLeftPairs) {
              if (left.getCount() > 1) {
                for (let right of this.possibleRightPairs) {
                  if (right.getCount() > 1 && RSS14Reader.checkChecksum(left, right)) {
                    return RSS14Reader.constructResult(left, right);
                  }
                }
              }
            }
            throw new NotFoundException();
          }
          static addOrTally(possiblePairs, pair) {
            if (pair == null) {
              return;
            }
            let found = false;
            for (let other of possiblePairs) {
              if (other.getValue() === pair.getValue()) {
                other.incrementCount();
                found = true;
                break;
              }
            }
            if (!found) {
              possiblePairs.push(pair);
            }
          }
          reset() {
            this.possibleLeftPairs.length = 0;
            this.possibleRightPairs.length = 0;
          }
          static constructResult(leftPair, rightPair) {
            let symbolValue = 4537077 * leftPair.getValue() + rightPair.getValue();
            let text = new String(symbolValue).toString();
            let buffer = new StringBuilder();
            for (let i = 13 - text.length; i > 0; i--) {
              buffer.append("0");
            }
            buffer.append(text);
            let checkDigit = 0;
            for (let i = 0; i < 13; i++) {
              let digit = buffer.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
              checkDigit += (i & 1) === 0 ? 3 * digit : digit;
            }
            checkDigit = 10 - checkDigit % 10;
            if (checkDigit === 10) {
              checkDigit = 0;
            }
            buffer.append(checkDigit.toString());
            let leftPoints = leftPair.getFinderPattern().getResultPoints();
            let rightPoints = rightPair.getFinderPattern().getResultPoints();
            return new Result(buffer.toString(), null, 0, [leftPoints[0], leftPoints[1], rightPoints[0], rightPoints[1]], BarcodeFormat$1.RSS_14, new Date().getTime());
          }
          static checkChecksum(leftPair, rightPair) {
            let checkValue = (leftPair.getChecksumPortion() + 16 * rightPair.getChecksumPortion()) % 79;
            let targetCheckValue = 9 * leftPair.getFinderPattern().getValue() + rightPair.getFinderPattern().getValue();
            if (targetCheckValue > 72) {
              targetCheckValue--;
            }
            if (targetCheckValue > 8) {
              targetCheckValue--;
            }
            return checkValue === targetCheckValue;
          }
          decodePair(row, right, rowNumber, hints) {
            try {
              let startEnd = this.findFinderPattern(row, right);
              let pattern = this.parseFoundFinderPattern(row, rowNumber, right, startEnd);
              let resultPointCallback = hints == null ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
              if (resultPointCallback != null) {
                let center = (startEnd[0] + startEnd[1]) / 2;
                if (right) {
                  center = row.getSize() - 1 - center;
                }
                resultPointCallback.foundPossibleResultPoint(new ResultPoint(center, rowNumber));
              }
              let outside = this.decodeDataCharacter(row, pattern, true);
              let inside = this.decodeDataCharacter(row, pattern, false);
              return new Pair(1597 * outside.getValue() + inside.getValue(), outside.getChecksumPortion() + 4 * inside.getChecksumPortion(), pattern);
            } catch (err) {
              return null;
            }
          }
          decodeDataCharacter(row, pattern, outsideChar) {
            let counters = this.getDataCharacterCounters();
            for (let x = 0; x < counters.length; x++) {
              counters[x] = 0;
            }
            if (outsideChar) {
              OneDReader.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
            } else {
              OneDReader.recordPattern(row, pattern.getStartEnd()[1] + 1, counters);
              for (let i = 0, j = counters.length - 1; i < j; i++, j--) {
                let temp = counters[i];
                counters[i] = counters[j];
                counters[j] = temp;
              }
            }
            let numModules = outsideChar ? 16 : 15;
            let elementWidth = MathUtils.sum(new Int32Array(counters)) / numModules;
            let oddCounts = this.getOddCounts();
            let evenCounts = this.getEvenCounts();
            let oddRoundingErrors = this.getOddRoundingErrors();
            let evenRoundingErrors = this.getEvenRoundingErrors();
            for (let i = 0; i < counters.length; i++) {
              let value = counters[i] / elementWidth;
              let count = Math.floor(value + 0.5);
              if (count < 1) {
                count = 1;
              } else if (count > 8) {
                count = 8;
              }
              let offset = Math.floor(i / 2);
              if ((i & 1) === 0) {
                oddCounts[offset] = count;
                oddRoundingErrors[offset] = value - count;
              } else {
                evenCounts[offset] = count;
                evenRoundingErrors[offset] = value - count;
              }
            }
            this.adjustOddEvenCounts(outsideChar, numModules);
            let oddSum = 0;
            let oddChecksumPortion = 0;
            for (let i = oddCounts.length - 1; i >= 0; i--) {
              oddChecksumPortion *= 9;
              oddChecksumPortion += oddCounts[i];
              oddSum += oddCounts[i];
            }
            let evenChecksumPortion = 0;
            let evenSum = 0;
            for (let i = evenCounts.length - 1; i >= 0; i--) {
              evenChecksumPortion *= 9;
              evenChecksumPortion += evenCounts[i];
              evenSum += evenCounts[i];
            }
            let checksumPortion = oddChecksumPortion + 3 * evenChecksumPortion;
            if (outsideChar) {
              if ((oddSum & 1) !== 0 || oddSum > 12 || oddSum < 4) {
                throw new NotFoundException();
              }
              let group = (12 - oddSum) / 2;
              let oddWidest = RSS14Reader.OUTSIDE_ODD_WIDEST[group];
              let evenWidest = 9 - oddWidest;
              let vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, false);
              let vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, true);
              let tEven = RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET[group];
              let gSum = RSS14Reader.OUTSIDE_GSUM[group];
              return new DataCharacter(vOdd * tEven + vEven + gSum, checksumPortion);
            } else {
              if ((evenSum & 1) !== 0 || evenSum > 10 || evenSum < 4) {
                throw new NotFoundException();
              }
              let group = (10 - evenSum) / 2;
              let oddWidest = RSS14Reader.INSIDE_ODD_WIDEST[group];
              let evenWidest = 9 - oddWidest;
              let vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, true);
              let vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, false);
              let tOdd = RSS14Reader.INSIDE_ODD_TOTAL_SUBSET[group];
              let gSum = RSS14Reader.INSIDE_GSUM[group];
              return new DataCharacter(vEven * tOdd + vOdd + gSum, checksumPortion);
            }
          }
          findFinderPattern(row, rightFinderPattern) {
            let counters = this.getDecodeFinderCounters();
            counters[0] = 0;
            counters[1] = 0;
            counters[2] = 0;
            counters[3] = 0;
            let width = row.getSize();
            let isWhite = false;
            let rowOffset = 0;
            while (rowOffset < width) {
              isWhite = !row.get(rowOffset);
              if (rightFinderPattern === isWhite) {
                break;
              }
              rowOffset++;
            }
            let counterPosition = 0;
            let patternStart = rowOffset;
            for (let x = rowOffset; x < width; x++) {
              if (row.get(x) !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition === 3) {
                  if (AbstractRSSReader.isFinderPattern(counters)) {
                    return [patternStart, x];
                  }
                  patternStart += counters[0] + counters[1];
                  counters[0] = counters[2];
                  counters[1] = counters[3];
                  counters[2] = 0;
                  counters[3] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            throw new NotFoundException();
          }
          parseFoundFinderPattern(row, rowNumber, right, startEnd) {
            let firstIsBlack = row.get(startEnd[0]);
            let firstElementStart = startEnd[0] - 1;
            while (firstElementStart >= 0 && firstIsBlack !== row.get(firstElementStart)) {
              firstElementStart--;
            }
            firstElementStart++;
            const firstCounter = startEnd[0] - firstElementStart;
            const counters = this.getDecodeFinderCounters();
            const copy = new Int32Array(counters.length);
            System.arraycopy(counters, 0, copy, 1, counters.length - 1);
            copy[0] = firstCounter;
            const value = this.parseFinderValue(copy, RSS14Reader.FINDER_PATTERNS);
            let start = firstElementStart;
            let end = startEnd[1];
            if (right) {
              start = row.getSize() - 1 - start;
              end = row.getSize() - 1 - end;
            }
            return new FinderPattern(value, [firstElementStart, startEnd[1]], start, end, rowNumber);
          }
          adjustOddEvenCounts(outsideChar, numModules) {
            let oddSum = MathUtils.sum(new Int32Array(this.getOddCounts()));
            let evenSum = MathUtils.sum(new Int32Array(this.getEvenCounts()));
            let incrementOdd = false;
            let decrementOdd = false;
            let incrementEven = false;
            let decrementEven = false;
            if (outsideChar) {
              if (oddSum > 12) {
                decrementOdd = true;
              } else if (oddSum < 4) {
                incrementOdd = true;
              }
              if (evenSum > 12) {
                decrementEven = true;
              } else if (evenSum < 4) {
                incrementEven = true;
              }
            } else {
              if (oddSum > 11) {
                decrementOdd = true;
              } else if (oddSum < 5) {
                incrementOdd = true;
              }
              if (evenSum > 10) {
                decrementEven = true;
              } else if (evenSum < 4) {
                incrementEven = true;
              }
            }
            let mismatch = oddSum + evenSum - numModules;
            let oddParityBad = (oddSum & 1) === (outsideChar ? 1 : 0);
            let evenParityBad = (evenSum & 1) === 1;
            if (mismatch === 1) {
              if (oddParityBad) {
                if (evenParityBad) {
                  throw new NotFoundException();
                }
                decrementOdd = true;
              } else {
                if (!evenParityBad) {
                  throw new NotFoundException();
                }
                decrementEven = true;
              }
            } else if (mismatch === -1) {
              if (oddParityBad) {
                if (evenParityBad) {
                  throw new NotFoundException();
                }
                incrementOdd = true;
              } else {
                if (!evenParityBad) {
                  throw new NotFoundException();
                }
                incrementEven = true;
              }
            } else if (mismatch === 0) {
              if (oddParityBad) {
                if (!evenParityBad) {
                  throw new NotFoundException();
                }
                if (oddSum < evenSum) {
                  incrementOdd = true;
                  decrementEven = true;
                } else {
                  decrementOdd = true;
                  incrementEven = true;
                }
              } else {
                if (evenParityBad) {
                  throw new NotFoundException();
                }
              }
            } else {
              throw new NotFoundException();
            }
            if (incrementOdd) {
              if (decrementOdd) {
                throw new NotFoundException();
              }
              AbstractRSSReader.increment(this.getOddCounts(), this.getOddRoundingErrors());
            }
            if (decrementOdd) {
              AbstractRSSReader.decrement(this.getOddCounts(), this.getOddRoundingErrors());
            }
            if (incrementEven) {
              if (decrementEven) {
                throw new NotFoundException();
              }
              AbstractRSSReader.increment(this.getEvenCounts(), this.getOddRoundingErrors());
            }
            if (decrementEven) {
              AbstractRSSReader.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
            }
          }
        }
        RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126];
        RSS14Reader.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81];
        RSS14Reader.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715];
        RSS14Reader.INSIDE_GSUM = [0, 336, 1036, 1516];
        RSS14Reader.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1];
        RSS14Reader.INSIDE_ODD_WIDEST = [2, 4, 6, 8];
        RSS14Reader.FINDER_PATTERNS = [
          Int32Array.from([3, 8, 2, 1]),
          Int32Array.from([3, 5, 5, 1]),
          Int32Array.from([3, 3, 7, 1]),
          Int32Array.from([3, 1, 9, 1]),
          Int32Array.from([2, 7, 4, 1]),
          Int32Array.from([2, 5, 6, 1]),
          Int32Array.from([2, 3, 8, 1]),
          Int32Array.from([1, 5, 7, 1]),
          Int32Array.from([1, 3, 9, 1])
        ];
        class MultiFormatOneDReader extends OneDReader {
          constructor(hints, verbose) {
            super();
            this.readers = [];
            this.verbose = verbose === true;
            const possibleFormats = !hints ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
            const useCode39CheckDigit = hints && hints.get(DecodeHintType$1.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
            if (possibleFormats) {
              if (possibleFormats.includes(BarcodeFormat$1.EAN_13) || possibleFormats.includes(BarcodeFormat$1.UPC_A) || possibleFormats.includes(BarcodeFormat$1.EAN_8) || possibleFormats.includes(BarcodeFormat$1.UPC_E)) {
                this.readers.push(new MultiFormatUPCEANReader(hints));
              }
              if (possibleFormats.includes(BarcodeFormat$1.CODE_39)) {
                this.readers.push(new Code39Reader(useCode39CheckDigit));
              }
              if (possibleFormats.includes(BarcodeFormat$1.CODE_128)) {
                this.readers.push(new Code128Reader());
              }
              if (possibleFormats.includes(BarcodeFormat$1.ITF)) {
                this.readers.push(new ITFReader());
              }
              if (possibleFormats.includes(BarcodeFormat$1.RSS_14)) {
                this.readers.push(new RSS14Reader());
              }
              if (possibleFormats.includes(BarcodeFormat$1.RSS_EXPANDED)) {
                this.readers.push(new RSSExpandedReader(this.verbose));
              }
            } else {
              this.readers.push(new MultiFormatUPCEANReader(hints));
              this.readers.push(new Code39Reader());
              this.readers.push(new MultiFormatUPCEANReader(hints));
              this.readers.push(new Code128Reader());
              this.readers.push(new ITFReader());
              this.readers.push(new RSS14Reader());
              this.readers.push(new RSSExpandedReader(this.verbose));
            }
          }
          decodeRow(rowNumber, row, hints) {
            for (let i = 0; i < this.readers.length; i++) {
              try {
                return this.readers[i].decodeRow(rowNumber, row, hints);
              } catch (re) {
              }
            }
            throw new NotFoundException();
          }
          reset() {
            this.readers.forEach((reader) => reader.reset());
          }
        }
        class BrowserBarcodeReader extends BrowserCodeReader {
          constructor(timeBetweenScansMillis = 500, hints) {
            super(new MultiFormatOneDReader(hints), timeBetweenScansMillis, hints);
          }
        }
        class ECBlocks {
          constructor(ecCodewords, ecBlocks1, ecBlocks2) {
            this.ecCodewords = ecCodewords;
            this.ecBlocks = [ecBlocks1];
            ecBlocks2 && this.ecBlocks.push(ecBlocks2);
          }
          getECCodewords() {
            return this.ecCodewords;
          }
          getECBlocks() {
            return this.ecBlocks;
          }
        }
        class ECB {
          constructor(count, dataCodewords) {
            this.count = count;
            this.dataCodewords = dataCodewords;
          }
          getCount() {
            return this.count;
          }
          getDataCodewords() {
            return this.dataCodewords;
          }
        }
        class Version {
          constructor(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
            this.versionNumber = versionNumber;
            this.symbolSizeRows = symbolSizeRows;
            this.symbolSizeColumns = symbolSizeColumns;
            this.dataRegionSizeRows = dataRegionSizeRows;
            this.dataRegionSizeColumns = dataRegionSizeColumns;
            this.ecBlocks = ecBlocks;
            let total = 0;
            const ecCodewords = ecBlocks.getECCodewords();
            const ecbArray = ecBlocks.getECBlocks();
            for (let ecBlock of ecbArray) {
              total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
            }
            this.totalCodewords = total;
          }
          getVersionNumber() {
            return this.versionNumber;
          }
          getSymbolSizeRows() {
            return this.symbolSizeRows;
          }
          getSymbolSizeColumns() {
            return this.symbolSizeColumns;
          }
          getDataRegionSizeRows() {
            return this.dataRegionSizeRows;
          }
          getDataRegionSizeColumns() {
            return this.dataRegionSizeColumns;
          }
          getTotalCodewords() {
            return this.totalCodewords;
          }
          getECBlocks() {
            return this.ecBlocks;
          }
          static getVersionForDimensions(numRows, numColumns) {
            if ((numRows & 1) !== 0 || (numColumns & 1) !== 0) {
              throw new FormatException();
            }
            for (let version of Version.VERSIONS) {
              if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
                return version;
              }
            }
            throw new FormatException();
          }
          toString() {
            return "" + this.versionNumber;
          }
          static buildVersions() {
            return [
              new Version(1, 10, 10, 8, 8, new ECBlocks(5, new ECB(1, 3))),
              new Version(2, 12, 12, 10, 10, new ECBlocks(7, new ECB(1, 5))),
              new Version(3, 14, 14, 12, 12, new ECBlocks(10, new ECB(1, 8))),
              new Version(4, 16, 16, 14, 14, new ECBlocks(12, new ECB(1, 12))),
              new Version(5, 18, 18, 16, 16, new ECBlocks(14, new ECB(1, 18))),
              new Version(6, 20, 20, 18, 18, new ECBlocks(18, new ECB(1, 22))),
              new Version(7, 22, 22, 20, 20, new ECBlocks(20, new ECB(1, 30))),
              new Version(8, 24, 24, 22, 22, new ECBlocks(24, new ECB(1, 36))),
              new Version(9, 26, 26, 24, 24, new ECBlocks(28, new ECB(1, 44))),
              new Version(10, 32, 32, 14, 14, new ECBlocks(36, new ECB(1, 62))),
              new Version(11, 36, 36, 16, 16, new ECBlocks(42, new ECB(1, 86))),
              new Version(12, 40, 40, 18, 18, new ECBlocks(48, new ECB(1, 114))),
              new Version(13, 44, 44, 20, 20, new ECBlocks(56, new ECB(1, 144))),
              new Version(14, 48, 48, 22, 22, new ECBlocks(68, new ECB(1, 174))),
              new Version(15, 52, 52, 24, 24, new ECBlocks(42, new ECB(2, 102))),
              new Version(16, 64, 64, 14, 14, new ECBlocks(56, new ECB(2, 140))),
              new Version(17, 72, 72, 16, 16, new ECBlocks(36, new ECB(4, 92))),
              new Version(18, 80, 80, 18, 18, new ECBlocks(48, new ECB(4, 114))),
              new Version(19, 88, 88, 20, 20, new ECBlocks(56, new ECB(4, 144))),
              new Version(20, 96, 96, 22, 22, new ECBlocks(68, new ECB(4, 174))),
              new Version(21, 104, 104, 24, 24, new ECBlocks(56, new ECB(6, 136))),
              new Version(22, 120, 120, 18, 18, new ECBlocks(68, new ECB(6, 175))),
              new Version(23, 132, 132, 20, 20, new ECBlocks(62, new ECB(8, 163))),
              new Version(24, 144, 144, 22, 22, new ECBlocks(62, new ECB(8, 156), new ECB(2, 155))),
              new Version(25, 8, 18, 6, 16, new ECBlocks(7, new ECB(1, 5))),
              new Version(26, 8, 32, 6, 14, new ECBlocks(11, new ECB(1, 10))),
              new Version(27, 12, 26, 10, 24, new ECBlocks(14, new ECB(1, 16))),
              new Version(28, 12, 36, 10, 16, new ECBlocks(18, new ECB(1, 22))),
              new Version(29, 16, 36, 14, 16, new ECBlocks(24, new ECB(1, 32))),
              new Version(30, 16, 48, 14, 22, new ECBlocks(28, new ECB(1, 49)))
            ];
          }
        }
        Version.VERSIONS = Version.buildVersions();
        class BitMatrixParser {
          constructor(bitMatrix) {
            const dimension = bitMatrix.getHeight();
            if (dimension < 8 || dimension > 144 || (dimension & 1) !== 0) {
              throw new FormatException();
            }
            this.version = BitMatrixParser.readVersion(bitMatrix);
            this.mappingBitMatrix = this.extractDataRegion(bitMatrix);
            this.readMappingMatrix = new BitMatrix(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
          }
          getVersion() {
            return this.version;
          }
          static readVersion(bitMatrix) {
            const numRows = bitMatrix.getHeight();
            const numColumns = bitMatrix.getWidth();
            return Version.getVersionForDimensions(numRows, numColumns);
          }
          readCodewords() {
            const result = new Int8Array(this.version.getTotalCodewords());
            let resultOffset = 0;
            let row = 4;
            let column = 0;
            const numRows = this.mappingBitMatrix.getHeight();
            const numColumns = this.mappingBitMatrix.getWidth();
            let corner1Read = false;
            let corner2Read = false;
            let corner3Read = false;
            let corner4Read = false;
            do {
              if (row === numRows && column === 0 && !corner1Read) {
                result[resultOffset++] = this.readCorner1(numRows, numColumns) & 255;
                row -= 2;
                column += 2;
                corner1Read = true;
              } else if (row === numRows - 2 && column === 0 && (numColumns & 3) !== 0 && !corner2Read) {
                result[resultOffset++] = this.readCorner2(numRows, numColumns) & 255;
                row -= 2;
                column += 2;
                corner2Read = true;
              } else if (row === numRows + 4 && column === 2 && (numColumns & 7) === 0 && !corner3Read) {
                result[resultOffset++] = this.readCorner3(numRows, numColumns) & 255;
                row -= 2;
                column += 2;
                corner3Read = true;
              } else if (row === numRows - 2 && column === 0 && (numColumns & 7) === 4 && !corner4Read) {
                result[resultOffset++] = this.readCorner4(numRows, numColumns) & 255;
                row -= 2;
                column += 2;
                corner4Read = true;
              } else {
                do {
                  if (row < numRows && column >= 0 && !this.readMappingMatrix.get(column, row)) {
                    result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
                  }
                  row -= 2;
                  column += 2;
                } while (row >= 0 && column < numColumns);
                row += 1;
                column += 3;
                do {
                  if (row >= 0 && column < numColumns && !this.readMappingMatrix.get(column, row)) {
                    result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
                  }
                  row += 2;
                  column -= 2;
                } while (row < numRows && column >= 0);
                row += 3;
                column += 1;
              }
            } while (row < numRows || column < numColumns);
            if (resultOffset !== this.version.getTotalCodewords()) {
              throw new FormatException();
            }
            return result;
          }
          readModule(row, column, numRows, numColumns) {
            if (row < 0) {
              row += numRows;
              column += 4 - (numRows + 4 & 7);
            }
            if (column < 0) {
              column += numColumns;
              row += 4 - (numColumns + 4 & 7);
            }
            this.readMappingMatrix.set(column, row);
            return this.mappingBitMatrix.get(column, row);
          }
          readUtah(row, column, numRows, numColumns) {
            let currentByte = 0;
            if (this.readModule(row - 2, column - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row - 2, column - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row - 1, column - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row - 1, column - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row - 1, column, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row, column - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row, column - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(row, column, numRows, numColumns)) {
              currentByte |= 1;
            }
            return currentByte;
          }
          readCorner1(numRows, numColumns) {
            let currentByte = 0;
            if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 1, 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 1, 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            return currentByte;
          }
          readCorner2(numRows, numColumns) {
            let currentByte = 0;
            if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 4, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            return currentByte;
          }
          readCorner3(numRows, numColumns) {
            let currentByte = 0;
            if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(1, numColumns - 3, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(1, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            return currentByte;
          }
          readCorner4(numRows, numColumns) {
            let currentByte = 0;
            if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            currentByte <<= 1;
            if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
            }
            return currentByte;
          }
          extractDataRegion(bitMatrix) {
            const symbolSizeRows = this.version.getSymbolSizeRows();
            const symbolSizeColumns = this.version.getSymbolSizeColumns();
            if (bitMatrix.getHeight() !== symbolSizeRows) {
              throw new IllegalArgumentException("Dimension of bitMatrix must match the version size");
            }
            const dataRegionSizeRows = this.version.getDataRegionSizeRows();
            const dataRegionSizeColumns = this.version.getDataRegionSizeColumns();
            const numDataRegionsRow = symbolSizeRows / dataRegionSizeRows | 0;
            const numDataRegionsColumn = symbolSizeColumns / dataRegionSizeColumns | 0;
            const sizeDataRegionRow = numDataRegionsRow * dataRegionSizeRows;
            const sizeDataRegionColumn = numDataRegionsColumn * dataRegionSizeColumns;
            const bitMatrixWithoutAlignment = new BitMatrix(sizeDataRegionColumn, sizeDataRegionRow);
            for (let dataRegionRow = 0; dataRegionRow < numDataRegionsRow; ++dataRegionRow) {
              const dataRegionRowOffset = dataRegionRow * dataRegionSizeRows;
              for (let dataRegionColumn = 0; dataRegionColumn < numDataRegionsColumn; ++dataRegionColumn) {
                const dataRegionColumnOffset = dataRegionColumn * dataRegionSizeColumns;
                for (let i = 0; i < dataRegionSizeRows; ++i) {
                  const readRowOffset = dataRegionRow * (dataRegionSizeRows + 2) + 1 + i;
                  const writeRowOffset = dataRegionRowOffset + i;
                  for (let j = 0; j < dataRegionSizeColumns; ++j) {
                    const readColumnOffset = dataRegionColumn * (dataRegionSizeColumns + 2) + 1 + j;
                    if (bitMatrix.get(readColumnOffset, readRowOffset)) {
                      const writeColumnOffset = dataRegionColumnOffset + j;
                      bitMatrixWithoutAlignment.set(writeColumnOffset, writeRowOffset);
                    }
                  }
                }
              }
            }
            return bitMatrixWithoutAlignment;
          }
        }
        class DataBlock {
          constructor(numDataCodewords, codewords) {
            this.numDataCodewords = numDataCodewords;
            this.codewords = codewords;
          }
          static getDataBlocks(rawCodewords, version) {
            const ecBlocks = version.getECBlocks();
            let totalBlocks = 0;
            const ecBlockArray = ecBlocks.getECBlocks();
            for (let ecBlock of ecBlockArray) {
              totalBlocks += ecBlock.getCount();
            }
            const result = new Array(totalBlocks);
            let numResultBlocks = 0;
            for (let ecBlock of ecBlockArray) {
              for (let i = 0; i < ecBlock.getCount(); i++) {
                const numDataCodewords = ecBlock.getDataCodewords();
                const numBlockCodewords = ecBlocks.getECCodewords() + numDataCodewords;
                result[numResultBlocks++] = new DataBlock(numDataCodewords, new Uint8Array(numBlockCodewords));
              }
            }
            const longerBlocksTotalCodewords = result[0].codewords.length;
            const longerBlocksNumDataCodewords = longerBlocksTotalCodewords - ecBlocks.getECCodewords();
            const shorterBlocksNumDataCodewords = longerBlocksNumDataCodewords - 1;
            let rawCodewordsOffset = 0;
            for (let i = 0; i < shorterBlocksNumDataCodewords; i++) {
              for (let j = 0; j < numResultBlocks; j++) {
                result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
              }
            }
            const specialVersion = version.getVersionNumber() === 24;
            const numLongerBlocks = specialVersion ? 8 : numResultBlocks;
            for (let j = 0; j < numLongerBlocks; j++) {
              result[j].codewords[longerBlocksNumDataCodewords - 1] = rawCodewords[rawCodewordsOffset++];
            }
            const max = result[0].codewords.length;
            for (let i = longerBlocksNumDataCodewords; i < max; i++) {
              for (let j = 0; j < numResultBlocks; j++) {
                const jOffset = specialVersion ? (j + 8) % numResultBlocks : j;
                const iOffset = specialVersion && jOffset > 7 ? i - 1 : i;
                result[jOffset].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
              }
            }
            if (rawCodewordsOffset !== rawCodewords.length) {
              throw new IllegalArgumentException();
            }
            return result;
          }
          getNumDataCodewords() {
            return this.numDataCodewords;
          }
          getCodewords() {
            return this.codewords;
          }
        }
        class BitSource {
          constructor(bytes) {
            this.bytes = bytes;
            this.byteOffset = 0;
            this.bitOffset = 0;
          }
          getBitOffset() {
            return this.bitOffset;
          }
          getByteOffset() {
            return this.byteOffset;
          }
          readBits(numBits) {
            if (numBits < 1 || numBits > 32 || numBits > this.available()) {
              throw new IllegalArgumentException("" + numBits);
            }
            let result = 0;
            let bitOffset = this.bitOffset;
            let byteOffset = this.byteOffset;
            const bytes = this.bytes;
            if (bitOffset > 0) {
              const bitsLeft = 8 - bitOffset;
              const toRead = numBits < bitsLeft ? numBits : bitsLeft;
              const bitsToNotRead = bitsLeft - toRead;
              const mask = 255 >> 8 - toRead << bitsToNotRead;
              result = (bytes[byteOffset] & mask) >> bitsToNotRead;
              numBits -= toRead;
              bitOffset += toRead;
              if (bitOffset === 8) {
                bitOffset = 0;
                byteOffset++;
              }
            }
            if (numBits > 0) {
              while (numBits >= 8) {
                result = result << 8 | bytes[byteOffset] & 255;
                byteOffset++;
                numBits -= 8;
              }
              if (numBits > 0) {
                const bitsToNotRead = 8 - numBits;
                const mask = 255 >> bitsToNotRead << bitsToNotRead;
                result = result << numBits | (bytes[byteOffset] & mask) >> bitsToNotRead;
                bitOffset += numBits;
              }
            }
            this.bitOffset = bitOffset;
            this.byteOffset = byteOffset;
            return result;
          }
          available() {
            return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
          }
        }
        var Mode;
        (function(Mode2) {
          Mode2[Mode2["PAD_ENCODE"] = 0] = "PAD_ENCODE";
          Mode2[Mode2["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
          Mode2[Mode2["C40_ENCODE"] = 2] = "C40_ENCODE";
          Mode2[Mode2["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
          Mode2[Mode2["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
          Mode2[Mode2["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
          Mode2[Mode2["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
        })(Mode || (Mode = {}));
        class DecodedBitStreamParser {
          static decode(bytes) {
            const bits = new BitSource(bytes);
            const result = new StringBuilder();
            const resultTrailer = new StringBuilder();
            const byteSegments = new Array();
            let mode = Mode.ASCII_ENCODE;
            do {
              if (mode === Mode.ASCII_ENCODE) {
                mode = this.decodeAsciiSegment(bits, result, resultTrailer);
              } else {
                switch (mode) {
                  case Mode.C40_ENCODE:
                    this.decodeC40Segment(bits, result);
                    break;
                  case Mode.TEXT_ENCODE:
                    this.decodeTextSegment(bits, result);
                    break;
                  case Mode.ANSIX12_ENCODE:
                    this.decodeAnsiX12Segment(bits, result);
                    break;
                  case Mode.EDIFACT_ENCODE:
                    this.decodeEdifactSegment(bits, result);
                    break;
                  case Mode.BASE256_ENCODE:
                    this.decodeBase256Segment(bits, result, byteSegments);
                    break;
                  default:
                    throw new FormatException();
                }
                mode = Mode.ASCII_ENCODE;
              }
            } while (mode !== Mode.PAD_ENCODE && bits.available() > 0);
            if (resultTrailer.length() > 0) {
              result.append(resultTrailer.toString());
            }
            return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, null);
          }
          static decodeAsciiSegment(bits, result, resultTrailer) {
            let upperShift = false;
            do {
              let oneByte = bits.readBits(8);
              if (oneByte === 0) {
                throw new FormatException();
              } else if (oneByte <= 128) {
                if (upperShift) {
                  oneByte += 128;
                }
                result.append(String.fromCharCode(oneByte - 1));
                return Mode.ASCII_ENCODE;
              } else if (oneByte === 129) {
                return Mode.PAD_ENCODE;
              } else if (oneByte <= 229) {
                const value = oneByte - 130;
                if (value < 10) {
                  result.append("0");
                }
                result.append("" + value);
              } else {
                switch (oneByte) {
                  case 230:
                    return Mode.C40_ENCODE;
                  case 231:
                    return Mode.BASE256_ENCODE;
                  case 232:
                    result.append(String.fromCharCode(29));
                    break;
                  case 233:
                  case 234:
                    break;
                  case 235:
                    upperShift = true;
                    break;
                  case 236:
                    result.append("[)>05");
                    resultTrailer.insert(0, "");
                    break;
                  case 237:
                    result.append("[)>06");
                    resultTrailer.insert(0, "");
                    break;
                  case 238:
                    return Mode.ANSIX12_ENCODE;
                  case 239:
                    return Mode.TEXT_ENCODE;
                  case 240:
                    return Mode.EDIFACT_ENCODE;
                  case 241:
                    break;
                  default:
                    if (oneByte !== 254 || bits.available() !== 0) {
                      throw new FormatException();
                    }
                    break;
                }
              }
            } while (bits.available() > 0);
            return Mode.ASCII_ENCODE;
          }
          static decodeC40Segment(bits, result) {
            let upperShift = false;
            const cValues = [];
            let shift = 0;
            do {
              if (bits.available() === 8) {
                return;
              }
              const firstByte = bits.readBits(8);
              if (firstByte === 254) {
                return;
              }
              this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
              for (let i = 0; i < 3; i++) {
                const cValue = cValues[i];
                switch (shift) {
                  case 0:
                    if (cValue < 3) {
                      shift = cValue + 1;
                    } else if (cValue < this.C40_BASIC_SET_CHARS.length) {
                      const c40char = this.C40_BASIC_SET_CHARS[cValue];
                      if (upperShift) {
                        result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                        upperShift = false;
                      } else {
                        result.append(c40char);
                      }
                    } else {
                      throw new FormatException();
                    }
                    break;
                  case 1:
                    if (upperShift) {
                      result.append(String.fromCharCode(cValue + 128));
                      upperShift = false;
                    } else {
                      result.append(String.fromCharCode(cValue));
                    }
                    shift = 0;
                    break;
                  case 2:
                    if (cValue < this.C40_SHIFT2_SET_CHARS.length) {
                      const c40char = this.C40_SHIFT2_SET_CHARS[cValue];
                      if (upperShift) {
                        result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                        upperShift = false;
                      } else {
                        result.append(c40char);
                      }
                    } else {
                      switch (cValue) {
                        case 27:
                          result.append(String.fromCharCode(29));
                          break;
                        case 30:
                          upperShift = true;
                          break;
                        default:
                          throw new FormatException();
                      }
                    }
                    shift = 0;
                    break;
                  case 3:
                    if (upperShift) {
                      result.append(String.fromCharCode(cValue + 224));
                      upperShift = false;
                    } else {
                      result.append(String.fromCharCode(cValue + 96));
                    }
                    shift = 0;
                    break;
                  default:
                    throw new FormatException();
                }
              }
            } while (bits.available() > 0);
          }
          static decodeTextSegment(bits, result) {
            let upperShift = false;
            let cValues = [];
            let shift = 0;
            do {
              if (bits.available() === 8) {
                return;
              }
              const firstByte = bits.readBits(8);
              if (firstByte === 254) {
                return;
              }
              this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
              for (let i = 0; i < 3; i++) {
                const cValue = cValues[i];
                switch (shift) {
                  case 0:
                    if (cValue < 3) {
                      shift = cValue + 1;
                    } else if (cValue < this.TEXT_BASIC_SET_CHARS.length) {
                      const textChar = this.TEXT_BASIC_SET_CHARS[cValue];
                      if (upperShift) {
                        result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                        upperShift = false;
                      } else {
                        result.append(textChar);
                      }
                    } else {
                      throw new FormatException();
                    }
                    break;
                  case 1:
                    if (upperShift) {
                      result.append(String.fromCharCode(cValue + 128));
                      upperShift = false;
                    } else {
                      result.append(String.fromCharCode(cValue));
                    }
                    shift = 0;
                    break;
                  case 2:
                    if (cValue < this.TEXT_SHIFT2_SET_CHARS.length) {
                      const textChar = this.TEXT_SHIFT2_SET_CHARS[cValue];
                      if (upperShift) {
                        result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                        upperShift = false;
                      } else {
                        result.append(textChar);
                      }
                    } else {
                      switch (cValue) {
                        case 27:
                          result.append(String.fromCharCode(29));
                          break;
                        case 30:
                          upperShift = true;
                          break;
                        default:
                          throw new FormatException();
                      }
                    }
                    shift = 0;
                    break;
                  case 3:
                    if (cValue < this.TEXT_SHIFT3_SET_CHARS.length) {
                      const textChar = this.TEXT_SHIFT3_SET_CHARS[cValue];
                      if (upperShift) {
                        result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                        upperShift = false;
                      } else {
                        result.append(textChar);
                      }
                      shift = 0;
                    } else {
                      throw new FormatException();
                    }
                    break;
                  default:
                    throw new FormatException();
                }
              }
            } while (bits.available() > 0);
          }
          static decodeAnsiX12Segment(bits, result) {
            const cValues = [];
            do {
              if (bits.available() === 8) {
                return;
              }
              const firstByte = bits.readBits(8);
              if (firstByte === 254) {
                return;
              }
              this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
              for (let i = 0; i < 3; i++) {
                const cValue = cValues[i];
                switch (cValue) {
                  case 0:
                    result.append("\r");
                    break;
                  case 1:
                    result.append("*");
                    break;
                  case 2:
                    result.append(">");
                    break;
                  case 3:
                    result.append(" ");
                    break;
                  default:
                    if (cValue < 14) {
                      result.append(String.fromCharCode(cValue + 44));
                    } else if (cValue < 40) {
                      result.append(String.fromCharCode(cValue + 51));
                    } else {
                      throw new FormatException();
                    }
                    break;
                }
              }
            } while (bits.available() > 0);
          }
          static parseTwoBytes(firstByte, secondByte, result) {
            let fullBitValue = (firstByte << 8) + secondByte - 1;
            let temp = Math.floor(fullBitValue / 1600);
            result[0] = temp;
            fullBitValue -= temp * 1600;
            temp = Math.floor(fullBitValue / 40);
            result[1] = temp;
            result[2] = fullBitValue - temp * 40;
          }
          static decodeEdifactSegment(bits, result) {
            do {
              if (bits.available() <= 16) {
                return;
              }
              for (let i = 0; i < 4; i++) {
                let edifactValue = bits.readBits(6);
                if (edifactValue === 31) {
                  const bitsLeft = 8 - bits.getBitOffset();
                  if (bitsLeft !== 8) {
                    bits.readBits(bitsLeft);
                  }
                  return;
                }
                if ((edifactValue & 32) === 0) {
                  edifactValue |= 64;
                }
                result.append(String.fromCharCode(edifactValue));
              }
            } while (bits.available() > 0);
          }
          static decodeBase256Segment(bits, result, byteSegments) {
            let codewordPosition = 1 + bits.getByteOffset();
            const d1 = this.unrandomize255State(bits.readBits(8), codewordPosition++);
            let count;
            if (d1 === 0) {
              count = bits.available() / 8 | 0;
            } else if (d1 < 250) {
              count = d1;
            } else {
              count = 250 * (d1 - 249) + this.unrandomize255State(bits.readBits(8), codewordPosition++);
            }
            if (count < 0) {
              throw new FormatException();
            }
            const bytes = new Uint8Array(count);
            for (let i = 0; i < count; i++) {
              if (bits.available() < 8) {
                throw new FormatException();
              }
              bytes[i] = this.unrandomize255State(bits.readBits(8), codewordPosition++);
            }
            byteSegments.push(bytes);
            try {
              result.append(StringEncoding.decode(bytes, StringUtils.ISO88591));
            } catch (uee) {
              throw new IllegalStateException("Platform does not support required encoding: " + uee.message);
            }
          }
          static unrandomize255State(randomizedBase256Codeword, base256CodewordPosition) {
            const pseudoRandomNumber = 149 * base256CodewordPosition % 255 + 1;
            const tempVariable = randomizedBase256Codeword - pseudoRandomNumber;
            return tempVariable >= 0 ? tempVariable : tempVariable + 256;
          }
        }
        DecodedBitStreamParser.C40_BASIC_SET_CHARS = [
          "*",
          "*",
          "*",
          " ",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];
        DecodedBitStreamParser.C40_SHIFT2_SET_CHARS = [
          "!",
          '"',
          "#",
          "$",
          "%",
          "&",
          "'",
          "(",
          ")",
          "*",
          "+",
          ",",
          "-",
          ".",
          "/",
          ":",
          ";",
          "<",
          "=",
          ">",
          "?",
          "@",
          "[",
          "\\",
          "]",
          "^",
          "_"
        ];
        DecodedBitStreamParser.TEXT_BASIC_SET_CHARS = [
          "*",
          "*",
          "*",
          " ",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ];
        DecodedBitStreamParser.TEXT_SHIFT2_SET_CHARS = DecodedBitStreamParser.C40_SHIFT2_SET_CHARS;
        DecodedBitStreamParser.TEXT_SHIFT3_SET_CHARS = [
          "`",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "{",
          "|",
          "}",
          "~",
          String.fromCharCode(127)
        ];
        class Decoder$1 {
          constructor() {
            this.rsDecoder = new ReedSolomonDecoder(GenericGF.DATA_MATRIX_FIELD_256);
          }
          decode(bits) {
            const parser = new BitMatrixParser(bits);
            const version = parser.getVersion();
            const codewords = parser.readCodewords();
            const dataBlocks = DataBlock.getDataBlocks(codewords, version);
            let totalBytes = 0;
            for (let db of dataBlocks) {
              totalBytes += db.getNumDataCodewords();
            }
            const resultBytes = new Uint8Array(totalBytes);
            const dataBlocksCount = dataBlocks.length;
            for (let j = 0; j < dataBlocksCount; j++) {
              const dataBlock = dataBlocks[j];
              const codewordBytes = dataBlock.getCodewords();
              const numDataCodewords = dataBlock.getNumDataCodewords();
              this.correctErrors(codewordBytes, numDataCodewords);
              for (let i = 0; i < numDataCodewords; i++) {
                resultBytes[i * dataBlocksCount + j] = codewordBytes[i];
              }
            }
            return DecodedBitStreamParser.decode(resultBytes);
          }
          correctErrors(codewordBytes, numDataCodewords) {
            const codewordsInts = new Int32Array(codewordBytes);
            try {
              this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
            } catch (ignored) {
              throw new ChecksumException();
            }
            for (let i = 0; i < numDataCodewords; i++) {
              codewordBytes[i] = codewordsInts[i];
            }
          }
        }
        class Detector$1 {
          constructor(image) {
            this.image = image;
            this.rectangleDetector = new WhiteRectangleDetector(this.image);
          }
          detect() {
            const cornerPoints = this.rectangleDetector.detect();
            let points = this.detectSolid1(cornerPoints);
            points = this.detectSolid2(points);
            points[3] = this.correctTopRight(points);
            if (!points[3]) {
              throw new NotFoundException();
            }
            points = this.shiftToModuleCenter(points);
            const topLeft = points[0];
            const bottomLeft = points[1];
            const bottomRight = points[2];
            const topRight = points[3];
            let dimensionTop = this.transitionsBetween(topLeft, topRight) + 1;
            let dimensionRight = this.transitionsBetween(bottomRight, topRight) + 1;
            if ((dimensionTop & 1) === 1) {
              dimensionTop += 1;
            }
            if ((dimensionRight & 1) === 1) {
              dimensionRight += 1;
            }
            if (4 * dimensionTop < 7 * dimensionRight && 4 * dimensionRight < 7 * dimensionTop) {
              dimensionTop = dimensionRight = Math.max(dimensionTop, dimensionRight);
            }
            let bits = Detector$1.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, topRight, dimensionTop, dimensionRight);
            return new DetectorResult(bits, [topLeft, bottomLeft, bottomRight, topRight]);
          }
          static shiftPoint(point, to, div) {
            let x = (to.getX() - point.getX()) / (div + 1);
            let y = (to.getY() - point.getY()) / (div + 1);
            return new ResultPoint(point.getX() + x, point.getY() + y);
          }
          static moveAway(point, fromX, fromY) {
            let x = point.getX();
            let y = point.getY();
            if (x < fromX) {
              x -= 1;
            } else {
              x += 1;
            }
            if (y < fromY) {
              y -= 1;
            } else {
              y += 1;
            }
            return new ResultPoint(x, y);
          }
          detectSolid1(cornerPoints) {
            let pointA = cornerPoints[0];
            let pointB = cornerPoints[1];
            let pointC = cornerPoints[3];
            let pointD = cornerPoints[2];
            let trAB = this.transitionsBetween(pointA, pointB);
            let trBC = this.transitionsBetween(pointB, pointC);
            let trCD = this.transitionsBetween(pointC, pointD);
            let trDA = this.transitionsBetween(pointD, pointA);
            let min = trAB;
            let points = [pointD, pointA, pointB, pointC];
            if (min > trBC) {
              min = trBC;
              points[0] = pointA;
              points[1] = pointB;
              points[2] = pointC;
              points[3] = pointD;
            }
            if (min > trCD) {
              min = trCD;
              points[0] = pointB;
              points[1] = pointC;
              points[2] = pointD;
              points[3] = pointA;
            }
            if (min > trDA) {
              points[0] = pointC;
              points[1] = pointD;
              points[2] = pointA;
              points[3] = pointB;
            }
            return points;
          }
          detectSolid2(points) {
            let pointA = points[0];
            let pointB = points[1];
            let pointC = points[2];
            let pointD = points[3];
            let tr = this.transitionsBetween(pointA, pointD);
            let pointBs = Detector$1.shiftPoint(pointB, pointC, (tr + 1) * 4);
            let pointCs = Detector$1.shiftPoint(pointC, pointB, (tr + 1) * 4);
            let trBA = this.transitionsBetween(pointBs, pointA);
            let trCD = this.transitionsBetween(pointCs, pointD);
            if (trBA < trCD) {
              points[0] = pointA;
              points[1] = pointB;
              points[2] = pointC;
              points[3] = pointD;
            } else {
              points[0] = pointB;
              points[1] = pointC;
              points[2] = pointD;
              points[3] = pointA;
            }
            return points;
          }
          correctTopRight(points) {
            let pointA = points[0];
            let pointB = points[1];
            let pointC = points[2];
            let pointD = points[3];
            let trTop = this.transitionsBetween(pointA, pointD);
            let trRight = this.transitionsBetween(pointB, pointD);
            let pointAs = Detector$1.shiftPoint(pointA, pointB, (trRight + 1) * 4);
            let pointCs = Detector$1.shiftPoint(pointC, pointB, (trTop + 1) * 4);
            trTop = this.transitionsBetween(pointAs, pointD);
            trRight = this.transitionsBetween(pointCs, pointD);
            let candidate1 = new ResultPoint(pointD.getX() + (pointC.getX() - pointB.getX()) / (trTop + 1), pointD.getY() + (pointC.getY() - pointB.getY()) / (trTop + 1));
            let candidate2 = new ResultPoint(pointD.getX() + (pointA.getX() - pointB.getX()) / (trRight + 1), pointD.getY() + (pointA.getY() - pointB.getY()) / (trRight + 1));
            if (!this.isValid(candidate1)) {
              if (this.isValid(candidate2)) {
                return candidate2;
              }
              return null;
            }
            if (!this.isValid(candidate2)) {
              return candidate1;
            }
            let sumc1 = this.transitionsBetween(pointAs, candidate1) + this.transitionsBetween(pointCs, candidate1);
            let sumc2 = this.transitionsBetween(pointAs, candidate2) + this.transitionsBetween(pointCs, candidate2);
            if (sumc1 > sumc2) {
              return candidate1;
            } else {
              return candidate2;
            }
          }
          shiftToModuleCenter(points) {
            let pointA = points[0];
            let pointB = points[1];
            let pointC = points[2];
            let pointD = points[3];
            let dimH = this.transitionsBetween(pointA, pointD) + 1;
            let dimV = this.transitionsBetween(pointC, pointD) + 1;
            let pointAs = Detector$1.shiftPoint(pointA, pointB, dimV * 4);
            let pointCs = Detector$1.shiftPoint(pointC, pointB, dimH * 4);
            dimH = this.transitionsBetween(pointAs, pointD) + 1;
            dimV = this.transitionsBetween(pointCs, pointD) + 1;
            if ((dimH & 1) === 1) {
              dimH += 1;
            }
            if ((dimV & 1) === 1) {
              dimV += 1;
            }
            let centerX = (pointA.getX() + pointB.getX() + pointC.getX() + pointD.getX()) / 4;
            let centerY = (pointA.getY() + pointB.getY() + pointC.getY() + pointD.getY()) / 4;
            pointA = Detector$1.moveAway(pointA, centerX, centerY);
            pointB = Detector$1.moveAway(pointB, centerX, centerY);
            pointC = Detector$1.moveAway(pointC, centerX, centerY);
            pointD = Detector$1.moveAway(pointD, centerX, centerY);
            let pointBs;
            let pointDs;
            pointAs = Detector$1.shiftPoint(pointA, pointB, dimV * 4);
            pointAs = Detector$1.shiftPoint(pointAs, pointD, dimH * 4);
            pointBs = Detector$1.shiftPoint(pointB, pointA, dimV * 4);
            pointBs = Detector$1.shiftPoint(pointBs, pointC, dimH * 4);
            pointCs = Detector$1.shiftPoint(pointC, pointD, dimV * 4);
            pointCs = Detector$1.shiftPoint(pointCs, pointB, dimH * 4);
            pointDs = Detector$1.shiftPoint(pointD, pointC, dimV * 4);
            pointDs = Detector$1.shiftPoint(pointDs, pointA, dimH * 4);
            return [pointAs, pointBs, pointCs, pointDs];
          }
          isValid(p) {
            return p.getX() >= 0 && p.getX() < this.image.getWidth() && p.getY() > 0 && p.getY() < this.image.getHeight();
          }
          static sampleGrid(image, topLeft, bottomLeft, bottomRight, topRight, dimensionX, dimensionY) {
            const sampler = GridSamplerInstance.getInstance();
            return sampler.sampleGrid(image, dimensionX, dimensionY, 0.5, 0.5, dimensionX - 0.5, 0.5, dimensionX - 0.5, dimensionY - 0.5, 0.5, dimensionY - 0.5, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
          }
          transitionsBetween(from, to) {
            let fromX = Math.trunc(from.getX());
            let fromY = Math.trunc(from.getY());
            let toX = Math.trunc(to.getX());
            let toY = Math.trunc(to.getY());
            let steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
            if (steep) {
              let temp = fromX;
              fromX = fromY;
              fromY = temp;
              temp = toX;
              toX = toY;
              toY = temp;
            }
            let dx = Math.abs(toX - fromX);
            let dy = Math.abs(toY - fromY);
            let error = -dx / 2;
            let ystep = fromY < toY ? 1 : -1;
            let xstep = fromX < toX ? 1 : -1;
            let transitions = 0;
            let inBlack = this.image.get(steep ? fromY : fromX, steep ? fromX : fromY);
            for (let x = fromX, y = fromY; x !== toX; x += xstep) {
              let isBlack = this.image.get(steep ? y : x, steep ? x : y);
              if (isBlack !== inBlack) {
                transitions++;
                inBlack = isBlack;
              }
              error += dy;
              if (error > 0) {
                if (y === toY) {
                  break;
                }
                y += ystep;
                error -= dx;
              }
            }
            return transitions;
          }
        }
        class DataMatrixReader {
          constructor() {
            this.decoder = new Decoder$1();
          }
          decode(image, hints = null) {
            let decoderResult;
            let points;
            if (hints != null && hints.has(DecodeHintType$1.PURE_BARCODE)) {
              const bits = DataMatrixReader.extractPureBits(image.getBlackMatrix());
              decoderResult = this.decoder.decode(bits);
              points = DataMatrixReader.NO_POINTS;
            } else {
              const detectorResult = new Detector$1(image.getBlackMatrix()).detect();
              decoderResult = this.decoder.decode(detectorResult.getBits());
              points = detectorResult.getPoints();
            }
            const rawBytes = decoderResult.getRawBytes();
            const result = new Result(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat$1.DATA_MATRIX, System.currentTimeMillis());
            const byteSegments = decoderResult.getByteSegments();
            if (byteSegments != null) {
              result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
            }
            const ecLevel = decoderResult.getECLevel();
            if (ecLevel != null) {
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
            }
            return result;
          }
          reset() {
          }
          static extractPureBits(image) {
            const leftTopBlack = image.getTopLeftOnBit();
            const rightBottomBlack = image.getBottomRightOnBit();
            if (leftTopBlack == null || rightBottomBlack == null) {
              throw new NotFoundException();
            }
            const moduleSize = this.moduleSize(leftTopBlack, image);
            let top = leftTopBlack[1];
            const bottom = rightBottomBlack[1];
            let left = leftTopBlack[0];
            const right = rightBottomBlack[0];
            const matrixWidth = (right - left + 1) / moduleSize;
            const matrixHeight = (bottom - top + 1) / moduleSize;
            if (matrixWidth <= 0 || matrixHeight <= 0) {
              throw new NotFoundException();
            }
            const nudge = moduleSize / 2;
            top += nudge;
            left += nudge;
            const bits = new BitMatrix(matrixWidth, matrixHeight);
            for (let y = 0; y < matrixHeight; y++) {
              const iOffset = top + y * moduleSize;
              for (let x = 0; x < matrixWidth; x++) {
                if (image.get(left + x * moduleSize, iOffset)) {
                  bits.set(x, y);
                }
              }
            }
            return bits;
          }
          static moduleSize(leftTopBlack, image) {
            const width = image.getWidth();
            let x = leftTopBlack[0];
            const y = leftTopBlack[1];
            while (x < width && image.get(x, y)) {
              x++;
            }
            if (x === width) {
              throw new NotFoundException();
            }
            const moduleSize = x - leftTopBlack[0];
            if (moduleSize === 0) {
              throw new NotFoundException();
            }
            return moduleSize;
          }
        }
        DataMatrixReader.NO_POINTS = [];
        class BrowserDatamatrixCodeReader extends BrowserCodeReader {
          constructor(timeBetweenScansMillis = 500) {
            super(new DataMatrixReader(), timeBetweenScansMillis);
          }
        }
        var ErrorCorrectionLevelValues;
        (function(ErrorCorrectionLevelValues2) {
          ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["L"] = 0] = "L";
          ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["M"] = 1] = "M";
          ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["Q"] = 2] = "Q";
          ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["H"] = 3] = "H";
        })(ErrorCorrectionLevelValues || (ErrorCorrectionLevelValues = {}));
        class ErrorCorrectionLevel {
          constructor(value, stringValue, bits) {
            this.value = value;
            this.stringValue = stringValue;
            this.bits = bits;
            ErrorCorrectionLevel.FOR_BITS.set(bits, this);
            ErrorCorrectionLevel.FOR_VALUE.set(value, this);
          }
          getValue() {
            return this.value;
          }
          getBits() {
            return this.bits;
          }
          static fromString(s) {
            switch (s) {
              case "L":
                return ErrorCorrectionLevel.L;
              case "M":
                return ErrorCorrectionLevel.M;
              case "Q":
                return ErrorCorrectionLevel.Q;
              case "H":
                return ErrorCorrectionLevel.H;
              default:
                throw new ArgumentException(s + "not available");
            }
          }
          toString() {
            return this.stringValue;
          }
          equals(o) {
            if (!(o instanceof ErrorCorrectionLevel)) {
              return false;
            }
            const other = o;
            return this.value === other.value;
          }
          static forBits(bits) {
            if (bits < 0 || bits >= ErrorCorrectionLevel.FOR_BITS.size) {
              throw new IllegalArgumentException();
            }
            return ErrorCorrectionLevel.FOR_BITS.get(bits);
          }
        }
        ErrorCorrectionLevel.FOR_BITS = /* @__PURE__ */ new Map();
        ErrorCorrectionLevel.FOR_VALUE = /* @__PURE__ */ new Map();
        ErrorCorrectionLevel.L = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.L, "L", 1);
        ErrorCorrectionLevel.M = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.M, "M", 0);
        ErrorCorrectionLevel.Q = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.Q, "Q", 3);
        ErrorCorrectionLevel.H = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.H, "H", 2);
        class FormatInformation {
          constructor(formatInfo) {
            this.errorCorrectionLevel = ErrorCorrectionLevel.forBits(formatInfo >> 3 & 3);
            this.dataMask = formatInfo & 7;
          }
          static numBitsDiffering(a, b) {
            return Integer.bitCount(a ^ b);
          }
          static decodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2) {
            const formatInfo = FormatInformation.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
            if (formatInfo !== null) {
              return formatInfo;
            }
            return FormatInformation.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation.FORMAT_INFO_MASK_QR);
          }
          static doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2) {
            let bestDifference = Number.MAX_SAFE_INTEGER;
            let bestFormatInfo = 0;
            for (const decodeInfo of FormatInformation.FORMAT_INFO_DECODE_LOOKUP) {
              const targetInfo = decodeInfo[0];
              if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
                return new FormatInformation(decodeInfo[1]);
              }
              let bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo1, targetInfo);
              if (bitsDifference < bestDifference) {
                bestFormatInfo = decodeInfo[1];
                bestDifference = bitsDifference;
              }
              if (maskedFormatInfo1 !== maskedFormatInfo2) {
                bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo2, targetInfo);
                if (bitsDifference < bestDifference) {
                  bestFormatInfo = decodeInfo[1];
                  bestDifference = bitsDifference;
                }
              }
            }
            if (bestDifference <= 3) {
              return new FormatInformation(bestFormatInfo);
            }
            return null;
          }
          getErrorCorrectionLevel() {
            return this.errorCorrectionLevel;
          }
          getDataMask() {
            return this.dataMask;
          }
          hashCode() {
            return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
          }
          equals(o) {
            if (!(o instanceof FormatInformation)) {
              return false;
            }
            const other = o;
            return this.errorCorrectionLevel === other.errorCorrectionLevel && this.dataMask === other.dataMask;
          }
        }
        FormatInformation.FORMAT_INFO_MASK_QR = 21522;
        FormatInformation.FORMAT_INFO_DECODE_LOOKUP = [
          Int32Array.from([21522, 0]),
          Int32Array.from([20773, 1]),
          Int32Array.from([24188, 2]),
          Int32Array.from([23371, 3]),
          Int32Array.from([17913, 4]),
          Int32Array.from([16590, 5]),
          Int32Array.from([20375, 6]),
          Int32Array.from([19104, 7]),
          Int32Array.from([30660, 8]),
          Int32Array.from([29427, 9]),
          Int32Array.from([32170, 10]),
          Int32Array.from([30877, 11]),
          Int32Array.from([26159, 12]),
          Int32Array.from([25368, 13]),
          Int32Array.from([27713, 14]),
          Int32Array.from([26998, 15]),
          Int32Array.from([5769, 16]),
          Int32Array.from([5054, 17]),
          Int32Array.from([7399, 18]),
          Int32Array.from([6608, 19]),
          Int32Array.from([1890, 20]),
          Int32Array.from([597, 21]),
          Int32Array.from([3340, 22]),
          Int32Array.from([2107, 23]),
          Int32Array.from([13663, 24]),
          Int32Array.from([12392, 25]),
          Int32Array.from([16177, 26]),
          Int32Array.from([14854, 27]),
          Int32Array.from([9396, 28]),
          Int32Array.from([8579, 29]),
          Int32Array.from([11994, 30]),
          Int32Array.from([11245, 31])
        ];
        class ECBlocks$1 {
          constructor(ecCodewordsPerBlock, ...ecBlocks) {
            this.ecCodewordsPerBlock = ecCodewordsPerBlock;
            this.ecBlocks = ecBlocks;
          }
          getECCodewordsPerBlock() {
            return this.ecCodewordsPerBlock;
          }
          getNumBlocks() {
            let total = 0;
            const ecBlocks = this.ecBlocks;
            for (const ecBlock of ecBlocks) {
              total += ecBlock.getCount();
            }
            return total;
          }
          getTotalECCodewords() {
            return this.ecCodewordsPerBlock * this.getNumBlocks();
          }
          getECBlocks() {
            return this.ecBlocks;
          }
        }
        class ECB$1 {
          constructor(count, dataCodewords) {
            this.count = count;
            this.dataCodewords = dataCodewords;
          }
          getCount() {
            return this.count;
          }
          getDataCodewords() {
            return this.dataCodewords;
          }
        }
        class Version$1 {
          constructor(versionNumber, alignmentPatternCenters, ...ecBlocks) {
            this.versionNumber = versionNumber;
            this.alignmentPatternCenters = alignmentPatternCenters;
            this.ecBlocks = ecBlocks;
            let total = 0;
            const ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
            const ecbArray = ecBlocks[0].getECBlocks();
            for (const ecBlock of ecbArray) {
              total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
            }
            this.totalCodewords = total;
          }
          getVersionNumber() {
            return this.versionNumber;
          }
          getAlignmentPatternCenters() {
            return this.alignmentPatternCenters;
          }
          getTotalCodewords() {
            return this.totalCodewords;
          }
          getDimensionForVersion() {
            return 17 + 4 * this.versionNumber;
          }
          getECBlocksForLevel(ecLevel) {
            return this.ecBlocks[ecLevel.getValue()];
          }
          static getProvisionalVersionForDimension(dimension) {
            if (dimension % 4 !== 1) {
              throw new FormatException();
            }
            try {
              return this.getVersionForNumber((dimension - 17) / 4);
            } catch (ignored) {
              throw new FormatException();
            }
          }
          static getVersionForNumber(versionNumber) {
            if (versionNumber < 1 || versionNumber > 40) {
              throw new IllegalArgumentException();
            }
            return Version$1.VERSIONS[versionNumber - 1];
          }
          static decodeVersionInformation(versionBits) {
            let bestDifference = Number.MAX_SAFE_INTEGER;
            let bestVersion = 0;
            for (let i = 0; i < Version$1.VERSION_DECODE_INFO.length; i++) {
              const targetVersion = Version$1.VERSION_DECODE_INFO[i];
              if (targetVersion === versionBits) {
                return Version$1.getVersionForNumber(i + 7);
              }
              const bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
              if (bitsDifference < bestDifference) {
                bestVersion = i + 7;
                bestDifference = bitsDifference;
              }
            }
            if (bestDifference <= 3) {
              return Version$1.getVersionForNumber(bestVersion);
            }
            return null;
          }
          buildFunctionPattern() {
            const dimension = this.getDimensionForVersion();
            const bitMatrix = new BitMatrix(dimension);
            bitMatrix.setRegion(0, 0, 9, 9);
            bitMatrix.setRegion(dimension - 8, 0, 8, 9);
            bitMatrix.setRegion(0, dimension - 8, 9, 8);
            const max = this.alignmentPatternCenters.length;
            for (let x = 0; x < max; x++) {
              const i = this.alignmentPatternCenters[x] - 2;
              for (let y = 0; y < max; y++) {
                if (x === 0 && (y === 0 || y === max - 1) || x === max - 1 && y === 0) {
                  continue;
                }
                bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
              }
            }
            bitMatrix.setRegion(6, 9, 1, dimension - 17);
            bitMatrix.setRegion(9, 6, dimension - 17, 1);
            if (this.versionNumber > 6) {
              bitMatrix.setRegion(dimension - 11, 0, 3, 6);
              bitMatrix.setRegion(0, dimension - 11, 6, 3);
            }
            return bitMatrix;
          }
          toString() {
            return "" + this.versionNumber;
          }
        }
        Version$1.VERSION_DECODE_INFO = Int32Array.from([
          31892,
          34236,
          39577,
          42195,
          48118,
          51042,
          55367,
          58893,
          63784,
          68472,
          70749,
          76311,
          79154,
          84390,
          87683,
          92361,
          96236,
          102084,
          102881,
          110507,
          110734,
          117786,
          119615,
          126325,
          127568,
          133589,
          136944,
          141498,
          145311,
          150283,
          152622,
          158308,
          161089,
          167017
        ]);
        Version$1.VERSIONS = [
          new Version$1(1, new Int32Array(0), new ECBlocks$1(7, new ECB$1(1, 19)), new ECBlocks$1(10, new ECB$1(1, 16)), new ECBlocks$1(13, new ECB$1(1, 13)), new ECBlocks$1(17, new ECB$1(1, 9))),
          new Version$1(2, Int32Array.from([6, 18]), new ECBlocks$1(10, new ECB$1(1, 34)), new ECBlocks$1(16, new ECB$1(1, 28)), new ECBlocks$1(22, new ECB$1(1, 22)), new ECBlocks$1(28, new ECB$1(1, 16))),
          new Version$1(3, Int32Array.from([6, 22]), new ECBlocks$1(15, new ECB$1(1, 55)), new ECBlocks$1(26, new ECB$1(1, 44)), new ECBlocks$1(18, new ECB$1(2, 17)), new ECBlocks$1(22, new ECB$1(2, 13))),
          new Version$1(4, Int32Array.from([6, 26]), new ECBlocks$1(20, new ECB$1(1, 80)), new ECBlocks$1(18, new ECB$1(2, 32)), new ECBlocks$1(26, new ECB$1(2, 24)), new ECBlocks$1(16, new ECB$1(4, 9))),
          new Version$1(5, Int32Array.from([6, 30]), new ECBlocks$1(26, new ECB$1(1, 108)), new ECBlocks$1(24, new ECB$1(2, 43)), new ECBlocks$1(18, new ECB$1(2, 15), new ECB$1(2, 16)), new ECBlocks$1(22, new ECB$1(2, 11), new ECB$1(2, 12))),
          new Version$1(6, Int32Array.from([6, 34]), new ECBlocks$1(18, new ECB$1(2, 68)), new ECBlocks$1(16, new ECB$1(4, 27)), new ECBlocks$1(24, new ECB$1(4, 19)), new ECBlocks$1(28, new ECB$1(4, 15))),
          new Version$1(7, Int32Array.from([6, 22, 38]), new ECBlocks$1(20, new ECB$1(2, 78)), new ECBlocks$1(18, new ECB$1(4, 31)), new ECBlocks$1(18, new ECB$1(2, 14), new ECB$1(4, 15)), new ECBlocks$1(26, new ECB$1(4, 13), new ECB$1(1, 14))),
          new Version$1(8, Int32Array.from([6, 24, 42]), new ECBlocks$1(24, new ECB$1(2, 97)), new ECBlocks$1(22, new ECB$1(2, 38), new ECB$1(2, 39)), new ECBlocks$1(22, new ECB$1(4, 18), new ECB$1(2, 19)), new ECBlocks$1(26, new ECB$1(4, 14), new ECB$1(2, 15))),
          new Version$1(9, Int32Array.from([6, 26, 46]), new ECBlocks$1(30, new ECB$1(2, 116)), new ECBlocks$1(22, new ECB$1(3, 36), new ECB$1(2, 37)), new ECBlocks$1(20, new ECB$1(4, 16), new ECB$1(4, 17)), new ECBlocks$1(24, new ECB$1(4, 12), new ECB$1(4, 13))),
          new Version$1(10, Int32Array.from([6, 28, 50]), new ECBlocks$1(18, new ECB$1(2, 68), new ECB$1(2, 69)), new ECBlocks$1(26, new ECB$1(4, 43), new ECB$1(1, 44)), new ECBlocks$1(24, new ECB$1(6, 19), new ECB$1(2, 20)), new ECBlocks$1(28, new ECB$1(6, 15), new ECB$1(2, 16))),
          new Version$1(11, Int32Array.from([6, 30, 54]), new ECBlocks$1(20, new ECB$1(4, 81)), new ECBlocks$1(30, new ECB$1(1, 50), new ECB$1(4, 51)), new ECBlocks$1(28, new ECB$1(4, 22), new ECB$1(4, 23)), new ECBlocks$1(24, new ECB$1(3, 12), new ECB$1(8, 13))),
          new Version$1(12, Int32Array.from([6, 32, 58]), new ECBlocks$1(24, new ECB$1(2, 92), new ECB$1(2, 93)), new ECBlocks$1(22, new ECB$1(6, 36), new ECB$1(2, 37)), new ECBlocks$1(26, new ECB$1(4, 20), new ECB$1(6, 21)), new ECBlocks$1(28, new ECB$1(7, 14), new ECB$1(4, 15))),
          new Version$1(13, Int32Array.from([6, 34, 62]), new ECBlocks$1(26, new ECB$1(4, 107)), new ECBlocks$1(22, new ECB$1(8, 37), new ECB$1(1, 38)), new ECBlocks$1(24, new ECB$1(8, 20), new ECB$1(4, 21)), new ECBlocks$1(22, new ECB$1(12, 11), new ECB$1(4, 12))),
          new Version$1(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks$1(30, new ECB$1(3, 115), new ECB$1(1, 116)), new ECBlocks$1(24, new ECB$1(4, 40), new ECB$1(5, 41)), new ECBlocks$1(20, new ECB$1(11, 16), new ECB$1(5, 17)), new ECBlocks$1(24, new ECB$1(11, 12), new ECB$1(5, 13))),
          new Version$1(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks$1(22, new ECB$1(5, 87), new ECB$1(1, 88)), new ECBlocks$1(24, new ECB$1(5, 41), new ECB$1(5, 42)), new ECBlocks$1(30, new ECB$1(5, 24), new ECB$1(7, 25)), new ECBlocks$1(24, new ECB$1(11, 12), new ECB$1(7, 13))),
          new Version$1(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks$1(24, new ECB$1(5, 98), new ECB$1(1, 99)), new ECBlocks$1(28, new ECB$1(7, 45), new ECB$1(3, 46)), new ECBlocks$1(24, new ECB$1(15, 19), new ECB$1(2, 20)), new ECBlocks$1(30, new ECB$1(3, 15), new ECB$1(13, 16))),
          new Version$1(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks$1(28, new ECB$1(1, 107), new ECB$1(5, 108)), new ECBlocks$1(28, new ECB$1(10, 46), new ECB$1(1, 47)), new ECBlocks$1(28, new ECB$1(1, 22), new ECB$1(15, 23)), new ECBlocks$1(28, new ECB$1(2, 14), new ECB$1(17, 15))),
          new Version$1(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks$1(30, new ECB$1(5, 120), new ECB$1(1, 121)), new ECBlocks$1(26, new ECB$1(9, 43), new ECB$1(4, 44)), new ECBlocks$1(28, new ECB$1(17, 22), new ECB$1(1, 23)), new ECBlocks$1(28, new ECB$1(2, 14), new ECB$1(19, 15))),
          new Version$1(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks$1(28, new ECB$1(3, 113), new ECB$1(4, 114)), new ECBlocks$1(26, new ECB$1(3, 44), new ECB$1(11, 45)), new ECBlocks$1(26, new ECB$1(17, 21), new ECB$1(4, 22)), new ECBlocks$1(26, new ECB$1(9, 13), new ECB$1(16, 14))),
          new Version$1(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks$1(28, new ECB$1(3, 107), new ECB$1(5, 108)), new ECBlocks$1(26, new ECB$1(3, 41), new ECB$1(13, 42)), new ECBlocks$1(30, new ECB$1(15, 24), new ECB$1(5, 25)), new ECBlocks$1(28, new ECB$1(15, 15), new ECB$1(10, 16))),
          new Version$1(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks$1(28, new ECB$1(4, 116), new ECB$1(4, 117)), new ECBlocks$1(26, new ECB$1(17, 42)), new ECBlocks$1(28, new ECB$1(17, 22), new ECB$1(6, 23)), new ECBlocks$1(30, new ECB$1(19, 16), new ECB$1(6, 17))),
          new Version$1(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks$1(28, new ECB$1(2, 111), new ECB$1(7, 112)), new ECBlocks$1(28, new ECB$1(17, 46)), new ECBlocks$1(30, new ECB$1(7, 24), new ECB$1(16, 25)), new ECBlocks$1(24, new ECB$1(34, 13))),
          new Version$1(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks$1(30, new ECB$1(4, 121), new ECB$1(5, 122)), new ECBlocks$1(28, new ECB$1(4, 47), new ECB$1(14, 48)), new ECBlocks$1(30, new ECB$1(11, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(16, 15), new ECB$1(14, 16))),
          new Version$1(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks$1(30, new ECB$1(6, 117), new ECB$1(4, 118)), new ECBlocks$1(28, new ECB$1(6, 45), new ECB$1(14, 46)), new ECBlocks$1(30, new ECB$1(11, 24), new ECB$1(16, 25)), new ECBlocks$1(30, new ECB$1(30, 16), new ECB$1(2, 17))),
          new Version$1(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks$1(26, new ECB$1(8, 106), new ECB$1(4, 107)), new ECBlocks$1(28, new ECB$1(8, 47), new ECB$1(13, 48)), new ECBlocks$1(30, new ECB$1(7, 24), new ECB$1(22, 25)), new ECBlocks$1(30, new ECB$1(22, 15), new ECB$1(13, 16))),
          new Version$1(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks$1(28, new ECB$1(10, 114), new ECB$1(2, 115)), new ECBlocks$1(28, new ECB$1(19, 46), new ECB$1(4, 47)), new ECBlocks$1(28, new ECB$1(28, 22), new ECB$1(6, 23)), new ECBlocks$1(30, new ECB$1(33, 16), new ECB$1(4, 17))),
          new Version$1(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks$1(30, new ECB$1(8, 122), new ECB$1(4, 123)), new ECBlocks$1(28, new ECB$1(22, 45), new ECB$1(3, 46)), new ECBlocks$1(30, new ECB$1(8, 23), new ECB$1(26, 24)), new ECBlocks$1(30, new ECB$1(12, 15), new ECB$1(28, 16))),
          new Version$1(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks$1(30, new ECB$1(3, 117), new ECB$1(10, 118)), new ECBlocks$1(28, new ECB$1(3, 45), new ECB$1(23, 46)), new ECBlocks$1(30, new ECB$1(4, 24), new ECB$1(31, 25)), new ECBlocks$1(30, new ECB$1(11, 15), new ECB$1(31, 16))),
          new Version$1(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks$1(30, new ECB$1(7, 116), new ECB$1(7, 117)), new ECBlocks$1(28, new ECB$1(21, 45), new ECB$1(7, 46)), new ECBlocks$1(30, new ECB$1(1, 23), new ECB$1(37, 24)), new ECBlocks$1(30, new ECB$1(19, 15), new ECB$1(26, 16))),
          new Version$1(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks$1(30, new ECB$1(5, 115), new ECB$1(10, 116)), new ECBlocks$1(28, new ECB$1(19, 47), new ECB$1(10, 48)), new ECBlocks$1(30, new ECB$1(15, 24), new ECB$1(25, 25)), new ECBlocks$1(30, new ECB$1(23, 15), new ECB$1(25, 16))),
          new Version$1(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks$1(30, new ECB$1(13, 115), new ECB$1(3, 116)), new ECBlocks$1(28, new ECB$1(2, 46), new ECB$1(29, 47)), new ECBlocks$1(30, new ECB$1(42, 24), new ECB$1(1, 25)), new ECBlocks$1(30, new ECB$1(23, 15), new ECB$1(28, 16))),
          new Version$1(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks$1(30, new ECB$1(17, 115)), new ECBlocks$1(28, new ECB$1(10, 46), new ECB$1(23, 47)), new ECBlocks$1(30, new ECB$1(10, 24), new ECB$1(35, 25)), new ECBlocks$1(30, new ECB$1(19, 15), new ECB$1(35, 16))),
          new Version$1(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks$1(30, new ECB$1(17, 115), new ECB$1(1, 116)), new ECBlocks$1(28, new ECB$1(14, 46), new ECB$1(21, 47)), new ECBlocks$1(30, new ECB$1(29, 24), new ECB$1(19, 25)), new ECBlocks$1(30, new ECB$1(11, 15), new ECB$1(46, 16))),
          new Version$1(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks$1(30, new ECB$1(13, 115), new ECB$1(6, 116)), new ECBlocks$1(28, new ECB$1(14, 46), new ECB$1(23, 47)), new ECBlocks$1(30, new ECB$1(44, 24), new ECB$1(7, 25)), new ECBlocks$1(30, new ECB$1(59, 16), new ECB$1(1, 17))),
          new Version$1(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks$1(30, new ECB$1(12, 121), new ECB$1(7, 122)), new ECBlocks$1(28, new ECB$1(12, 47), new ECB$1(26, 48)), new ECBlocks$1(30, new ECB$1(39, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(22, 15), new ECB$1(41, 16))),
          new Version$1(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks$1(30, new ECB$1(6, 121), new ECB$1(14, 122)), new ECBlocks$1(28, new ECB$1(6, 47), new ECB$1(34, 48)), new ECBlocks$1(30, new ECB$1(46, 24), new ECB$1(10, 25)), new ECBlocks$1(30, new ECB$1(2, 15), new ECB$1(64, 16))),
          new Version$1(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks$1(30, new ECB$1(17, 122), new ECB$1(4, 123)), new ECBlocks$1(28, new ECB$1(29, 46), new ECB$1(14, 47)), new ECBlocks$1(30, new ECB$1(49, 24), new ECB$1(10, 25)), new ECBlocks$1(30, new ECB$1(24, 15), new ECB$1(46, 16))),
          new Version$1(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks$1(30, new ECB$1(4, 122), new ECB$1(18, 123)), new ECBlocks$1(28, new ECB$1(13, 46), new ECB$1(32, 47)), new ECBlocks$1(30, new ECB$1(48, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(42, 15), new ECB$1(32, 16))),
          new Version$1(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks$1(30, new ECB$1(20, 117), new ECB$1(4, 118)), new ECBlocks$1(28, new ECB$1(40, 47), new ECB$1(7, 48)), new ECBlocks$1(30, new ECB$1(43, 24), new ECB$1(22, 25)), new ECBlocks$1(30, new ECB$1(10, 15), new ECB$1(67, 16))),
          new Version$1(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks$1(30, new ECB$1(19, 118), new ECB$1(6, 119)), new ECBlocks$1(28, new ECB$1(18, 47), new ECB$1(31, 48)), new ECBlocks$1(30, new ECB$1(34, 24), new ECB$1(34, 25)), new ECBlocks$1(30, new ECB$1(20, 15), new ECB$1(61, 16)))
        ];
        var DataMaskValues;
        (function(DataMaskValues2) {
          DataMaskValues2[DataMaskValues2["DATA_MASK_000"] = 0] = "DATA_MASK_000";
          DataMaskValues2[DataMaskValues2["DATA_MASK_001"] = 1] = "DATA_MASK_001";
          DataMaskValues2[DataMaskValues2["DATA_MASK_010"] = 2] = "DATA_MASK_010";
          DataMaskValues2[DataMaskValues2["DATA_MASK_011"] = 3] = "DATA_MASK_011";
          DataMaskValues2[DataMaskValues2["DATA_MASK_100"] = 4] = "DATA_MASK_100";
          DataMaskValues2[DataMaskValues2["DATA_MASK_101"] = 5] = "DATA_MASK_101";
          DataMaskValues2[DataMaskValues2["DATA_MASK_110"] = 6] = "DATA_MASK_110";
          DataMaskValues2[DataMaskValues2["DATA_MASK_111"] = 7] = "DATA_MASK_111";
        })(DataMaskValues || (DataMaskValues = {}));
        class DataMask {
          constructor(value, isMasked) {
            this.value = value;
            this.isMasked = isMasked;
          }
          unmaskBitMatrix(bits, dimension) {
            for (let i = 0; i < dimension; i++) {
              for (let j = 0; j < dimension; j++) {
                if (this.isMasked(i, j)) {
                  bits.flip(j, i);
                }
              }
            }
          }
        }
        DataMask.values = /* @__PURE__ */ new Map([
          [DataMaskValues.DATA_MASK_000, new DataMask(DataMaskValues.DATA_MASK_000, (i, j) => {
            return (i + j & 1) === 0;
          })],
          [DataMaskValues.DATA_MASK_001, new DataMask(DataMaskValues.DATA_MASK_001, (i, j) => {
            return (i & 1) === 0;
          })],
          [DataMaskValues.DATA_MASK_010, new DataMask(DataMaskValues.DATA_MASK_010, (i, j) => {
            return j % 3 === 0;
          })],
          [DataMaskValues.DATA_MASK_011, new DataMask(DataMaskValues.DATA_MASK_011, (i, j) => {
            return (i + j) % 3 === 0;
          })],
          [DataMaskValues.DATA_MASK_100, new DataMask(DataMaskValues.DATA_MASK_100, (i, j) => {
            return (Math.floor(i / 2) + Math.floor(j / 3) & 1) === 0;
          })],
          [DataMaskValues.DATA_MASK_101, new DataMask(DataMaskValues.DATA_MASK_101, (i, j) => {
            return i * j % 6 === 0;
          })],
          [DataMaskValues.DATA_MASK_110, new DataMask(DataMaskValues.DATA_MASK_110, (i, j) => {
            return i * j % 6 < 3;
          })],
          [DataMaskValues.DATA_MASK_111, new DataMask(DataMaskValues.DATA_MASK_111, (i, j) => {
            return (i + j + i * j % 3 & 1) === 0;
          })]
        ]);
        class BitMatrixParser$1 {
          constructor(bitMatrix) {
            const dimension = bitMatrix.getHeight();
            if (dimension < 21 || (dimension & 3) !== 1) {
              throw new FormatException();
            }
            this.bitMatrix = bitMatrix;
          }
          readFormatInformation() {
            if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0) {
              return this.parsedFormatInfo;
            }
            let formatInfoBits1 = 0;
            for (let i = 0; i < 6; i++) {
              formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
            }
            formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
            formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
            formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
            for (let j = 5; j >= 0; j--) {
              formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
            }
            const dimension = this.bitMatrix.getHeight();
            let formatInfoBits2 = 0;
            const jMin = dimension - 7;
            for (let j = dimension - 1; j >= jMin; j--) {
              formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
            }
            for (let i = dimension - 8; i < dimension; i++) {
              formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
            }
            this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
            if (this.parsedFormatInfo !== null) {
              return this.parsedFormatInfo;
            }
            throw new FormatException();
          }
          readVersion() {
            if (this.parsedVersion !== null && this.parsedVersion !== void 0) {
              return this.parsedVersion;
            }
            const dimension = this.bitMatrix.getHeight();
            const provisionalVersion = Math.floor((dimension - 17) / 4);
            if (provisionalVersion <= 6) {
              return Version$1.getVersionForNumber(provisionalVersion);
            }
            let versionBits = 0;
            const ijMin = dimension - 11;
            for (let j = 5; j >= 0; j--) {
              for (let i = dimension - 9; i >= ijMin; i--) {
                versionBits = this.copyBit(i, j, versionBits);
              }
            }
            let theParsedVersion = Version$1.decodeVersionInformation(versionBits);
            if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
              this.parsedVersion = theParsedVersion;
              return theParsedVersion;
            }
            versionBits = 0;
            for (let i = 5; i >= 0; i--) {
              for (let j = dimension - 9; j >= ijMin; j--) {
                versionBits = this.copyBit(i, j, versionBits);
              }
            }
            theParsedVersion = Version$1.decodeVersionInformation(versionBits);
            if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
              this.parsedVersion = theParsedVersion;
              return theParsedVersion;
            }
            throw new FormatException();
          }
          copyBit(i, j, versionBits) {
            const bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
            return bit ? versionBits << 1 | 1 : versionBits << 1;
          }
          readCodewords() {
            const formatInfo = this.readFormatInformation();
            const version = this.readVersion();
            const dataMask = DataMask.values.get(formatInfo.getDataMask());
            const dimension = this.bitMatrix.getHeight();
            dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
            const functionPattern = version.buildFunctionPattern();
            let readingUp = true;
            const result = new Uint8Array(version.getTotalCodewords());
            let resultOffset = 0;
            let currentByte = 0;
            let bitsRead = 0;
            for (let j = dimension - 1; j > 0; j -= 2) {
              if (j === 6) {
                j--;
              }
              for (let count = 0; count < dimension; count++) {
                const i = readingUp ? dimension - 1 - count : count;
                for (let col = 0; col < 2; col++) {
                  if (!functionPattern.get(j - col, i)) {
                    bitsRead++;
                    currentByte <<= 1;
                    if (this.bitMatrix.get(j - col, i)) {
                      currentByte |= 1;
                    }
                    if (bitsRead === 8) {
                      result[resultOffset++] = currentByte;
                      bitsRead = 0;
                      currentByte = 0;
                    }
                  }
                }
              }
              readingUp = !readingUp;
            }
            if (resultOffset !== version.getTotalCodewords()) {
              throw new FormatException();
            }
            return result;
          }
          remask() {
            if (this.parsedFormatInfo === null) {
              return;
            }
            const dataMask = DataMask.values[this.parsedFormatInfo.getDataMask()];
            const dimension = this.bitMatrix.getHeight();
            dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
          }
          setMirror(isMirror) {
            this.parsedVersion = null;
            this.parsedFormatInfo = null;
            this.isMirror = isMirror;
          }
          mirror() {
            const bitMatrix = this.bitMatrix;
            for (let x = 0, width = bitMatrix.getWidth(); x < width; x++) {
              for (let y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
                if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
                  bitMatrix.flip(y, x);
                  bitMatrix.flip(x, y);
                }
              }
            }
          }
        }
        class DataBlock$1 {
          constructor(numDataCodewords, codewords) {
            this.numDataCodewords = numDataCodewords;
            this.codewords = codewords;
          }
          static getDataBlocks(rawCodewords, version, ecLevel) {
            if (rawCodewords.length !== version.getTotalCodewords()) {
              throw new IllegalArgumentException();
            }
            const ecBlocks = version.getECBlocksForLevel(ecLevel);
            let totalBlocks = 0;
            const ecBlockArray = ecBlocks.getECBlocks();
            for (const ecBlock of ecBlockArray) {
              totalBlocks += ecBlock.getCount();
            }
            const result = new Array(totalBlocks);
            let numResultBlocks = 0;
            for (const ecBlock of ecBlockArray) {
              for (let i = 0; i < ecBlock.getCount(); i++) {
                const numDataCodewords = ecBlock.getDataCodewords();
                const numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
                result[numResultBlocks++] = new DataBlock$1(numDataCodewords, new Uint8Array(numBlockCodewords));
              }
            }
            const shorterBlocksTotalCodewords = result[0].codewords.length;
            let longerBlocksStartAt = result.length - 1;
            while (longerBlocksStartAt >= 0) {
              const numCodewords = result[longerBlocksStartAt].codewords.length;
              if (numCodewords === shorterBlocksTotalCodewords) {
                break;
              }
              longerBlocksStartAt--;
            }
            longerBlocksStartAt++;
            const shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
            let rawCodewordsOffset = 0;
            for (let i = 0; i < shorterBlocksNumDataCodewords; i++) {
              for (let j = 0; j < numResultBlocks; j++) {
                result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
              }
            }
            for (let j = longerBlocksStartAt; j < numResultBlocks; j++) {
              result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
            }
            const max = result[0].codewords.length;
            for (let i = shorterBlocksNumDataCodewords; i < max; i++) {
              for (let j = 0; j < numResultBlocks; j++) {
                const iOffset = j < longerBlocksStartAt ? i : i + 1;
                result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
              }
            }
            return result;
          }
          getNumDataCodewords() {
            return this.numDataCodewords;
          }
          getCodewords() {
            return this.codewords;
          }
        }
        var ModeValues;
        (function(ModeValues2) {
          ModeValues2[ModeValues2["TERMINATOR"] = 0] = "TERMINATOR";
          ModeValues2[ModeValues2["NUMERIC"] = 1] = "NUMERIC";
          ModeValues2[ModeValues2["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
          ModeValues2[ModeValues2["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
          ModeValues2[ModeValues2["BYTE"] = 4] = "BYTE";
          ModeValues2[ModeValues2["ECI"] = 5] = "ECI";
          ModeValues2[ModeValues2["KANJI"] = 6] = "KANJI";
          ModeValues2[ModeValues2["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
          ModeValues2[ModeValues2["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
          ModeValues2[ModeValues2["HANZI"] = 9] = "HANZI";
        })(ModeValues || (ModeValues = {}));
        class Mode$1 {
          constructor(value, stringValue, characterCountBitsForVersions, bits) {
            this.value = value;
            this.stringValue = stringValue;
            this.characterCountBitsForVersions = characterCountBitsForVersions;
            this.bits = bits;
            Mode$1.FOR_BITS.set(bits, this);
            Mode$1.FOR_VALUE.set(value, this);
          }
          static forBits(bits) {
            const mode = Mode$1.FOR_BITS.get(bits);
            if (mode === void 0) {
              throw new IllegalArgumentException();
            }
            return mode;
          }
          getCharacterCountBits(version) {
            const versionNumber = version.getVersionNumber();
            let offset;
            if (versionNumber <= 9) {
              offset = 0;
            } else if (versionNumber <= 26) {
              offset = 1;
            } else {
              offset = 2;
            }
            return this.characterCountBitsForVersions[offset];
          }
          getValue() {
            return this.value;
          }
          getBits() {
            return this.bits;
          }
          equals(o) {
            if (!(o instanceof Mode$1)) {
              return false;
            }
            const other = o;
            return this.value === other.value;
          }
          toString() {
            return this.stringValue;
          }
        }
        Mode$1.FOR_BITS = /* @__PURE__ */ new Map();
        Mode$1.FOR_VALUE = /* @__PURE__ */ new Map();
        Mode$1.TERMINATOR = new Mode$1(ModeValues.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0);
        Mode$1.NUMERIC = new Mode$1(ModeValues.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1);
        Mode$1.ALPHANUMERIC = new Mode$1(ModeValues.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2);
        Mode$1.STRUCTURED_APPEND = new Mode$1(ModeValues.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3);
        Mode$1.BYTE = new Mode$1(ModeValues.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4);
        Mode$1.ECI = new Mode$1(ModeValues.ECI, "ECI", Int32Array.from([0, 0, 0]), 7);
        Mode$1.KANJI = new Mode$1(ModeValues.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8);
        Mode$1.FNC1_FIRST_POSITION = new Mode$1(ModeValues.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5);
        Mode$1.FNC1_SECOND_POSITION = new Mode$1(ModeValues.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9);
        Mode$1.HANZI = new Mode$1(ModeValues.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
        class DecodedBitStreamParser$1 {
          static decode(bytes, version, ecLevel, hints) {
            const bits = new BitSource(bytes);
            let result = new StringBuilder();
            const byteSegments = new Array();
            let symbolSequence = -1;
            let parityData = -1;
            try {
              let currentCharacterSetECI = null;
              let fc1InEffect = false;
              let mode;
              do {
                if (bits.available() < 4) {
                  mode = Mode$1.TERMINATOR;
                } else {
                  const modeBits = bits.readBits(4);
                  mode = Mode$1.forBits(modeBits);
                }
                switch (mode) {
                  case Mode$1.TERMINATOR:
                    break;
                  case Mode$1.FNC1_FIRST_POSITION:
                  case Mode$1.FNC1_SECOND_POSITION:
                    fc1InEffect = true;
                    break;
                  case Mode$1.STRUCTURED_APPEND:
                    if (bits.available() < 16) {
                      throw new FormatException();
                    }
                    symbolSequence = bits.readBits(8);
                    parityData = bits.readBits(8);
                    break;
                  case Mode$1.ECI:
                    const value = DecodedBitStreamParser$1.parseECIValue(bits);
                    currentCharacterSetECI = CharacterSetECI.getCharacterSetECIByValue(value);
                    if (currentCharacterSetECI === null) {
                      throw new FormatException();
                    }
                    break;
                  case Mode$1.HANZI:
                    const subset = bits.readBits(4);
                    const countHanzi = bits.readBits(mode.getCharacterCountBits(version));
                    if (subset === DecodedBitStreamParser$1.GB2312_SUBSET) {
                      DecodedBitStreamParser$1.decodeHanziSegment(bits, result, countHanzi);
                    }
                    break;
                  default:
                    const count = bits.readBits(mode.getCharacterCountBits(version));
                    switch (mode) {
                      case Mode$1.NUMERIC:
                        DecodedBitStreamParser$1.decodeNumericSegment(bits, result, count);
                        break;
                      case Mode$1.ALPHANUMERIC:
                        DecodedBitStreamParser$1.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                        break;
                      case Mode$1.BYTE:
                        DecodedBitStreamParser$1.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                        break;
                      case Mode$1.KANJI:
                        DecodedBitStreamParser$1.decodeKanjiSegment(bits, result, count);
                        break;
                      default:
                        throw new FormatException();
                    }
                    break;
                }
              } while (mode !== Mode$1.TERMINATOR);
            } catch (iae) {
              throw new FormatException();
            }
            return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
          }
          static decodeHanziSegment(bits, result, count) {
            if (count * 13 > bits.available()) {
              throw new FormatException();
            }
            const buffer = new Uint8Array(2 * count);
            let offset = 0;
            while (count > 0) {
              const twoBytes = bits.readBits(13);
              let assembledTwoBytes = twoBytes / 96 << 8 & 4294967295 | twoBytes % 96;
              if (assembledTwoBytes < 959) {
                assembledTwoBytes += 41377;
              } else {
                assembledTwoBytes += 42657;
              }
              buffer[offset] = assembledTwoBytes >> 8 & 255;
              buffer[offset + 1] = assembledTwoBytes & 255;
              offset += 2;
              count--;
            }
            try {
              result.append(StringEncoding.decode(buffer, StringUtils.GB2312));
            } catch (ignored) {
              throw new FormatException(ignored);
            }
          }
          static decodeKanjiSegment(bits, result, count) {
            if (count * 13 > bits.available()) {
              throw new FormatException();
            }
            const buffer = new Uint8Array(2 * count);
            let offset = 0;
            while (count > 0) {
              const twoBytes = bits.readBits(13);
              let assembledTwoBytes = twoBytes / 192 << 8 & 4294967295 | twoBytes % 192;
              if (assembledTwoBytes < 7936) {
                assembledTwoBytes += 33088;
              } else {
                assembledTwoBytes += 49472;
              }
              buffer[offset] = assembledTwoBytes >> 8;
              buffer[offset + 1] = assembledTwoBytes;
              offset += 2;
              count--;
            }
            try {
              result.append(StringEncoding.decode(buffer, StringUtils.SHIFT_JIS));
            } catch (ignored) {
              throw new FormatException(ignored);
            }
          }
          static decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints) {
            if (8 * count > bits.available()) {
              throw new FormatException();
            }
            const readBytes = new Uint8Array(count);
            for (let i = 0; i < count; i++) {
              readBytes[i] = bits.readBits(8);
            }
            let encoding;
            if (currentCharacterSetECI === null) {
              encoding = StringUtils.guessEncoding(readBytes, hints);
            } else {
              encoding = currentCharacterSetECI.getName();
            }
            try {
              result.append(StringEncoding.decode(readBytes, encoding));
            } catch (ignored) {
              throw new FormatException(ignored);
            }
            byteSegments.push(readBytes);
          }
          static toAlphaNumericChar(value) {
            if (value >= DecodedBitStreamParser$1.ALPHANUMERIC_CHARS.length) {
              throw new FormatException();
            }
            return DecodedBitStreamParser$1.ALPHANUMERIC_CHARS[value];
          }
          static decodeAlphanumericSegment(bits, result, count, fc1InEffect) {
            const start = result.length();
            while (count > 1) {
              if (bits.available() < 11) {
                throw new FormatException();
              }
              const nextTwoCharsBits = bits.readBits(11);
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(nextTwoCharsBits % 45));
              count -= 2;
            }
            if (count === 1) {
              if (bits.available() < 6) {
                throw new FormatException();
              }
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(bits.readBits(6)));
            }
            if (fc1InEffect) {
              for (let i = start; i < result.length(); i++) {
                if (result.charAt(i) === "%") {
                  if (i < result.length() - 1 && result.charAt(i + 1) === "%") {
                    result.deleteCharAt(i + 1);
                  } else {
                    result.setCharAt(i, String.fromCharCode(29));
                  }
                }
              }
            }
          }
          static decodeNumericSegment(bits, result, count) {
            while (count >= 3) {
              if (bits.available() < 10) {
                throw new FormatException();
              }
              const threeDigitsBits = bits.readBits(10);
              if (threeDigitsBits >= 1e3) {
                throw new FormatException();
              }
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(threeDigitsBits % 10));
              count -= 3;
            }
            if (count === 2) {
              if (bits.available() < 7) {
                throw new FormatException();
              }
              const twoDigitsBits = bits.readBits(7);
              if (twoDigitsBits >= 100) {
                throw new FormatException();
              }
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(twoDigitsBits % 10));
            } else if (count === 1) {
              if (bits.available() < 4) {
                throw new FormatException();
              }
              const digitBits = bits.readBits(4);
              if (digitBits >= 10) {
                throw new FormatException();
              }
              result.append(DecodedBitStreamParser$1.toAlphaNumericChar(digitBits));
            }
          }
          static parseECIValue(bits) {
            const firstByte = bits.readBits(8);
            if ((firstByte & 128) === 0) {
              return firstByte & 127;
            }
            if ((firstByte & 192) === 128) {
              const secondByte = bits.readBits(8);
              return (firstByte & 63) << 8 & 4294967295 | secondByte;
            }
            if ((firstByte & 224) === 192) {
              const secondThirdBytes = bits.readBits(16);
              return (firstByte & 31) << 16 & 4294967295 | secondThirdBytes;
            }
            throw new FormatException();
          }
        }
        DecodedBitStreamParser$1.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
        DecodedBitStreamParser$1.GB2312_SUBSET = 1;
        class QRCodeDecoderMetaData {
          constructor(mirrored) {
            this.mirrored = mirrored;
          }
          isMirrored() {
            return this.mirrored;
          }
          applyMirroredCorrection(points) {
            if (!this.mirrored || points === null || points.length < 3) {
              return;
            }
            const bottomLeft = points[0];
            points[0] = points[2];
            points[2] = bottomLeft;
          }
        }
        class Decoder$2 {
          constructor() {
            this.rsDecoder = new ReedSolomonDecoder(GenericGF.QR_CODE_FIELD_256);
          }
          decodeBooleanArray(image, hints) {
            return this.decodeBitMatrix(BitMatrix.parseFromBooleanArray(image), hints);
          }
          decodeBitMatrix(bits, hints) {
            const parser = new BitMatrixParser$1(bits);
            let ex = null;
            try {
              return this.decodeBitMatrixParser(parser, hints);
            } catch (e) {
              ex = e;
            }
            try {
              parser.remask();
              parser.setMirror(true);
              parser.readVersion();
              parser.readFormatInformation();
              parser.mirror();
              const result = this.decodeBitMatrixParser(parser, hints);
              result.setOther(new QRCodeDecoderMetaData(true));
              return result;
            } catch (e) {
              if (ex !== null) {
                throw ex;
              }
              throw e;
            }
          }
          decodeBitMatrixParser(parser, hints) {
            const version = parser.readVersion();
            const ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
            const codewords = parser.readCodewords();
            const dataBlocks = DataBlock$1.getDataBlocks(codewords, version, ecLevel);
            let totalBytes = 0;
            for (const dataBlock of dataBlocks) {
              totalBytes += dataBlock.getNumDataCodewords();
            }
            const resultBytes = new Uint8Array(totalBytes);
            let resultOffset = 0;
            for (const dataBlock of dataBlocks) {
              const codewordBytes = dataBlock.getCodewords();
              const numDataCodewords = dataBlock.getNumDataCodewords();
              this.correctErrors(codewordBytes, numDataCodewords);
              for (let i = 0; i < numDataCodewords; i++) {
                resultBytes[resultOffset++] = codewordBytes[i];
              }
            }
            return DecodedBitStreamParser$1.decode(resultBytes, version, ecLevel, hints);
          }
          correctErrors(codewordBytes, numDataCodewords) {
            const codewordsInts = new Int32Array(codewordBytes);
            try {
              this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
            } catch (ignored) {
              throw new ChecksumException();
            }
            for (let i = 0; i < numDataCodewords; i++) {
              codewordBytes[i] = codewordsInts[i];
            }
          }
        }
        class AlignmentPattern extends ResultPoint {
          constructor(posX, posY, estimatedModuleSize) {
            super(posX, posY);
            this.estimatedModuleSize = estimatedModuleSize;
          }
          aboutEquals(moduleSize, i, j) {
            if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
              const moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
              return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
            }
            return false;
          }
          combineEstimate(i, j, newModuleSize) {
            const combinedX = (this.getX() + j) / 2;
            const combinedY = (this.getY() + i) / 2;
            const combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2;
            return new AlignmentPattern(combinedX, combinedY, combinedModuleSize);
          }
        }
        class AlignmentPatternFinder {
          constructor(image, startX, startY, width, height, moduleSize, resultPointCallback) {
            this.image = image;
            this.startX = startX;
            this.startY = startY;
            this.width = width;
            this.height = height;
            this.moduleSize = moduleSize;
            this.resultPointCallback = resultPointCallback;
            this.possibleCenters = [];
            this.crossCheckStateCount = new Int32Array(3);
          }
          find() {
            const startX = this.startX;
            const height = this.height;
            const width = this.width;
            const maxJ = startX + width;
            const middleI = this.startY + height / 2;
            const stateCount = new Int32Array(3);
            const image = this.image;
            for (let iGen = 0; iGen < height; iGen++) {
              const i = middleI + ((iGen & 1) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
              stateCount[0] = 0;
              stateCount[1] = 0;
              stateCount[2] = 0;
              let j = startX;
              while (j < maxJ && !image.get(j, i)) {
                j++;
              }
              let currentState = 0;
              while (j < maxJ) {
                if (image.get(j, i)) {
                  if (currentState === 1) {
                    stateCount[1]++;
                  } else {
                    if (currentState === 2) {
                      if (this.foundPatternCross(stateCount)) {
                        const confirmed = this.handlePossibleCenter(stateCount, i, j);
                        if (confirmed !== null) {
                          return confirmed;
                        }
                      }
                      stateCount[0] = stateCount[2];
                      stateCount[1] = 1;
                      stateCount[2] = 0;
                      currentState = 1;
                    } else {
                      stateCount[++currentState]++;
                    }
                  }
                } else {
                  if (currentState === 1) {
                    currentState++;
                  }
                  stateCount[currentState]++;
                }
                j++;
              }
              if (this.foundPatternCross(stateCount)) {
                const confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
                if (confirmed !== null) {
                  return confirmed;
                }
              }
            }
            if (this.possibleCenters.length !== 0) {
              return this.possibleCenters[0];
            }
            throw new NotFoundException();
          }
          static centerFromEnd(stateCount, end) {
            return end - stateCount[2] - stateCount[1] / 2;
          }
          foundPatternCross(stateCount) {
            const moduleSize = this.moduleSize;
            const maxVariance = moduleSize / 2;
            for (let i = 0; i < 3; i++) {
              if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
                return false;
              }
            }
            return true;
          }
          crossCheckVertical(startI, centerJ, maxCount, originalStateCountTotal) {
            const image = this.image;
            const maxI = image.getHeight();
            const stateCount = this.crossCheckStateCount;
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            let i = startI;
            while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i--;
            }
            if (i < 0 || stateCount[1] > maxCount) {
              return NaN;
            }
            while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              i--;
            }
            if (stateCount[0] > maxCount) {
              return NaN;
            }
            i = startI + 1;
            while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i++;
            }
            if (i === maxI || stateCount[1] > maxCount) {
              return NaN;
            }
            while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
              stateCount[2]++;
              i++;
            }
            if (stateCount[2] > maxCount) {
              return NaN;
            }
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
            if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
              return NaN;
            }
            return this.foundPatternCross(stateCount) ? AlignmentPatternFinder.centerFromEnd(stateCount, i) : NaN;
          }
          handlePossibleCenter(stateCount, i, j) {
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
            const centerJ = AlignmentPatternFinder.centerFromEnd(stateCount, j);
            const centerI = this.crossCheckVertical(i, centerJ, 2 * stateCount[1], stateCountTotal);
            if (!isNaN(centerI)) {
              const estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3;
              for (const center of this.possibleCenters) {
                if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                  return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                }
              }
              const point = new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
              this.possibleCenters.push(point);
              if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
                this.resultPointCallback.foundPossibleResultPoint(point);
              }
            }
            return null;
          }
        }
        class FinderPattern$1 extends ResultPoint {
          constructor(posX, posY, estimatedModuleSize, count) {
            super(posX, posY);
            this.estimatedModuleSize = estimatedModuleSize;
            this.count = count;
            if (count === void 0) {
              this.count = 1;
            }
          }
          getEstimatedModuleSize() {
            return this.estimatedModuleSize;
          }
          getCount() {
            return this.count;
          }
          aboutEquals(moduleSize, i, j) {
            if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
              const moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
              return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
            }
            return false;
          }
          combineEstimate(i, j, newModuleSize) {
            const combinedCount = this.count + 1;
            const combinedX = (this.count * this.getX() + j) / combinedCount;
            const combinedY = (this.count * this.getY() + i) / combinedCount;
            const combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
            return new FinderPattern$1(combinedX, combinedY, combinedModuleSize, combinedCount);
          }
        }
        class FinderPatternInfo {
          constructor(patternCenters) {
            this.bottomLeft = patternCenters[0];
            this.topLeft = patternCenters[1];
            this.topRight = patternCenters[2];
          }
          getBottomLeft() {
            return this.bottomLeft;
          }
          getTopLeft() {
            return this.topLeft;
          }
          getTopRight() {
            return this.topRight;
          }
        }
        class FinderPatternFinder {
          constructor(image, resultPointCallback) {
            this.image = image;
            this.resultPointCallback = resultPointCallback;
            this.possibleCenters = [];
            this.crossCheckStateCount = new Int32Array(5);
            this.resultPointCallback = resultPointCallback;
          }
          getImage() {
            return this.image;
          }
          getPossibleCenters() {
            return this.possibleCenters;
          }
          find(hints) {
            const tryHarder = hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.TRY_HARDER) !== void 0;
            const pureBarcode = hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.PURE_BARCODE) !== void 0;
            const image = this.image;
            const maxI = image.getHeight();
            const maxJ = image.getWidth();
            let iSkip = Math.floor(3 * maxI / (4 * FinderPatternFinder.MAX_MODULES));
            if (iSkip < FinderPatternFinder.MIN_SKIP || tryHarder) {
              iSkip = FinderPatternFinder.MIN_SKIP;
            }
            let done = false;
            const stateCount = new Int32Array(5);
            for (let i = iSkip - 1; i < maxI && !done; i += iSkip) {
              stateCount[0] = 0;
              stateCount[1] = 0;
              stateCount[2] = 0;
              stateCount[3] = 0;
              stateCount[4] = 0;
              let currentState = 0;
              for (let j = 0; j < maxJ; j++) {
                if (image.get(j, i)) {
                  if ((currentState & 1) === 1) {
                    currentState++;
                  }
                  stateCount[currentState]++;
                } else {
                  if ((currentState & 1) === 0) {
                    if (currentState === 4) {
                      if (FinderPatternFinder.foundPatternCross(stateCount)) {
                        const confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                        if (confirmed === true) {
                          iSkip = 2;
                          if (this.hasSkipped === true) {
                            done = this.haveMultiplyConfirmedCenters();
                          } else {
                            const rowSkip = this.findRowSkip();
                            if (rowSkip > stateCount[2]) {
                              i += rowSkip - stateCount[2] - iSkip;
                              j = maxJ - 1;
                            }
                          }
                        } else {
                          stateCount[0] = stateCount[2];
                          stateCount[1] = stateCount[3];
                          stateCount[2] = stateCount[4];
                          stateCount[3] = 1;
                          stateCount[4] = 0;
                          currentState = 3;
                          continue;
                        }
                        currentState = 0;
                        stateCount[0] = 0;
                        stateCount[1] = 0;
                        stateCount[2] = 0;
                        stateCount[3] = 0;
                        stateCount[4] = 0;
                      } else {
                        stateCount[0] = stateCount[2];
                        stateCount[1] = stateCount[3];
                        stateCount[2] = stateCount[4];
                        stateCount[3] = 1;
                        stateCount[4] = 0;
                        currentState = 3;
                      }
                    } else {
                      stateCount[++currentState]++;
                    }
                  } else {
                    stateCount[currentState]++;
                  }
                }
              }
              if (FinderPatternFinder.foundPatternCross(stateCount)) {
                const confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
                if (confirmed === true) {
                  iSkip = stateCount[0];
                  if (this.hasSkipped) {
                    done = this.haveMultiplyConfirmedCenters();
                  }
                }
              }
            }
            const patternInfo = this.selectBestPatterns();
            ResultPoint.orderBestPatterns(patternInfo);
            return new FinderPatternInfo(patternInfo);
          }
          static centerFromEnd(stateCount, end) {
            return end - stateCount[4] - stateCount[3] - stateCount[2] / 2;
          }
          static foundPatternCross(stateCount) {
            let totalModuleSize = 0;
            for (let i = 0; i < 5; i++) {
              const count = stateCount[i];
              if (count === 0) {
                return false;
              }
              totalModuleSize += count;
            }
            if (totalModuleSize < 7) {
              return false;
            }
            const moduleSize = totalModuleSize / 7;
            const maxVariance = moduleSize / 2;
            return Math.abs(moduleSize - stateCount[0]) < maxVariance && Math.abs(moduleSize - stateCount[1]) < maxVariance && Math.abs(3 * moduleSize - stateCount[2]) < 3 * maxVariance && Math.abs(moduleSize - stateCount[3]) < maxVariance && Math.abs(moduleSize - stateCount[4]) < maxVariance;
          }
          getCrossCheckStateCount() {
            const crossCheckStateCount = this.crossCheckStateCount;
            crossCheckStateCount[0] = 0;
            crossCheckStateCount[1] = 0;
            crossCheckStateCount[2] = 0;
            crossCheckStateCount[3] = 0;
            crossCheckStateCount[4] = 0;
            return crossCheckStateCount;
          }
          crossCheckDiagonal(startI, centerJ, maxCount, originalStateCountTotal) {
            const stateCount = this.getCrossCheckStateCount();
            let i = 0;
            const image = this.image;
            while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
              stateCount[2]++;
              i++;
            }
            if (startI < i || centerJ < i) {
              return false;
            }
            while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i++;
            }
            if (startI < i || centerJ < i || stateCount[1] > maxCount) {
              return false;
            }
            while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              i++;
            }
            if (stateCount[0] > maxCount) {
              return false;
            }
            const maxI = image.getHeight();
            const maxJ = image.getWidth();
            i = 1;
            while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
              stateCount[2]++;
              i++;
            }
            if (startI + i >= maxI || centerJ + i >= maxJ) {
              return false;
            }
            while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) && stateCount[3] < maxCount) {
              stateCount[3]++;
              i++;
            }
            if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
              return false;
            }
            while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) && stateCount[4] < maxCount) {
              stateCount[4]++;
              i++;
            }
            if (stateCount[4] >= maxCount) {
              return false;
            }
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
            return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal && FinderPatternFinder.foundPatternCross(stateCount);
          }
          crossCheckVertical(startI, centerJ, maxCount, originalStateCountTotal) {
            const image = this.image;
            const maxI = image.getHeight();
            const stateCount = this.getCrossCheckStateCount();
            let i = startI;
            while (i >= 0 && image.get(centerJ, i)) {
              stateCount[2]++;
              i--;
            }
            if (i < 0) {
              return NaN;
            }
            while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i--;
            }
            if (i < 0 || stateCount[1] > maxCount) {
              return NaN;
            }
            while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              i--;
            }
            if (stateCount[0] > maxCount) {
              return NaN;
            }
            i = startI + 1;
            while (i < maxI && image.get(centerJ, i)) {
              stateCount[2]++;
              i++;
            }
            if (i === maxI) {
              return NaN;
            }
            while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
              stateCount[3]++;
              i++;
            }
            if (i === maxI || stateCount[3] >= maxCount) {
              return NaN;
            }
            while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
              stateCount[4]++;
              i++;
            }
            if (stateCount[4] >= maxCount) {
              return NaN;
            }
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
            if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
              return NaN;
            }
            return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, i) : NaN;
          }
          crossCheckHorizontal(startJ, centerI, maxCount, originalStateCountTotal) {
            const image = this.image;
            const maxJ = image.getWidth();
            const stateCount = this.getCrossCheckStateCount();
            let j = startJ;
            while (j >= 0 && image.get(j, centerI)) {
              stateCount[2]++;
              j--;
            }
            if (j < 0) {
              return NaN;
            }
            while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              j--;
            }
            if (j < 0 || stateCount[1] > maxCount) {
              return NaN;
            }
            while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              j--;
            }
            if (stateCount[0] > maxCount) {
              return NaN;
            }
            j = startJ + 1;
            while (j < maxJ && image.get(j, centerI)) {
              stateCount[2]++;
              j++;
            }
            if (j === maxJ) {
              return NaN;
            }
            while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
              stateCount[3]++;
              j++;
            }
            if (j === maxJ || stateCount[3] >= maxCount) {
              return NaN;
            }
            while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
              stateCount[4]++;
              j++;
            }
            if (stateCount[4] >= maxCount) {
              return NaN;
            }
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
            if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
              return NaN;
            }
            return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, j) : NaN;
          }
          handlePossibleCenter(stateCount, i, j, pureBarcode) {
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
            let centerJ = FinderPatternFinder.centerFromEnd(stateCount, j);
            let centerI = this.crossCheckVertical(i, Math.floor(centerJ), stateCount[2], stateCountTotal);
            if (!isNaN(centerI)) {
              centerJ = this.crossCheckHorizontal(Math.floor(centerJ), Math.floor(centerI), stateCount[2], stateCountTotal);
              if (!isNaN(centerJ) && (!pureBarcode || this.crossCheckDiagonal(Math.floor(centerI), Math.floor(centerJ), stateCount[2], stateCountTotal))) {
                const estimatedModuleSize = stateCountTotal / 7;
                let found = false;
                const possibleCenters = this.possibleCenters;
                for (let index = 0, length = possibleCenters.length; index < length; index++) {
                  const center = possibleCenters[index];
                  if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                    possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  const point = new FinderPattern$1(centerJ, centerI, estimatedModuleSize);
                  possibleCenters.push(point);
                  if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
                    this.resultPointCallback.foundPossibleResultPoint(point);
                  }
                }
                return true;
              }
            }
            return false;
          }
          findRowSkip() {
            const max = this.possibleCenters.length;
            if (max <= 1) {
              return 0;
            }
            let firstConfirmedCenter = null;
            for (const center of this.possibleCenters) {
              if (center.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                if (firstConfirmedCenter == null) {
                  firstConfirmedCenter = center;
                } else {
                  this.hasSkipped = true;
                  return Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) - Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2);
                }
              }
            }
            return 0;
          }
          haveMultiplyConfirmedCenters() {
            let confirmedCount = 0;
            let totalModuleSize = 0;
            const max = this.possibleCenters.length;
            for (const pattern of this.possibleCenters) {
              if (pattern.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                confirmedCount++;
                totalModuleSize += pattern.getEstimatedModuleSize();
              }
            }
            if (confirmedCount < 3) {
              return false;
            }
            const average = totalModuleSize / max;
            let totalDeviation = 0;
            for (const pattern of this.possibleCenters) {
              totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
            }
            return totalDeviation <= 0.05 * totalModuleSize;
          }
          selectBestPatterns() {
            const startSize = this.possibleCenters.length;
            if (startSize < 3) {
              throw new NotFoundException();
            }
            const possibleCenters = this.possibleCenters;
            let average;
            if (startSize > 3) {
              let totalModuleSize = 0;
              let square = 0;
              for (const center of this.possibleCenters) {
                const size = center.getEstimatedModuleSize();
                totalModuleSize += size;
                square += size * size;
              }
              average = totalModuleSize / startSize;
              let stdDev = Math.sqrt(square / startSize - average * average);
              possibleCenters.sort((center1, center2) => {
                const dA = Math.abs(center2.getEstimatedModuleSize() - average);
                const dB = Math.abs(center1.getEstimatedModuleSize() - average);
                return dA < dB ? -1 : dA > dB ? 1 : 0;
              });
              const limit = Math.max(0.2 * average, stdDev);
              for (let i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
                const pattern = possibleCenters[i];
                if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
                  possibleCenters.splice(i, 1);
                  i--;
                }
              }
            }
            if (possibleCenters.length > 3) {
              let totalModuleSize = 0;
              for (const possibleCenter of possibleCenters) {
                totalModuleSize += possibleCenter.getEstimatedModuleSize();
              }
              average = totalModuleSize / possibleCenters.length;
              possibleCenters.sort((center1, center2) => {
                if (center2.getCount() === center1.getCount()) {
                  const dA = Math.abs(center2.getEstimatedModuleSize() - average);
                  const dB = Math.abs(center1.getEstimatedModuleSize() - average);
                  return dA < dB ? 1 : dA > dB ? -1 : 0;
                } else {
                  return center2.getCount() - center1.getCount();
                }
              });
              possibleCenters.splice(3);
            }
            return [
              possibleCenters[0],
              possibleCenters[1],
              possibleCenters[2]
            ];
          }
        }
        FinderPatternFinder.CENTER_QUORUM = 2;
        FinderPatternFinder.MIN_SKIP = 3;
        FinderPatternFinder.MAX_MODULES = 57;
        class Detector$2 {
          constructor(image) {
            this.image = image;
          }
          getImage() {
            return this.image;
          }
          getResultPointCallback() {
            return this.resultPointCallback;
          }
          detect(hints) {
            this.resultPointCallback = hints === null || hints === void 0 ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
            const finder = new FinderPatternFinder(this.image, this.resultPointCallback);
            const info = finder.find(hints);
            return this.processFinderPatternInfo(info);
          }
          processFinderPatternInfo(info) {
            const topLeft = info.getTopLeft();
            const topRight = info.getTopRight();
            const bottomLeft = info.getBottomLeft();
            const moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
            if (moduleSize < 1) {
              throw new NotFoundException("No pattern found in proccess finder.");
            }
            const dimension = Detector$2.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
            const provisionalVersion = Version$1.getProvisionalVersionForDimension(dimension);
            const modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
            let alignmentPattern = null;
            if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
              const bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
              const bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
              const correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
              const estAlignmentX = Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()));
              const estAlignmentY = Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()));
              for (let i = 4; i <= 16; i <<= 1) {
                try {
                  alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                  break;
                } catch (re) {
                  if (!(re instanceof NotFoundException)) {
                    throw re;
                  }
                }
              }
            }
            const transform = Detector$2.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
            const bits = Detector$2.sampleGrid(this.image, transform, dimension);
            let points;
            if (alignmentPattern === null) {
              points = [bottomLeft, topLeft, topRight];
            } else {
              points = [bottomLeft, topLeft, topRight, alignmentPattern];
            }
            return new DetectorResult(bits, points);
          }
          static createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
            const dimMinusThree = dimension - 3.5;
            let bottomRightX;
            let bottomRightY;
            let sourceBottomRightX;
            let sourceBottomRightY;
            if (alignmentPattern !== null) {
              bottomRightX = alignmentPattern.getX();
              bottomRightY = alignmentPattern.getY();
              sourceBottomRightX = dimMinusThree - 3;
              sourceBottomRightY = sourceBottomRightX;
            } else {
              bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
              bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
              sourceBottomRightX = dimMinusThree;
              sourceBottomRightY = dimMinusThree;
            }
            return PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
          }
          static sampleGrid(image, transform, dimension) {
            const sampler = GridSamplerInstance.getInstance();
            return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
          }
          static computeDimension(topLeft, topRight, bottomLeft, moduleSize) {
            const tltrCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, topRight) / moduleSize);
            const tlblCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, bottomLeft) / moduleSize);
            let dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
            switch (dimension & 3) {
              case 0:
                dimension++;
                break;
              case 2:
                dimension--;
                break;
              case 3:
                throw new NotFoundException("Dimensions could be not found.");
            }
            return dimension;
          }
          calculateModuleSize(topLeft, topRight, bottomLeft) {
            return (this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2;
          }
          calculateModuleSizeOneWay(pattern, otherPattern) {
            const moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern.getX()), Math.floor(pattern.getY()), Math.floor(otherPattern.getX()), Math.floor(otherPattern.getY()));
            const moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.getX()), Math.floor(otherPattern.getY()), Math.floor(pattern.getX()), Math.floor(pattern.getY()));
            if (isNaN(moduleSizeEst1)) {
              return moduleSizeEst2 / 7;
            }
            if (isNaN(moduleSizeEst2)) {
              return moduleSizeEst1 / 7;
            }
            return (moduleSizeEst1 + moduleSizeEst2) / 14;
          }
          sizeOfBlackWhiteBlackRunBothWays(fromX, fromY, toX, toY) {
            let result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
            let scale = 1;
            let otherToX = fromX - (toX - fromX);
            if (otherToX < 0) {
              scale = fromX / (fromX - otherToX);
              otherToX = 0;
            } else if (otherToX >= this.image.getWidth()) {
              scale = (this.image.getWidth() - 1 - fromX) / (otherToX - fromX);
              otherToX = this.image.getWidth() - 1;
            }
            let otherToY = Math.floor(fromY - (toY - fromY) * scale);
            scale = 1;
            if (otherToY < 0) {
              scale = fromY / (fromY - otherToY);
              otherToY = 0;
            } else if (otherToY >= this.image.getHeight()) {
              scale = (this.image.getHeight() - 1 - fromY) / (otherToY - fromY);
              otherToY = this.image.getHeight() - 1;
            }
            otherToX = Math.floor(fromX + (otherToX - fromX) * scale);
            result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
            return result - 1;
          }
          sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY) {
            const steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
            if (steep) {
              let temp = fromX;
              fromX = fromY;
              fromY = temp;
              temp = toX;
              toX = toY;
              toY = temp;
            }
            const dx = Math.abs(toX - fromX);
            const dy = Math.abs(toY - fromY);
            let error = -dx / 2;
            const xstep = fromX < toX ? 1 : -1;
            const ystep = fromY < toY ? 1 : -1;
            let state = 0;
            const xLimit = toX + xstep;
            for (let x = fromX, y = fromY; x !== xLimit; x += xstep) {
              const realX = steep ? y : x;
              const realY = steep ? x : y;
              if (state === 1 === this.image.get(realX, realY)) {
                if (state === 2) {
                  return MathUtils.distance(x, y, fromX, fromY);
                }
                state++;
              }
              error += dy;
              if (error > 0) {
                if (y === toY) {
                  break;
                }
                y += ystep;
                error -= dx;
              }
            }
            if (state === 2) {
              return MathUtils.distance(toX + xstep, toY, fromX, fromY);
            }
            return NaN;
          }
          findAlignmentInRegion(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
            const allowance = Math.floor(allowanceFactor * overallEstModuleSize);
            const alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
            const alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
            if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
              throw new NotFoundException("Alignment top exceeds estimated module size.");
            }
            const alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
            const alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
            if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
              throw new NotFoundException("Alignment bottom exceeds estimated module size.");
            }
            const alignmentFinder = new AlignmentPatternFinder(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
            return alignmentFinder.find();
          }
        }
        class QRCodeReader {
          constructor() {
            this.decoder = new Decoder$2();
          }
          getDecoder() {
            return this.decoder;
          }
          decode(image, hints) {
            let decoderResult;
            let points;
            if (hints !== void 0 && hints !== null && hints.get(DecodeHintType$1.PURE_BARCODE) !== void 0) {
              const bits = QRCodeReader.extractPureBits(image.getBlackMatrix());
              decoderResult = this.decoder.decodeBitMatrix(bits, hints);
              points = QRCodeReader.NO_POINTS;
            } else {
              const detectorResult = new Detector$2(image.getBlackMatrix()).detect(hints);
              decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
              points = detectorResult.getPoints();
            }
            if (decoderResult.getOther() instanceof QRCodeDecoderMetaData) {
              decoderResult.getOther().applyMirroredCorrection(points);
            }
            const result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat$1.QR_CODE, void 0);
            const byteSegments = decoderResult.getByteSegments();
            if (byteSegments !== null) {
              result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
            }
            const ecLevel = decoderResult.getECLevel();
            if (ecLevel !== null) {
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
            }
            if (decoderResult.hasStructuredAppend()) {
              result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
              result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
            }
            return result;
          }
          reset() {
          }
          static extractPureBits(image) {
            const leftTopBlack = image.getTopLeftOnBit();
            const rightBottomBlack = image.getBottomRightOnBit();
            if (leftTopBlack === null || rightBottomBlack === null) {
              throw new NotFoundException();
            }
            const moduleSize = this.moduleSize(leftTopBlack, image);
            let top = leftTopBlack[1];
            let bottom = rightBottomBlack[1];
            let left = leftTopBlack[0];
            let right = rightBottomBlack[0];
            if (left >= right || top >= bottom) {
              throw new NotFoundException();
            }
            if (bottom - top !== right - left) {
              right = left + (bottom - top);
              if (right >= image.getWidth()) {
                throw new NotFoundException();
              }
            }
            const matrixWidth = Math.round((right - left + 1) / moduleSize);
            const matrixHeight = Math.round((bottom - top + 1) / moduleSize);
            if (matrixWidth <= 0 || matrixHeight <= 0) {
              throw new NotFoundException();
            }
            if (matrixHeight !== matrixWidth) {
              throw new NotFoundException();
            }
            const nudge = Math.floor(moduleSize / 2);
            top += nudge;
            left += nudge;
            const nudgedTooFarRight = left + Math.floor((matrixWidth - 1) * moduleSize) - right;
            if (nudgedTooFarRight > 0) {
              if (nudgedTooFarRight > nudge) {
                throw new NotFoundException();
              }
              left -= nudgedTooFarRight;
            }
            const nudgedTooFarDown = top + Math.floor((matrixHeight - 1) * moduleSize) - bottom;
            if (nudgedTooFarDown > 0) {
              if (nudgedTooFarDown > nudge) {
                throw new NotFoundException();
              }
              top -= nudgedTooFarDown;
            }
            const bits = new BitMatrix(matrixWidth, matrixHeight);
            for (let y = 0; y < matrixHeight; y++) {
              const iOffset = top + Math.floor(y * moduleSize);
              for (let x = 0; x < matrixWidth; x++) {
                if (image.get(left + Math.floor(x * moduleSize), iOffset)) {
                  bits.set(x, y);
                }
              }
            }
            return bits;
          }
          static moduleSize(leftTopBlack, image) {
            const height = image.getHeight();
            const width = image.getWidth();
            let x = leftTopBlack[0];
            let y = leftTopBlack[1];
            let inBlack = true;
            let transitions = 0;
            while (x < width && y < height) {
              if (inBlack !== image.get(x, y)) {
                if (++transitions === 5) {
                  break;
                }
                inBlack = !inBlack;
              }
              x++;
              y++;
            }
            if (x === width || y === height) {
              throw new NotFoundException();
            }
            return (x - leftTopBlack[0]) / 7;
          }
        }
        QRCodeReader.NO_POINTS = new Array();
        class PDF417Common {
          PDF417Common() {
          }
          static getBitCountSum(moduleBitCount) {
            return MathUtils.sum(moduleBitCount);
          }
          static toIntArray(list) {
            if (list == null || !list.length) {
              return PDF417Common.EMPTY_INT_ARRAY;
            }
            const result = new Int32Array(list.length);
            let i = 0;
            for (const integer of list) {
              result[i++] = integer;
            }
            return result;
          }
          static getCodeword(symbol) {
            const i = Arrays.binarySearch(PDF417Common.SYMBOL_TABLE, symbol & 262143);
            if (i < 0) {
              return -1;
            }
            return (PDF417Common.CODEWORD_TABLE[i] - 1) % PDF417Common.NUMBER_OF_CODEWORDS;
          }
        }
        PDF417Common.NUMBER_OF_CODEWORDS = 929;
        PDF417Common.MAX_CODEWORDS_IN_BARCODE = PDF417Common.NUMBER_OF_CODEWORDS - 1;
        PDF417Common.MIN_ROWS_IN_BARCODE = 3;
        PDF417Common.MAX_ROWS_IN_BARCODE = 90;
        PDF417Common.MODULES_IN_CODEWORD = 17;
        PDF417Common.MODULES_IN_STOP_PATTERN = 18;
        PDF417Common.BARS_IN_MODULE = 8;
        PDF417Common.EMPTY_INT_ARRAY = new Int32Array([]);
        PDF417Common.SYMBOL_TABLE = Int32Array.from([
          66142,
          66170,
          66206,
          66236,
          66290,
          66292,
          66350,
          66382,
          66396,
          66454,
          66470,
          66476,
          66594,
          66600,
          66614,
          66626,
          66628,
          66632,
          66640,
          66654,
          66662,
          66668,
          66682,
          66690,
          66718,
          66720,
          66748,
          66758,
          66776,
          66798,
          66802,
          66804,
          66820,
          66824,
          66832,
          66846,
          66848,
          66876,
          66880,
          66936,
          66950,
          66956,
          66968,
          66992,
          67006,
          67022,
          67036,
          67042,
          67044,
          67048,
          67062,
          67118,
          67150,
          67164,
          67214,
          67228,
          67256,
          67294,
          67322,
          67350,
          67366,
          67372,
          67398,
          67404,
          67416,
          67438,
          67474,
          67476,
          67490,
          67492,
          67496,
          67510,
          67618,
          67624,
          67650,
          67656,
          67664,
          67678,
          67686,
          67692,
          67706,
          67714,
          67716,
          67728,
          67742,
          67744,
          67772,
          67782,
          67788,
          67800,
          67822,
          67826,
          67828,
          67842,
          67848,
          67870,
          67872,
          67900,
          67904,
          67960,
          67974,
          67992,
          68016,
          68030,
          68046,
          68060,
          68066,
          68068,
          68072,
          68086,
          68104,
          68112,
          68126,
          68128,
          68156,
          68160,
          68216,
          68336,
          68358,
          68364,
          68376,
          68400,
          68414,
          68448,
          68476,
          68494,
          68508,
          68536,
          68546,
          68548,
          68552,
          68560,
          68574,
          68582,
          68588,
          68654,
          68686,
          68700,
          68706,
          68708,
          68712,
          68726,
          68750,
          68764,
          68792,
          68802,
          68804,
          68808,
          68816,
          68830,
          68838,
          68844,
          68858,
          68878,
          68892,
          68920,
          68976,
          68990,
          68994,
          68996,
          69e3,
          69008,
          69022,
          69024,
          69052,
          69062,
          69068,
          69080,
          69102,
          69106,
          69108,
          69142,
          69158,
          69164,
          69190,
          69208,
          69230,
          69254,
          69260,
          69272,
          69296,
          69310,
          69326,
          69340,
          69386,
          69394,
          69396,
          69410,
          69416,
          69430,
          69442,
          69444,
          69448,
          69456,
          69470,
          69478,
          69484,
          69554,
          69556,
          69666,
          69672,
          69698,
          69704,
          69712,
          69726,
          69754,
          69762,
          69764,
          69776,
          69790,
          69792,
          69820,
          69830,
          69836,
          69848,
          69870,
          69874,
          69876,
          69890,
          69918,
          69920,
          69948,
          69952,
          70008,
          70022,
          70040,
          70064,
          70078,
          70094,
          70108,
          70114,
          70116,
          70120,
          70134,
          70152,
          70174,
          70176,
          70264,
          70384,
          70412,
          70448,
          70462,
          70496,
          70524,
          70542,
          70556,
          70584,
          70594,
          70600,
          70608,
          70622,
          70630,
          70636,
          70664,
          70672,
          70686,
          70688,
          70716,
          70720,
          70776,
          70896,
          71136,
          71180,
          71192,
          71216,
          71230,
          71264,
          71292,
          71360,
          71416,
          71452,
          71480,
          71536,
          71550,
          71554,
          71556,
          71560,
          71568,
          71582,
          71584,
          71612,
          71622,
          71628,
          71640,
          71662,
          71726,
          71732,
          71758,
          71772,
          71778,
          71780,
          71784,
          71798,
          71822,
          71836,
          71864,
          71874,
          71880,
          71888,
          71902,
          71910,
          71916,
          71930,
          71950,
          71964,
          71992,
          72048,
          72062,
          72066,
          72068,
          72080,
          72094,
          72096,
          72124,
          72134,
          72140,
          72152,
          72174,
          72178,
          72180,
          72206,
          72220,
          72248,
          72304,
          72318,
          72416,
          72444,
          72456,
          72464,
          72478,
          72480,
          72508,
          72512,
          72568,
          72588,
          72600,
          72624,
          72638,
          72654,
          72668,
          72674,
          72676,
          72680,
          72694,
          72726,
          72742,
          72748,
          72774,
          72780,
          72792,
          72814,
          72838,
          72856,
          72880,
          72894,
          72910,
          72924,
          72930,
          72932,
          72936,
          72950,
          72966,
          72972,
          72984,
          73008,
          73022,
          73056,
          73084,
          73102,
          73116,
          73144,
          73156,
          73160,
          73168,
          73182,
          73190,
          73196,
          73210,
          73226,
          73234,
          73236,
          73250,
          73252,
          73256,
          73270,
          73282,
          73284,
          73296,
          73310,
          73318,
          73324,
          73346,
          73348,
          73352,
          73360,
          73374,
          73376,
          73404,
          73414,
          73420,
          73432,
          73454,
          73498,
          73518,
          73522,
          73524,
          73550,
          73564,
          73570,
          73572,
          73576,
          73590,
          73800,
          73822,
          73858,
          73860,
          73872,
          73886,
          73888,
          73916,
          73944,
          73970,
          73972,
          73992,
          74014,
          74016,
          74044,
          74048,
          74104,
          74118,
          74136,
          74160,
          74174,
          74210,
          74212,
          74216,
          74230,
          74244,
          74256,
          74270,
          74272,
          74360,
          74480,
          74502,
          74508,
          74544,
          74558,
          74592,
          74620,
          74638,
          74652,
          74680,
          74690,
          74696,
          74704,
          74726,
          74732,
          74782,
          74784,
          74812,
          74992,
          75232,
          75288,
          75326,
          75360,
          75388,
          75456,
          75512,
          75576,
          75632,
          75646,
          75650,
          75652,
          75664,
          75678,
          75680,
          75708,
          75718,
          75724,
          75736,
          75758,
          75808,
          75836,
          75840,
          75896,
          76016,
          76256,
          76736,
          76824,
          76848,
          76862,
          76896,
          76924,
          76992,
          77048,
          77296,
          77340,
          77368,
          77424,
          77438,
          77536,
          77564,
          77572,
          77576,
          77584,
          77600,
          77628,
          77632,
          77688,
          77702,
          77708,
          77720,
          77744,
          77758,
          77774,
          77788,
          77870,
          77902,
          77916,
          77922,
          77928,
          77966,
          77980,
          78008,
          78018,
          78024,
          78032,
          78046,
          78060,
          78074,
          78094,
          78136,
          78192,
          78206,
          78210,
          78212,
          78224,
          78238,
          78240,
          78268,
          78278,
          78284,
          78296,
          78322,
          78324,
          78350,
          78364,
          78448,
          78462,
          78560,
          78588,
          78600,
          78622,
          78624,
          78652,
          78656,
          78712,
          78726,
          78744,
          78768,
          78782,
          78798,
          78812,
          78818,
          78820,
          78824,
          78838,
          78862,
          78876,
          78904,
          78960,
          78974,
          79072,
          79100,
          79296,
          79352,
          79368,
          79376,
          79390,
          79392,
          79420,
          79424,
          79480,
          79600,
          79628,
          79640,
          79664,
          79678,
          79712,
          79740,
          79772,
          79800,
          79810,
          79812,
          79816,
          79824,
          79838,
          79846,
          79852,
          79894,
          79910,
          79916,
          79942,
          79948,
          79960,
          79982,
          79988,
          80006,
          80024,
          80048,
          80062,
          80078,
          80092,
          80098,
          80100,
          80104,
          80134,
          80140,
          80176,
          80190,
          80224,
          80252,
          80270,
          80284,
          80312,
          80328,
          80336,
          80350,
          80358,
          80364,
          80378,
          80390,
          80396,
          80408,
          80432,
          80446,
          80480,
          80508,
          80576,
          80632,
          80654,
          80668,
          80696,
          80752,
          80766,
          80776,
          80784,
          80798,
          80800,
          80828,
          80844,
          80856,
          80878,
          80882,
          80884,
          80914,
          80916,
          80930,
          80932,
          80936,
          80950,
          80962,
          80968,
          80976,
          80990,
          80998,
          81004,
          81026,
          81028,
          81040,
          81054,
          81056,
          81084,
          81094,
          81100,
          81112,
          81134,
          81154,
          81156,
          81160,
          81168,
          81182,
          81184,
          81212,
          81216,
          81272,
          81286,
          81292,
          81304,
          81328,
          81342,
          81358,
          81372,
          81380,
          81384,
          81398,
          81434,
          81454,
          81458,
          81460,
          81486,
          81500,
          81506,
          81508,
          81512,
          81526,
          81550,
          81564,
          81592,
          81602,
          81604,
          81608,
          81616,
          81630,
          81638,
          81644,
          81702,
          81708,
          81722,
          81734,
          81740,
          81752,
          81774,
          81778,
          81780,
          82050,
          82078,
          82080,
          82108,
          82180,
          82184,
          82192,
          82206,
          82208,
          82236,
          82240,
          82296,
          82316,
          82328,
          82352,
          82366,
          82402,
          82404,
          82408,
          82440,
          82448,
          82462,
          82464,
          82492,
          82496,
          82552,
          82672,
          82694,
          82700,
          82712,
          82736,
          82750,
          82784,
          82812,
          82830,
          82882,
          82884,
          82888,
          82896,
          82918,
          82924,
          82952,
          82960,
          82974,
          82976,
          83004,
          83008,
          83064,
          83184,
          83424,
          83468,
          83480,
          83504,
          83518,
          83552,
          83580,
          83648,
          83704,
          83740,
          83768,
          83824,
          83838,
          83842,
          83844,
          83848,
          83856,
          83872,
          83900,
          83910,
          83916,
          83928,
          83950,
          83984,
          84e3,
          84028,
          84032,
          84088,
          84208,
          84448,
          84928,
          85040,
          85054,
          85088,
          85116,
          85184,
          85240,
          85488,
          85560,
          85616,
          85630,
          85728,
          85756,
          85764,
          85768,
          85776,
          85790,
          85792,
          85820,
          85824,
          85880,
          85894,
          85900,
          85912,
          85936,
          85966,
          85980,
          86048,
          86080,
          86136,
          86256,
          86496,
          86976,
          88160,
          88188,
          88256,
          88312,
          88560,
          89056,
          89200,
          89214,
          89312,
          89340,
          89536,
          89592,
          89608,
          89616,
          89632,
          89664,
          89720,
          89840,
          89868,
          89880,
          89904,
          89952,
          89980,
          89998,
          90012,
          90040,
          90190,
          90204,
          90254,
          90268,
          90296,
          90306,
          90308,
          90312,
          90334,
          90382,
          90396,
          90424,
          90480,
          90494,
          90500,
          90504,
          90512,
          90526,
          90528,
          90556,
          90566,
          90572,
          90584,
          90610,
          90612,
          90638,
          90652,
          90680,
          90736,
          90750,
          90848,
          90876,
          90884,
          90888,
          90896,
          90910,
          90912,
          90940,
          90944,
          91e3,
          91014,
          91020,
          91032,
          91056,
          91070,
          91086,
          91100,
          91106,
          91108,
          91112,
          91126,
          91150,
          91164,
          91192,
          91248,
          91262,
          91360,
          91388,
          91584,
          91640,
          91664,
          91678,
          91680,
          91708,
          91712,
          91768,
          91888,
          91928,
          91952,
          91966,
          92e3,
          92028,
          92046,
          92060,
          92088,
          92098,
          92100,
          92104,
          92112,
          92126,
          92134,
          92140,
          92188,
          92216,
          92272,
          92384,
          92412,
          92608,
          92664,
          93168,
          93200,
          93214,
          93216,
          93244,
          93248,
          93304,
          93424,
          93664,
          93720,
          93744,
          93758,
          93792,
          93820,
          93888,
          93944,
          93980,
          94008,
          94064,
          94078,
          94084,
          94088,
          94096,
          94110,
          94112,
          94140,
          94150,
          94156,
          94168,
          94246,
          94252,
          94278,
          94284,
          94296,
          94318,
          94342,
          94348,
          94360,
          94384,
          94398,
          94414,
          94428,
          94440,
          94470,
          94476,
          94488,
          94512,
          94526,
          94560,
          94588,
          94606,
          94620,
          94648,
          94658,
          94660,
          94664,
          94672,
          94686,
          94694,
          94700,
          94714,
          94726,
          94732,
          94744,
          94768,
          94782,
          94816,
          94844,
          94912,
          94968,
          94990,
          95004,
          95032,
          95088,
          95102,
          95112,
          95120,
          95134,
          95136,
          95164,
          95180,
          95192,
          95214,
          95218,
          95220,
          95244,
          95256,
          95280,
          95294,
          95328,
          95356,
          95424,
          95480,
          95728,
          95758,
          95772,
          95800,
          95856,
          95870,
          95968,
          95996,
          96008,
          96016,
          96030,
          96032,
          96060,
          96064,
          96120,
          96152,
          96176,
          96190,
          96220,
          96226,
          96228,
          96232,
          96290,
          96292,
          96296,
          96310,
          96322,
          96324,
          96328,
          96336,
          96350,
          96358,
          96364,
          96386,
          96388,
          96392,
          96400,
          96414,
          96416,
          96444,
          96454,
          96460,
          96472,
          96494,
          96498,
          96500,
          96514,
          96516,
          96520,
          96528,
          96542,
          96544,
          96572,
          96576,
          96632,
          96646,
          96652,
          96664,
          96688,
          96702,
          96718,
          96732,
          96738,
          96740,
          96744,
          96758,
          96772,
          96776,
          96784,
          96798,
          96800,
          96828,
          96832,
          96888,
          97008,
          97030,
          97036,
          97048,
          97072,
          97086,
          97120,
          97148,
          97166,
          97180,
          97208,
          97220,
          97224,
          97232,
          97246,
          97254,
          97260,
          97326,
          97330,
          97332,
          97358,
          97372,
          97378,
          97380,
          97384,
          97398,
          97422,
          97436,
          97464,
          97474,
          97476,
          97480,
          97488,
          97502,
          97510,
          97516,
          97550,
          97564,
          97592,
          97648,
          97666,
          97668,
          97672,
          97680,
          97694,
          97696,
          97724,
          97734,
          97740,
          97752,
          97774,
          97830,
          97836,
          97850,
          97862,
          97868,
          97880,
          97902,
          97906,
          97908,
          97926,
          97932,
          97944,
          97968,
          97998,
          98012,
          98018,
          98020,
          98024,
          98038,
          98618,
          98674,
          98676,
          98838,
          98854,
          98874,
          98892,
          98904,
          98926,
          98930,
          98932,
          98968,
          99006,
          99042,
          99044,
          99048,
          99062,
          99166,
          99194,
          99246,
          99286,
          99350,
          99366,
          99372,
          99386,
          99398,
          99416,
          99438,
          99442,
          99444,
          99462,
          99504,
          99518,
          99534,
          99548,
          99554,
          99556,
          99560,
          99574,
          99590,
          99596,
          99608,
          99632,
          99646,
          99680,
          99708,
          99726,
          99740,
          99768,
          99778,
          99780,
          99784,
          99792,
          99806,
          99814,
          99820,
          99834,
          99858,
          99860,
          99874,
          99880,
          99894,
          99906,
          99920,
          99934,
          99962,
          99970,
          99972,
          99976,
          99984,
          99998,
          1e5,
          100028,
          100038,
          100044,
          100056,
          100078,
          100082,
          100084,
          100142,
          100174,
          100188,
          100246,
          100262,
          100268,
          100306,
          100308,
          100390,
          100396,
          100410,
          100422,
          100428,
          100440,
          100462,
          100466,
          100468,
          100486,
          100504,
          100528,
          100542,
          100558,
          100572,
          100578,
          100580,
          100584,
          100598,
          100620,
          100656,
          100670,
          100704,
          100732,
          100750,
          100792,
          100802,
          100808,
          100816,
          100830,
          100838,
          100844,
          100858,
          100888,
          100912,
          100926,
          100960,
          100988,
          101056,
          101112,
          101148,
          101176,
          101232,
          101246,
          101250,
          101252,
          101256,
          101264,
          101278,
          101280,
          101308,
          101318,
          101324,
          101336,
          101358,
          101362,
          101364,
          101410,
          101412,
          101416,
          101430,
          101442,
          101448,
          101456,
          101470,
          101478,
          101498,
          101506,
          101508,
          101520,
          101534,
          101536,
          101564,
          101580,
          101618,
          101620,
          101636,
          101640,
          101648,
          101662,
          101664,
          101692,
          101696,
          101752,
          101766,
          101784,
          101838,
          101858,
          101860,
          101864,
          101934,
          101938,
          101940,
          101966,
          101980,
          101986,
          101988,
          101992,
          102030,
          102044,
          102072,
          102082,
          102084,
          102088,
          102096,
          102138,
          102166,
          102182,
          102188,
          102214,
          102220,
          102232,
          102254,
          102282,
          102290,
          102292,
          102306,
          102308,
          102312,
          102326,
          102444,
          102458,
          102470,
          102476,
          102488,
          102514,
          102516,
          102534,
          102552,
          102576,
          102590,
          102606,
          102620,
          102626,
          102632,
          102646,
          102662,
          102668,
          102704,
          102718,
          102752,
          102780,
          102798,
          102812,
          102840,
          102850,
          102856,
          102864,
          102878,
          102886,
          102892,
          102906,
          102936,
          102974,
          103008,
          103036,
          103104,
          103160,
          103224,
          103280,
          103294,
          103298,
          103300,
          103312,
          103326,
          103328,
          103356,
          103366,
          103372,
          103384,
          103406,
          103410,
          103412,
          103472,
          103486,
          103520,
          103548,
          103616,
          103672,
          103920,
          103992,
          104048,
          104062,
          104160,
          104188,
          104194,
          104196,
          104200,
          104208,
          104224,
          104252,
          104256,
          104312,
          104326,
          104332,
          104344,
          104368,
          104382,
          104398,
          104412,
          104418,
          104420,
          104424,
          104482,
          104484,
          104514,
          104520,
          104528,
          104542,
          104550,
          104570,
          104578,
          104580,
          104592,
          104606,
          104608,
          104636,
          104652,
          104690,
          104692,
          104706,
          104712,
          104734,
          104736,
          104764,
          104768,
          104824,
          104838,
          104856,
          104910,
          104930,
          104932,
          104936,
          104968,
          104976,
          104990,
          104992,
          105020,
          105024,
          105080,
          105200,
          105240,
          105278,
          105312,
          105372,
          105410,
          105412,
          105416,
          105424,
          105446,
          105518,
          105524,
          105550,
          105564,
          105570,
          105572,
          105576,
          105614,
          105628,
          105656,
          105666,
          105672,
          105680,
          105702,
          105722,
          105742,
          105756,
          105784,
          105840,
          105854,
          105858,
          105860,
          105864,
          105872,
          105888,
          105932,
          105970,
          105972,
          106006,
          106022,
          106028,
          106054,
          106060,
          106072,
          106100,
          106118,
          106124,
          106136,
          106160,
          106174,
          106190,
          106210,
          106212,
          106216,
          106250,
          106258,
          106260,
          106274,
          106276,
          106280,
          106306,
          106308,
          106312,
          106320,
          106334,
          106348,
          106394,
          106414,
          106418,
          106420,
          106566,
          106572,
          106610,
          106612,
          106630,
          106636,
          106648,
          106672,
          106686,
          106722,
          106724,
          106728,
          106742,
          106758,
          106764,
          106776,
          106800,
          106814,
          106848,
          106876,
          106894,
          106908,
          106936,
          106946,
          106948,
          106952,
          106960,
          106974,
          106982,
          106988,
          107032,
          107056,
          107070,
          107104,
          107132,
          107200,
          107256,
          107292,
          107320,
          107376,
          107390,
          107394,
          107396,
          107400,
          107408,
          107422,
          107424,
          107452,
          107462,
          107468,
          107480,
          107502,
          107506,
          107508,
          107544,
          107568,
          107582,
          107616,
          107644,
          107712,
          107768,
          108016,
          108060,
          108088,
          108144,
          108158,
          108256,
          108284,
          108290,
          108292,
          108296,
          108304,
          108318,
          108320,
          108348,
          108352,
          108408,
          108422,
          108428,
          108440,
          108464,
          108478,
          108494,
          108508,
          108514,
          108516,
          108520,
          108592,
          108640,
          108668,
          108736,
          108792,
          109040,
          109536,
          109680,
          109694,
          109792,
          109820,
          110016,
          110072,
          110084,
          110088,
          110096,
          110112,
          110140,
          110144,
          110200,
          110320,
          110342,
          110348,
          110360,
          110384,
          110398,
          110432,
          110460,
          110478,
          110492,
          110520,
          110532,
          110536,
          110544,
          110558,
          110658,
          110686,
          110714,
          110722,
          110724,
          110728,
          110736,
          110750,
          110752,
          110780,
          110796,
          110834,
          110836,
          110850,
          110852,
          110856,
          110864,
          110878,
          110880,
          110908,
          110912,
          110968,
          110982,
          111e3,
          111054,
          111074,
          111076,
          111080,
          111108,
          111112,
          111120,
          111134,
          111136,
          111164,
          111168,
          111224,
          111344,
          111372,
          111422,
          111456,
          111516,
          111554,
          111556,
          111560,
          111568,
          111590,
          111632,
          111646,
          111648,
          111676,
          111680,
          111736,
          111856,
          112096,
          112152,
          112224,
          112252,
          112320,
          112440,
          112514,
          112516,
          112520,
          112528,
          112542,
          112544,
          112588,
          112686,
          112718,
          112732,
          112782,
          112796,
          112824,
          112834,
          112836,
          112840,
          112848,
          112870,
          112890,
          112910,
          112924,
          112952,
          113008,
          113022,
          113026,
          113028,
          113032,
          113040,
          113054,
          113056,
          113100,
          113138,
          113140,
          113166,
          113180,
          113208,
          113264,
          113278,
          113376,
          113404,
          113416,
          113424,
          113440,
          113468,
          113472,
          113560,
          113614,
          113634,
          113636,
          113640,
          113686,
          113702,
          113708,
          113734,
          113740,
          113752,
          113778,
          113780,
          113798,
          113804,
          113816,
          113840,
          113854,
          113870,
          113890,
          113892,
          113896,
          113926,
          113932,
          113944,
          113968,
          113982,
          114016,
          114044,
          114076,
          114114,
          114116,
          114120,
          114128,
          114150,
          114170,
          114194,
          114196,
          114210,
          114212,
          114216,
          114242,
          114244,
          114248,
          114256,
          114270,
          114278,
          114306,
          114308,
          114312,
          114320,
          114334,
          114336,
          114364,
          114380,
          114420,
          114458,
          114478,
          114482,
          114484,
          114510,
          114524,
          114530,
          114532,
          114536,
          114842,
          114866,
          114868,
          114970,
          114994,
          114996,
          115042,
          115044,
          115048,
          115062,
          115130,
          115226,
          115250,
          115252,
          115278,
          115292,
          115298,
          115300,
          115304,
          115318,
          115342,
          115394,
          115396,
          115400,
          115408,
          115422,
          115430,
          115436,
          115450,
          115478,
          115494,
          115514,
          115526,
          115532,
          115570,
          115572,
          115738,
          115758,
          115762,
          115764,
          115790,
          115804,
          115810,
          115812,
          115816,
          115830,
          115854,
          115868,
          115896,
          115906,
          115912,
          115920,
          115934,
          115942,
          115948,
          115962,
          115996,
          116024,
          116080,
          116094,
          116098,
          116100,
          116104,
          116112,
          116126,
          116128,
          116156,
          116166,
          116172,
          116184,
          116206,
          116210,
          116212,
          116246,
          116262,
          116268,
          116282,
          116294,
          116300,
          116312,
          116334,
          116338,
          116340,
          116358,
          116364,
          116376,
          116400,
          116414,
          116430,
          116444,
          116450,
          116452,
          116456,
          116498,
          116500,
          116514,
          116520,
          116534,
          116546,
          116548,
          116552,
          116560,
          116574,
          116582,
          116588,
          116602,
          116654,
          116694,
          116714,
          116762,
          116782,
          116786,
          116788,
          116814,
          116828,
          116834,
          116836,
          116840,
          116854,
          116878,
          116892,
          116920,
          116930,
          116936,
          116944,
          116958,
          116966,
          116972,
          116986,
          117006,
          117048,
          117104,
          117118,
          117122,
          117124,
          117136,
          117150,
          117152,
          117180,
          117190,
          117196,
          117208,
          117230,
          117234,
          117236,
          117304,
          117360,
          117374,
          117472,
          117500,
          117506,
          117508,
          117512,
          117520,
          117536,
          117564,
          117568,
          117624,
          117638,
          117644,
          117656,
          117680,
          117694,
          117710,
          117724,
          117730,
          117732,
          117736,
          117750,
          117782,
          117798,
          117804,
          117818,
          117830,
          117848,
          117874,
          117876,
          117894,
          117936,
          117950,
          117966,
          117986,
          117988,
          117992,
          118022,
          118028,
          118040,
          118064,
          118078,
          118112,
          118140,
          118172,
          118210,
          118212,
          118216,
          118224,
          118238,
          118246,
          118266,
          118306,
          118312,
          118338,
          118352,
          118366,
          118374,
          118394,
          118402,
          118404,
          118408,
          118416,
          118430,
          118432,
          118460,
          118476,
          118514,
          118516,
          118574,
          118578,
          118580,
          118606,
          118620,
          118626,
          118628,
          118632,
          118678,
          118694,
          118700,
          118730,
          118738,
          118740,
          118830,
          118834,
          118836,
          118862,
          118876,
          118882,
          118884,
          118888,
          118902,
          118926,
          118940,
          118968,
          118978,
          118980,
          118984,
          118992,
          119006,
          119014,
          119020,
          119034,
          119068,
          119096,
          119152,
          119166,
          119170,
          119172,
          119176,
          119184,
          119198,
          119200,
          119228,
          119238,
          119244,
          119256,
          119278,
          119282,
          119284,
          119324,
          119352,
          119408,
          119422,
          119520,
          119548,
          119554,
          119556,
          119560,
          119568,
          119582,
          119584,
          119612,
          119616,
          119672,
          119686,
          119692,
          119704,
          119728,
          119742,
          119758,
          119772,
          119778,
          119780,
          119784,
          119798,
          119920,
          119934,
          120032,
          120060,
          120256,
          120312,
          120324,
          120328,
          120336,
          120352,
          120384,
          120440,
          120560,
          120582,
          120588,
          120600,
          120624,
          120638,
          120672,
          120700,
          120718,
          120732,
          120760,
          120770,
          120772,
          120776,
          120784,
          120798,
          120806,
          120812,
          120870,
          120876,
          120890,
          120902,
          120908,
          120920,
          120946,
          120948,
          120966,
          120972,
          120984,
          121008,
          121022,
          121038,
          121058,
          121060,
          121064,
          121078,
          121100,
          121112,
          121136,
          121150,
          121184,
          121212,
          121244,
          121282,
          121284,
          121288,
          121296,
          121318,
          121338,
          121356,
          121368,
          121392,
          121406,
          121440,
          121468,
          121536,
          121592,
          121656,
          121730,
          121732,
          121736,
          121744,
          121758,
          121760,
          121804,
          121842,
          121844,
          121890,
          121922,
          121924,
          121928,
          121936,
          121950,
          121958,
          121978,
          121986,
          121988,
          121992,
          122e3,
          122014,
          122016,
          122044,
          122060,
          122098,
          122100,
          122116,
          122120,
          122128,
          122142,
          122144,
          122172,
          122176,
          122232,
          122246,
          122264,
          122318,
          122338,
          122340,
          122344,
          122414,
          122418,
          122420,
          122446,
          122460,
          122466,
          122468,
          122472,
          122510,
          122524,
          122552,
          122562,
          122564,
          122568,
          122576,
          122598,
          122618,
          122646,
          122662,
          122668,
          122694,
          122700,
          122712,
          122738,
          122740,
          122762,
          122770,
          122772,
          122786,
          122788,
          122792,
          123018,
          123026,
          123028,
          123042,
          123044,
          123048,
          123062,
          123098,
          123146,
          123154,
          123156,
          123170,
          123172,
          123176,
          123190,
          123202,
          123204,
          123208,
          123216,
          123238,
          123244,
          123258,
          123290,
          123314,
          123316,
          123402,
          123410,
          123412,
          123426,
          123428,
          123432,
          123446,
          123458,
          123464,
          123472,
          123486,
          123494,
          123500,
          123514,
          123522,
          123524,
          123528,
          123536,
          123552,
          123580,
          123590,
          123596,
          123608,
          123630,
          123634,
          123636,
          123674,
          123698,
          123700,
          123740,
          123746,
          123748,
          123752,
          123834,
          123914,
          123922,
          123924,
          123938,
          123944,
          123958,
          123970,
          123976,
          123984,
          123998,
          124006,
          124012,
          124026,
          124034,
          124036,
          124048,
          124062,
          124064,
          124092,
          124102,
          124108,
          124120,
          124142,
          124146,
          124148,
          124162,
          124164,
          124168,
          124176,
          124190,
          124192,
          124220,
          124224,
          124280,
          124294,
          124300,
          124312,
          124336,
          124350,
          124366,
          124380,
          124386,
          124388,
          124392,
          124406,
          124442,
          124462,
          124466,
          124468,
          124494,
          124508,
          124514,
          124520,
          124558,
          124572,
          124600,
          124610,
          124612,
          124616,
          124624,
          124646,
          124666,
          124694,
          124710,
          124716,
          124730,
          124742,
          124748,
          124760,
          124786,
          124788,
          124818,
          124820,
          124834,
          124836,
          124840,
          124854,
          124946,
          124948,
          124962,
          124964,
          124968,
          124982,
          124994,
          124996,
          125e3,
          125008,
          125022,
          125030,
          125036,
          125050,
          125058,
          125060,
          125064,
          125072,
          125086,
          125088,
          125116,
          125126,
          125132,
          125144,
          125166,
          125170,
          125172,
          125186,
          125188,
          125192,
          125200,
          125216,
          125244,
          125248,
          125304,
          125318,
          125324,
          125336,
          125360,
          125374,
          125390,
          125404,
          125410,
          125412,
          125416,
          125430,
          125444,
          125448,
          125456,
          125472,
          125504,
          125560,
          125680,
          125702,
          125708,
          125720,
          125744,
          125758,
          125792,
          125820,
          125838,
          125852,
          125880,
          125890,
          125892,
          125896,
          125904,
          125918,
          125926,
          125932,
          125978,
          125998,
          126002,
          126004,
          126030,
          126044,
          126050,
          126052,
          126056,
          126094,
          126108,
          126136,
          126146,
          126148,
          126152,
          126160,
          126182,
          126202,
          126222,
          126236,
          126264,
          126320,
          126334,
          126338,
          126340,
          126344,
          126352,
          126366,
          126368,
          126412,
          126450,
          126452,
          126486,
          126502,
          126508,
          126522,
          126534,
          126540,
          126552,
          126574,
          126578,
          126580,
          126598,
          126604,
          126616,
          126640,
          126654,
          126670,
          126684,
          126690,
          126692,
          126696,
          126738,
          126754,
          126756,
          126760,
          126774,
          126786,
          126788,
          126792,
          126800,
          126814,
          126822,
          126828,
          126842,
          126894,
          126898,
          126900,
          126934,
          127126,
          127142,
          127148,
          127162,
          127178,
          127186,
          127188,
          127254,
          127270,
          127276,
          127290,
          127302,
          127308,
          127320,
          127342,
          127346,
          127348,
          127370,
          127378,
          127380,
          127394,
          127396,
          127400,
          127450,
          127510,
          127526,
          127532,
          127546,
          127558,
          127576,
          127598,
          127602,
          127604,
          127622,
          127628,
          127640,
          127664,
          127678,
          127694,
          127708,
          127714,
          127716,
          127720,
          127734,
          127754,
          127762,
          127764,
          127778,
          127784,
          127810,
          127812,
          127816,
          127824,
          127838,
          127846,
          127866,
          127898,
          127918,
          127922,
          127924,
          128022,
          128038,
          128044,
          128058,
          128070,
          128076,
          128088,
          128110,
          128114,
          128116,
          128134,
          128140,
          128152,
          128176,
          128190,
          128206,
          128220,
          128226,
          128228,
          128232,
          128246,
          128262,
          128268,
          128280,
          128304,
          128318,
          128352,
          128380,
          128398,
          128412,
          128440,
          128450,
          128452,
          128456,
          128464,
          128478,
          128486,
          128492,
          128506,
          128522,
          128530,
          128532,
          128546,
          128548,
          128552,
          128566,
          128578,
          128580,
          128584,
          128592,
          128606,
          128614,
          128634,
          128642,
          128644,
          128648,
          128656,
          128670,
          128672,
          128700,
          128716,
          128754,
          128756,
          128794,
          128814,
          128818,
          128820,
          128846,
          128860,
          128866,
          128868,
          128872,
          128886,
          128918,
          128934,
          128940,
          128954,
          128978,
          128980,
          129178,
          129198,
          129202,
          129204,
          129238,
          129258,
          129306,
          129326,
          129330,
          129332,
          129358,
          129372,
          129378,
          129380,
          129384,
          129398,
          129430,
          129446,
          129452,
          129466,
          129482,
          129490,
          129492,
          129562,
          129582,
          129586,
          129588,
          129614,
          129628,
          129634,
          129636,
          129640,
          129654,
          129678,
          129692,
          129720,
          129730,
          129732,
          129736,
          129744,
          129758,
          129766,
          129772,
          129814,
          129830,
          129836,
          129850,
          129862,
          129868,
          129880,
          129902,
          129906,
          129908,
          129930,
          129938,
          129940,
          129954,
          129956,
          129960,
          129974,
          130010
        ]);
        PDF417Common.CODEWORD_TABLE = Int32Array.from([
          2627,
          1819,
          2622,
          2621,
          1813,
          1812,
          2729,
          2724,
          2723,
          2779,
          2774,
          2773,
          902,
          896,
          908,
          868,
          865,
          861,
          859,
          2511,
          873,
          871,
          1780,
          835,
          2493,
          825,
          2491,
          842,
          837,
          844,
          1764,
          1762,
          811,
          810,
          809,
          2483,
          807,
          2482,
          806,
          2480,
          815,
          814,
          813,
          812,
          2484,
          817,
          816,
          1745,
          1744,
          1742,
          1746,
          2655,
          2637,
          2635,
          2626,
          2625,
          2623,
          2628,
          1820,
          2752,
          2739,
          2737,
          2728,
          2727,
          2725,
          2730,
          2785,
          2783,
          2778,
          2777,
          2775,
          2780,
          787,
          781,
          747,
          739,
          736,
          2413,
          754,
          752,
          1719,
          692,
          689,
          681,
          2371,
          678,
          2369,
          700,
          697,
          694,
          703,
          1688,
          1686,
          642,
          638,
          2343,
          631,
          2341,
          627,
          2338,
          651,
          646,
          643,
          2345,
          654,
          652,
          1652,
          1650,
          1647,
          1654,
          601,
          599,
          2322,
          596,
          2321,
          594,
          2319,
          2317,
          611,
          610,
          608,
          606,
          2324,
          603,
          2323,
          615,
          614,
          612,
          1617,
          1616,
          1614,
          1612,
          616,
          1619,
          1618,
          2575,
          2538,
          2536,
          905,
          901,
          898,
          909,
          2509,
          2507,
          2504,
          870,
          867,
          864,
          860,
          2512,
          875,
          872,
          1781,
          2490,
          2489,
          2487,
          2485,
          1748,
          836,
          834,
          832,
          830,
          2494,
          827,
          2492,
          843,
          841,
          839,
          845,
          1765,
          1763,
          2701,
          2676,
          2674,
          2653,
          2648,
          2656,
          2634,
          2633,
          2631,
          2629,
          1821,
          2638,
          2636,
          2770,
          2763,
          2761,
          2750,
          2745,
          2753,
          2736,
          2735,
          2733,
          2731,
          1848,
          2740,
          2738,
          2786,
          2784,
          591,
          588,
          576,
          569,
          566,
          2296,
          1590,
          537,
          534,
          526,
          2276,
          522,
          2274,
          545,
          542,
          539,
          548,
          1572,
          1570,
          481,
          2245,
          466,
          2242,
          462,
          2239,
          492,
          485,
          482,
          2249,
          496,
          494,
          1534,
          1531,
          1528,
          1538,
          413,
          2196,
          406,
          2191,
          2188,
          425,
          419,
          2202,
          415,
          2199,
          432,
          430,
          427,
          1472,
          1467,
          1464,
          433,
          1476,
          1474,
          368,
          367,
          2160,
          365,
          2159,
          362,
          2157,
          2155,
          2152,
          378,
          377,
          375,
          2166,
          372,
          2165,
          369,
          2162,
          383,
          381,
          379,
          2168,
          1419,
          1418,
          1416,
          1414,
          385,
          1411,
          384,
          1423,
          1422,
          1420,
          1424,
          2461,
          802,
          2441,
          2439,
          790,
          786,
          783,
          794,
          2409,
          2406,
          2403,
          750,
          742,
          738,
          2414,
          756,
          753,
          1720,
          2367,
          2365,
          2362,
          2359,
          1663,
          693,
          691,
          684,
          2373,
          680,
          2370,
          702,
          699,
          696,
          704,
          1690,
          1687,
          2337,
          2336,
          2334,
          2332,
          1624,
          2329,
          1622,
          640,
          637,
          2344,
          634,
          2342,
          630,
          2340,
          650,
          648,
          645,
          2346,
          655,
          653,
          1653,
          1651,
          1649,
          1655,
          2612,
          2597,
          2595,
          2571,
          2568,
          2565,
          2576,
          2534,
          2529,
          2526,
          1787,
          2540,
          2537,
          907,
          904,
          900,
          910,
          2503,
          2502,
          2500,
          2498,
          1768,
          2495,
          1767,
          2510,
          2508,
          2506,
          869,
          866,
          863,
          2513,
          876,
          874,
          1782,
          2720,
          2713,
          2711,
          2697,
          2694,
          2691,
          2702,
          2672,
          2670,
          2664,
          1828,
          2678,
          2675,
          2647,
          2646,
          2644,
          2642,
          1823,
          2639,
          1822,
          2654,
          2652,
          2650,
          2657,
          2771,
          1855,
          2765,
          2762,
          1850,
          1849,
          2751,
          2749,
          2747,
          2754,
          353,
          2148,
          344,
          342,
          336,
          2142,
          332,
          2140,
          345,
          1375,
          1373,
          306,
          2130,
          299,
          2128,
          295,
          2125,
          319,
          314,
          311,
          2132,
          1354,
          1352,
          1349,
          1356,
          262,
          257,
          2101,
          253,
          2096,
          2093,
          274,
          273,
          267,
          2107,
          263,
          2104,
          280,
          278,
          275,
          1316,
          1311,
          1308,
          1320,
          1318,
          2052,
          202,
          2050,
          2044,
          2040,
          219,
          2063,
          212,
          2060,
          208,
          2055,
          224,
          221,
          2066,
          1260,
          1258,
          1252,
          231,
          1248,
          229,
          1266,
          1264,
          1261,
          1268,
          155,
          1998,
          153,
          1996,
          1994,
          1991,
          1988,
          165,
          164,
          2007,
          162,
          2006,
          159,
          2003,
          2e3,
          172,
          171,
          169,
          2012,
          166,
          2010,
          1186,
          1184,
          1182,
          1179,
          175,
          1176,
          173,
          1192,
          1191,
          1189,
          1187,
          176,
          1194,
          1193,
          2313,
          2307,
          2305,
          592,
          589,
          2294,
          2292,
          2289,
          578,
          572,
          568,
          2297,
          580,
          1591,
          2272,
          2267,
          2264,
          1547,
          538,
          536,
          529,
          2278,
          525,
          2275,
          547,
          544,
          541,
          1574,
          1571,
          2237,
          2235,
          2229,
          1493,
          2225,
          1489,
          478,
          2247,
          470,
          2244,
          465,
          2241,
          493,
          488,
          484,
          2250,
          498,
          495,
          1536,
          1533,
          1530,
          1539,
          2187,
          2186,
          2184,
          2182,
          1432,
          2179,
          1430,
          2176,
          1427,
          414,
          412,
          2197,
          409,
          2195,
          405,
          2193,
          2190,
          426,
          424,
          421,
          2203,
          418,
          2201,
          431,
          429,
          1473,
          1471,
          1469,
          1466,
          434,
          1477,
          1475,
          2478,
          2472,
          2470,
          2459,
          2457,
          2454,
          2462,
          803,
          2437,
          2432,
          2429,
          1726,
          2443,
          2440,
          792,
          789,
          785,
          2401,
          2399,
          2393,
          1702,
          2389,
          1699,
          2411,
          2408,
          2405,
          745,
          741,
          2415,
          758,
          755,
          1721,
          2358,
          2357,
          2355,
          2353,
          1661,
          2350,
          1660,
          2347,
          1657,
          2368,
          2366,
          2364,
          2361,
          1666,
          690,
          687,
          2374,
          683,
          2372,
          701,
          698,
          705,
          1691,
          1689,
          2619,
          2617,
          2610,
          2608,
          2605,
          2613,
          2593,
          2588,
          2585,
          1803,
          2599,
          2596,
          2563,
          2561,
          2555,
          1797,
          2551,
          1795,
          2573,
          2570,
          2567,
          2577,
          2525,
          2524,
          2522,
          2520,
          1786,
          2517,
          1785,
          2514,
          1783,
          2535,
          2533,
          2531,
          2528,
          1788,
          2541,
          2539,
          906,
          903,
          911,
          2721,
          1844,
          2715,
          2712,
          1838,
          1836,
          2699,
          2696,
          2693,
          2703,
          1827,
          1826,
          1824,
          2673,
          2671,
          2669,
          2666,
          1829,
          2679,
          2677,
          1858,
          1857,
          2772,
          1854,
          1853,
          1851,
          1856,
          2766,
          2764,
          143,
          1987,
          139,
          1986,
          135,
          133,
          131,
          1984,
          128,
          1983,
          125,
          1981,
          138,
          137,
          136,
          1985,
          1133,
          1132,
          1130,
          112,
          110,
          1974,
          107,
          1973,
          104,
          1971,
          1969,
          122,
          121,
          119,
          117,
          1977,
          114,
          1976,
          124,
          1115,
          1114,
          1112,
          1110,
          1117,
          1116,
          84,
          83,
          1953,
          81,
          1952,
          78,
          1950,
          1948,
          1945,
          94,
          93,
          91,
          1959,
          88,
          1958,
          85,
          1955,
          99,
          97,
          95,
          1961,
          1086,
          1085,
          1083,
          1081,
          1078,
          100,
          1090,
          1089,
          1087,
          1091,
          49,
          47,
          1917,
          44,
          1915,
          1913,
          1910,
          1907,
          59,
          1926,
          56,
          1925,
          53,
          1922,
          1919,
          66,
          64,
          1931,
          61,
          1929,
          1042,
          1040,
          1038,
          71,
          1035,
          70,
          1032,
          68,
          1048,
          1047,
          1045,
          1043,
          1050,
          1049,
          12,
          10,
          1869,
          1867,
          1864,
          1861,
          21,
          1880,
          19,
          1877,
          1874,
          1871,
          28,
          1888,
          25,
          1886,
          22,
          1883,
          982,
          980,
          977,
          974,
          32,
          30,
          991,
          989,
          987,
          984,
          34,
          995,
          994,
          992,
          2151,
          2150,
          2147,
          2146,
          2144,
          356,
          355,
          354,
          2149,
          2139,
          2138,
          2136,
          2134,
          1359,
          343,
          341,
          338,
          2143,
          335,
          2141,
          348,
          347,
          346,
          1376,
          1374,
          2124,
          2123,
          2121,
          2119,
          1326,
          2116,
          1324,
          310,
          308,
          305,
          2131,
          302,
          2129,
          298,
          2127,
          320,
          318,
          316,
          313,
          2133,
          322,
          321,
          1355,
          1353,
          1351,
          1357,
          2092,
          2091,
          2089,
          2087,
          1276,
          2084,
          1274,
          2081,
          1271,
          259,
          2102,
          256,
          2100,
          252,
          2098,
          2095,
          272,
          269,
          2108,
          266,
          2106,
          281,
          279,
          277,
          1317,
          1315,
          1313,
          1310,
          282,
          1321,
          1319,
          2039,
          2037,
          2035,
          2032,
          1203,
          2029,
          1200,
          1197,
          207,
          2053,
          205,
          2051,
          201,
          2049,
          2046,
          2043,
          220,
          218,
          2064,
          215,
          2062,
          211,
          2059,
          228,
          226,
          223,
          2069,
          1259,
          1257,
          1254,
          232,
          1251,
          230,
          1267,
          1265,
          1263,
          2316,
          2315,
          2312,
          2311,
          2309,
          2314,
          2304,
          2303,
          2301,
          2299,
          1593,
          2308,
          2306,
          590,
          2288,
          2287,
          2285,
          2283,
          1578,
          2280,
          1577,
          2295,
          2293,
          2291,
          579,
          577,
          574,
          571,
          2298,
          582,
          581,
          1592,
          2263,
          2262,
          2260,
          2258,
          1545,
          2255,
          1544,
          2252,
          1541,
          2273,
          2271,
          2269,
          2266,
          1550,
          535,
          532,
          2279,
          528,
          2277,
          546,
          543,
          549,
          1575,
          1573,
          2224,
          2222,
          2220,
          1486,
          2217,
          1485,
          2214,
          1482,
          1479,
          2238,
          2236,
          2234,
          2231,
          1496,
          2228,
          1492,
          480,
          477,
          2248,
          473,
          2246,
          469,
          2243,
          490,
          487,
          2251,
          497,
          1537,
          1535,
          1532,
          2477,
          2476,
          2474,
          2479,
          2469,
          2468,
          2466,
          2464,
          1730,
          2473,
          2471,
          2453,
          2452,
          2450,
          2448,
          1729,
          2445,
          1728,
          2460,
          2458,
          2456,
          2463,
          805,
          804,
          2428,
          2427,
          2425,
          2423,
          1725,
          2420,
          1724,
          2417,
          1722,
          2438,
          2436,
          2434,
          2431,
          1727,
          2444,
          2442,
          793,
          791,
          788,
          795,
          2388,
          2386,
          2384,
          1697,
          2381,
          1696,
          2378,
          1694,
          1692,
          2402,
          2400,
          2398,
          2395,
          1703,
          2392,
          1701,
          2412,
          2410,
          2407,
          751,
          748,
          744,
          2416,
          759,
          757,
          1807,
          2620,
          2618,
          1806,
          1805,
          2611,
          2609,
          2607,
          2614,
          1802,
          1801,
          1799,
          2594,
          2592,
          2590,
          2587,
          1804,
          2600,
          2598,
          1794,
          1793,
          1791,
          1789,
          2564,
          2562,
          2560,
          2557,
          1798,
          2554,
          1796,
          2574,
          2572,
          2569,
          2578,
          1847,
          1846,
          2722,
          1843,
          1842,
          1840,
          1845,
          2716,
          2714,
          1835,
          1834,
          1832,
          1830,
          1839,
          1837,
          2700,
          2698,
          2695,
          2704,
          1817,
          1811,
          1810,
          897,
          862,
          1777,
          829,
          826,
          838,
          1760,
          1758,
          808,
          2481,
          1741,
          1740,
          1738,
          1743,
          2624,
          1818,
          2726,
          2776,
          782,
          740,
          737,
          1715,
          686,
          679,
          695,
          1682,
          1680,
          639,
          628,
          2339,
          647,
          644,
          1645,
          1643,
          1640,
          1648,
          602,
          600,
          597,
          595,
          2320,
          593,
          2318,
          609,
          607,
          604,
          1611,
          1610,
          1608,
          1606,
          613,
          1615,
          1613,
          2328,
          926,
          924,
          892,
          886,
          899,
          857,
          850,
          2505,
          1778,
          824,
          823,
          821,
          819,
          2488,
          818,
          2486,
          833,
          831,
          828,
          840,
          1761,
          1759,
          2649,
          2632,
          2630,
          2746,
          2734,
          2732,
          2782,
          2781,
          570,
          567,
          1587,
          531,
          527,
          523,
          540,
          1566,
          1564,
          476,
          467,
          463,
          2240,
          486,
          483,
          1524,
          1521,
          1518,
          1529,
          411,
          403,
          2192,
          399,
          2189,
          423,
          416,
          1462,
          1457,
          1454,
          428,
          1468,
          1465,
          2210,
          366,
          363,
          2158,
          360,
          2156,
          357,
          2153,
          376,
          373,
          370,
          2163,
          1410,
          1409,
          1407,
          1405,
          382,
          1402,
          380,
          1417,
          1415,
          1412,
          1421,
          2175,
          2174,
          777,
          774,
          771,
          784,
          732,
          725,
          722,
          2404,
          743,
          1716,
          676,
          674,
          668,
          2363,
          665,
          2360,
          685,
          1684,
          1681,
          626,
          624,
          622,
          2335,
          620,
          2333,
          617,
          2330,
          641,
          635,
          649,
          1646,
          1644,
          1642,
          2566,
          928,
          925,
          2530,
          2527,
          894,
          891,
          888,
          2501,
          2499,
          2496,
          858,
          856,
          854,
          851,
          1779,
          2692,
          2668,
          2665,
          2645,
          2643,
          2640,
          2651,
          2768,
          2759,
          2757,
          2744,
          2743,
          2741,
          2748,
          352,
          1382,
          340,
          337,
          333,
          1371,
          1369,
          307,
          300,
          296,
          2126,
          315,
          312,
          1347,
          1342,
          1350,
          261,
          258,
          250,
          2097,
          246,
          2094,
          271,
          268,
          264,
          1306,
          1301,
          1298,
          276,
          1312,
          1309,
          2115,
          203,
          2048,
          195,
          2045,
          191,
          2041,
          213,
          209,
          2056,
          1246,
          1244,
          1238,
          225,
          1234,
          222,
          1256,
          1253,
          1249,
          1262,
          2080,
          2079,
          154,
          1997,
          150,
          1995,
          147,
          1992,
          1989,
          163,
          160,
          2004,
          156,
          2001,
          1175,
          1174,
          1172,
          1170,
          1167,
          170,
          1164,
          167,
          1185,
          1183,
          1180,
          1177,
          174,
          1190,
          1188,
          2025,
          2024,
          2022,
          587,
          586,
          564,
          559,
          556,
          2290,
          573,
          1588,
          520,
          518,
          512,
          2268,
          508,
          2265,
          530,
          1568,
          1565,
          461,
          457,
          2233,
          450,
          2230,
          446,
          2226,
          479,
          471,
          489,
          1526,
          1523,
          1520,
          397,
          395,
          2185,
          392,
          2183,
          389,
          2180,
          2177,
          410,
          2194,
          402,
          422,
          1463,
          1461,
          1459,
          1456,
          1470,
          2455,
          799,
          2433,
          2430,
          779,
          776,
          773,
          2397,
          2394,
          2390,
          734,
          728,
          724,
          746,
          1717,
          2356,
          2354,
          2351,
          2348,
          1658,
          677,
          675,
          673,
          670,
          667,
          688,
          1685,
          1683,
          2606,
          2589,
          2586,
          2559,
          2556,
          2552,
          927,
          2523,
          2521,
          2518,
          2515,
          1784,
          2532,
          895,
          893,
          890,
          2718,
          2709,
          2707,
          2689,
          2687,
          2684,
          2663,
          2662,
          2660,
          2658,
          1825,
          2667,
          2769,
          1852,
          2760,
          2758,
          142,
          141,
          1139,
          1138,
          134,
          132,
          129,
          126,
          1982,
          1129,
          1128,
          1126,
          1131,
          113,
          111,
          108,
          105,
          1972,
          101,
          1970,
          120,
          118,
          115,
          1109,
          1108,
          1106,
          1104,
          123,
          1113,
          1111,
          82,
          79,
          1951,
          75,
          1949,
          72,
          1946,
          92,
          89,
          86,
          1956,
          1077,
          1076,
          1074,
          1072,
          98,
          1069,
          96,
          1084,
          1082,
          1079,
          1088,
          1968,
          1967,
          48,
          45,
          1916,
          42,
          1914,
          39,
          1911,
          1908,
          60,
          57,
          54,
          1923,
          50,
          1920,
          1031,
          1030,
          1028,
          1026,
          67,
          1023,
          65,
          1020,
          62,
          1041,
          1039,
          1036,
          1033,
          69,
          1046,
          1044,
          1944,
          1943,
          1941,
          11,
          9,
          1868,
          7,
          1865,
          1862,
          1859,
          20,
          1878,
          16,
          1875,
          13,
          1872,
          970,
          968,
          966,
          963,
          29,
          960,
          26,
          23,
          983,
          981,
          978,
          975,
          33,
          971,
          31,
          990,
          988,
          985,
          1906,
          1904,
          1902,
          993,
          351,
          2145,
          1383,
          331,
          330,
          328,
          326,
          2137,
          323,
          2135,
          339,
          1372,
          1370,
          294,
          293,
          291,
          289,
          2122,
          286,
          2120,
          283,
          2117,
          309,
          303,
          317,
          1348,
          1346,
          1344,
          245,
          244,
          242,
          2090,
          239,
          2088,
          236,
          2085,
          2082,
          260,
          2099,
          249,
          270,
          1307,
          1305,
          1303,
          1300,
          1314,
          189,
          2038,
          186,
          2036,
          183,
          2033,
          2030,
          2026,
          206,
          198,
          2047,
          194,
          216,
          1247,
          1245,
          1243,
          1240,
          227,
          1237,
          1255,
          2310,
          2302,
          2300,
          2286,
          2284,
          2281,
          565,
          563,
          561,
          558,
          575,
          1589,
          2261,
          2259,
          2256,
          2253,
          1542,
          521,
          519,
          517,
          514,
          2270,
          511,
          533,
          1569,
          1567,
          2223,
          2221,
          2218,
          2215,
          1483,
          2211,
          1480,
          459,
          456,
          453,
          2232,
          449,
          474,
          491,
          1527,
          1525,
          1522,
          2475,
          2467,
          2465,
          2451,
          2449,
          2446,
          801,
          800,
          2426,
          2424,
          2421,
          2418,
          1723,
          2435,
          780,
          778,
          775,
          2387,
          2385,
          2382,
          2379,
          1695,
          2375,
          1693,
          2396,
          735,
          733,
          730,
          727,
          749,
          1718,
          2616,
          2615,
          2604,
          2603,
          2601,
          2584,
          2583,
          2581,
          2579,
          1800,
          2591,
          2550,
          2549,
          2547,
          2545,
          1792,
          2542,
          1790,
          2558,
          929,
          2719,
          1841,
          2710,
          2708,
          1833,
          1831,
          2690,
          2688,
          2686,
          1815,
          1809,
          1808,
          1774,
          1756,
          1754,
          1737,
          1736,
          1734,
          1739,
          1816,
          1711,
          1676,
          1674,
          633,
          629,
          1638,
          1636,
          1633,
          1641,
          598,
          1605,
          1604,
          1602,
          1600,
          605,
          1609,
          1607,
          2327,
          887,
          853,
          1775,
          822,
          820,
          1757,
          1755,
          1584,
          524,
          1560,
          1558,
          468,
          464,
          1514,
          1511,
          1508,
          1519,
          408,
          404,
          400,
          1452,
          1447,
          1444,
          417,
          1458,
          1455,
          2208,
          364,
          361,
          358,
          2154,
          1401,
          1400,
          1398,
          1396,
          374,
          1393,
          371,
          1408,
          1406,
          1403,
          1413,
          2173,
          2172,
          772,
          726,
          723,
          1712,
          672,
          669,
          666,
          682,
          1678,
          1675,
          625,
          623,
          621,
          618,
          2331,
          636,
          632,
          1639,
          1637,
          1635,
          920,
          918,
          884,
          880,
          889,
          849,
          848,
          847,
          846,
          2497,
          855,
          852,
          1776,
          2641,
          2742,
          2787,
          1380,
          334,
          1367,
          1365,
          301,
          297,
          1340,
          1338,
          1335,
          1343,
          255,
          251,
          247,
          1296,
          1291,
          1288,
          265,
          1302,
          1299,
          2113,
          204,
          196,
          192,
          2042,
          1232,
          1230,
          1224,
          214,
          1220,
          210,
          1242,
          1239,
          1235,
          1250,
          2077,
          2075,
          151,
          148,
          1993,
          144,
          1990,
          1163,
          1162,
          1160,
          1158,
          1155,
          161,
          1152,
          157,
          1173,
          1171,
          1168,
          1165,
          168,
          1181,
          1178,
          2021,
          2020,
          2018,
          2023,
          585,
          560,
          557,
          1585,
          516,
          509,
          1562,
          1559,
          458,
          447,
          2227,
          472,
          1516,
          1513,
          1510,
          398,
          396,
          393,
          390,
          2181,
          386,
          2178,
          407,
          1453,
          1451,
          1449,
          1446,
          420,
          1460,
          2209,
          769,
          764,
          720,
          712,
          2391,
          729,
          1713,
          664,
          663,
          661,
          659,
          2352,
          656,
          2349,
          671,
          1679,
          1677,
          2553,
          922,
          919,
          2519,
          2516,
          885,
          883,
          881,
          2685,
          2661,
          2659,
          2767,
          2756,
          2755,
          140,
          1137,
          1136,
          130,
          127,
          1125,
          1124,
          1122,
          1127,
          109,
          106,
          102,
          1103,
          1102,
          1100,
          1098,
          116,
          1107,
          1105,
          1980,
          80,
          76,
          73,
          1947,
          1068,
          1067,
          1065,
          1063,
          90,
          1060,
          87,
          1075,
          1073,
          1070,
          1080,
          1966,
          1965,
          46,
          43,
          40,
          1912,
          36,
          1909,
          1019,
          1018,
          1016,
          1014,
          58,
          1011,
          55,
          1008,
          51,
          1029,
          1027,
          1024,
          1021,
          63,
          1037,
          1034,
          1940,
          1939,
          1937,
          1942,
          8,
          1866,
          4,
          1863,
          1,
          1860,
          956,
          954,
          952,
          949,
          946,
          17,
          14,
          969,
          967,
          964,
          961,
          27,
          957,
          24,
          979,
          976,
          972,
          1901,
          1900,
          1898,
          1896,
          986,
          1905,
          1903,
          350,
          349,
          1381,
          329,
          327,
          324,
          1368,
          1366,
          292,
          290,
          287,
          284,
          2118,
          304,
          1341,
          1339,
          1337,
          1345,
          243,
          240,
          237,
          2086,
          233,
          2083,
          254,
          1297,
          1295,
          1293,
          1290,
          1304,
          2114,
          190,
          187,
          184,
          2034,
          180,
          2031,
          177,
          2027,
          199,
          1233,
          1231,
          1229,
          1226,
          217,
          1223,
          1241,
          2078,
          2076,
          584,
          555,
          554,
          552,
          550,
          2282,
          562,
          1586,
          507,
          506,
          504,
          502,
          2257,
          499,
          2254,
          515,
          1563,
          1561,
          445,
          443,
          441,
          2219,
          438,
          2216,
          435,
          2212,
          460,
          454,
          475,
          1517,
          1515,
          1512,
          2447,
          798,
          797,
          2422,
          2419,
          770,
          768,
          766,
          2383,
          2380,
          2376,
          721,
          719,
          717,
          714,
          731,
          1714,
          2602,
          2582,
          2580,
          2548,
          2546,
          2543,
          923,
          921,
          2717,
          2706,
          2705,
          2683,
          2682,
          2680,
          1771,
          1752,
          1750,
          1733,
          1732,
          1731,
          1735,
          1814,
          1707,
          1670,
          1668,
          1631,
          1629,
          1626,
          1634,
          1599,
          1598,
          1596,
          1594,
          1603,
          1601,
          2326,
          1772,
          1753,
          1751,
          1581,
          1554,
          1552,
          1504,
          1501,
          1498,
          1509,
          1442,
          1437,
          1434,
          401,
          1448,
          1445,
          2206,
          1392,
          1391,
          1389,
          1387,
          1384,
          359,
          1399,
          1397,
          1394,
          1404,
          2171,
          2170,
          1708,
          1672,
          1669,
          619,
          1632,
          1630,
          1628,
          1773,
          1378,
          1363,
          1361,
          1333,
          1328,
          1336,
          1286,
          1281,
          1278,
          248,
          1292,
          1289,
          2111,
          1218,
          1216,
          1210,
          197,
          1206,
          193,
          1228,
          1225,
          1221,
          1236,
          2073,
          2071,
          1151,
          1150,
          1148,
          1146,
          152,
          1143,
          149,
          1140,
          145,
          1161,
          1159,
          1156,
          1153,
          158,
          1169,
          1166,
          2017,
          2016,
          2014,
          2019,
          1582,
          510,
          1556,
          1553,
          452,
          448,
          1506,
          1500,
          394,
          391,
          387,
          1443,
          1441,
          1439,
          1436,
          1450,
          2207,
          765,
          716,
          713,
          1709,
          662,
          660,
          657,
          1673,
          1671,
          916,
          914,
          879,
          878,
          877,
          882,
          1135,
          1134,
          1121,
          1120,
          1118,
          1123,
          1097,
          1096,
          1094,
          1092,
          103,
          1101,
          1099,
          1979,
          1059,
          1058,
          1056,
          1054,
          77,
          1051,
          74,
          1066,
          1064,
          1061,
          1071,
          1964,
          1963,
          1007,
          1006,
          1004,
          1002,
          999,
          41,
          996,
          37,
          1017,
          1015,
          1012,
          1009,
          52,
          1025,
          1022,
          1936,
          1935,
          1933,
          1938,
          942,
          940,
          938,
          935,
          932,
          5,
          2,
          955,
          953,
          950,
          947,
          18,
          943,
          15,
          965,
          962,
          958,
          1895,
          1894,
          1892,
          1890,
          973,
          1899,
          1897,
          1379,
          325,
          1364,
          1362,
          288,
          285,
          1334,
          1332,
          1330,
          241,
          238,
          234,
          1287,
          1285,
          1283,
          1280,
          1294,
          2112,
          188,
          185,
          181,
          178,
          2028,
          1219,
          1217,
          1215,
          1212,
          200,
          1209,
          1227,
          2074,
          2072,
          583,
          553,
          551,
          1583,
          505,
          503,
          500,
          513,
          1557,
          1555,
          444,
          442,
          439,
          436,
          2213,
          455,
          451,
          1507,
          1505,
          1502,
          796,
          763,
          762,
          760,
          767,
          711,
          710,
          708,
          706,
          2377,
          718,
          715,
          1710,
          2544,
          917,
          915,
          2681,
          1627,
          1597,
          1595,
          2325,
          1769,
          1749,
          1747,
          1499,
          1438,
          1435,
          2204,
          1390,
          1388,
          1385,
          1395,
          2169,
          2167,
          1704,
          1665,
          1662,
          1625,
          1623,
          1620,
          1770,
          1329,
          1282,
          1279,
          2109,
          1214,
          1207,
          1222,
          2068,
          2065,
          1149,
          1147,
          1144,
          1141,
          146,
          1157,
          1154,
          2013,
          2011,
          2008,
          2015,
          1579,
          1549,
          1546,
          1495,
          1487,
          1433,
          1431,
          1428,
          1425,
          388,
          1440,
          2205,
          1705,
          658,
          1667,
          1664,
          1119,
          1095,
          1093,
          1978,
          1057,
          1055,
          1052,
          1062,
          1962,
          1960,
          1005,
          1003,
          1e3,
          997,
          38,
          1013,
          1010,
          1932,
          1930,
          1927,
          1934,
          941,
          939,
          936,
          933,
          6,
          930,
          3,
          951,
          948,
          944,
          1889,
          1887,
          1884,
          1881,
          959,
          1893,
          1891,
          35,
          1377,
          1360,
          1358,
          1327,
          1325,
          1322,
          1331,
          1277,
          1275,
          1272,
          1269,
          235,
          1284,
          2110,
          1205,
          1204,
          1201,
          1198,
          182,
          1195,
          179,
          1213,
          2070,
          2067,
          1580,
          501,
          1551,
          1548,
          440,
          437,
          1497,
          1494,
          1490,
          1503,
          761,
          709,
          707,
          1706,
          913,
          912,
          2198,
          1386,
          2164,
          2161,
          1621,
          1766,
          2103,
          1208,
          2058,
          2054,
          1145,
          1142,
          2005,
          2002,
          1999,
          2009,
          1488,
          1429,
          1426,
          2200,
          1698,
          1659,
          1656,
          1975,
          1053,
          1957,
          1954,
          1001,
          998,
          1924,
          1921,
          1918,
          1928,
          937,
          934,
          931,
          1879,
          1876,
          1873,
          1870,
          945,
          1885,
          1882,
          1323,
          1273,
          1270,
          2105,
          1202,
          1199,
          1196,
          1211,
          2061,
          2057,
          1576,
          1543,
          1540,
          1484,
          1481,
          1478,
          1491,
          1700
        ]);
        class PDF417DetectorResult {
          constructor(bits, points) {
            this.bits = bits;
            this.points = points;
          }
          getBits() {
            return this.bits;
          }
          getPoints() {
            return this.points;
          }
        }
        class Detector$3 {
          static detectMultiple(image, hints, multiple) {
            let bitMatrix = image.getBlackMatrix();
            let barcodeCoordinates = Detector$3.detect(multiple, bitMatrix);
            if (!barcodeCoordinates.length) {
              bitMatrix = bitMatrix.clone();
              bitMatrix.rotate180();
              barcodeCoordinates = Detector$3.detect(multiple, bitMatrix);
            }
            return new PDF417DetectorResult(bitMatrix, barcodeCoordinates);
          }
          static detect(multiple, bitMatrix) {
            const barcodeCoordinates = new Array();
            let row = 0;
            let column = 0;
            let foundBarcodeInRow = false;
            while (row < bitMatrix.getHeight()) {
              const vertices = Detector$3.findVertices(bitMatrix, row, column);
              if (vertices[0] == null && vertices[3] == null) {
                if (!foundBarcodeInRow) {
                  break;
                }
                foundBarcodeInRow = false;
                column = 0;
                for (const barcodeCoordinate of barcodeCoordinates) {
                  if (barcodeCoordinate[1] != null) {
                    row = Math.trunc(Math.max(row, barcodeCoordinate[1].getY()));
                  }
                  if (barcodeCoordinate[3] != null) {
                    row = Math.max(row, Math.trunc(barcodeCoordinate[3].getY()));
                  }
                }
                row += Detector$3.ROW_STEP;
                continue;
              }
              foundBarcodeInRow = true;
              barcodeCoordinates.push(vertices);
              if (!multiple) {
                break;
              }
              if (vertices[2] != null) {
                column = Math.trunc(vertices[2].getX());
                row = Math.trunc(vertices[2].getY());
              } else {
                column = Math.trunc(vertices[4].getX());
                row = Math.trunc(vertices[4].getY());
              }
            }
            return barcodeCoordinates;
          }
          static findVertices(matrix, startRow, startColumn) {
            const height = matrix.getHeight();
            const width = matrix.getWidth();
            const result = new Array(8);
            Detector$3.copyToResult(result, Detector$3.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector$3.START_PATTERN), Detector$3.INDEXES_START_PATTERN);
            if (result[4] != null) {
              startColumn = Math.trunc(result[4].getX());
              startRow = Math.trunc(result[4].getY());
            }
            Detector$3.copyToResult(result, Detector$3.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector$3.STOP_PATTERN), Detector$3.INDEXES_STOP_PATTERN);
            return result;
          }
          static copyToResult(result, tmpResult, destinationIndexes) {
            for (let i = 0; i < destinationIndexes.length; i++) {
              result[destinationIndexes[i]] = tmpResult[i];
            }
          }
          static findRowsWithPattern(matrix, height, width, startRow, startColumn, pattern) {
            const result = new Array(4);
            let found = false;
            const counters = new Int32Array(pattern.length);
            for (; startRow < height; startRow += Detector$3.ROW_STEP) {
              let loc = Detector$3.findGuardPattern(matrix, startColumn, startRow, width, false, pattern, counters);
              if (loc != null) {
                while (startRow > 0) {
                  const previousRowLoc = Detector$3.findGuardPattern(matrix, startColumn, --startRow, width, false, pattern, counters);
                  if (previousRowLoc != null) {
                    loc = previousRowLoc;
                  } else {
                    startRow++;
                    break;
                  }
                }
                result[0] = new ResultPoint(loc[0], startRow);
                result[1] = new ResultPoint(loc[1], startRow);
                found = true;
                break;
              }
            }
            let stopRow = startRow + 1;
            if (found) {
              let skippedRowCount = 0;
              let previousRowLoc = Int32Array.from([Math.trunc(result[0].getX()), Math.trunc(result[1].getX())]);
              for (; stopRow < height; stopRow++) {
                const loc = Detector$3.findGuardPattern(matrix, previousRowLoc[0], stopRow, width, false, pattern, counters);
                if (loc != null && Math.abs(previousRowLoc[0] - loc[0]) < Detector$3.MAX_PATTERN_DRIFT && Math.abs(previousRowLoc[1] - loc[1]) < Detector$3.MAX_PATTERN_DRIFT) {
                  previousRowLoc = loc;
                  skippedRowCount = 0;
                } else {
                  if (skippedRowCount > Detector$3.SKIPPED_ROW_COUNT_MAX) {
                    break;
                  } else {
                    skippedRowCount++;
                  }
                }
              }
              stopRow -= skippedRowCount + 1;
              result[2] = new ResultPoint(previousRowLoc[0], stopRow);
              result[3] = new ResultPoint(previousRowLoc[1], stopRow);
            }
            if (stopRow - startRow < Detector$3.BARCODE_MIN_HEIGHT) {
              Arrays.fill(result, null);
            }
            return result;
          }
          static findGuardPattern(matrix, column, row, width, whiteFirst, pattern, counters) {
            Arrays.fillWithin(counters, 0, counters.length, 0);
            let patternStart = column;
            let pixelDrift = 0;
            while (matrix.get(patternStart, row) && patternStart > 0 && pixelDrift++ < Detector$3.MAX_PIXEL_DRIFT) {
              patternStart--;
            }
            let x = patternStart;
            let counterPosition = 0;
            let patternLength = pattern.length;
            for (let isWhite = whiteFirst; x < width; x++) {
              let pixel = matrix.get(x, row);
              if (pixel !== isWhite) {
                counters[counterPosition]++;
              } else {
                if (counterPosition === patternLength - 1) {
                  if (Detector$3.patternMatchVariance(counters, pattern, Detector$3.MAX_INDIVIDUAL_VARIANCE) < Detector$3.MAX_AVG_VARIANCE) {
                    return new Int32Array([patternStart, x]);
                  }
                  patternStart += counters[0] + counters[1];
                  System.arraycopy(counters, 2, counters, 0, counterPosition - 1);
                  counters[counterPosition - 1] = 0;
                  counters[counterPosition] = 0;
                  counterPosition--;
                } else {
                  counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            if (counterPosition === patternLength - 1 && Detector$3.patternMatchVariance(counters, pattern, Detector$3.MAX_INDIVIDUAL_VARIANCE) < Detector$3.MAX_AVG_VARIANCE) {
              return new Int32Array([patternStart, x - 1]);
            }
            return null;
          }
          static patternMatchVariance(counters, pattern, maxIndividualVariance) {
            let numCounters = counters.length;
            let total = 0;
            let patternLength = 0;
            for (let i = 0; i < numCounters; i++) {
              total += counters[i];
              patternLength += pattern[i];
            }
            if (total < patternLength) {
              return Infinity;
            }
            let unitBarWidth = total / patternLength;
            maxIndividualVariance *= unitBarWidth;
            let totalVariance = 0;
            for (let x = 0; x < numCounters; x++) {
              let counter = counters[x];
              let scaledPattern = pattern[x] * unitBarWidth;
              let variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
              if (variance > maxIndividualVariance) {
                return Infinity;
              }
              totalVariance += variance;
            }
            return totalVariance / total;
          }
        }
        Detector$3.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]);
        Detector$3.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]);
        Detector$3.MAX_AVG_VARIANCE = 0.42;
        Detector$3.MAX_INDIVIDUAL_VARIANCE = 0.8;
        Detector$3.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]);
        Detector$3.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]);
        Detector$3.MAX_PIXEL_DRIFT = 3;
        Detector$3.MAX_PATTERN_DRIFT = 5;
        Detector$3.SKIPPED_ROW_COUNT_MAX = 25;
        Detector$3.ROW_STEP = 5;
        Detector$3.BARCODE_MIN_HEIGHT = 10;
        class ModulusPoly {
          constructor(field, coefficients) {
            if (coefficients.length === 0) {
              throw new IllegalArgumentException();
            }
            this.field = field;
            let coefficientsLength = coefficients.length;
            if (coefficientsLength > 1 && coefficients[0] === 0) {
              let firstNonZero = 1;
              while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                firstNonZero++;
              }
              if (firstNonZero === coefficientsLength) {
                this.coefficients = new Int32Array([0]);
              } else {
                this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
              }
            } else {
              this.coefficients = coefficients;
            }
          }
          getCoefficients() {
            return this.coefficients;
          }
          getDegree() {
            return this.coefficients.length - 1;
          }
          isZero() {
            return this.coefficients[0] === 0;
          }
          getCoefficient(degree) {
            return this.coefficients[this.coefficients.length - 1 - degree];
          }
          evaluateAt(a) {
            if (a === 0) {
              return this.getCoefficient(0);
            }
            if (a === 1) {
              let sum = 0;
              for (let coefficient of this.coefficients) {
                sum = this.field.add(sum, coefficient);
              }
              return sum;
            }
            let result = this.coefficients[0];
            let size = this.coefficients.length;
            for (let i = 1; i < size; i++) {
              result = this.field.add(this.field.multiply(a, result), this.coefficients[i]);
            }
            return result;
          }
          add(other) {
            if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
            }
            if (this.isZero()) {
              return other;
            }
            if (other.isZero()) {
              return this;
            }
            let smallerCoefficients = this.coefficients;
            let largerCoefficients = other.coefficients;
            if (smallerCoefficients.length > largerCoefficients.length) {
              let temp = smallerCoefficients;
              smallerCoefficients = largerCoefficients;
              largerCoefficients = temp;
            }
            let sumDiff = new Int32Array(largerCoefficients.length);
            let lengthDiff = largerCoefficients.length - smallerCoefficients.length;
            System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
            for (let i = lengthDiff; i < largerCoefficients.length; i++) {
              sumDiff[i] = this.field.add(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
            }
            return new ModulusPoly(this.field, sumDiff);
          }
          subtract(other) {
            if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
            }
            if (other.isZero()) {
              return this;
            }
            return this.add(other.negative());
          }
          multiply(other) {
            if (other instanceof ModulusPoly) {
              return this.multiplyOther(other);
            }
            return this.multiplyScalar(other);
          }
          multiplyOther(other) {
            if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
            }
            if (this.isZero() || other.isZero()) {
              return new ModulusPoly(this.field, new Int32Array([0]));
            }
            let aCoefficients = this.coefficients;
            let aLength = aCoefficients.length;
            let bCoefficients = other.coefficients;
            let bLength = bCoefficients.length;
            let product = new Int32Array(aLength + bLength - 1);
            for (let i = 0; i < aLength; i++) {
              let aCoeff = aCoefficients[i];
              for (let j = 0; j < bLength; j++) {
                product[i + j] = this.field.add(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
              }
            }
            return new ModulusPoly(this.field, product);
          }
          negative() {
            let size = this.coefficients.length;
            let negativeCoefficients = new Int32Array(size);
            for (let i = 0; i < size; i++) {
              negativeCoefficients[i] = this.field.subtract(0, this.coefficients[i]);
            }
            return new ModulusPoly(this.field, negativeCoefficients);
          }
          multiplyScalar(scalar) {
            if (scalar === 0) {
              return new ModulusPoly(this.field, new Int32Array([0]));
            }
            if (scalar === 1) {
              return this;
            }
            let size = this.coefficients.length;
            let product = new Int32Array(size);
            for (let i = 0; i < size; i++) {
              product[i] = this.field.multiply(this.coefficients[i], scalar);
            }
            return new ModulusPoly(this.field, product);
          }
          multiplyByMonomial(degree, coefficient) {
            if (degree < 0) {
              throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
              return new ModulusPoly(this.field, new Int32Array([0]));
            }
            let size = this.coefficients.length;
            let product = new Int32Array(size + degree);
            for (let i = 0; i < size; i++) {
              product[i] = this.field.multiply(this.coefficients[i], coefficient);
            }
            return new ModulusPoly(this.field, product);
          }
          toString() {
            let result = new StringBuilder();
            for (let degree = this.getDegree(); degree >= 0; degree--) {
              let coefficient = this.getCoefficient(degree);
              if (coefficient !== 0) {
                if (coefficient < 0) {
                  result.append(" - ");
                  coefficient = -coefficient;
                } else {
                  if (result.length() > 0) {
                    result.append(" + ");
                  }
                }
                if (degree === 0 || coefficient !== 1) {
                  result.append(coefficient);
                }
                if (degree !== 0) {
                  if (degree === 1) {
                    result.append("x");
                  } else {
                    result.append("x^");
                    result.append(degree);
                  }
                }
              }
            }
            return result.toString();
          }
        }
        class ModulusBase {
          add(a, b) {
            return (a + b) % this.modulus;
          }
          subtract(a, b) {
            return (this.modulus + a - b) % this.modulus;
          }
          exp(a) {
            return this.expTable[a];
          }
          log(a) {
            if (a === 0) {
              throw new IllegalArgumentException();
            }
            return this.logTable[a];
          }
          inverse(a) {
            if (a === 0) {
              throw new ArithmeticException();
            }
            return this.expTable[this.modulus - this.logTable[a] - 1];
          }
          multiply(a, b) {
            if (a === 0 || b === 0) {
              return 0;
            }
            return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.modulus - 1)];
          }
          getSize() {
            return this.modulus;
          }
          equals(o) {
            return o === this;
          }
        }
        class ModulusGF extends ModulusBase {
          constructor(modulus, generator) {
            super();
            this.modulus = modulus;
            this.expTable = new Int32Array(modulus);
            this.logTable = new Int32Array(modulus);
            let x = 1;
            for (let i = 0; i < modulus; i++) {
              this.expTable[i] = x;
              x = x * generator % modulus;
            }
            for (let i = 0; i < modulus - 1; i++) {
              this.logTable[this.expTable[i]] = i;
            }
            this.zero = new ModulusPoly(this, new Int32Array([0]));
            this.one = new ModulusPoly(this, new Int32Array([1]));
          }
          getZero() {
            return this.zero;
          }
          getOne() {
            return this.one;
          }
          buildMonomial(degree, coefficient) {
            if (degree < 0) {
              throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
              return this.zero;
            }
            let coefficients = new Int32Array(degree + 1);
            coefficients[0] = coefficient;
            return new ModulusPoly(this, coefficients);
          }
        }
        ModulusGF.PDF417_GF = new ModulusGF(PDF417Common.NUMBER_OF_CODEWORDS, 3);
        class ErrorCorrection {
          constructor() {
            this.field = ModulusGF.PDF417_GF;
          }
          decode(received, numECCodewords, erasures) {
            let poly = new ModulusPoly(this.field, received);
            let S = new Int32Array(numECCodewords);
            let error = false;
            for (let i = numECCodewords; i > 0; i--) {
              let evaluation = poly.evaluateAt(this.field.exp(i));
              S[numECCodewords - i] = evaluation;
              if (evaluation !== 0) {
                error = true;
              }
            }
            if (!error) {
              return 0;
            }
            let knownErrors = this.field.getOne();
            if (erasures != null) {
              for (const erasure of erasures) {
                let b = this.field.exp(received.length - 1 - erasure);
                let term = new ModulusPoly(this.field, new Int32Array([this.field.subtract(0, b), 1]));
                knownErrors = knownErrors.multiply(term);
              }
            }
            let syndrome = new ModulusPoly(this.field, S);
            let sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(numECCodewords, 1), syndrome, numECCodewords);
            let sigma = sigmaOmega[0];
            let omega = sigmaOmega[1];
            let errorLocations = this.findErrorLocations(sigma);
            let errorMagnitudes = this.findErrorMagnitudes(omega, sigma, errorLocations);
            for (let i = 0; i < errorLocations.length; i++) {
              let position = received.length - 1 - this.field.log(errorLocations[i]);
              if (position < 0) {
                throw ChecksumException.getChecksumInstance();
              }
              received[position] = this.field.subtract(received[position], errorMagnitudes[i]);
            }
            return errorLocations.length;
          }
          runEuclideanAlgorithm(a, b, R) {
            if (a.getDegree() < b.getDegree()) {
              let temp = a;
              a = b;
              b = temp;
            }
            let rLast = a;
            let r = b;
            let tLast = this.field.getZero();
            let t = this.field.getOne();
            while (r.getDegree() >= Math.round(R / 2)) {
              let rLastLast = rLast;
              let tLastLast = tLast;
              rLast = r;
              tLast = t;
              if (rLast.isZero()) {
                throw ChecksumException.getChecksumInstance();
              }
              r = rLastLast;
              let q = this.field.getZero();
              let denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
              let dltInverse = this.field.inverse(denominatorLeadingTerm);
              while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
                let degreeDiff = r.getDegree() - rLast.getDegree();
                let scale = this.field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
                q = q.add(this.field.buildMonomial(degreeDiff, scale));
                r = r.subtract(rLast.multiplyByMonomial(degreeDiff, scale));
              }
              t = q.multiply(tLast).subtract(tLastLast).negative();
            }
            let sigmaTildeAtZero = t.getCoefficient(0);
            if (sigmaTildeAtZero === 0) {
              throw ChecksumException.getChecksumInstance();
            }
            let inverse = this.field.inverse(sigmaTildeAtZero);
            let sigma = t.multiply(inverse);
            let omega = r.multiply(inverse);
            return [sigma, omega];
          }
          findErrorLocations(errorLocator) {
            let numErrors = errorLocator.getDegree();
            let result = new Int32Array(numErrors);
            let e = 0;
            for (let i = 1; i < this.field.getSize() && e < numErrors; i++) {
              if (errorLocator.evaluateAt(i) === 0) {
                result[e] = this.field.inverse(i);
                e++;
              }
            }
            if (e !== numErrors) {
              throw ChecksumException.getChecksumInstance();
            }
            return result;
          }
          findErrorMagnitudes(errorEvaluator, errorLocator, errorLocations) {
            let errorLocatorDegree = errorLocator.getDegree();
            let formalDerivativeCoefficients = new Int32Array(errorLocatorDegree);
            for (let i = 1; i <= errorLocatorDegree; i++) {
              formalDerivativeCoefficients[errorLocatorDegree - i] = this.field.multiply(i, errorLocator.getCoefficient(i));
            }
            let formalDerivative = new ModulusPoly(this.field, formalDerivativeCoefficients);
            let s = errorLocations.length;
            let result = new Int32Array(s);
            for (let i = 0; i < s; i++) {
              let xiInverse = this.field.inverse(errorLocations[i]);
              let numerator = this.field.subtract(0, errorEvaluator.evaluateAt(xiInverse));
              let denominator = this.field.inverse(formalDerivative.evaluateAt(xiInverse));
              result[i] = this.field.multiply(numerator, denominator);
            }
            return result;
          }
        }
        class BoundingBox {
          constructor(image, topLeft, bottomLeft, topRight, bottomRight) {
            if (image instanceof BoundingBox) {
              this.constructor_2(image);
            } else {
              this.constructor_1(image, topLeft, bottomLeft, topRight, bottomRight);
            }
          }
          constructor_1(image, topLeft, bottomLeft, topRight, bottomRight) {
            const leftUnspecified = topLeft == null || bottomLeft == null;
            const rightUnspecified = topRight == null || bottomRight == null;
            if (leftUnspecified && rightUnspecified) {
              throw new NotFoundException();
            }
            if (leftUnspecified) {
              topLeft = new ResultPoint(0, topRight.getY());
              bottomLeft = new ResultPoint(0, bottomRight.getY());
            } else if (rightUnspecified) {
              topRight = new ResultPoint(image.getWidth() - 1, topLeft.getY());
              bottomRight = new ResultPoint(image.getWidth() - 1, bottomLeft.getY());
            }
            this.image = image;
            this.topLeft = topLeft;
            this.bottomLeft = bottomLeft;
            this.topRight = topRight;
            this.bottomRight = bottomRight;
            this.minX = Math.trunc(Math.min(topLeft.getX(), bottomLeft.getX()));
            this.maxX = Math.trunc(Math.max(topRight.getX(), bottomRight.getX()));
            this.minY = Math.trunc(Math.min(topLeft.getY(), topRight.getY()));
            this.maxY = Math.trunc(Math.max(bottomLeft.getY(), bottomRight.getY()));
          }
          constructor_2(boundingBox) {
            this.image = boundingBox.image;
            this.topLeft = boundingBox.getTopLeft();
            this.bottomLeft = boundingBox.getBottomLeft();
            this.topRight = boundingBox.getTopRight();
            this.bottomRight = boundingBox.getBottomRight();
            this.minX = boundingBox.getMinX();
            this.maxX = boundingBox.getMaxX();
            this.minY = boundingBox.getMinY();
            this.maxY = boundingBox.getMaxY();
          }
          static merge(leftBox, rightBox) {
            if (leftBox == null) {
              return rightBox;
            }
            if (rightBox == null) {
              return leftBox;
            }
            return new BoundingBox(leftBox.image, leftBox.topLeft, leftBox.bottomLeft, rightBox.topRight, rightBox.bottomRight);
          }
          addMissingRows(missingStartRows, missingEndRows, isLeft) {
            let newTopLeft = this.topLeft;
            let newBottomLeft = this.bottomLeft;
            let newTopRight = this.topRight;
            let newBottomRight = this.bottomRight;
            if (missingStartRows > 0) {
              let top = isLeft ? this.topLeft : this.topRight;
              let newMinY = Math.trunc(top.getY() - missingStartRows);
              if (newMinY < 0) {
                newMinY = 0;
              }
              let newTop = new ResultPoint(top.getX(), newMinY);
              if (isLeft) {
                newTopLeft = newTop;
              } else {
                newTopRight = newTop;
              }
            }
            if (missingEndRows > 0) {
              let bottom = isLeft ? this.bottomLeft : this.bottomRight;
              let newMaxY = Math.trunc(bottom.getY() + missingEndRows);
              if (newMaxY >= this.image.getHeight()) {
                newMaxY = this.image.getHeight() - 1;
              }
              let newBottom = new ResultPoint(bottom.getX(), newMaxY);
              if (isLeft) {
                newBottomLeft = newBottom;
              } else {
                newBottomRight = newBottom;
              }
            }
            return new BoundingBox(this.image, newTopLeft, newBottomLeft, newTopRight, newBottomRight);
          }
          getMinX() {
            return this.minX;
          }
          getMaxX() {
            return this.maxX;
          }
          getMinY() {
            return this.minY;
          }
          getMaxY() {
            return this.maxY;
          }
          getTopLeft() {
            return this.topLeft;
          }
          getTopRight() {
            return this.topRight;
          }
          getBottomLeft() {
            return this.bottomLeft;
          }
          getBottomRight() {
            return this.bottomRight;
          }
        }
        class BarcodeMetadata {
          constructor(columnCount, rowCountUpperPart, rowCountLowerPart, errorCorrectionLevel) {
            this.columnCount = columnCount;
            this.errorCorrectionLevel = errorCorrectionLevel;
            this.rowCountUpperPart = rowCountUpperPart;
            this.rowCountLowerPart = rowCountLowerPart;
            this.rowCount = rowCountUpperPart + rowCountLowerPart;
          }
          getColumnCount() {
            return this.columnCount;
          }
          getErrorCorrectionLevel() {
            return this.errorCorrectionLevel;
          }
          getRowCount() {
            return this.rowCount;
          }
          getRowCountUpperPart() {
            return this.rowCountUpperPart;
          }
          getRowCountLowerPart() {
            return this.rowCountLowerPart;
          }
        }
        class Formatter {
          constructor() {
            this.buffer = "";
          }
          static form(str, arr) {
            let i = -1;
            function callback(exp, p0, p1, p2, p3, p4) {
              if (exp === "%%")
                return "%";
              if (arr[++i] === void 0)
                return void 0;
              exp = p2 ? parseInt(p2.substr(1)) : void 0;
              let base = p3 ? parseInt(p3.substr(1)) : void 0;
              let val;
              switch (p4) {
                case "s":
                  val = arr[i];
                  break;
                case "c":
                  val = arr[i][0];
                  break;
                case "f":
                  val = parseFloat(arr[i]).toFixed(exp);
                  break;
                case "p":
                  val = parseFloat(arr[i]).toPrecision(exp);
                  break;
                case "e":
                  val = parseFloat(arr[i]).toExponential(exp);
                  break;
                case "x":
                  val = parseInt(arr[i]).toString(base ? base : 16);
                  break;
                case "d":
                  val = parseFloat(parseInt(arr[i], base ? base : 10).toPrecision(exp)).toFixed(0);
                  break;
              }
              val = typeof val === "object" ? JSON.stringify(val) : (+val).toString(base);
              let size = parseInt(p1);
              let ch = p1 && p1[0] + "" === "0" ? "0" : " ";
              while (val.length < size)
                val = p0 !== void 0 ? val + ch : ch + val;
              return val;
            }
            let regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
            return str.replace(regex, callback);
          }
          format(append, ...args) {
            this.buffer += Formatter.form(append, args);
          }
          toString() {
            return this.buffer;
          }
        }
        class DetectionResultColumn {
          constructor(boundingBox) {
            this.boundingBox = new BoundingBox(boundingBox);
            this.codewords = new Array(boundingBox.getMaxY() - boundingBox.getMinY() + 1);
          }
          getCodewordNearby(imageRow) {
            let codeword = this.getCodeword(imageRow);
            if (codeword != null) {
              return codeword;
            }
            for (let i = 1; i < DetectionResultColumn.MAX_NEARBY_DISTANCE; i++) {
              let nearImageRow = this.imageRowToCodewordIndex(imageRow) - i;
              if (nearImageRow >= 0) {
                codeword = this.codewords[nearImageRow];
                if (codeword != null) {
                  return codeword;
                }
              }
              nearImageRow = this.imageRowToCodewordIndex(imageRow) + i;
              if (nearImageRow < this.codewords.length) {
                codeword = this.codewords[nearImageRow];
                if (codeword != null) {
                  return codeword;
                }
              }
            }
            return null;
          }
          imageRowToCodewordIndex(imageRow) {
            return imageRow - this.boundingBox.getMinY();
          }
          setCodeword(imageRow, codeword) {
            this.codewords[this.imageRowToCodewordIndex(imageRow)] = codeword;
          }
          getCodeword(imageRow) {
            return this.codewords[this.imageRowToCodewordIndex(imageRow)];
          }
          getBoundingBox() {
            return this.boundingBox;
          }
          getCodewords() {
            return this.codewords;
          }
          toString() {
            const formatter = new Formatter();
            let row = 0;
            for (const codeword of this.codewords) {
              if (codeword == null) {
                formatter.format("%3d:    |   %n", row++);
                continue;
              }
              formatter.format("%3d: %3d|%3d%n", row++, codeword.getRowNumber(), codeword.getValue());
            }
            return formatter.toString();
          }
        }
        DetectionResultColumn.MAX_NEARBY_DISTANCE = 5;
        class BarcodeValue {
          constructor() {
            this.values = /* @__PURE__ */ new Map();
          }
          setValue(value) {
            value = Math.trunc(value);
            let confidence = this.values.get(value);
            if (confidence == null) {
              confidence = 0;
            }
            confidence++;
            this.values.set(value, confidence);
          }
          getValue() {
            let maxConfidence = -1;
            let result = new Array();
            for (const [key, value] of this.values.entries()) {
              const entry = {
                getKey: () => key,
                getValue: () => value
              };
              if (entry.getValue() > maxConfidence) {
                maxConfidence = entry.getValue();
                result = [];
                result.push(entry.getKey());
              } else if (entry.getValue() === maxConfidence) {
                result.push(entry.getKey());
              }
            }
            return PDF417Common.toIntArray(result);
          }
          getConfidence(value) {
            return this.values.get(value);
          }
        }
        class DetectionResultRowIndicatorColumn extends DetectionResultColumn {
          constructor(boundingBox, isLeft) {
            super(boundingBox);
            this._isLeft = isLeft;
          }
          setRowNumbers() {
            for (let codeword of this.getCodewords()) {
              if (codeword != null) {
                codeword.setRowNumberAsRowIndicatorColumn();
              }
            }
          }
          adjustCompleteIndicatorColumnRowNumbers(barcodeMetadata) {
            let codewords = this.getCodewords();
            this.setRowNumbers();
            this.removeIncorrectCodewords(codewords, barcodeMetadata);
            let boundingBox = this.getBoundingBox();
            let top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
            let bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
            let firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
            let lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
            let barcodeRow = -1;
            let maxRowHeight = 1;
            let currentRowHeight = 0;
            for (let codewordsRow = firstRow; codewordsRow < lastRow; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                continue;
              }
              let codeword = codewords[codewordsRow];
              let rowDifference = codeword.getRowNumber() - barcodeRow;
              if (rowDifference === 0) {
                currentRowHeight++;
              } else if (rowDifference === 1) {
                maxRowHeight = Math.max(maxRowHeight, currentRowHeight);
                currentRowHeight = 1;
                barcodeRow = codeword.getRowNumber();
              } else if (rowDifference < 0 || codeword.getRowNumber() >= barcodeMetadata.getRowCount() || rowDifference > codewordsRow) {
                codewords[codewordsRow] = null;
              } else {
                let checkedRows;
                if (maxRowHeight > 2) {
                  checkedRows = (maxRowHeight - 2) * rowDifference;
                } else {
                  checkedRows = rowDifference;
                }
                let closePreviousCodewordFound = checkedRows >= codewordsRow;
                for (let i = 1; i <= checkedRows && !closePreviousCodewordFound; i++) {
                  closePreviousCodewordFound = codewords[codewordsRow - i] != null;
                }
                if (closePreviousCodewordFound) {
                  codewords[codewordsRow] = null;
                } else {
                  barcodeRow = codeword.getRowNumber();
                  currentRowHeight = 1;
                }
              }
            }
          }
          getRowHeights() {
            let barcodeMetadata = this.getBarcodeMetadata();
            if (barcodeMetadata == null) {
              return null;
            }
            this.adjustIncompleteIndicatorColumnRowNumbers(barcodeMetadata);
            let result = new Int32Array(barcodeMetadata.getRowCount());
            for (let codeword of this.getCodewords()) {
              if (codeword != null) {
                let rowNumber = codeword.getRowNumber();
                if (rowNumber >= result.length) {
                  continue;
                }
                result[rowNumber]++;
              }
            }
            return result;
          }
          adjustIncompleteIndicatorColumnRowNumbers(barcodeMetadata) {
            let boundingBox = this.getBoundingBox();
            let top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
            let bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
            let firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
            let lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
            let codewords = this.getCodewords();
            let barcodeRow = -1;
            for (let codewordsRow = firstRow; codewordsRow < lastRow; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                continue;
              }
              let codeword = codewords[codewordsRow];
              codeword.setRowNumberAsRowIndicatorColumn();
              let rowDifference = codeword.getRowNumber() - barcodeRow;
              if (rowDifference === 0)
                ;
              else if (rowDifference === 1) {
                barcodeRow = codeword.getRowNumber();
              } else if (codeword.getRowNumber() >= barcodeMetadata.getRowCount()) {
                codewords[codewordsRow] = null;
              } else {
                barcodeRow = codeword.getRowNumber();
              }
            }
          }
          getBarcodeMetadata() {
            let codewords = this.getCodewords();
            let barcodeColumnCount = new BarcodeValue();
            let barcodeRowCountUpperPart = new BarcodeValue();
            let barcodeRowCountLowerPart = new BarcodeValue();
            let barcodeECLevel = new BarcodeValue();
            for (let codeword of codewords) {
              if (codeword == null) {
                continue;
              }
              codeword.setRowNumberAsRowIndicatorColumn();
              let rowIndicatorValue = codeword.getValue() % 30;
              let codewordRowNumber = codeword.getRowNumber();
              if (!this._isLeft) {
                codewordRowNumber += 2;
              }
              switch (codewordRowNumber % 3) {
                case 0:
                  barcodeRowCountUpperPart.setValue(rowIndicatorValue * 3 + 1);
                  break;
                case 1:
                  barcodeECLevel.setValue(rowIndicatorValue / 3);
                  barcodeRowCountLowerPart.setValue(rowIndicatorValue % 3);
                  break;
                case 2:
                  barcodeColumnCount.setValue(rowIndicatorValue + 1);
                  break;
              }
            }
            if (barcodeColumnCount.getValue().length === 0 || barcodeRowCountUpperPart.getValue().length === 0 || barcodeRowCountLowerPart.getValue().length === 0 || barcodeECLevel.getValue().length === 0 || barcodeColumnCount.getValue()[0] < 1 || barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] < PDF417Common.MIN_ROWS_IN_BARCODE || barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] > PDF417Common.MAX_ROWS_IN_BARCODE) {
              return null;
            }
            let barcodeMetadata = new BarcodeMetadata(barcodeColumnCount.getValue()[0], barcodeRowCountUpperPart.getValue()[0], barcodeRowCountLowerPart.getValue()[0], barcodeECLevel.getValue()[0]);
            this.removeIncorrectCodewords(codewords, barcodeMetadata);
            return barcodeMetadata;
          }
          removeIncorrectCodewords(codewords, barcodeMetadata) {
            for (let codewordRow = 0; codewordRow < codewords.length; codewordRow++) {
              let codeword = codewords[codewordRow];
              if (codewords[codewordRow] == null) {
                continue;
              }
              let rowIndicatorValue = codeword.getValue() % 30;
              let codewordRowNumber = codeword.getRowNumber();
              if (codewordRowNumber > barcodeMetadata.getRowCount()) {
                codewords[codewordRow] = null;
                continue;
              }
              if (!this._isLeft) {
                codewordRowNumber += 2;
              }
              switch (codewordRowNumber % 3) {
                case 0:
                  if (rowIndicatorValue * 3 + 1 !== barcodeMetadata.getRowCountUpperPart()) {
                    codewords[codewordRow] = null;
                  }
                  break;
                case 1:
                  if (Math.trunc(rowIndicatorValue / 3) !== barcodeMetadata.getErrorCorrectionLevel() || rowIndicatorValue % 3 !== barcodeMetadata.getRowCountLowerPart()) {
                    codewords[codewordRow] = null;
                  }
                  break;
                case 2:
                  if (rowIndicatorValue + 1 !== barcodeMetadata.getColumnCount()) {
                    codewords[codewordRow] = null;
                  }
                  break;
              }
            }
          }
          isLeft() {
            return this._isLeft;
          }
          toString() {
            return "IsLeft: " + this._isLeft + "\n" + super.toString();
          }
        }
        class DetectionResult {
          constructor(barcodeMetadata, boundingBox) {
            this.ADJUST_ROW_NUMBER_SKIP = 2;
            this.barcodeMetadata = barcodeMetadata;
            this.barcodeColumnCount = barcodeMetadata.getColumnCount();
            this.boundingBox = boundingBox;
            this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
          }
          getDetectionResultColumns() {
            this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]);
            this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
            let unadjustedCodewordCount = PDF417Common.MAX_CODEWORDS_IN_BARCODE;
            let previousUnadjustedCount;
            do {
              previousUnadjustedCount = unadjustedCodewordCount;
              unadjustedCodewordCount = this.adjustRowNumbersAndGetCount();
            } while (unadjustedCodewordCount > 0 && unadjustedCodewordCount < previousUnadjustedCount);
            return this.detectionResultColumns;
          }
          adjustIndicatorColumnRowNumbers(detectionResultColumn) {
            if (detectionResultColumn != null) {
              detectionResultColumn.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
            }
          }
          adjustRowNumbersAndGetCount() {
            let unadjustedCount = this.adjustRowNumbersByRow();
            if (unadjustedCount === 0) {
              return 0;
            }
            for (let barcodeColumn = 1; barcodeColumn < this.barcodeColumnCount + 1; barcodeColumn++) {
              let codewords = this.detectionResultColumns[barcodeColumn].getCodewords();
              for (let codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
                if (codewords[codewordsRow] == null) {
                  continue;
                }
                if (!codewords[codewordsRow].hasValidRowNumber()) {
                  this.adjustRowNumbers(barcodeColumn, codewordsRow, codewords);
                }
              }
            }
            return unadjustedCount;
          }
          adjustRowNumbersByRow() {
            this.adjustRowNumbersFromBothRI();
            let unadjustedCount = this.adjustRowNumbersFromLRI();
            return unadjustedCount + this.adjustRowNumbersFromRRI();
          }
          adjustRowNumbersFromBothRI() {
            if (this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
              return;
            }
            let LRIcodewords = this.detectionResultColumns[0].getCodewords();
            let RRIcodewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
            for (let codewordsRow = 0; codewordsRow < LRIcodewords.length; codewordsRow++) {
              if (LRIcodewords[codewordsRow] != null && RRIcodewords[codewordsRow] != null && LRIcodewords[codewordsRow].getRowNumber() === RRIcodewords[codewordsRow].getRowNumber()) {
                for (let barcodeColumn = 1; barcodeColumn <= this.barcodeColumnCount; barcodeColumn++) {
                  let codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                  if (codeword == null) {
                    continue;
                  }
                  codeword.setRowNumber(LRIcodewords[codewordsRow].getRowNumber());
                  if (!codeword.hasValidRowNumber()) {
                    this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow] = null;
                  }
                }
              }
            }
          }
          adjustRowNumbersFromRRI() {
            if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
              return 0;
            }
            let unadjustedCount = 0;
            let codewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
            for (let codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                continue;
              }
              let rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
              let invalidRowCounts = 0;
              for (let barcodeColumn = this.barcodeColumnCount + 1; barcodeColumn > 0 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn--) {
                let codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                if (codeword != null) {
                  invalidRowCounts = DetectionResult.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
                  if (!codeword.hasValidRowNumber()) {
                    unadjustedCount++;
                  }
                }
              }
            }
            return unadjustedCount;
          }
          adjustRowNumbersFromLRI() {
            if (this.detectionResultColumns[0] == null) {
              return 0;
            }
            let unadjustedCount = 0;
            let codewords = this.detectionResultColumns[0].getCodewords();
            for (let codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                continue;
              }
              let rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
              let invalidRowCounts = 0;
              for (let barcodeColumn = 1; barcodeColumn < this.barcodeColumnCount + 1 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn++) {
                let codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                if (codeword != null) {
                  invalidRowCounts = DetectionResult.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
                  if (!codeword.hasValidRowNumber()) {
                    unadjustedCount++;
                  }
                }
              }
            }
            return unadjustedCount;
          }
          static adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword) {
            if (codeword == null) {
              return invalidRowCounts;
            }
            if (!codeword.hasValidRowNumber()) {
              if (codeword.isValidRowNumber(rowIndicatorRowNumber)) {
                codeword.setRowNumber(rowIndicatorRowNumber);
                invalidRowCounts = 0;
              } else {
                ++invalidRowCounts;
              }
            }
            return invalidRowCounts;
          }
          adjustRowNumbers(barcodeColumn, codewordsRow, codewords) {
            if (!this.detectionResultColumns[barcodeColumn - 1]) {
              return;
            }
            let codeword = codewords[codewordsRow];
            let previousColumnCodewords = this.detectionResultColumns[barcodeColumn - 1].getCodewords();
            let nextColumnCodewords = previousColumnCodewords;
            if (this.detectionResultColumns[barcodeColumn + 1] != null) {
              nextColumnCodewords = this.detectionResultColumns[barcodeColumn + 1].getCodewords();
            }
            let otherCodewords = new Array(14);
            otherCodewords[2] = previousColumnCodewords[codewordsRow];
            otherCodewords[3] = nextColumnCodewords[codewordsRow];
            if (codewordsRow > 0) {
              otherCodewords[0] = codewords[codewordsRow - 1];
              otherCodewords[4] = previousColumnCodewords[codewordsRow - 1];
              otherCodewords[5] = nextColumnCodewords[codewordsRow - 1];
            }
            if (codewordsRow > 1) {
              otherCodewords[8] = codewords[codewordsRow - 2];
              otherCodewords[10] = previousColumnCodewords[codewordsRow - 2];
              otherCodewords[11] = nextColumnCodewords[codewordsRow - 2];
            }
            if (codewordsRow < codewords.length - 1) {
              otherCodewords[1] = codewords[codewordsRow + 1];
              otherCodewords[6] = previousColumnCodewords[codewordsRow + 1];
              otherCodewords[7] = nextColumnCodewords[codewordsRow + 1];
            }
            if (codewordsRow < codewords.length - 2) {
              otherCodewords[9] = codewords[codewordsRow + 2];
              otherCodewords[12] = previousColumnCodewords[codewordsRow + 2];
              otherCodewords[13] = nextColumnCodewords[codewordsRow + 2];
            }
            for (let otherCodeword of otherCodewords) {
              if (DetectionResult.adjustRowNumber(codeword, otherCodeword)) {
                return;
              }
            }
          }
          static adjustRowNumber(codeword, otherCodeword) {
            if (otherCodeword == null) {
              return false;
            }
            if (otherCodeword.hasValidRowNumber() && otherCodeword.getBucket() === codeword.getBucket()) {
              codeword.setRowNumber(otherCodeword.getRowNumber());
              return true;
            }
            return false;
          }
          getBarcodeColumnCount() {
            return this.barcodeColumnCount;
          }
          getBarcodeRowCount() {
            return this.barcodeMetadata.getRowCount();
          }
          getBarcodeECLevel() {
            return this.barcodeMetadata.getErrorCorrectionLevel();
          }
          setBoundingBox(boundingBox) {
            this.boundingBox = boundingBox;
          }
          getBoundingBox() {
            return this.boundingBox;
          }
          setDetectionResultColumn(barcodeColumn, detectionResultColumn) {
            this.detectionResultColumns[barcodeColumn] = detectionResultColumn;
          }
          getDetectionResultColumn(barcodeColumn) {
            return this.detectionResultColumns[barcodeColumn];
          }
          toString() {
            let rowIndicatorColumn = this.detectionResultColumns[0];
            if (rowIndicatorColumn == null) {
              rowIndicatorColumn = this.detectionResultColumns[this.barcodeColumnCount + 1];
            }
            let formatter = new Formatter();
            for (let codewordsRow = 0; codewordsRow < rowIndicatorColumn.getCodewords().length; codewordsRow++) {
              formatter.format("CW %3d:", codewordsRow);
              for (let barcodeColumn = 0; barcodeColumn < this.barcodeColumnCount + 2; barcodeColumn++) {
                if (this.detectionResultColumns[barcodeColumn] == null) {
                  formatter.format("    |   ");
                  continue;
                }
                let codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                if (codeword == null) {
                  formatter.format("    |   ");
                  continue;
                }
                formatter.format(" %3d|%3d", codeword.getRowNumber(), codeword.getValue());
              }
              formatter.format("%n");
            }
            return formatter.toString();
          }
        }
        class Codeword {
          constructor(startX, endX, bucket, value) {
            this.rowNumber = Codeword.BARCODE_ROW_UNKNOWN;
            this.startX = Math.trunc(startX);
            this.endX = Math.trunc(endX);
            this.bucket = Math.trunc(bucket);
            this.value = Math.trunc(value);
          }
          hasValidRowNumber() {
            return this.isValidRowNumber(this.rowNumber);
          }
          isValidRowNumber(rowNumber) {
            return rowNumber !== Codeword.BARCODE_ROW_UNKNOWN && this.bucket === rowNumber % 3 * 3;
          }
          setRowNumberAsRowIndicatorColumn() {
            this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
          }
          getWidth() {
            return this.endX - this.startX;
          }
          getStartX() {
            return this.startX;
          }
          getEndX() {
            return this.endX;
          }
          getBucket() {
            return this.bucket;
          }
          getValue() {
            return this.value;
          }
          getRowNumber() {
            return this.rowNumber;
          }
          setRowNumber(rowNumber) {
            this.rowNumber = rowNumber;
          }
          toString() {
            return this.rowNumber + "|" + this.value;
          }
        }
        Codeword.BARCODE_ROW_UNKNOWN = -1;
        class PDF417CodewordDecoder {
          static initialize() {
            for (let i = 0; i < PDF417Common.SYMBOL_TABLE.length; i++) {
              let currentSymbol = PDF417Common.SYMBOL_TABLE[i];
              let currentBit = currentSymbol & 1;
              for (let j = 0; j < PDF417Common.BARS_IN_MODULE; j++) {
                let size = 0;
                while ((currentSymbol & 1) === currentBit) {
                  size += 1;
                  currentSymbol >>= 1;
                }
                currentBit = currentSymbol & 1;
                if (!PDF417CodewordDecoder.RATIOS_TABLE[i]) {
                  PDF417CodewordDecoder.RATIOS_TABLE[i] = new Array(PDF417Common.BARS_IN_MODULE);
                }
                PDF417CodewordDecoder.RATIOS_TABLE[i][PDF417Common.BARS_IN_MODULE - j - 1] = Math.fround(size / PDF417Common.MODULES_IN_CODEWORD);
              }
            }
            this.bSymbolTableReady = true;
          }
          static getDecodedValue(moduleBitCount) {
            let decodedValue = PDF417CodewordDecoder.getDecodedCodewordValue(PDF417CodewordDecoder.sampleBitCounts(moduleBitCount));
            if (decodedValue !== -1) {
              return decodedValue;
            }
            return PDF417CodewordDecoder.getClosestDecodedValue(moduleBitCount);
          }
          static sampleBitCounts(moduleBitCount) {
            let bitCountSum = MathUtils.sum(moduleBitCount);
            let result = new Int32Array(PDF417Common.BARS_IN_MODULE);
            let bitCountIndex = 0;
            let sumPreviousBits = 0;
            for (let i = 0; i < PDF417Common.MODULES_IN_CODEWORD; i++) {
              let sampleIndex = bitCountSum / (2 * PDF417Common.MODULES_IN_CODEWORD) + i * bitCountSum / PDF417Common.MODULES_IN_CODEWORD;
              if (sumPreviousBits + moduleBitCount[bitCountIndex] <= sampleIndex) {
                sumPreviousBits += moduleBitCount[bitCountIndex];
                bitCountIndex++;
              }
              result[bitCountIndex]++;
            }
            return result;
          }
          static getDecodedCodewordValue(moduleBitCount) {
            let decodedValue = PDF417CodewordDecoder.getBitValue(moduleBitCount);
            return PDF417Common.getCodeword(decodedValue) === -1 ? -1 : decodedValue;
          }
          static getBitValue(moduleBitCount) {
            let result = 0;
            for (let i = 0; i < moduleBitCount.length; i++) {
              for (let bit = 0; bit < moduleBitCount[i]; bit++) {
                result = result << 1 | (i % 2 === 0 ? 1 : 0);
              }
            }
            return Math.trunc(result);
          }
          static getClosestDecodedValue(moduleBitCount) {
            let bitCountSum = MathUtils.sum(moduleBitCount);
            let bitCountRatios = new Array(PDF417Common.BARS_IN_MODULE);
            if (bitCountSum > 1) {
              for (let i = 0; i < bitCountRatios.length; i++) {
                bitCountRatios[i] = Math.fround(moduleBitCount[i] / bitCountSum);
              }
            }
            let bestMatchError = Float.MAX_VALUE;
            let bestMatch = -1;
            if (!this.bSymbolTableReady) {
              PDF417CodewordDecoder.initialize();
            }
            for (let j = 0; j < PDF417CodewordDecoder.RATIOS_TABLE.length; j++) {
              let error = 0;
              let ratioTableRow = PDF417CodewordDecoder.RATIOS_TABLE[j];
              for (let k = 0; k < PDF417Common.BARS_IN_MODULE; k++) {
                let diff = Math.fround(ratioTableRow[k] - bitCountRatios[k]);
                error += Math.fround(diff * diff);
                if (error >= bestMatchError) {
                  break;
                }
              }
              if (error < bestMatchError) {
                bestMatchError = error;
                bestMatch = PDF417Common.SYMBOL_TABLE[j];
              }
            }
            return bestMatch;
          }
        }
        PDF417CodewordDecoder.bSymbolTableReady = false;
        PDF417CodewordDecoder.RATIOS_TABLE = new Array(PDF417Common.SYMBOL_TABLE.length).map((x) => x = new Array(PDF417Common.BARS_IN_MODULE));
        class PDF417ResultMetadata {
          constructor() {
            this.segmentCount = -1;
            this.fileSize = -1;
            this.timestamp = -1;
            this.checksum = -1;
          }
          getSegmentIndex() {
            return this.segmentIndex;
          }
          setSegmentIndex(segmentIndex) {
            this.segmentIndex = segmentIndex;
          }
          getFileId() {
            return this.fileId;
          }
          setFileId(fileId) {
            this.fileId = fileId;
          }
          getOptionalData() {
            return this.optionalData;
          }
          setOptionalData(optionalData) {
            this.optionalData = optionalData;
          }
          isLastSegment() {
            return this.lastSegment;
          }
          setLastSegment(lastSegment) {
            this.lastSegment = lastSegment;
          }
          getSegmentCount() {
            return this.segmentCount;
          }
          setSegmentCount(segmentCount) {
            this.segmentCount = segmentCount;
          }
          getSender() {
            return this.sender || null;
          }
          setSender(sender) {
            this.sender = sender;
          }
          getAddressee() {
            return this.addressee || null;
          }
          setAddressee(addressee) {
            this.addressee = addressee;
          }
          getFileName() {
            return this.fileName;
          }
          setFileName(fileName) {
            this.fileName = fileName;
          }
          getFileSize() {
            return this.fileSize;
          }
          setFileSize(fileSize) {
            this.fileSize = fileSize;
          }
          getChecksum() {
            return this.checksum;
          }
          setChecksum(checksum) {
            this.checksum = checksum;
          }
          getTimestamp() {
            return this.timestamp;
          }
          setTimestamp(timestamp) {
            this.timestamp = timestamp;
          }
        }
        class Long {
          static parseLong(num, radix = void 0) {
            return parseInt(num, radix);
          }
        }
        class NullPointerException extends Exception {
        }
        NullPointerException.kind = "NullPointerException";
        class OutputStream {
          writeBytes(b) {
            this.writeBytesOffset(b, 0, b.length);
          }
          writeBytesOffset(b, off, len) {
            if (b == null) {
              throw new NullPointerException();
            } else if (off < 0 || off > b.length || len < 0 || off + len > b.length || off + len < 0) {
              throw new IndexOutOfBoundsException();
            } else if (len === 0) {
              return;
            }
            for (let i = 0; i < len; i++) {
              this.write(b[off + i]);
            }
          }
          flush() {
          }
          close() {
          }
        }
        class OutOfMemoryError extends Exception {
        }
        class ByteArrayOutputStream extends OutputStream {
          constructor(size = 32) {
            super();
            this.count = 0;
            if (size < 0) {
              throw new IllegalArgumentException("Negative initial size: " + size);
            }
            this.buf = new Uint8Array(size);
          }
          ensureCapacity(minCapacity) {
            if (minCapacity - this.buf.length > 0)
              this.grow(minCapacity);
          }
          grow(minCapacity) {
            let oldCapacity = this.buf.length;
            let newCapacity = oldCapacity << 1;
            if (newCapacity - minCapacity < 0)
              newCapacity = minCapacity;
            if (newCapacity < 0) {
              if (minCapacity < 0)
                throw new OutOfMemoryError();
              newCapacity = Integer.MAX_VALUE;
            }
            this.buf = Arrays.copyOfUint8Array(this.buf, newCapacity);
          }
          write(b) {
            this.ensureCapacity(this.count + 1);
            this.buf[this.count] = b;
            this.count += 1;
          }
          writeBytesOffset(b, off, len) {
            if (off < 0 || off > b.length || len < 0 || off + len - b.length > 0) {
              throw new IndexOutOfBoundsException();
            }
            this.ensureCapacity(this.count + len);
            System.arraycopy(b, off, this.buf, this.count, len);
            this.count += len;
          }
          writeTo(out) {
            out.writeBytesOffset(this.buf, 0, this.count);
          }
          reset() {
            this.count = 0;
          }
          toByteArray() {
            return Arrays.copyOfUint8Array(this.buf, this.count);
          }
          size() {
            return this.count;
          }
          toString(param) {
            if (!param) {
              return this.toString_void();
            }
            if (typeof param === "string") {
              return this.toString_string(param);
            }
            return this.toString_number(param);
          }
          toString_void() {
            return new String(this.buf).toString();
          }
          toString_string(charsetName) {
            return new String(this.buf).toString();
          }
          toString_number(hibyte) {
            return new String(this.buf).toString();
          }
          close() {
          }
        }
        var Mode$2;
        (function(Mode2) {
          Mode2[Mode2["ALPHA"] = 0] = "ALPHA";
          Mode2[Mode2["LOWER"] = 1] = "LOWER";
          Mode2[Mode2["MIXED"] = 2] = "MIXED";
          Mode2[Mode2["PUNCT"] = 3] = "PUNCT";
          Mode2[Mode2["ALPHA_SHIFT"] = 4] = "ALPHA_SHIFT";
          Mode2[Mode2["PUNCT_SHIFT"] = 5] = "PUNCT_SHIFT";
        })(Mode$2 || (Mode$2 = {}));
        function getBigIntConstructor() {
          if (typeof window !== "undefined") {
            return window["BigInt"] || null;
          }
          if (typeof global !== "undefined") {
            return global["BigInt"] || null;
          }
          if (typeof self !== "undefined") {
            return self["BigInt"] || null;
          }
          throw new Error("Can't search globals for BigInt!");
        }
        let BigInteger;
        function createBigInt(num) {
          if (typeof BigInteger === "undefined") {
            BigInteger = getBigIntConstructor();
          }
          if (BigInteger === null) {
            throw new Error("BigInt is not supported!");
          }
          return BigInteger(num);
        }
        function getEXP900() {
          let EXP900 = [];
          EXP900[0] = createBigInt(1);
          let nineHundred = createBigInt(900);
          EXP900[1] = nineHundred;
          for (let i = 2; i < 16; i++) {
            EXP900[i] = EXP900[i - 1] * nineHundred;
          }
          return EXP900;
        }
        class DecodedBitStreamParser$2 {
          static decode(codewords, ecLevel) {
            let result = new StringBuilder("");
            let encoding = CharacterSetECI.ISO8859_1;
            result.enableDecoding(encoding);
            let codeIndex = 1;
            let code = codewords[codeIndex++];
            let resultMetadata = new PDF417ResultMetadata();
            while (codeIndex < codewords[0]) {
              switch (code) {
                case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                  codeIndex = DecodedBitStreamParser$2.textCompaction(codewords, codeIndex, result);
                  break;
                case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH:
                case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6:
                  codeIndex = DecodedBitStreamParser$2.byteCompaction(code, codewords, encoding, codeIndex, result);
                  break;
                case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  result.append(codewords[codeIndex++]);
                  break;
                case DecodedBitStreamParser$2.NUMERIC_COMPACTION_MODE_LATCH:
                  codeIndex = DecodedBitStreamParser$2.numericCompaction(codewords, codeIndex, result);
                  break;
                case DecodedBitStreamParser$2.ECI_CHARSET:
                  let charsetECI = CharacterSetECI.getCharacterSetECIByValue(codewords[codeIndex++]);
                  break;
                case DecodedBitStreamParser$2.ECI_GENERAL_PURPOSE:
                  codeIndex += 2;
                  break;
                case DecodedBitStreamParser$2.ECI_USER_DEFINED:
                  codeIndex++;
                  break;
                case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  codeIndex = DecodedBitStreamParser$2.decodeMacroBlock(codewords, codeIndex, resultMetadata);
                  break;
                case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR:
                  throw new FormatException();
                default:
                  codeIndex--;
                  codeIndex = DecodedBitStreamParser$2.textCompaction(codewords, codeIndex, result);
                  break;
              }
              if (codeIndex < codewords.length) {
                code = codewords[codeIndex++];
              } else {
                throw FormatException.getFormatInstance();
              }
            }
            if (result.length() === 0) {
              throw FormatException.getFormatInstance();
            }
            let decoderResult = new DecoderResult(null, result.toString(), null, ecLevel);
            decoderResult.setOther(resultMetadata);
            return decoderResult;
          }
          static decodeMacroBlock(codewords, codeIndex, resultMetadata) {
            if (codeIndex + DecodedBitStreamParser$2.NUMBER_OF_SEQUENCE_CODEWORDS > codewords[0]) {
              throw FormatException.getFormatInstance();
            }
            let segmentIndexArray = new Int32Array(DecodedBitStreamParser$2.NUMBER_OF_SEQUENCE_CODEWORDS);
            for (let i = 0; i < DecodedBitStreamParser$2.NUMBER_OF_SEQUENCE_CODEWORDS; i++, codeIndex++) {
              segmentIndexArray[i] = codewords[codeIndex];
            }
            resultMetadata.setSegmentIndex(Integer.parseInt(DecodedBitStreamParser$2.decodeBase900toBase10(segmentIndexArray, DecodedBitStreamParser$2.NUMBER_OF_SEQUENCE_CODEWORDS)));
            let fileId = new StringBuilder();
            codeIndex = DecodedBitStreamParser$2.textCompaction(codewords, codeIndex, fileId);
            resultMetadata.setFileId(fileId.toString());
            let optionalFieldsStart = -1;
            if (codewords[codeIndex] === DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD) {
              optionalFieldsStart = codeIndex + 1;
            }
            while (codeIndex < codewords[0]) {
              switch (codewords[codeIndex]) {
                case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  codeIndex++;
                  switch (codewords[codeIndex]) {
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                      let fileName = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.textCompaction(codewords, codeIndex + 1, fileName);
                      resultMetadata.setFileName(fileName.toString());
                      break;
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                      let sender = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.textCompaction(codewords, codeIndex + 1, sender);
                      resultMetadata.setSender(sender.toString());
                      break;
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                      let addressee = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.textCompaction(codewords, codeIndex + 1, addressee);
                      resultMetadata.setAddressee(addressee.toString());
                      break;
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                      let segmentCount = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.numericCompaction(codewords, codeIndex + 1, segmentCount);
                      resultMetadata.setSegmentCount(Integer.parseInt(segmentCount.toString()));
                      break;
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                      let timestamp = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.numericCompaction(codewords, codeIndex + 1, timestamp);
                      resultMetadata.setTimestamp(Long.parseLong(timestamp.toString()));
                      break;
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                      let checksum = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.numericCompaction(codewords, codeIndex + 1, checksum);
                      resultMetadata.setChecksum(Integer.parseInt(checksum.toString()));
                      break;
                    case DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                      let fileSize = new StringBuilder();
                      codeIndex = DecodedBitStreamParser$2.numericCompaction(codewords, codeIndex + 1, fileSize);
                      resultMetadata.setFileSize(Long.parseLong(fileSize.toString()));
                      break;
                    default:
                      throw FormatException.getFormatInstance();
                  }
                  break;
                case DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR:
                  codeIndex++;
                  resultMetadata.setLastSegment(true);
                  break;
                default:
                  throw FormatException.getFormatInstance();
              }
            }
            if (optionalFieldsStart !== -1) {
              let optionalFieldsLength = codeIndex - optionalFieldsStart;
              if (resultMetadata.isLastSegment()) {
                optionalFieldsLength--;
              }
              resultMetadata.setOptionalData(Arrays.copyOfRange(codewords, optionalFieldsStart, optionalFieldsStart + optionalFieldsLength));
            }
            return codeIndex;
          }
          static textCompaction(codewords, codeIndex, result) {
            let textCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
            let byteCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
            let index = 0;
            let end = false;
            while (codeIndex < codewords[0] && !end) {
              let code = codewords[codeIndex++];
              if (code < DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH) {
                textCompactionData[index] = code / 30;
                textCompactionData[index + 1] = code % 30;
                index += 2;
              } else {
                switch (code) {
                  case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                    textCompactionData[index++] = DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH;
                    break;
                  case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH:
                  case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6:
                  case DecodedBitStreamParser$2.NUMERIC_COMPACTION_MODE_LATCH:
                  case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR:
                    codeIndex--;
                    end = true;
                    break;
                  case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    textCompactionData[index] = DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE;
                    code = codewords[codeIndex++];
                    byteCompactionData[index] = code;
                    index++;
                    break;
                }
              }
            }
            DecodedBitStreamParser$2.decodeTextCompaction(textCompactionData, byteCompactionData, index, result);
            return codeIndex;
          }
          static decodeTextCompaction(textCompactionData, byteCompactionData, length, result) {
            let subMode = Mode$2.ALPHA;
            let priorToShiftMode = Mode$2.ALPHA;
            let i = 0;
            while (i < length) {
              let subModeCh = textCompactionData[i];
              let ch = "";
              switch (subMode) {
                case Mode$2.ALPHA:
                  if (subModeCh < 26) {
                    ch = String.fromCharCode(65 + subModeCh);
                  } else {
                    switch (subModeCh) {
                      case 26:
                        ch = " ";
                        break;
                      case DecodedBitStreamParser$2.LL:
                        subMode = Mode$2.LOWER;
                        break;
                      case DecodedBitStreamParser$2.ML:
                        subMode = Mode$2.MIXED;
                        break;
                      case DecodedBitStreamParser$2.PS:
                        priorToShiftMode = subMode;
                        subMode = Mode$2.PUNCT_SHIFT;
                        break;
                      case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        result.append(byteCompactionData[i]);
                        break;
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                        subMode = Mode$2.ALPHA;
                        break;
                    }
                  }
                  break;
                case Mode$2.LOWER:
                  if (subModeCh < 26) {
                    ch = String.fromCharCode(97 + subModeCh);
                  } else {
                    switch (subModeCh) {
                      case 26:
                        ch = " ";
                        break;
                      case DecodedBitStreamParser$2.AS:
                        priorToShiftMode = subMode;
                        subMode = Mode$2.ALPHA_SHIFT;
                        break;
                      case DecodedBitStreamParser$2.ML:
                        subMode = Mode$2.MIXED;
                        break;
                      case DecodedBitStreamParser$2.PS:
                        priorToShiftMode = subMode;
                        subMode = Mode$2.PUNCT_SHIFT;
                        break;
                      case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        result.append(byteCompactionData[i]);
                        break;
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                        subMode = Mode$2.ALPHA;
                        break;
                    }
                  }
                  break;
                case Mode$2.MIXED:
                  if (subModeCh < DecodedBitStreamParser$2.PL) {
                    ch = DecodedBitStreamParser$2.MIXED_CHARS[subModeCh];
                  } else {
                    switch (subModeCh) {
                      case DecodedBitStreamParser$2.PL:
                        subMode = Mode$2.PUNCT;
                        break;
                      case 26:
                        ch = " ";
                        break;
                      case DecodedBitStreamParser$2.LL:
                        subMode = Mode$2.LOWER;
                        break;
                      case DecodedBitStreamParser$2.AL:
                        subMode = Mode$2.ALPHA;
                        break;
                      case DecodedBitStreamParser$2.PS:
                        priorToShiftMode = subMode;
                        subMode = Mode$2.PUNCT_SHIFT;
                        break;
                      case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        result.append(byteCompactionData[i]);
                        break;
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                        subMode = Mode$2.ALPHA;
                        break;
                    }
                  }
                  break;
                case Mode$2.PUNCT:
                  if (subModeCh < DecodedBitStreamParser$2.PAL) {
                    ch = DecodedBitStreamParser$2.PUNCT_CHARS[subModeCh];
                  } else {
                    switch (subModeCh) {
                      case DecodedBitStreamParser$2.PAL:
                        subMode = Mode$2.ALPHA;
                        break;
                      case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        result.append(byteCompactionData[i]);
                        break;
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                        subMode = Mode$2.ALPHA;
                        break;
                    }
                  }
                  break;
                case Mode$2.ALPHA_SHIFT:
                  subMode = priorToShiftMode;
                  if (subModeCh < 26) {
                    ch = String.fromCharCode(65 + subModeCh);
                  } else {
                    switch (subModeCh) {
                      case 26:
                        ch = " ";
                        break;
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                        subMode = Mode$2.ALPHA;
                        break;
                    }
                  }
                  break;
                case Mode$2.PUNCT_SHIFT:
                  subMode = priorToShiftMode;
                  if (subModeCh < DecodedBitStreamParser$2.PAL) {
                    ch = DecodedBitStreamParser$2.PUNCT_CHARS[subModeCh];
                  } else {
                    switch (subModeCh) {
                      case DecodedBitStreamParser$2.PAL:
                        subMode = Mode$2.ALPHA;
                        break;
                      case DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        result.append(byteCompactionData[i]);
                        break;
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                        subMode = Mode$2.ALPHA;
                        break;
                    }
                  }
                  break;
              }
              if (ch !== "") {
                result.append(ch);
              }
              i++;
            }
          }
          static byteCompaction(mode, codewords, encoding, codeIndex, result) {
            let decodedBytes = new ByteArrayOutputStream();
            let count = 0;
            let value = 0;
            let end = false;
            switch (mode) {
              case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH:
                let byteCompactedCodewords = new Int32Array(6);
                let nextCode = codewords[codeIndex++];
                while (codeIndex < codewords[0] && !end) {
                  byteCompactedCodewords[count++] = nextCode;
                  value = 900 * value + nextCode;
                  nextCode = codewords[codeIndex++];
                  switch (nextCode) {
                    case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                    case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH:
                    case DecodedBitStreamParser$2.NUMERIC_COMPACTION_MODE_LATCH:
                    case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6:
                    case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                    case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR:
                      codeIndex--;
                      end = true;
                      break;
                    default:
                      if (count % 5 === 0 && count > 0) {
                        for (let j = 0; j < 6; ++j) {
                          decodedBytes.write(Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                        }
                        value = 0;
                        count = 0;
                      }
                      break;
                  }
                }
                if (codeIndex === codewords[0] && nextCode < DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH) {
                  byteCompactedCodewords[count++] = nextCode;
                }
                for (let i = 0; i < count; i++) {
                  decodedBytes.write(byteCompactedCodewords[i]);
                }
                break;
              case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6:
                while (codeIndex < codewords[0] && !end) {
                  let code = codewords[codeIndex++];
                  if (code < DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH) {
                    count++;
                    value = 900 * value + code;
                  } else {
                    switch (code) {
                      case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser$2.NUMERIC_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6:
                      case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                      case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                      case DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR:
                        codeIndex--;
                        end = true;
                        break;
                    }
                  }
                  if (count % 5 === 0 && count > 0) {
                    for (let j = 0; j < 6; ++j) {
                      decodedBytes.write(Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                    }
                    value = 0;
                    count = 0;
                  }
                }
                break;
            }
            result.append(StringEncoding.decode(decodedBytes.toByteArray(), encoding));
            return codeIndex;
          }
          static numericCompaction(codewords, codeIndex, result) {
            let count = 0;
            let end = false;
            let numericCodewords = new Int32Array(DecodedBitStreamParser$2.MAX_NUMERIC_CODEWORDS);
            while (codeIndex < codewords[0] && !end) {
              let code = codewords[codeIndex++];
              if (codeIndex === codewords[0]) {
                end = true;
              }
              if (code < DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH) {
                numericCodewords[count] = code;
                count++;
              } else {
                switch (code) {
                  case DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH:
                  case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH:
                  case DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6:
                  case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  case DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR:
                    codeIndex--;
                    end = true;
                    break;
                }
              }
              if ((count % DecodedBitStreamParser$2.MAX_NUMERIC_CODEWORDS === 0 || code === DecodedBitStreamParser$2.NUMERIC_COMPACTION_MODE_LATCH || end) && count > 0) {
                result.append(DecodedBitStreamParser$2.decodeBase900toBase10(numericCodewords, count));
                count = 0;
              }
            }
            return codeIndex;
          }
          static decodeBase900toBase10(codewords, count) {
            let result = createBigInt(0);
            for (let i = 0; i < count; i++) {
              result += DecodedBitStreamParser$2.EXP900[count - i - 1] * createBigInt(codewords[i]);
            }
            let resultString = result.toString();
            if (resultString.charAt(0) !== "1") {
              throw new FormatException();
            }
            return resultString.substring(1);
          }
        }
        DecodedBitStreamParser$2.TEXT_COMPACTION_MODE_LATCH = 900;
        DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH = 901;
        DecodedBitStreamParser$2.NUMERIC_COMPACTION_MODE_LATCH = 902;
        DecodedBitStreamParser$2.BYTE_COMPACTION_MODE_LATCH_6 = 924;
        DecodedBitStreamParser$2.ECI_USER_DEFINED = 925;
        DecodedBitStreamParser$2.ECI_GENERAL_PURPOSE = 926;
        DecodedBitStreamParser$2.ECI_CHARSET = 927;
        DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928;
        DecodedBitStreamParser$2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923;
        DecodedBitStreamParser$2.MACRO_PDF417_TERMINATOR = 922;
        DecodedBitStreamParser$2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913;
        DecodedBitStreamParser$2.MAX_NUMERIC_CODEWORDS = 15;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5;
        DecodedBitStreamParser$2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6;
        DecodedBitStreamParser$2.PL = 25;
        DecodedBitStreamParser$2.LL = 27;
        DecodedBitStreamParser$2.AS = 27;
        DecodedBitStreamParser$2.ML = 28;
        DecodedBitStreamParser$2.AL = 28;
        DecodedBitStreamParser$2.PS = 29;
        DecodedBitStreamParser$2.PAL = 29;
        DecodedBitStreamParser$2.PUNCT_CHARS = ";<>@[\\]_`~!\r	,:\n-.$/\"|*()?{}'";
        DecodedBitStreamParser$2.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^";
        DecodedBitStreamParser$2.EXP900 = getBigIntConstructor() ? getEXP900() : [];
        DecodedBitStreamParser$2.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
        class PDF417ScanningDecoder {
          constructor() {
          }
          static decode(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight, minCodewordWidth, maxCodewordWidth) {
            let boundingBox = new BoundingBox(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight);
            let leftRowIndicatorColumn = null;
            let rightRowIndicatorColumn = null;
            let detectionResult;
            for (let firstPass = true; ; firstPass = false) {
              if (imageTopLeft != null) {
                leftRowIndicatorColumn = PDF417ScanningDecoder.getRowIndicatorColumn(image, boundingBox, imageTopLeft, true, minCodewordWidth, maxCodewordWidth);
              }
              if (imageTopRight != null) {
                rightRowIndicatorColumn = PDF417ScanningDecoder.getRowIndicatorColumn(image, boundingBox, imageTopRight, false, minCodewordWidth, maxCodewordWidth);
              }
              detectionResult = PDF417ScanningDecoder.merge(leftRowIndicatorColumn, rightRowIndicatorColumn);
              if (detectionResult == null) {
                throw NotFoundException.getNotFoundInstance();
              }
              let resultBox = detectionResult.getBoundingBox();
              if (firstPass && resultBox != null && (resultBox.getMinY() < boundingBox.getMinY() || resultBox.getMaxY() > boundingBox.getMaxY())) {
                boundingBox = resultBox;
              } else {
                break;
              }
            }
            detectionResult.setBoundingBox(boundingBox);
            let maxBarcodeColumn = detectionResult.getBarcodeColumnCount() + 1;
            detectionResult.setDetectionResultColumn(0, leftRowIndicatorColumn);
            detectionResult.setDetectionResultColumn(maxBarcodeColumn, rightRowIndicatorColumn);
            let leftToRight = leftRowIndicatorColumn != null;
            for (let barcodeColumnCount = 1; barcodeColumnCount <= maxBarcodeColumn; barcodeColumnCount++) {
              let barcodeColumn = leftToRight ? barcodeColumnCount : maxBarcodeColumn - barcodeColumnCount;
              if (detectionResult.getDetectionResultColumn(barcodeColumn) !== void 0) {
                continue;
              }
              let detectionResultColumn;
              if (barcodeColumn === 0 || barcodeColumn === maxBarcodeColumn) {
                detectionResultColumn = new DetectionResultRowIndicatorColumn(boundingBox, barcodeColumn === 0);
              } else {
                detectionResultColumn = new DetectionResultColumn(boundingBox);
              }
              detectionResult.setDetectionResultColumn(barcodeColumn, detectionResultColumn);
              let startColumn = -1;
              let previousStartColumn = startColumn;
              for (let imageRow = boundingBox.getMinY(); imageRow <= boundingBox.getMaxY(); imageRow++) {
                startColumn = PDF417ScanningDecoder.getStartColumn(detectionResult, barcodeColumn, imageRow, leftToRight);
                if (startColumn < 0 || startColumn > boundingBox.getMaxX()) {
                  if (previousStartColumn === -1) {
                    continue;
                  }
                  startColumn = previousStartColumn;
                }
                let codeword = PDF417ScanningDecoder.detectCodeword(image, boundingBox.getMinX(), boundingBox.getMaxX(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
                if (codeword != null) {
                  detectionResultColumn.setCodeword(imageRow, codeword);
                  previousStartColumn = startColumn;
                  minCodewordWidth = Math.min(minCodewordWidth, codeword.getWidth());
                  maxCodewordWidth = Math.max(maxCodewordWidth, codeword.getWidth());
                }
              }
            }
            return PDF417ScanningDecoder.createDecoderResult(detectionResult);
          }
          static merge(leftRowIndicatorColumn, rightRowIndicatorColumn) {
            if (leftRowIndicatorColumn == null && rightRowIndicatorColumn == null) {
              return null;
            }
            let barcodeMetadata = PDF417ScanningDecoder.getBarcodeMetadata(leftRowIndicatorColumn, rightRowIndicatorColumn);
            if (barcodeMetadata == null) {
              return null;
            }
            let boundingBox = BoundingBox.merge(PDF417ScanningDecoder.adjustBoundingBox(leftRowIndicatorColumn), PDF417ScanningDecoder.adjustBoundingBox(rightRowIndicatorColumn));
            return new DetectionResult(barcodeMetadata, boundingBox);
          }
          static adjustBoundingBox(rowIndicatorColumn) {
            if (rowIndicatorColumn == null) {
              return null;
            }
            let rowHeights = rowIndicatorColumn.getRowHeights();
            if (rowHeights == null) {
              return null;
            }
            let maxRowHeight = PDF417ScanningDecoder.getMax(rowHeights);
            let missingStartRows = 0;
            for (let rowHeight of rowHeights) {
              missingStartRows += maxRowHeight - rowHeight;
              if (rowHeight > 0) {
                break;
              }
            }
            let codewords = rowIndicatorColumn.getCodewords();
            for (let row = 0; missingStartRows > 0 && codewords[row] == null; row++) {
              missingStartRows--;
            }
            let missingEndRows = 0;
            for (let row = rowHeights.length - 1; row >= 0; row--) {
              missingEndRows += maxRowHeight - rowHeights[row];
              if (rowHeights[row] > 0) {
                break;
              }
            }
            for (let row = codewords.length - 1; missingEndRows > 0 && codewords[row] == null; row--) {
              missingEndRows--;
            }
            return rowIndicatorColumn.getBoundingBox().addMissingRows(missingStartRows, missingEndRows, rowIndicatorColumn.isLeft());
          }
          static getMax(values) {
            let maxValue = -1;
            for (let value of values) {
              maxValue = Math.max(maxValue, value);
            }
            return maxValue;
          }
          static getBarcodeMetadata(leftRowIndicatorColumn, rightRowIndicatorColumn) {
            let leftBarcodeMetadata;
            if (leftRowIndicatorColumn == null || (leftBarcodeMetadata = leftRowIndicatorColumn.getBarcodeMetadata()) == null) {
              return rightRowIndicatorColumn == null ? null : rightRowIndicatorColumn.getBarcodeMetadata();
            }
            let rightBarcodeMetadata;
            if (rightRowIndicatorColumn == null || (rightBarcodeMetadata = rightRowIndicatorColumn.getBarcodeMetadata()) == null) {
              return leftBarcodeMetadata;
            }
            if (leftBarcodeMetadata.getColumnCount() !== rightBarcodeMetadata.getColumnCount() && leftBarcodeMetadata.getErrorCorrectionLevel() !== rightBarcodeMetadata.getErrorCorrectionLevel() && leftBarcodeMetadata.getRowCount() !== rightBarcodeMetadata.getRowCount()) {
              return null;
            }
            return leftBarcodeMetadata;
          }
          static getRowIndicatorColumn(image, boundingBox, startPoint, leftToRight, minCodewordWidth, maxCodewordWidth) {
            let rowIndicatorColumn = new DetectionResultRowIndicatorColumn(boundingBox, leftToRight);
            for (let i = 0; i < 2; i++) {
              let increment = i === 0 ? 1 : -1;
              let startColumn = Math.trunc(Math.trunc(startPoint.getX()));
              for (let imageRow = Math.trunc(Math.trunc(startPoint.getY())); imageRow <= boundingBox.getMaxY() && imageRow >= boundingBox.getMinY(); imageRow += increment) {
                let codeword = PDF417ScanningDecoder.detectCodeword(image, 0, image.getWidth(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
                if (codeword != null) {
                  rowIndicatorColumn.setCodeword(imageRow, codeword);
                  if (leftToRight) {
                    startColumn = codeword.getStartX();
                  } else {
                    startColumn = codeword.getEndX();
                  }
                }
              }
            }
            return rowIndicatorColumn;
          }
          static adjustCodewordCount(detectionResult, barcodeMatrix) {
            let barcodeMatrix01 = barcodeMatrix[0][1];
            let numberOfCodewords = barcodeMatrix01.getValue();
            let calculatedNumberOfCodewords = detectionResult.getBarcodeColumnCount() * detectionResult.getBarcodeRowCount() - PDF417ScanningDecoder.getNumberOfECCodeWords(detectionResult.getBarcodeECLevel());
            if (numberOfCodewords.length === 0) {
              if (calculatedNumberOfCodewords < 1 || calculatedNumberOfCodewords > PDF417Common.MAX_CODEWORDS_IN_BARCODE) {
                throw NotFoundException.getNotFoundInstance();
              }
              barcodeMatrix01.setValue(calculatedNumberOfCodewords);
            } else if (numberOfCodewords[0] !== calculatedNumberOfCodewords) {
              barcodeMatrix01.setValue(calculatedNumberOfCodewords);
            }
          }
          static createDecoderResult(detectionResult) {
            let barcodeMatrix = PDF417ScanningDecoder.createBarcodeMatrix(detectionResult);
            PDF417ScanningDecoder.adjustCodewordCount(detectionResult, barcodeMatrix);
            let erasures = new Array();
            let codewords = new Int32Array(detectionResult.getBarcodeRowCount() * detectionResult.getBarcodeColumnCount());
            let ambiguousIndexValuesList = [];
            let ambiguousIndexesList = new Array();
            for (let row = 0; row < detectionResult.getBarcodeRowCount(); row++) {
              for (let column = 0; column < detectionResult.getBarcodeColumnCount(); column++) {
                let values = barcodeMatrix[row][column + 1].getValue();
                let codewordIndex = row * detectionResult.getBarcodeColumnCount() + column;
                if (values.length === 0) {
                  erasures.push(codewordIndex);
                } else if (values.length === 1) {
                  codewords[codewordIndex] = values[0];
                } else {
                  ambiguousIndexesList.push(codewordIndex);
                  ambiguousIndexValuesList.push(values);
                }
              }
            }
            let ambiguousIndexValues = new Array(ambiguousIndexValuesList.length);
            for (let i = 0; i < ambiguousIndexValues.length; i++) {
              ambiguousIndexValues[i] = ambiguousIndexValuesList[i];
            }
            return PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues(detectionResult.getBarcodeECLevel(), codewords, PDF417Common.toIntArray(erasures), PDF417Common.toIntArray(ambiguousIndexesList), ambiguousIndexValues);
          }
          static createDecoderResultFromAmbiguousValues(ecLevel, codewords, erasureArray, ambiguousIndexes, ambiguousIndexValues) {
            let ambiguousIndexCount = new Int32Array(ambiguousIndexes.length);
            let tries = 100;
            while (tries-- > 0) {
              for (let i = 0; i < ambiguousIndexCount.length; i++) {
                codewords[ambiguousIndexes[i]] = ambiguousIndexValues[i][ambiguousIndexCount[i]];
              }
              try {
                return PDF417ScanningDecoder.decodeCodewords(codewords, ecLevel, erasureArray);
              } catch (err) {
                let ignored = err instanceof ChecksumException;
                if (!ignored) {
                  throw err;
                }
              }
              if (ambiguousIndexCount.length === 0) {
                throw ChecksumException.getChecksumInstance();
              }
              for (let i = 0; i < ambiguousIndexCount.length; i++) {
                if (ambiguousIndexCount[i] < ambiguousIndexValues[i].length - 1) {
                  ambiguousIndexCount[i]++;
                  break;
                } else {
                  ambiguousIndexCount[i] = 0;
                  if (i === ambiguousIndexCount.length - 1) {
                    throw ChecksumException.getChecksumInstance();
                  }
                }
              }
            }
            throw ChecksumException.getChecksumInstance();
          }
          static createBarcodeMatrix(detectionResult) {
            let barcodeMatrix = Array.from({ length: detectionResult.getBarcodeRowCount() }, () => new Array(detectionResult.getBarcodeColumnCount() + 2));
            for (let row = 0; row < barcodeMatrix.length; row++) {
              for (let column2 = 0; column2 < barcodeMatrix[row].length; column2++) {
                barcodeMatrix[row][column2] = new BarcodeValue();
              }
            }
            let column = 0;
            for (let detectionResultColumn of detectionResult.getDetectionResultColumns()) {
              if (detectionResultColumn != null) {
                for (let codeword of detectionResultColumn.getCodewords()) {
                  if (codeword != null) {
                    let rowNumber = codeword.getRowNumber();
                    if (rowNumber >= 0) {
                      if (rowNumber >= barcodeMatrix.length) {
                        continue;
                      }
                      barcodeMatrix[rowNumber][column].setValue(codeword.getValue());
                    }
                  }
                }
              }
              column++;
            }
            return barcodeMatrix;
          }
          static isValidBarcodeColumn(detectionResult, barcodeColumn) {
            return barcodeColumn >= 0 && barcodeColumn <= detectionResult.getBarcodeColumnCount() + 1;
          }
          static getStartColumn(detectionResult, barcodeColumn, imageRow, leftToRight) {
            let offset = leftToRight ? 1 : -1;
            let codeword = null;
            if (PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
              codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodeword(imageRow);
            }
            if (codeword != null) {
              return leftToRight ? codeword.getEndX() : codeword.getStartX();
            }
            codeword = detectionResult.getDetectionResultColumn(barcodeColumn).getCodewordNearby(imageRow);
            if (codeword != null) {
              return leftToRight ? codeword.getStartX() : codeword.getEndX();
            }
            if (PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
              codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodewordNearby(imageRow);
            }
            if (codeword != null) {
              return leftToRight ? codeword.getEndX() : codeword.getStartX();
            }
            let skippedColumns = 0;
            while (PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
              barcodeColumn -= offset;
              for (let previousRowCodeword of detectionResult.getDetectionResultColumn(barcodeColumn).getCodewords()) {
                if (previousRowCodeword != null) {
                  return (leftToRight ? previousRowCodeword.getEndX() : previousRowCodeword.getStartX()) + offset * skippedColumns * (previousRowCodeword.getEndX() - previousRowCodeword.getStartX());
                }
              }
              skippedColumns++;
            }
            return leftToRight ? detectionResult.getBoundingBox().getMinX() : detectionResult.getBoundingBox().getMaxX();
          }
          static detectCodeword(image, minColumn, maxColumn, leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth) {
            startColumn = PDF417ScanningDecoder.adjustCodewordStartColumn(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
            let moduleBitCount = PDF417ScanningDecoder.getModuleBitCount(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
            if (moduleBitCount == null) {
              return null;
            }
            let endColumn;
            let codewordBitCount = MathUtils.sum(moduleBitCount);
            if (leftToRight) {
              endColumn = startColumn + codewordBitCount;
            } else {
              for (let i = 0; i < moduleBitCount.length / 2; i++) {
                let tmpCount = moduleBitCount[i];
                moduleBitCount[i] = moduleBitCount[moduleBitCount.length - 1 - i];
                moduleBitCount[moduleBitCount.length - 1 - i] = tmpCount;
              }
              endColumn = startColumn;
              startColumn = endColumn - codewordBitCount;
            }
            if (!PDF417ScanningDecoder.checkCodewordSkew(codewordBitCount, minCodewordWidth, maxCodewordWidth)) {
              return null;
            }
            let decodedValue = PDF417CodewordDecoder.getDecodedValue(moduleBitCount);
            let codeword = PDF417Common.getCodeword(decodedValue);
            if (codeword === -1) {
              return null;
            }
            return new Codeword(startColumn, endColumn, PDF417ScanningDecoder.getCodewordBucketNumber(decodedValue), codeword);
          }
          static getModuleBitCount(image, minColumn, maxColumn, leftToRight, startColumn, imageRow) {
            let imageColumn = startColumn;
            let moduleBitCount = new Int32Array(8);
            let moduleNumber = 0;
            let increment = leftToRight ? 1 : -1;
            let previousPixelValue = leftToRight;
            while ((leftToRight ? imageColumn < maxColumn : imageColumn >= minColumn) && moduleNumber < moduleBitCount.length) {
              if (image.get(imageColumn, imageRow) === previousPixelValue) {
                moduleBitCount[moduleNumber]++;
                imageColumn += increment;
              } else {
                moduleNumber++;
                previousPixelValue = !previousPixelValue;
              }
            }
            if (moduleNumber === moduleBitCount.length || imageColumn === (leftToRight ? maxColumn : minColumn) && moduleNumber === moduleBitCount.length - 1) {
              return moduleBitCount;
            }
            return null;
          }
          static getNumberOfECCodeWords(barcodeECLevel) {
            return 2 << barcodeECLevel;
          }
          static adjustCodewordStartColumn(image, minColumn, maxColumn, leftToRight, codewordStartColumn, imageRow) {
            let correctedStartColumn = codewordStartColumn;
            let increment = leftToRight ? -1 : 1;
            for (let i = 0; i < 2; i++) {
              while ((leftToRight ? correctedStartColumn >= minColumn : correctedStartColumn < maxColumn) && leftToRight === image.get(correctedStartColumn, imageRow)) {
                if (Math.abs(codewordStartColumn - correctedStartColumn) > PDF417ScanningDecoder.CODEWORD_SKEW_SIZE) {
                  return codewordStartColumn;
                }
                correctedStartColumn += increment;
              }
              increment = -increment;
              leftToRight = !leftToRight;
            }
            return correctedStartColumn;
          }
          static checkCodewordSkew(codewordSize, minCodewordWidth, maxCodewordWidth) {
            return minCodewordWidth - PDF417ScanningDecoder.CODEWORD_SKEW_SIZE <= codewordSize && codewordSize <= maxCodewordWidth + PDF417ScanningDecoder.CODEWORD_SKEW_SIZE;
          }
          static decodeCodewords(codewords, ecLevel, erasures) {
            if (codewords.length === 0) {
              throw FormatException.getFormatInstance();
            }
            let numECCodewords = 1 << ecLevel + 1;
            let correctedErrorsCount = PDF417ScanningDecoder.correctErrors(codewords, erasures, numECCodewords);
            PDF417ScanningDecoder.verifyCodewordCount(codewords, numECCodewords);
            let decoderResult = DecodedBitStreamParser$2.decode(codewords, "" + ecLevel);
            decoderResult.setErrorsCorrected(correctedErrorsCount);
            decoderResult.setErasures(erasures.length);
            return decoderResult;
          }
          static correctErrors(codewords, erasures, numECCodewords) {
            if (erasures != null && erasures.length > numECCodewords / 2 + PDF417ScanningDecoder.MAX_ERRORS || numECCodewords < 0 || numECCodewords > PDF417ScanningDecoder.MAX_EC_CODEWORDS) {
              throw ChecksumException.getChecksumInstance();
            }
            return PDF417ScanningDecoder.errorCorrection.decode(codewords, numECCodewords, erasures);
          }
          static verifyCodewordCount(codewords, numECCodewords) {
            if (codewords.length < 4) {
              throw FormatException.getFormatInstance();
            }
            let numberOfCodewords = codewords[0];
            if (numberOfCodewords > codewords.length) {
              throw FormatException.getFormatInstance();
            }
            if (numberOfCodewords === 0) {
              if (numECCodewords < codewords.length) {
                codewords[0] = codewords.length - numECCodewords;
              } else {
                throw FormatException.getFormatInstance();
              }
            }
          }
          static getBitCountForCodeword(codeword) {
            let result = new Int32Array(8);
            let previousValue = 0;
            let i = result.length - 1;
            while (true) {
              if ((codeword & 1) !== previousValue) {
                previousValue = codeword & 1;
                i--;
                if (i < 0) {
                  break;
                }
              }
              result[i]++;
              codeword >>= 1;
            }
            return result;
          }
          static getCodewordBucketNumber(codeword) {
            if (codeword instanceof Int32Array) {
              return this.getCodewordBucketNumber_Int32Array(codeword);
            }
            return this.getCodewordBucketNumber_number(codeword);
          }
          static getCodewordBucketNumber_number(codeword) {
            return PDF417ScanningDecoder.getCodewordBucketNumber(PDF417ScanningDecoder.getBitCountForCodeword(codeword));
          }
          static getCodewordBucketNumber_Int32Array(moduleBitCount) {
            return (moduleBitCount[0] - moduleBitCount[2] + moduleBitCount[4] - moduleBitCount[6] + 9) % 9;
          }
          static toString(barcodeMatrix) {
            let formatter = new Formatter();
            for (let row = 0; row < barcodeMatrix.length; row++) {
              formatter.format("Row %2d: ", row);
              for (let column = 0; column < barcodeMatrix[row].length; column++) {
                let barcodeValue = barcodeMatrix[row][column];
                if (barcodeValue.getValue().length === 0) {
                  formatter.format("        ", null);
                } else {
                  formatter.format("%4d(%2d)", barcodeValue.getValue()[0], barcodeValue.getConfidence(barcodeValue.getValue()[0]));
                }
              }
              formatter.format("%n");
            }
            return formatter.toString();
          }
        }
        PDF417ScanningDecoder.CODEWORD_SKEW_SIZE = 2;
        PDF417ScanningDecoder.MAX_ERRORS = 3;
        PDF417ScanningDecoder.MAX_EC_CODEWORDS = 512;
        PDF417ScanningDecoder.errorCorrection = new ErrorCorrection();
        class PDF417Reader {
          decode(image, hints = null) {
            let result = PDF417Reader.decode(image, hints, false);
            if (result == null || result.length === 0 || result[0] == null) {
              throw NotFoundException.getNotFoundInstance();
            }
            return result[0];
          }
          decodeMultiple(image, hints = null) {
            try {
              return PDF417Reader.decode(image, hints, true);
            } catch (ignored) {
              if (ignored instanceof FormatException || ignored instanceof ChecksumException) {
                throw NotFoundException.getNotFoundInstance();
              }
              throw ignored;
            }
          }
          static decode(image, hints, multiple) {
            const results = new Array();
            const detectorResult = Detector$3.detectMultiple(image, hints, multiple);
            for (const points of detectorResult.getPoints()) {
              const decoderResult = PDF417ScanningDecoder.decode(detectorResult.getBits(), points[4], points[5], points[6], points[7], PDF417Reader.getMinCodewordWidth(points), PDF417Reader.getMaxCodewordWidth(points));
              const result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat$1.PDF_417);
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, decoderResult.getECLevel());
              const pdf417ResultMetadata = decoderResult.getOther();
              if (pdf417ResultMetadata != null) {
                result.putMetadata(ResultMetadataType$1.PDF417_EXTRA_METADATA, pdf417ResultMetadata);
              }
              results.push(result);
            }
            return results.map((x) => x);
          }
          static getMaxWidth(p1, p2) {
            if (p1 == null || p2 == null) {
              return 0;
            }
            return Math.trunc(Math.abs(p1.getX() - p2.getX()));
          }
          static getMinWidth(p1, p2) {
            if (p1 == null || p2 == null) {
              return Integer.MAX_VALUE;
            }
            return Math.trunc(Math.abs(p1.getX() - p2.getX()));
          }
          static getMaxCodewordWidth(p) {
            return Math.floor(Math.max(Math.max(PDF417Reader.getMaxWidth(p[0], p[4]), PDF417Reader.getMaxWidth(p[6], p[2]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN), Math.max(PDF417Reader.getMaxWidth(p[1], p[5]), PDF417Reader.getMaxWidth(p[7], p[3]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN)));
          }
          static getMinCodewordWidth(p) {
            return Math.floor(Math.min(Math.min(PDF417Reader.getMinWidth(p[0], p[4]), PDF417Reader.getMinWidth(p[6], p[2]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN), Math.min(PDF417Reader.getMinWidth(p[1], p[5]), PDF417Reader.getMinWidth(p[7], p[3]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN)));
          }
          reset() {
          }
        }
        class ReaderException extends Exception {
        }
        ReaderException.kind = "ReaderException";
        class MultiFormatReader2 {
          constructor(verbose, hints) {
            this.verbose = verbose === true;
            if (hints) {
              this.setHints(hints);
            }
          }
          decode(image, hints) {
            if (hints) {
              this.setHints(hints);
            }
            return this.decodeInternal(image);
          }
          decodeWithState(image) {
            if (this.readers === null || this.readers === void 0) {
              this.setHints(null);
            }
            return this.decodeInternal(image);
          }
          setHints(hints) {
            this.hints = hints;
            const tryHarder = !isNullOrUndefined2(hints) && hints.get(DecodeHintType$1.TRY_HARDER) === true;
            const formats = isNullOrUndefined2(hints) ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
            const readers = new Array();
            if (!isNullOrUndefined2(formats)) {
              const addOneDReader = formats.some((f) => {
                return f === BarcodeFormat$1.UPC_A || f === BarcodeFormat$1.UPC_E || f === BarcodeFormat$1.EAN_13 || f === BarcodeFormat$1.EAN_8 || f === BarcodeFormat$1.CODABAR || f === BarcodeFormat$1.CODE_39 || f === BarcodeFormat$1.CODE_93 || f === BarcodeFormat$1.CODE_128 || f === BarcodeFormat$1.ITF || f === BarcodeFormat$1.RSS_14 || f === BarcodeFormat$1.RSS_EXPANDED;
              });
              if (addOneDReader && !tryHarder) {
                readers.push(new MultiFormatOneDReader(hints, this.verbose));
              }
              if (formats.includes(BarcodeFormat$1.QR_CODE)) {
                readers.push(new QRCodeReader());
              }
              if (formats.includes(BarcodeFormat$1.DATA_MATRIX)) {
                readers.push(new DataMatrixReader());
              }
              if (formats.includes(BarcodeFormat$1.AZTEC)) {
                readers.push(new AztecReader());
              }
              if (formats.includes(BarcodeFormat$1.PDF_417)) {
                readers.push(new PDF417Reader());
              }
              if (addOneDReader && tryHarder) {
                readers.push(new MultiFormatOneDReader(hints, this.verbose));
              }
            }
            if (readers.length === 0) {
              if (!tryHarder) {
                readers.push(new MultiFormatOneDReader(hints, this.verbose));
              }
              readers.push(new QRCodeReader());
              readers.push(new DataMatrixReader());
              readers.push(new AztecReader());
              readers.push(new PDF417Reader());
              if (tryHarder) {
                readers.push(new MultiFormatOneDReader(hints, this.verbose));
              }
            }
            this.readers = readers;
          }
          reset() {
            if (this.readers !== null) {
              for (const reader of this.readers) {
                reader.reset();
              }
            }
          }
          decodeInternal(image) {
            if (this.readers === null) {
              throw new ReaderException("No readers where selected, nothing can be read.");
            }
            for (const reader of this.readers) {
              try {
                return reader.decode(image, this.hints);
              } catch (ex) {
                if (ex instanceof ReaderException) {
                  continue;
                }
              }
            }
            throw new NotFoundException("No MultiFormat Readers were able to detect the code.");
          }
        }
        class BrowserMultiFormatReader extends BrowserCodeReader {
          constructor(hints = null, timeBetweenScansMillis = 500) {
            const reader = new MultiFormatReader2();
            reader.setHints(hints);
            super(reader, timeBetweenScansMillis);
          }
          decodeBitmap(binaryBitmap) {
            return this.reader.decodeWithState(binaryBitmap);
          }
        }
        class BrowserPDF417Reader extends BrowserCodeReader {
          constructor(timeBetweenScansMillis = 500) {
            super(new PDF417Reader(), timeBetweenScansMillis);
          }
        }
        class BrowserQRCodeReader extends BrowserCodeReader {
          constructor(timeBetweenScansMillis = 500) {
            super(new QRCodeReader(), timeBetweenScansMillis);
          }
        }
        var EncodeHintType;
        (function(EncodeHintType2) {
          EncodeHintType2[EncodeHintType2["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
          EncodeHintType2[EncodeHintType2["CHARACTER_SET"] = 1] = "CHARACTER_SET";
          EncodeHintType2[EncodeHintType2["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
          EncodeHintType2[EncodeHintType2["MIN_SIZE"] = 3] = "MIN_SIZE";
          EncodeHintType2[EncodeHintType2["MAX_SIZE"] = 4] = "MAX_SIZE";
          EncodeHintType2[EncodeHintType2["MARGIN"] = 5] = "MARGIN";
          EncodeHintType2[EncodeHintType2["PDF417_COMPACT"] = 6] = "PDF417_COMPACT";
          EncodeHintType2[EncodeHintType2["PDF417_COMPACTION"] = 7] = "PDF417_COMPACTION";
          EncodeHintType2[EncodeHintType2["PDF417_DIMENSIONS"] = 8] = "PDF417_DIMENSIONS";
          EncodeHintType2[EncodeHintType2["AZTEC_LAYERS"] = 9] = "AZTEC_LAYERS";
          EncodeHintType2[EncodeHintType2["QR_VERSION"] = 10] = "QR_VERSION";
        })(EncodeHintType || (EncodeHintType = {}));
        var EncodeHintType$1 = EncodeHintType;
        class ReedSolomonEncoder {
          constructor(field) {
            this.field = field;
            this.cachedGenerators = [];
            this.cachedGenerators.push(new GenericGFPoly(field, Int32Array.from([1])));
          }
          buildGenerator(degree) {
            const cachedGenerators = this.cachedGenerators;
            if (degree >= cachedGenerators.length) {
              let lastGenerator = cachedGenerators[cachedGenerators.length - 1];
              const field = this.field;
              for (let d = cachedGenerators.length; d <= degree; d++) {
                const nextGenerator = lastGenerator.multiply(new GenericGFPoly(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
                cachedGenerators.push(nextGenerator);
                lastGenerator = nextGenerator;
              }
            }
            return cachedGenerators[degree];
          }
          encode(toEncode, ecBytes) {
            if (ecBytes === 0) {
              throw new IllegalArgumentException("No error correction bytes");
            }
            const dataBytes = toEncode.length - ecBytes;
            if (dataBytes <= 0) {
              throw new IllegalArgumentException("No data bytes provided");
            }
            const generator = this.buildGenerator(ecBytes);
            const infoCoefficients = new Int32Array(dataBytes);
            System.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
            let info = new GenericGFPoly(this.field, infoCoefficients);
            info = info.multiplyByMonomial(ecBytes, 1);
            const remainder = info.divide(generator)[1];
            const coefficients = remainder.getCoefficients();
            const numZeroCoefficients = ecBytes - coefficients.length;
            for (let i = 0; i < numZeroCoefficients; i++) {
              toEncode[dataBytes + i] = 0;
            }
            System.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
          }
        }
        class MaskUtil {
          constructor() {
          }
          static applyMaskPenaltyRule1(matrix) {
            return MaskUtil.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil.applyMaskPenaltyRule1Internal(matrix, false);
          }
          static applyMaskPenaltyRule2(matrix) {
            let penalty = 0;
            const array = matrix.getArray();
            const width = matrix.getWidth();
            const height = matrix.getHeight();
            for (let y = 0; y < height - 1; y++) {
              const arrayY = array[y];
              for (let x = 0; x < width - 1; x++) {
                const value = arrayY[x];
                if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
                  penalty++;
                }
              }
            }
            return MaskUtil.N2 * penalty;
          }
          static applyMaskPenaltyRule3(matrix) {
            let numPenalties = 0;
            const array = matrix.getArray();
            const width = matrix.getWidth();
            const height = matrix.getHeight();
            for (let y = 0; y < height; y++) {
              for (let x = 0; x < width; x++) {
                const arrayY = array[y];
                if (x + 6 < width && arrayY[x] === 1 && arrayY[x + 1] === 0 && arrayY[x + 2] === 1 && arrayY[x + 3] === 1 && arrayY[x + 4] === 1 && arrayY[x + 5] === 0 && arrayY[x + 6] === 1 && (MaskUtil.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
                  numPenalties++;
                }
                if (y + 6 < height && array[y][x] === 1 && array[y + 1][x] === 0 && array[y + 2][x] === 1 && array[y + 3][x] === 1 && array[y + 4][x] === 1 && array[y + 5][x] === 0 && array[y + 6][x] === 1 && (MaskUtil.isWhiteVertical(array, x, y - 4, y) || MaskUtil.isWhiteVertical(array, x, y + 7, y + 11))) {
                  numPenalties++;
                }
              }
            }
            return numPenalties * MaskUtil.N3;
          }
          static isWhiteHorizontal(rowArray, from, to) {
            from = Math.max(from, 0);
            to = Math.min(to, rowArray.length);
            for (let i = from; i < to; i++) {
              if (rowArray[i] === 1) {
                return false;
              }
            }
            return true;
          }
          static isWhiteVertical(array, col, from, to) {
            from = Math.max(from, 0);
            to = Math.min(to, array.length);
            for (let i = from; i < to; i++) {
              if (array[i][col] === 1) {
                return false;
              }
            }
            return true;
          }
          static applyMaskPenaltyRule4(matrix) {
            let numDarkCells = 0;
            const array = matrix.getArray();
            const width = matrix.getWidth();
            const height = matrix.getHeight();
            for (let y = 0; y < height; y++) {
              const arrayY = array[y];
              for (let x = 0; x < width; x++) {
                if (arrayY[x] === 1) {
                  numDarkCells++;
                }
              }
            }
            const numTotalCells = matrix.getHeight() * matrix.getWidth();
            const fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
            return fivePercentVariances * MaskUtil.N4;
          }
          static getDataMaskBit(maskPattern, x, y) {
            let intermediate;
            let temp;
            switch (maskPattern) {
              case 0:
                intermediate = y + x & 1;
                break;
              case 1:
                intermediate = y & 1;
                break;
              case 2:
                intermediate = x % 3;
                break;
              case 3:
                intermediate = (y + x) % 3;
                break;
              case 4:
                intermediate = Math.floor(y / 2) + Math.floor(x / 3) & 1;
                break;
              case 5:
                temp = y * x;
                intermediate = (temp & 1) + temp % 3;
                break;
              case 6:
                temp = y * x;
                intermediate = (temp & 1) + temp % 3 & 1;
                break;
              case 7:
                temp = y * x;
                intermediate = temp % 3 + (y + x & 1) & 1;
                break;
              default:
                throw new IllegalArgumentException("Invalid mask pattern: " + maskPattern);
            }
            return intermediate === 0;
          }
          static applyMaskPenaltyRule1Internal(matrix, isHorizontal) {
            let penalty = 0;
            const iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
            const jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
            const array = matrix.getArray();
            for (let i = 0; i < iLimit; i++) {
              let numSameBitCells = 0;
              let prevBit = -1;
              for (let j = 0; j < jLimit; j++) {
                const bit = isHorizontal ? array[i][j] : array[j][i];
                if (bit === prevBit) {
                  numSameBitCells++;
                } else {
                  if (numSameBitCells >= 5) {
                    penalty += MaskUtil.N1 + (numSameBitCells - 5);
                  }
                  numSameBitCells = 1;
                  prevBit = bit;
                }
              }
              if (numSameBitCells >= 5) {
                penalty += MaskUtil.N1 + (numSameBitCells - 5);
              }
            }
            return penalty;
          }
        }
        MaskUtil.N1 = 3;
        MaskUtil.N2 = 3;
        MaskUtil.N3 = 40;
        MaskUtil.N4 = 10;
        class ByteMatrix {
          constructor(width, height) {
            this.width = width;
            this.height = height;
            const bytes = new Array(height);
            for (let i = 0; i !== height; i++) {
              bytes[i] = new Uint8Array(width);
            }
            this.bytes = bytes;
          }
          getHeight() {
            return this.height;
          }
          getWidth() {
            return this.width;
          }
          get(x, y) {
            return this.bytes[y][x];
          }
          getArray() {
            return this.bytes;
          }
          setNumber(x, y, value) {
            this.bytes[y][x] = value;
          }
          setBoolean(x, y, value) {
            this.bytes[y][x] = value ? 1 : 0;
          }
          clear(value) {
            for (const aByte of this.bytes) {
              Arrays.fill(aByte, value);
            }
          }
          equals(o) {
            if (!(o instanceof ByteMatrix)) {
              return false;
            }
            const other = o;
            if (this.width !== other.width) {
              return false;
            }
            if (this.height !== other.height) {
              return false;
            }
            for (let y = 0, height = this.height; y < height; ++y) {
              const bytesY = this.bytes[y];
              const otherBytesY = other.bytes[y];
              for (let x = 0, width = this.width; x < width; ++x) {
                if (bytesY[x] !== otherBytesY[x]) {
                  return false;
                }
              }
            }
            return true;
          }
          toString() {
            const result = new StringBuilder();
            for (let y = 0, height = this.height; y < height; ++y) {
              const bytesY = this.bytes[y];
              for (let x = 0, width = this.width; x < width; ++x) {
                switch (bytesY[x]) {
                  case 0:
                    result.append(" 0");
                    break;
                  case 1:
                    result.append(" 1");
                    break;
                  default:
                    result.append("  ");
                    break;
                }
              }
              result.append("\n");
            }
            return result.toString();
          }
        }
        class QRCode {
          constructor() {
            this.maskPattern = -1;
          }
          getMode() {
            return this.mode;
          }
          getECLevel() {
            return this.ecLevel;
          }
          getVersion() {
            return this.version;
          }
          getMaskPattern() {
            return this.maskPattern;
          }
          getMatrix() {
            return this.matrix;
          }
          toString() {
            const result = new StringBuilder();
            result.append("<<\n");
            result.append(" mode: ");
            result.append(this.mode ? this.mode.toString() : "null");
            result.append("\n ecLevel: ");
            result.append(this.ecLevel ? this.ecLevel.toString() : "null");
            result.append("\n version: ");
            result.append(this.version ? this.version.toString() : "null");
            result.append("\n maskPattern: ");
            result.append(this.maskPattern.toString());
            if (this.matrix) {
              result.append("\n matrix:\n");
              result.append(this.matrix.toString());
            } else {
              result.append("\n matrix: null\n");
            }
            result.append(">>\n");
            return result.toString();
          }
          setMode(value) {
            this.mode = value;
          }
          setECLevel(value) {
            this.ecLevel = value;
          }
          setVersion(version) {
            this.version = version;
          }
          setMaskPattern(value) {
            this.maskPattern = value;
          }
          setMatrix(value) {
            this.matrix = value;
          }
          static isValidMaskPattern(maskPattern) {
            return maskPattern >= 0 && maskPattern < QRCode.NUM_MASK_PATTERNS;
          }
        }
        QRCode.NUM_MASK_PATTERNS = 8;
        class WriterException extends Exception {
        }
        WriterException.kind = "WriterException";
        class MatrixUtil {
          constructor() {
          }
          static clearMatrix(matrix) {
            matrix.clear(255);
          }
          static buildMatrix(dataBits, ecLevel, version, maskPattern, matrix) {
            MatrixUtil.clearMatrix(matrix);
            MatrixUtil.embedBasicPatterns(version, matrix);
            MatrixUtil.embedTypeInfo(ecLevel, maskPattern, matrix);
            MatrixUtil.maybeEmbedVersionInfo(version, matrix);
            MatrixUtil.embedDataBits(dataBits, maskPattern, matrix);
          }
          static embedBasicPatterns(version, matrix) {
            MatrixUtil.embedPositionDetectionPatternsAndSeparators(matrix);
            MatrixUtil.embedDarkDotAtLeftBottomCorner(matrix);
            MatrixUtil.maybeEmbedPositionAdjustmentPatterns(version, matrix);
            MatrixUtil.embedTimingPatterns(matrix);
          }
          static embedTypeInfo(ecLevel, maskPattern, matrix) {
            const typeInfoBits = new BitArray();
            MatrixUtil.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
            for (let i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
              const bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
              const coordinates = MatrixUtil.TYPE_INFO_COORDINATES[i];
              const x1 = coordinates[0];
              const y1 = coordinates[1];
              matrix.setBoolean(x1, y1, bit);
              if (i < 8) {
                const x2 = matrix.getWidth() - i - 1;
                const y2 = 8;
                matrix.setBoolean(x2, y2, bit);
              } else {
                const x2 = 8;
                const y2 = matrix.getHeight() - 7 + (i - 8);
                matrix.setBoolean(x2, y2, bit);
              }
            }
          }
          static maybeEmbedVersionInfo(version, matrix) {
            if (version.getVersionNumber() < 7) {
              return;
            }
            const versionInfoBits = new BitArray();
            MatrixUtil.makeVersionInfoBits(version, versionInfoBits);
            let bitIndex = 6 * 3 - 1;
            for (let i = 0; i < 6; ++i) {
              for (let j = 0; j < 3; ++j) {
                const bit = versionInfoBits.get(bitIndex);
                bitIndex--;
                matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
                matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
              }
            }
          }
          static embedDataBits(dataBits, maskPattern, matrix) {
            let bitIndex = 0;
            let direction = -1;
            let x = matrix.getWidth() - 1;
            let y = matrix.getHeight() - 1;
            while (x > 0) {
              if (x === 6) {
                x -= 1;
              }
              while (y >= 0 && y < matrix.getHeight()) {
                for (let i = 0; i < 2; ++i) {
                  const xx = x - i;
                  if (!MatrixUtil.isEmpty(matrix.get(xx, y))) {
                    continue;
                  }
                  let bit;
                  if (bitIndex < dataBits.getSize()) {
                    bit = dataBits.get(bitIndex);
                    ++bitIndex;
                  } else {
                    bit = false;
                  }
                  if (maskPattern !== 255 && MaskUtil.getDataMaskBit(maskPattern, xx, y)) {
                    bit = !bit;
                  }
                  matrix.setBoolean(xx, y, bit);
                }
                y += direction;
              }
              direction = -direction;
              y += direction;
              x -= 2;
            }
            if (bitIndex !== dataBits.getSize()) {
              throw new WriterException("Not all bits consumed: " + bitIndex + "/" + dataBits.getSize());
            }
          }
          static findMSBSet(value) {
            return 32 - Integer.numberOfLeadingZeros(value);
          }
          static calculateBCHCode(value, poly) {
            if (poly === 0) {
              throw new IllegalArgumentException("0 polynomial");
            }
            const msbSetInPoly = MatrixUtil.findMSBSet(poly);
            value <<= msbSetInPoly - 1;
            while (MatrixUtil.findMSBSet(value) >= msbSetInPoly) {
              value ^= poly << MatrixUtil.findMSBSet(value) - msbSetInPoly;
            }
            return value;
          }
          static makeTypeInfoBits(ecLevel, maskPattern, bits) {
            if (!QRCode.isValidMaskPattern(maskPattern)) {
              throw new WriterException("Invalid mask pattern");
            }
            const typeInfo = ecLevel.getBits() << 3 | maskPattern;
            bits.appendBits(typeInfo, 5);
            const bchCode = MatrixUtil.calculateBCHCode(typeInfo, MatrixUtil.TYPE_INFO_POLY);
            bits.appendBits(bchCode, 10);
            const maskBits = new BitArray();
            maskBits.appendBits(MatrixUtil.TYPE_INFO_MASK_PATTERN, 15);
            bits.xor(maskBits);
            if (bits.getSize() !== 15) {
              throw new WriterException("should not happen but we got: " + bits.getSize());
            }
          }
          static makeVersionInfoBits(version, bits) {
            bits.appendBits(version.getVersionNumber(), 6);
            const bchCode = MatrixUtil.calculateBCHCode(version.getVersionNumber(), MatrixUtil.VERSION_INFO_POLY);
            bits.appendBits(bchCode, 12);
            if (bits.getSize() !== 18) {
              throw new WriterException("should not happen but we got: " + bits.getSize());
            }
          }
          static isEmpty(value) {
            return value === 255;
          }
          static embedTimingPatterns(matrix) {
            for (let i = 8; i < matrix.getWidth() - 8; ++i) {
              const bit = (i + 1) % 2;
              if (MatrixUtil.isEmpty(matrix.get(i, 6))) {
                matrix.setNumber(i, 6, bit);
              }
              if (MatrixUtil.isEmpty(matrix.get(6, i))) {
                matrix.setNumber(6, i, bit);
              }
            }
          }
          static embedDarkDotAtLeftBottomCorner(matrix) {
            if (matrix.get(8, matrix.getHeight() - 8) === 0) {
              throw new WriterException();
            }
            matrix.setNumber(8, matrix.getHeight() - 8, 1);
          }
          static embedHorizontalSeparationPattern(xStart, yStart, matrix) {
            for (let x = 0; x < 8; ++x) {
              if (!MatrixUtil.isEmpty(matrix.get(xStart + x, yStart))) {
                throw new WriterException();
              }
              matrix.setNumber(xStart + x, yStart, 0);
            }
          }
          static embedVerticalSeparationPattern(xStart, yStart, matrix) {
            for (let y = 0; y < 7; ++y) {
              if (!MatrixUtil.isEmpty(matrix.get(xStart, yStart + y))) {
                throw new WriterException();
              }
              matrix.setNumber(xStart, yStart + y, 0);
            }
          }
          static embedPositionAdjustmentPattern(xStart, yStart, matrix) {
            for (let y = 0; y < 5; ++y) {
              const patternY = MatrixUtil.POSITION_ADJUSTMENT_PATTERN[y];
              for (let x = 0; x < 5; ++x) {
                matrix.setNumber(xStart + x, yStart + y, patternY[x]);
              }
            }
          }
          static embedPositionDetectionPattern(xStart, yStart, matrix) {
            for (let y = 0; y < 7; ++y) {
              const patternY = MatrixUtil.POSITION_DETECTION_PATTERN[y];
              for (let x = 0; x < 7; ++x) {
                matrix.setNumber(xStart + x, yStart + y, patternY[x]);
              }
            }
          }
          static embedPositionDetectionPatternsAndSeparators(matrix) {
            const pdpWidth = MatrixUtil.POSITION_DETECTION_PATTERN[0].length;
            MatrixUtil.embedPositionDetectionPattern(0, 0, matrix);
            MatrixUtil.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
            MatrixUtil.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
            const hspWidth = 8;
            MatrixUtil.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
            MatrixUtil.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
            MatrixUtil.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
            const vspSize = 7;
            MatrixUtil.embedVerticalSeparationPattern(vspSize, 0, matrix);
            MatrixUtil.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
            MatrixUtil.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
          }
          static maybeEmbedPositionAdjustmentPatterns(version, matrix) {
            if (version.getVersionNumber() < 2) {
              return;
            }
            const index = version.getVersionNumber() - 1;
            const coordinates = MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
            for (let i = 0, length = coordinates.length; i !== length; i++) {
              const y = coordinates[i];
              if (y >= 0) {
                for (let j = 0; j !== length; j++) {
                  const x = coordinates[j];
                  if (x >= 0 && MatrixUtil.isEmpty(matrix.get(x, y))) {
                    MatrixUtil.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
                  }
                }
              }
            }
          }
        }
        MatrixUtil.POSITION_DETECTION_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1, 1, 1])
        ]);
        MatrixUtil.POSITION_ADJUSTMENT_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1])
        ]);
        MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
          Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
          Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
          Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
          Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
          Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
          Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
          Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
          Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
          Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
          Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
          Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
          Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
          Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
          Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
          Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
          Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
          Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
          Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
          Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
          Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
          Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
          Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
          Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
          Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
          Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
          Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
          Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
          Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
          Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
          Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
          Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
          Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
          Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
          Int32Array.from([6, 30, 58, 86, 114, 142, 170])
        ]);
        MatrixUtil.TYPE_INFO_COORDINATES = Array.from([
          Int32Array.from([8, 0]),
          Int32Array.from([8, 1]),
          Int32Array.from([8, 2]),
          Int32Array.from([8, 3]),
          Int32Array.from([8, 4]),
          Int32Array.from([8, 5]),
          Int32Array.from([8, 7]),
          Int32Array.from([8, 8]),
          Int32Array.from([7, 8]),
          Int32Array.from([5, 8]),
          Int32Array.from([4, 8]),
          Int32Array.from([3, 8]),
          Int32Array.from([2, 8]),
          Int32Array.from([1, 8]),
          Int32Array.from([0, 8])
        ]);
        MatrixUtil.VERSION_INFO_POLY = 7973;
        MatrixUtil.TYPE_INFO_POLY = 1335;
        MatrixUtil.TYPE_INFO_MASK_PATTERN = 21522;
        class BlockPair {
          constructor(dataBytes, errorCorrectionBytes) {
            this.dataBytes = dataBytes;
            this.errorCorrectionBytes = errorCorrectionBytes;
          }
          getDataBytes() {
            return this.dataBytes;
          }
          getErrorCorrectionBytes() {
            return this.errorCorrectionBytes;
          }
        }
        class Encoder {
          constructor() {
          }
          static calculateMaskPenalty(matrix) {
            return MaskUtil.applyMaskPenaltyRule1(matrix) + MaskUtil.applyMaskPenaltyRule2(matrix) + MaskUtil.applyMaskPenaltyRule3(matrix) + MaskUtil.applyMaskPenaltyRule4(matrix);
          }
          static encode(content, ecLevel, hints = null) {
            let encoding = Encoder.DEFAULT_BYTE_MODE_ENCODING;
            const hasEncodingHint = hints !== null && hints.get(EncodeHintType$1.CHARACTER_SET) !== void 0;
            if (hasEncodingHint) {
              encoding = hints.get(EncodeHintType$1.CHARACTER_SET).toString();
            }
            const mode = this.chooseMode(content, encoding);
            const headerBits = new BitArray();
            if (mode === Mode$1.BYTE && (hasEncodingHint || Encoder.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
              const eci = CharacterSetECI.getCharacterSetECIByName(encoding);
              if (eci !== void 0) {
                this.appendECI(eci, headerBits);
              }
            }
            this.appendModeInfo(mode, headerBits);
            const dataBits = new BitArray();
            this.appendBytes(content, mode, dataBits, encoding);
            let version;
            if (hints !== null && hints.get(EncodeHintType$1.QR_VERSION) !== void 0) {
              const versionNumber = Number.parseInt(hints.get(EncodeHintType$1.QR_VERSION).toString(), 10);
              version = Version$1.getVersionForNumber(versionNumber);
              const bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
              if (!this.willFit(bitsNeeded, version, ecLevel)) {
                throw new WriterException("Data too big for requested version");
              }
            } else {
              version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
            }
            const headerAndDataBits = new BitArray();
            headerAndDataBits.appendBitArray(headerBits);
            const numLetters = mode === Mode$1.BYTE ? dataBits.getSizeInBytes() : content.length;
            this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
            headerAndDataBits.appendBitArray(dataBits);
            const ecBlocks = version.getECBlocksForLevel(ecLevel);
            const numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
            this.terminateBits(numDataBytes, headerAndDataBits);
            const finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
            const qrCode = new QRCode();
            qrCode.setECLevel(ecLevel);
            qrCode.setMode(mode);
            qrCode.setVersion(version);
            const dimension = version.getDimensionForVersion();
            const matrix = new ByteMatrix(dimension, dimension);
            const maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
            qrCode.setMaskPattern(maskPattern);
            MatrixUtil.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
            qrCode.setMatrix(matrix);
            return qrCode;
          }
          static recommendVersion(ecLevel, mode, headerBits, dataBits) {
            const provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version$1.getVersionForNumber(1));
            const provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
            const bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
            return this.chooseVersion(bitsNeeded, ecLevel);
          }
          static calculateBitsNeeded(mode, headerBits, dataBits, version) {
            return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
          }
          static getAlphanumericCode(code) {
            if (code < Encoder.ALPHANUMERIC_TABLE.length) {
              return Encoder.ALPHANUMERIC_TABLE[code];
            }
            return -1;
          }
          static chooseMode(content, encoding = null) {
            if (CharacterSetECI.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
              return Mode$1.KANJI;
            }
            let hasNumeric = false;
            let hasAlphanumeric = false;
            for (let i = 0, length = content.length; i < length; ++i) {
              const c = content.charAt(i);
              if (Encoder.isDigit(c)) {
                hasNumeric = true;
              } else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
                hasAlphanumeric = true;
              } else {
                return Mode$1.BYTE;
              }
            }
            if (hasAlphanumeric) {
              return Mode$1.ALPHANUMERIC;
            }
            if (hasNumeric) {
              return Mode$1.NUMERIC;
            }
            return Mode$1.BYTE;
          }
          static isOnlyDoubleByteKanji(content) {
            let bytes;
            try {
              bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
            } catch (ignored) {
              return false;
            }
            const length = bytes.length;
            if (length % 2 !== 0) {
              return false;
            }
            for (let i = 0; i < length; i += 2) {
              const byte1 = bytes[i] & 255;
              if ((byte1 < 129 || byte1 > 159) && (byte1 < 224 || byte1 > 235)) {
                return false;
              }
            }
            return true;
          }
          static chooseMaskPattern(bits, ecLevel, version, matrix) {
            let minPenalty = Number.MAX_SAFE_INTEGER;
            let bestMaskPattern = -1;
            for (let maskPattern = 0; maskPattern < QRCode.NUM_MASK_PATTERNS; maskPattern++) {
              MatrixUtil.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
              let penalty = this.calculateMaskPenalty(matrix);
              if (penalty < minPenalty) {
                minPenalty = penalty;
                bestMaskPattern = maskPattern;
              }
            }
            return bestMaskPattern;
          }
          static chooseVersion(numInputBits, ecLevel) {
            for (let versionNum = 1; versionNum <= 40; versionNum++) {
              const version = Version$1.getVersionForNumber(versionNum);
              if (Encoder.willFit(numInputBits, version, ecLevel)) {
                return version;
              }
            }
            throw new WriterException("Data too big");
          }
          static willFit(numInputBits, version, ecLevel) {
            const numBytes = version.getTotalCodewords();
            const ecBlocks = version.getECBlocksForLevel(ecLevel);
            const numEcBytes = ecBlocks.getTotalECCodewords();
            const numDataBytes = numBytes - numEcBytes;
            const totalInputBytes = (numInputBits + 7) / 8;
            return numDataBytes >= totalInputBytes;
          }
          static terminateBits(numDataBytes, bits) {
            const capacity = numDataBytes * 8;
            if (bits.getSize() > capacity) {
              throw new WriterException("data bits cannot fit in the QR Code" + bits.getSize() + " > " + capacity);
            }
            for (let i = 0; i < 4 && bits.getSize() < capacity; ++i) {
              bits.appendBit(false);
            }
            const numBitsInLastByte = bits.getSize() & 7;
            if (numBitsInLastByte > 0) {
              for (let i = numBitsInLastByte; i < 8; i++) {
                bits.appendBit(false);
              }
            }
            const numPaddingBytes = numDataBytes - bits.getSizeInBytes();
            for (let i = 0; i < numPaddingBytes; ++i) {
              bits.appendBits((i & 1) === 0 ? 236 : 17, 8);
            }
            if (bits.getSize() !== capacity) {
              throw new WriterException("Bits size does not equal capacity");
            }
          }
          static getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, blockID, numDataBytesInBlock, numECBytesInBlock) {
            if (blockID >= numRSBlocks) {
              throw new WriterException("Block ID too large");
            }
            const numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
            const numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
            const numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
            const numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
            const numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
            const numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
            const numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
            const numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
            if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
              throw new WriterException("EC bytes mismatch");
            }
            if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
              throw new WriterException("RS blocks mismatch");
            }
            if (numTotalBytes !== (numDataBytesInGroup1 + numEcBytesInGroup1) * numRsBlocksInGroup1 + (numDataBytesInGroup2 + numEcBytesInGroup2) * numRsBlocksInGroup2) {
              throw new WriterException("Total bytes mismatch");
            }
            if (blockID < numRsBlocksInGroup1) {
              numDataBytesInBlock[0] = numDataBytesInGroup1;
              numECBytesInBlock[0] = numEcBytesInGroup1;
            } else {
              numDataBytesInBlock[0] = numDataBytesInGroup2;
              numECBytesInBlock[0] = numEcBytesInGroup2;
            }
          }
          static interleaveWithECBytes(bits, numTotalBytes, numDataBytes, numRSBlocks) {
            if (bits.getSizeInBytes() !== numDataBytes) {
              throw new WriterException("Number of bits and data bytes does not match");
            }
            let dataBytesOffset = 0;
            let maxNumDataBytes = 0;
            let maxNumEcBytes = 0;
            const blocks = new Array();
            for (let i = 0; i < numRSBlocks; ++i) {
              const numDataBytesInBlock = new Int32Array(1);
              const numEcBytesInBlock = new Int32Array(1);
              Encoder.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
              const size = numDataBytesInBlock[0];
              const dataBytes = new Uint8Array(size);
              bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
              const ecBytes = Encoder.generateECBytes(dataBytes, numEcBytesInBlock[0]);
              blocks.push(new BlockPair(dataBytes, ecBytes));
              maxNumDataBytes = Math.max(maxNumDataBytes, size);
              maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
              dataBytesOffset += numDataBytesInBlock[0];
            }
            if (numDataBytes !== dataBytesOffset) {
              throw new WriterException("Data bytes does not match offset");
            }
            const result = new BitArray();
            for (let i = 0; i < maxNumDataBytes; ++i) {
              for (const block of blocks) {
                const dataBytes = block.getDataBytes();
                if (i < dataBytes.length) {
                  result.appendBits(dataBytes[i], 8);
                }
              }
            }
            for (let i = 0; i < maxNumEcBytes; ++i) {
              for (const block of blocks) {
                const ecBytes = block.getErrorCorrectionBytes();
                if (i < ecBytes.length) {
                  result.appendBits(ecBytes[i], 8);
                }
              }
            }
            if (numTotalBytes !== result.getSizeInBytes()) {
              throw new WriterException("Interleaving error: " + numTotalBytes + " and " + result.getSizeInBytes() + " differ.");
            }
            return result;
          }
          static generateECBytes(dataBytes, numEcBytesInBlock) {
            const numDataBytes = dataBytes.length;
            const toEncode = new Int32Array(numDataBytes + numEcBytesInBlock);
            for (let i = 0; i < numDataBytes; i++) {
              toEncode[i] = dataBytes[i] & 255;
            }
            new ReedSolomonEncoder(GenericGF.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
            const ecBytes = new Uint8Array(numEcBytesInBlock);
            for (let i = 0; i < numEcBytesInBlock; i++) {
              ecBytes[i] = toEncode[numDataBytes + i];
            }
            return ecBytes;
          }
          static appendModeInfo(mode, bits) {
            bits.appendBits(mode.getBits(), 4);
          }
          static appendLengthInfo(numLetters, version, mode, bits) {
            const numBits = mode.getCharacterCountBits(version);
            if (numLetters >= 1 << numBits) {
              throw new WriterException(numLetters + " is bigger than " + ((1 << numBits) - 1));
            }
            bits.appendBits(numLetters, numBits);
          }
          static appendBytes(content, mode, bits, encoding) {
            switch (mode) {
              case Mode$1.NUMERIC:
                Encoder.appendNumericBytes(content, bits);
                break;
              case Mode$1.ALPHANUMERIC:
                Encoder.appendAlphanumericBytes(content, bits);
                break;
              case Mode$1.BYTE:
                Encoder.append8BitBytes(content, bits, encoding);
                break;
              case Mode$1.KANJI:
                Encoder.appendKanjiBytes(content, bits);
                break;
              default:
                throw new WriterException("Invalid mode: " + mode);
            }
          }
          static getDigit(singleCharacter) {
            return singleCharacter.charCodeAt(0) - 48;
          }
          static isDigit(singleCharacter) {
            const cn = Encoder.getDigit(singleCharacter);
            return cn >= 0 && cn <= 9;
          }
          static appendNumericBytes(content, bits) {
            const length = content.length;
            let i = 0;
            while (i < length) {
              const num1 = Encoder.getDigit(content.charAt(i));
              if (i + 2 < length) {
                const num2 = Encoder.getDigit(content.charAt(i + 1));
                const num3 = Encoder.getDigit(content.charAt(i + 2));
                bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
                i += 3;
              } else if (i + 1 < length) {
                const num2 = Encoder.getDigit(content.charAt(i + 1));
                bits.appendBits(num1 * 10 + num2, 7);
                i += 2;
              } else {
                bits.appendBits(num1, 4);
                i++;
              }
            }
          }
          static appendAlphanumericBytes(content, bits) {
            const length = content.length;
            let i = 0;
            while (i < length) {
              const code1 = Encoder.getAlphanumericCode(content.charCodeAt(i));
              if (code1 === -1) {
                throw new WriterException();
              }
              if (i + 1 < length) {
                const code2 = Encoder.getAlphanumericCode(content.charCodeAt(i + 1));
                if (code2 === -1) {
                  throw new WriterException();
                }
                bits.appendBits(code1 * 45 + code2, 11);
                i += 2;
              } else {
                bits.appendBits(code1, 6);
                i++;
              }
            }
          }
          static append8BitBytes(content, bits, encoding) {
            let bytes;
            try {
              bytes = StringEncoding.encode(content, encoding);
            } catch (uee) {
              throw new WriterException(uee);
            }
            for (let i = 0, length = bytes.length; i !== length; i++) {
              const b = bytes[i];
              bits.appendBits(b, 8);
            }
          }
          static appendKanjiBytes(content, bits) {
            let bytes;
            try {
              bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
            } catch (uee) {
              throw new WriterException(uee);
            }
            const length = bytes.length;
            for (let i = 0; i < length; i += 2) {
              const byte1 = bytes[i] & 255;
              const byte2 = bytes[i + 1] & 255;
              const code = byte1 << 8 & 4294967295 | byte2;
              let subtracted = -1;
              if (code >= 33088 && code <= 40956) {
                subtracted = code - 33088;
              } else if (code >= 57408 && code <= 60351) {
                subtracted = code - 49472;
              }
              if (subtracted === -1) {
                throw new WriterException("Invalid byte sequence");
              }
              const encoded = (subtracted >> 8) * 192 + (subtracted & 255);
              bits.appendBits(encoded, 13);
            }
          }
          static appendECI(eci, bits) {
            bits.appendBits(Mode$1.ECI.getBits(), 4);
            bits.appendBits(eci.getValue(), 8);
          }
        }
        Encoder.ALPHANUMERIC_TABLE = Int32Array.from([
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          36,
          -1,
          -1,
          -1,
          37,
          38,
          -1,
          -1,
          -1,
          -1,
          39,
          40,
          -1,
          41,
          42,
          43,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          44,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          -1,
          -1,
          -1,
          -1,
          -1
        ]);
        Encoder.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI.UTF8.getName();
        class BrowserQRCodeSvgWriter {
          write(contents, width, height, hints = null) {
            if (contents.length === 0) {
              throw new IllegalArgumentException("Found empty contents");
            }
            if (width < 0 || height < 0) {
              throw new IllegalArgumentException("Requested dimensions are too small: " + width + "x" + height);
            }
            let errorCorrectionLevel = ErrorCorrectionLevel.L;
            let quietZone = BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE;
            if (hints !== null) {
              if (hints.get(EncodeHintType$1.ERROR_CORRECTION) !== void 0) {
                errorCorrectionLevel = ErrorCorrectionLevel.fromString(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());
              }
              if (hints.get(EncodeHintType$1.MARGIN) !== void 0) {
                quietZone = Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(), 10);
              }
            }
            const code = Encoder.encode(contents, errorCorrectionLevel, hints);
            return this.renderResult(code, width, height, quietZone);
          }
          writeToDom(containerElement, contents, width, height, hints = null) {
            if (typeof containerElement === "string") {
              containerElement = document.querySelector(containerElement);
            }
            const svgElement = this.write(contents, width, height, hints);
            if (containerElement)
              containerElement.appendChild(svgElement);
          }
          renderResult(code, width, height, quietZone) {
            const input = code.getMatrix();
            if (input === null) {
              throw new IllegalStateException();
            }
            const inputWidth = input.getWidth();
            const inputHeight = input.getHeight();
            const qrWidth = inputWidth + quietZone * 2;
            const qrHeight = inputHeight + quietZone * 2;
            const outputWidth = Math.max(width, qrWidth);
            const outputHeight = Math.max(height, qrHeight);
            const multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
            const leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
            const topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
            const svgElement = this.createSVGElement(outputWidth, outputHeight);
            for (let inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
              for (let inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
                if (input.get(inputX, inputY) === 1) {
                  const svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
                  svgElement.appendChild(svgRectElement);
                }
              }
            }
            return svgElement;
          }
          createSVGElement(w, h) {
            const svgElement = document.createElementNS(BrowserQRCodeSvgWriter.SVG_NS, "svg");
            svgElement.setAttributeNS(null, "height", w.toString());
            svgElement.setAttributeNS(null, "width", h.toString());
            return svgElement;
          }
          createSvgRectElement(x, y, w, h) {
            const rect = document.createElementNS(BrowserQRCodeSvgWriter.SVG_NS, "rect");
            rect.setAttributeNS(null, "x", x.toString());
            rect.setAttributeNS(null, "y", y.toString());
            rect.setAttributeNS(null, "height", w.toString());
            rect.setAttributeNS(null, "width", h.toString());
            rect.setAttributeNS(null, "fill", "#000000");
            return rect;
          }
        }
        BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE = 4;
        BrowserQRCodeSvgWriter.SVG_NS = "http://www.w3.org/2000/svg";
        class QRCodeWriter {
          encode(contents, format, width, height, hints) {
            if (contents.length === 0) {
              throw new IllegalArgumentException("Found empty contents");
            }
            if (format !== BarcodeFormat$1.QR_CODE) {
              throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format);
            }
            if (width < 0 || height < 0) {
              throw new IllegalArgumentException(`Requested dimensions are too small: ${width}x${height}`);
            }
            let errorCorrectionLevel = ErrorCorrectionLevel.L;
            let quietZone = QRCodeWriter.QUIET_ZONE_SIZE;
            if (hints !== null) {
              if (hints.get(EncodeHintType$1.ERROR_CORRECTION) !== void 0) {
                errorCorrectionLevel = ErrorCorrectionLevel.fromString(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());
              }
              if (hints.get(EncodeHintType$1.MARGIN) !== void 0) {
                quietZone = Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(), 10);
              }
            }
            const code = Encoder.encode(contents, errorCorrectionLevel, hints);
            return QRCodeWriter.renderResult(code, width, height, quietZone);
          }
          static renderResult(code, width, height, quietZone) {
            const input = code.getMatrix();
            if (input === null) {
              throw new IllegalStateException();
            }
            const inputWidth = input.getWidth();
            const inputHeight = input.getHeight();
            const qrWidth = inputWidth + quietZone * 2;
            const qrHeight = inputHeight + quietZone * 2;
            const outputWidth = Math.max(width, qrWidth);
            const outputHeight = Math.max(height, qrHeight);
            const multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
            const leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
            const topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
            const output = new BitMatrix(outputWidth, outputHeight);
            for (let inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
              for (let inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
                if (input.get(inputX, inputY) === 1) {
                  output.setRegion(outputX, outputY, multiple, multiple);
                }
              }
            }
            return output;
          }
        }
        QRCodeWriter.QUIET_ZONE_SIZE = 4;
        class MultiFormatWriter {
          encode(contents, format, width, height, hints) {
            let writer;
            switch (format) {
              case BarcodeFormat$1.QR_CODE:
                writer = new QRCodeWriter();
                break;
              default:
                throw new IllegalArgumentException("No encoder available for format " + format);
            }
            return writer.encode(contents, format, width, height, hints);
          }
        }
        class PlanarYUVLuminanceSource extends LuminanceSource {
          constructor(yuvData, dataWidth, dataHeight, left, top, width, height, reverseHorizontal) {
            super(width, height);
            this.yuvData = yuvData;
            this.dataWidth = dataWidth;
            this.dataHeight = dataHeight;
            this.left = left;
            this.top = top;
            if (left + width > dataWidth || top + height > dataHeight) {
              throw new IllegalArgumentException("Crop rectangle does not fit within image data.");
            }
            if (reverseHorizontal) {
              this.reverseHorizontal(width, height);
            }
          }
          getRow(y, row) {
            if (y < 0 || y >= this.getHeight()) {
              throw new IllegalArgumentException("Requested row is outside the image: " + y);
            }
            const width = this.getWidth();
            if (row === null || row === void 0 || row.length < width) {
              row = new Uint8ClampedArray(width);
            }
            const offset = (y + this.top) * this.dataWidth + this.left;
            System.arraycopy(this.yuvData, offset, row, 0, width);
            return row;
          }
          getMatrix() {
            const width = this.getWidth();
            const height = this.getHeight();
            if (width === this.dataWidth && height === this.dataHeight) {
              return this.yuvData;
            }
            const area = width * height;
            const matrix = new Uint8ClampedArray(area);
            let inputOffset = this.top * this.dataWidth + this.left;
            if (width === this.dataWidth) {
              System.arraycopy(this.yuvData, inputOffset, matrix, 0, area);
              return matrix;
            }
            for (let y = 0; y < height; y++) {
              const outputOffset = y * width;
              System.arraycopy(this.yuvData, inputOffset, matrix, outputOffset, width);
              inputOffset += this.dataWidth;
            }
            return matrix;
          }
          isCropSupported() {
            return true;
          }
          crop(left, top, width, height) {
            return new PlanarYUVLuminanceSource(this.yuvData, this.dataWidth, this.dataHeight, this.left + left, this.top + top, width, height, false);
          }
          renderThumbnail() {
            const width = this.getWidth() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
            const height = this.getHeight() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
            const pixels = new Int32Array(width * height);
            const yuv = this.yuvData;
            let inputOffset = this.top * this.dataWidth + this.left;
            for (let y = 0; y < height; y++) {
              const outputOffset = y * width;
              for (let x = 0; x < width; x++) {
                const grey = yuv[inputOffset + x * PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR] & 255;
                pixels[outputOffset + x] = 4278190080 | grey * 65793;
              }
              inputOffset += this.dataWidth * PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
            }
            return pixels;
          }
          getThumbnailWidth() {
            return this.getWidth() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
          }
          getThumbnailHeight() {
            return this.getHeight() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
          }
          reverseHorizontal(width, height) {
            const yuvData = this.yuvData;
            for (let y = 0, rowStart = this.top * this.dataWidth + this.left; y < height; y++, rowStart += this.dataWidth) {
              const middle = rowStart + width / 2;
              for (let x1 = rowStart, x2 = rowStart + width - 1; x1 < middle; x1++, x2--) {
                const temp = yuvData[x1];
                yuvData[x1] = yuvData[x2];
                yuvData[x2] = temp;
              }
            }
          }
          invert() {
            return new InvertedLuminanceSource(this);
          }
        }
        PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR = 2;
        class RGBLuminanceSource extends LuminanceSource {
          constructor(luminances, width, height, dataWidth, dataHeight, left, top) {
            super(width, height);
            this.dataWidth = dataWidth;
            this.dataHeight = dataHeight;
            this.left = left;
            this.top = top;
            if (luminances.BYTES_PER_ELEMENT === 4) {
              const size = width * height;
              const luminancesUint8Array = new Uint8ClampedArray(size);
              for (let offset = 0; offset < size; offset++) {
                const pixel = luminances[offset];
                const r = pixel >> 16 & 255;
                const g2 = pixel >> 7 & 510;
                const b = pixel & 255;
                luminancesUint8Array[offset] = (r + g2 + b) / 4 & 255;
              }
              this.luminances = luminancesUint8Array;
            } else {
              this.luminances = luminances;
            }
            if (dataWidth === void 0) {
              this.dataWidth = width;
            }
            if (dataHeight === void 0) {
              this.dataHeight = height;
            }
            if (left === void 0) {
              this.left = 0;
            }
            if (top === void 0) {
              this.top = 0;
            }
            if (this.left + width > this.dataWidth || this.top + height > this.dataHeight) {
              throw new IllegalArgumentException("Crop rectangle does not fit within image data.");
            }
          }
          getRow(y, row) {
            if (y < 0 || y >= this.getHeight()) {
              throw new IllegalArgumentException("Requested row is outside the image: " + y);
            }
            const width = this.getWidth();
            if (row === null || row === void 0 || row.length < width) {
              row = new Uint8ClampedArray(width);
            }
            const offset = (y + this.top) * this.dataWidth + this.left;
            System.arraycopy(this.luminances, offset, row, 0, width);
            return row;
          }
          getMatrix() {
            const width = this.getWidth();
            const height = this.getHeight();
            if (width === this.dataWidth && height === this.dataHeight) {
              return this.luminances;
            }
            const area = width * height;
            const matrix = new Uint8ClampedArray(area);
            let inputOffset = this.top * this.dataWidth + this.left;
            if (width === this.dataWidth) {
              System.arraycopy(this.luminances, inputOffset, matrix, 0, area);
              return matrix;
            }
            for (let y = 0; y < height; y++) {
              const outputOffset = y * width;
              System.arraycopy(this.luminances, inputOffset, matrix, outputOffset, width);
              inputOffset += this.dataWidth;
            }
            return matrix;
          }
          isCropSupported() {
            return true;
          }
          crop(left, top, width, height) {
            return new RGBLuminanceSource(this.luminances, width, height, this.dataWidth, this.dataHeight, this.left + left, this.top + top);
          }
          invert() {
            return new InvertedLuminanceSource(this);
          }
        }
        class Charset extends CharacterSetECI {
          static forName(name) {
            return this.getCharacterSetECIByName(name);
          }
        }
        class StandardCharsets {
        }
        StandardCharsets.ISO_8859_1 = CharacterSetECI.ISO8859_1;
        class AztecCode {
          isCompact() {
            return this.compact;
          }
          setCompact(compact) {
            this.compact = compact;
          }
          getSize() {
            return this.size;
          }
          setSize(size) {
            this.size = size;
          }
          getLayers() {
            return this.layers;
          }
          setLayers(layers) {
            this.layers = layers;
          }
          getCodeWords() {
            return this.codeWords;
          }
          setCodeWords(codeWords) {
            this.codeWords = codeWords;
          }
          getMatrix() {
            return this.matrix;
          }
          setMatrix(matrix) {
            this.matrix = matrix;
          }
        }
        class Collections {
          static singletonList(item) {
            return [item];
          }
          static min(collection, comparator) {
            return collection.sort(comparator)[0];
          }
        }
        class Token {
          constructor(previous) {
            this.previous = previous;
          }
          getPrevious() {
            return this.previous;
          }
        }
        class SimpleToken extends Token {
          constructor(previous, value, bitCount) {
            super(previous);
            this.value = value;
            this.bitCount = bitCount;
          }
          appendTo(bitArray, text) {
            bitArray.appendBits(this.value, this.bitCount);
          }
          add(value, bitCount) {
            return new SimpleToken(this, value, bitCount);
          }
          addBinaryShift(start, byteCount) {
            console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token");
            return new SimpleToken(this, start, byteCount);
          }
          toString() {
            let value = this.value & (1 << this.bitCount) - 1;
            value |= 1 << this.bitCount;
            return "<" + Integer.toBinaryString(value | 1 << this.bitCount).substring(1) + ">";
          }
        }
        class BinaryShiftToken extends SimpleToken {
          constructor(previous, binaryShiftStart, binaryShiftByteCount) {
            super(previous, 0, 0);
            this.binaryShiftStart = binaryShiftStart;
            this.binaryShiftByteCount = binaryShiftByteCount;
          }
          appendTo(bitArray, text) {
            for (let i = 0; i < this.binaryShiftByteCount; i++) {
              if (i === 0 || i === 31 && this.binaryShiftByteCount <= 62) {
                bitArray.appendBits(31, 5);
                if (this.binaryShiftByteCount > 62) {
                  bitArray.appendBits(this.binaryShiftByteCount - 31, 16);
                } else if (i === 0) {
                  bitArray.appendBits(Math.min(this.binaryShiftByteCount, 31), 5);
                } else {
                  bitArray.appendBits(this.binaryShiftByteCount - 31, 5);
                }
              }
              bitArray.appendBits(text[this.binaryShiftStart + i], 8);
            }
          }
          addBinaryShift(start, byteCount) {
            return new BinaryShiftToken(this, start, byteCount);
          }
          toString() {
            return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
          }
        }
        function addBinaryShift(token, start, byteCount) {
          return new BinaryShiftToken(token, start, byteCount);
        }
        function add(token, value, bitCount) {
          return new SimpleToken(token, value, bitCount);
        }
        const MODE_NAMES = [
          "UPPER",
          "LOWER",
          "DIGIT",
          "MIXED",
          "PUNCT"
        ];
        const MODE_UPPER = 0;
        const MODE_LOWER = 1;
        const MODE_DIGIT = 2;
        const MODE_MIXED = 3;
        const MODE_PUNCT = 4;
        const EMPTY_TOKEN = new SimpleToken(null, 0, 0);
        const LATCH_TABLE = [
          Int32Array.from([
            0,
            (5 << 16) + 28,
            (5 << 16) + 30,
            (5 << 16) + 29,
            (10 << 16) + (29 << 5) + 30
          ]),
          Int32Array.from([
            (9 << 16) + (30 << 4) + 14,
            0,
            (5 << 16) + 30,
            (5 << 16) + 29,
            (10 << 16) + (29 << 5) + 30
          ]),
          Int32Array.from([
            (4 << 16) + 14,
            (9 << 16) + (14 << 5) + 28,
            0,
            (9 << 16) + (14 << 5) + 29,
            (14 << 16) + (14 << 10) + (29 << 5) + 30
          ]),
          Int32Array.from([
            (5 << 16) + 29,
            (5 << 16) + 28,
            (10 << 16) + (29 << 5) + 30,
            0,
            (5 << 16) + 30
          ]),
          Int32Array.from([
            (5 << 16) + 31,
            (10 << 16) + (31 << 5) + 28,
            (10 << 16) + (31 << 5) + 30,
            (10 << 16) + (31 << 5) + 29,
            0
          ])
        ];
        function static_SHIFT_TABLE(SHIFT_TABLE2) {
          for (let table of SHIFT_TABLE2) {
            Arrays.fill(table, -1);
          }
          SHIFT_TABLE2[MODE_UPPER][MODE_PUNCT] = 0;
          SHIFT_TABLE2[MODE_LOWER][MODE_PUNCT] = 0;
          SHIFT_TABLE2[MODE_LOWER][MODE_UPPER] = 28;
          SHIFT_TABLE2[MODE_MIXED][MODE_PUNCT] = 0;
          SHIFT_TABLE2[MODE_DIGIT][MODE_PUNCT] = 0;
          SHIFT_TABLE2[MODE_DIGIT][MODE_UPPER] = 15;
          return SHIFT_TABLE2;
        }
        const SHIFT_TABLE = static_SHIFT_TABLE(Arrays.createInt32Array(6, 6));
        class State {
          constructor(token, mode, binaryBytes, bitCount) {
            this.token = token;
            this.mode = mode;
            this.binaryShiftByteCount = binaryBytes;
            this.bitCount = bitCount;
          }
          getMode() {
            return this.mode;
          }
          getToken() {
            return this.token;
          }
          getBinaryShiftByteCount() {
            return this.binaryShiftByteCount;
          }
          getBitCount() {
            return this.bitCount;
          }
          latchAndAppend(mode, value) {
            let bitCount = this.bitCount;
            let token = this.token;
            if (mode !== this.mode) {
              let latch = LATCH_TABLE[this.mode][mode];
              token = add(token, latch & 65535, latch >> 16);
              bitCount += latch >> 16;
            }
            let latchModeBitCount = mode === MODE_DIGIT ? 4 : 5;
            token = add(token, value, latchModeBitCount);
            return new State(token, mode, 0, bitCount + latchModeBitCount);
          }
          shiftAndAppend(mode, value) {
            let token = this.token;
            let thisModeBitCount = this.mode === MODE_DIGIT ? 4 : 5;
            token = add(token, SHIFT_TABLE[this.mode][mode], thisModeBitCount);
            token = add(token, value, 5);
            return new State(token, this.mode, 0, this.bitCount + thisModeBitCount + 5);
          }
          addBinaryShiftChar(index) {
            let token = this.token;
            let mode = this.mode;
            let bitCount = this.bitCount;
            if (this.mode === MODE_PUNCT || this.mode === MODE_DIGIT) {
              let latch = LATCH_TABLE[mode][MODE_UPPER];
              token = add(token, latch & 65535, latch >> 16);
              bitCount += latch >> 16;
              mode = MODE_UPPER;
            }
            let deltaBitCount = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8;
            let result = new State(token, mode, this.binaryShiftByteCount + 1, bitCount + deltaBitCount);
            if (result.binaryShiftByteCount === 2047 + 31) {
              result = result.endBinaryShift(index + 1);
            }
            return result;
          }
          endBinaryShift(index) {
            if (this.binaryShiftByteCount === 0) {
              return this;
            }
            let token = this.token;
            token = addBinaryShift(token, index - this.binaryShiftByteCount, this.binaryShiftByteCount);
            return new State(token, this.mode, 0, this.bitCount);
          }
          isBetterThanOrEqualTo(other) {
            let newModeBitCount = this.bitCount + (LATCH_TABLE[this.mode][other.mode] >> 16);
            if (this.binaryShiftByteCount < other.binaryShiftByteCount) {
              newModeBitCount += State.calculateBinaryShiftCost(other) - State.calculateBinaryShiftCost(this);
            } else if (this.binaryShiftByteCount > other.binaryShiftByteCount && other.binaryShiftByteCount > 0) {
              newModeBitCount += 10;
            }
            return newModeBitCount <= other.bitCount;
          }
          toBitArray(text) {
            let symbols = [];
            for (let token = this.endBinaryShift(text.length).token; token !== null; token = token.getPrevious()) {
              symbols.unshift(token);
            }
            let bitArray = new BitArray();
            for (const symbol of symbols) {
              symbol.appendTo(bitArray, text);
            }
            return bitArray;
          }
          toString() {
            return StringUtils.format("%s bits=%d bytes=%d", MODE_NAMES[this.mode], this.bitCount, this.binaryShiftByteCount);
          }
          static calculateBinaryShiftCost(state) {
            if (state.binaryShiftByteCount > 62) {
              return 21;
            }
            if (state.binaryShiftByteCount > 31) {
              return 20;
            }
            if (state.binaryShiftByteCount > 0) {
              return 10;
            }
            return 0;
          }
        }
        State.INITIAL_STATE = new State(EMPTY_TOKEN, MODE_UPPER, 0, 0);
        function static_CHAR_MAP(CHAR_MAP2) {
          const spaceCharCode = StringUtils.getCharCode(" ");
          const pointCharCode = StringUtils.getCharCode(".");
          const commaCharCode = StringUtils.getCharCode(",");
          CHAR_MAP2[MODE_UPPER][spaceCharCode] = 1;
          const zUpperCharCode = StringUtils.getCharCode("Z");
          const aUpperCharCode = StringUtils.getCharCode("A");
          for (let c = aUpperCharCode; c <= zUpperCharCode; c++) {
            CHAR_MAP2[MODE_UPPER][c] = c - aUpperCharCode + 2;
          }
          CHAR_MAP2[MODE_LOWER][spaceCharCode] = 1;
          const zLowerCharCode = StringUtils.getCharCode("z");
          const aLowerCharCode = StringUtils.getCharCode("a");
          for (let c = aLowerCharCode; c <= zLowerCharCode; c++) {
            CHAR_MAP2[MODE_LOWER][c] = c - aLowerCharCode + 2;
          }
          CHAR_MAP2[MODE_DIGIT][spaceCharCode] = 1;
          const nineCharCode = StringUtils.getCharCode("9");
          const zeroCharCode = StringUtils.getCharCode("0");
          for (let c = zeroCharCode; c <= nineCharCode; c++) {
            CHAR_MAP2[MODE_DIGIT][c] = c - zeroCharCode + 2;
          }
          CHAR_MAP2[MODE_DIGIT][commaCharCode] = 12;
          CHAR_MAP2[MODE_DIGIT][pointCharCode] = 13;
          const mixedTable = [
            "\0",
            " ",
            "",
            "",
            "",
            "",
            "",
            "",
            "\x07",
            "\b",
            "	",
            "\n",
            "\v",
            "\f",
            "\r",
            "\x1B",
            "",
            "",
            "",
            "",
            "@",
            "\\",
            "^",
            "_",
            "`",
            "|",
            "~",
            "\x7F"
          ];
          for (let i = 0; i < mixedTable.length; i++) {
            CHAR_MAP2[MODE_MIXED][StringUtils.getCharCode(mixedTable[i])] = i;
          }
          const punctTable = [
            "\0",
            "\r",
            "\0",
            "\0",
            "\0",
            "\0",
            "!",
            "'",
            "#",
            "$",
            "%",
            "&",
            "'",
            "(",
            ")",
            "*",
            "+",
            ",",
            "-",
            ".",
            "/",
            ":",
            ";",
            "<",
            "=",
            ">",
            "?",
            "[",
            "]",
            "{",
            "}"
          ];
          for (let i = 0; i < punctTable.length; i++) {
            if (StringUtils.getCharCode(punctTable[i]) > 0) {
              CHAR_MAP2[MODE_PUNCT][StringUtils.getCharCode(punctTable[i])] = i;
            }
          }
          return CHAR_MAP2;
        }
        const CHAR_MAP = static_CHAR_MAP(Arrays.createInt32Array(5, 256));
        class HighLevelEncoder {
          constructor(text) {
            this.text = text;
          }
          encode() {
            const spaceCharCode = StringUtils.getCharCode(" ");
            const lineBreakCharCode = StringUtils.getCharCode("\n");
            let states = Collections.singletonList(State.INITIAL_STATE);
            for (let index = 0; index < this.text.length; index++) {
              let pairCode;
              let nextChar = index + 1 < this.text.length ? this.text[index + 1] : 0;
              switch (this.text[index]) {
                case StringUtils.getCharCode("\r"):
                  pairCode = nextChar === lineBreakCharCode ? 2 : 0;
                  break;
                case StringUtils.getCharCode("."):
                  pairCode = nextChar === spaceCharCode ? 3 : 0;
                  break;
                case StringUtils.getCharCode(","):
                  pairCode = nextChar === spaceCharCode ? 4 : 0;
                  break;
                case StringUtils.getCharCode(":"):
                  pairCode = nextChar === spaceCharCode ? 5 : 0;
                  break;
                default:
                  pairCode = 0;
              }
              if (pairCode > 0) {
                states = HighLevelEncoder.updateStateListForPair(states, index, pairCode);
                index++;
              } else {
                states = this.updateStateListForChar(states, index);
              }
            }
            const minState = Collections.min(states, (a, b) => {
              return a.getBitCount() - b.getBitCount();
            });
            return minState.toBitArray(this.text);
          }
          updateStateListForChar(states, index) {
            const result = [];
            for (let state of states) {
              this.updateStateForChar(state, index, result);
            }
            return HighLevelEncoder.simplifyStates(result);
          }
          updateStateForChar(state, index, result) {
            let ch = this.text[index] & 255;
            let charInCurrentTable = CHAR_MAP[state.getMode()][ch] > 0;
            let stateNoBinary = null;
            for (let mode = 0; mode <= MODE_PUNCT; mode++) {
              let charInMode = CHAR_MAP[mode][ch];
              if (charInMode > 0) {
                if (stateNoBinary == null) {
                  stateNoBinary = state.endBinaryShift(index);
                }
                if (!charInCurrentTable || mode === state.getMode() || mode === MODE_DIGIT) {
                  const latchState = stateNoBinary.latchAndAppend(mode, charInMode);
                  result.push(latchState);
                }
                if (!charInCurrentTable && SHIFT_TABLE[state.getMode()][mode] >= 0) {
                  const shiftState = stateNoBinary.shiftAndAppend(mode, charInMode);
                  result.push(shiftState);
                }
              }
            }
            if (state.getBinaryShiftByteCount() > 0 || CHAR_MAP[state.getMode()][ch] === 0) {
              let binaryState = state.addBinaryShiftChar(index);
              result.push(binaryState);
            }
          }
          static updateStateListForPair(states, index, pairCode) {
            const result = [];
            for (let state of states) {
              this.updateStateForPair(state, index, pairCode, result);
            }
            return this.simplifyStates(result);
          }
          static updateStateForPair(state, index, pairCode, result) {
            let stateNoBinary = state.endBinaryShift(index);
            result.push(stateNoBinary.latchAndAppend(MODE_PUNCT, pairCode));
            if (state.getMode() !== MODE_PUNCT) {
              result.push(stateNoBinary.shiftAndAppend(MODE_PUNCT, pairCode));
            }
            if (pairCode === 3 || pairCode === 4) {
              let digitState = stateNoBinary.latchAndAppend(MODE_DIGIT, 16 - pairCode).latchAndAppend(MODE_DIGIT, 1);
              result.push(digitState);
            }
            if (state.getBinaryShiftByteCount() > 0) {
              let binaryState = state.addBinaryShiftChar(index).addBinaryShiftChar(index + 1);
              result.push(binaryState);
            }
          }
          static simplifyStates(states) {
            let result = [];
            for (const newState of states) {
              let add2 = true;
              for (const oldState of result) {
                if (oldState.isBetterThanOrEqualTo(newState)) {
                  add2 = false;
                  break;
                }
                if (newState.isBetterThanOrEqualTo(oldState)) {
                  result = result.filter((x) => x !== oldState);
                }
              }
              if (add2) {
                result.push(newState);
              }
            }
            return result;
          }
        }
        class Encoder$1 {
          constructor() {
          }
          static encodeBytes(data) {
            return Encoder$1.encode(data, Encoder$1.DEFAULT_EC_PERCENT, Encoder$1.DEFAULT_AZTEC_LAYERS);
          }
          static encode(data, minECCPercent, userSpecifiedLayers) {
            let bits = new HighLevelEncoder(data).encode();
            let eccBits = Integer.truncDivision(bits.getSize() * minECCPercent, 100) + 11;
            let totalSizeBits = bits.getSize() + eccBits;
            let compact;
            let layers;
            let totalBitsInLayer;
            let wordSize;
            let stuffedBits;
            if (userSpecifiedLayers !== Encoder$1.DEFAULT_AZTEC_LAYERS) {
              compact = userSpecifiedLayers < 0;
              layers = Math.abs(userSpecifiedLayers);
              if (layers > (compact ? Encoder$1.MAX_NB_BITS_COMPACT : Encoder$1.MAX_NB_BITS)) {
                throw new IllegalArgumentException(StringUtils.format("Illegal value %s for layers", userSpecifiedLayers));
              }
              totalBitsInLayer = Encoder$1.totalBitsInLayer(layers, compact);
              wordSize = Encoder$1.WORD_SIZE[layers];
              let usableBitsInLayers = totalBitsInLayer - totalBitsInLayer % wordSize;
              stuffedBits = Encoder$1.stuffBits(bits, wordSize);
              if (stuffedBits.getSize() + eccBits > usableBitsInLayers) {
                throw new IllegalArgumentException("Data to large for user specified layer");
              }
              if (compact && stuffedBits.getSize() > wordSize * 64) {
                throw new IllegalArgumentException("Data to large for user specified layer");
              }
            } else {
              wordSize = 0;
              stuffedBits = null;
              for (let i = 0; ; i++) {
                if (i > Encoder$1.MAX_NB_BITS) {
                  throw new IllegalArgumentException("Data too large for an Aztec code");
                }
                compact = i <= 3;
                layers = compact ? i + 1 : i;
                totalBitsInLayer = Encoder$1.totalBitsInLayer(layers, compact);
                if (totalSizeBits > totalBitsInLayer) {
                  continue;
                }
                if (stuffedBits == null || wordSize !== Encoder$1.WORD_SIZE[layers]) {
                  wordSize = Encoder$1.WORD_SIZE[layers];
                  stuffedBits = Encoder$1.stuffBits(bits, wordSize);
                }
                let usableBitsInLayers = totalBitsInLayer - totalBitsInLayer % wordSize;
                if (compact && stuffedBits.getSize() > wordSize * 64) {
                  continue;
                }
                if (stuffedBits.getSize() + eccBits <= usableBitsInLayers) {
                  break;
                }
              }
            }
            let messageBits = Encoder$1.generateCheckWords(stuffedBits, totalBitsInLayer, wordSize);
            let messageSizeInWords = stuffedBits.getSize() / wordSize;
            let modeMessage = Encoder$1.generateModeMessage(compact, layers, messageSizeInWords);
            let baseMatrixSize = (compact ? 11 : 14) + layers * 4;
            let alignmentMap = new Int32Array(baseMatrixSize);
            let matrixSize;
            if (compact) {
              matrixSize = baseMatrixSize;
              for (let i = 0; i < alignmentMap.length; i++) {
                alignmentMap[i] = i;
              }
            } else {
              matrixSize = baseMatrixSize + 1 + 2 * Integer.truncDivision(Integer.truncDivision(baseMatrixSize, 2) - 1, 15);
              let origCenter = Integer.truncDivision(baseMatrixSize, 2);
              let center = Integer.truncDivision(matrixSize, 2);
              for (let i = 0; i < origCenter; i++) {
                let newOffset = i + Integer.truncDivision(i, 15);
                alignmentMap[origCenter - i - 1] = center - newOffset - 1;
                alignmentMap[origCenter + i] = center + newOffset + 1;
              }
            }
            let matrix = new BitMatrix(matrixSize);
            for (let i = 0, rowOffset = 0; i < layers; i++) {
              let rowSize = (layers - i) * 4 + (compact ? 9 : 12);
              for (let j = 0; j < rowSize; j++) {
                let columnOffset = j * 2;
                for (let k = 0; k < 2; k++) {
                  if (messageBits.get(rowOffset + columnOffset + k)) {
                    matrix.set(alignmentMap[i * 2 + k], alignmentMap[i * 2 + j]);
                  }
                  if (messageBits.get(rowOffset + rowSize * 2 + columnOffset + k)) {
                    matrix.set(alignmentMap[i * 2 + j], alignmentMap[baseMatrixSize - 1 - i * 2 - k]);
                  }
                  if (messageBits.get(rowOffset + rowSize * 4 + columnOffset + k)) {
                    matrix.set(alignmentMap[baseMatrixSize - 1 - i * 2 - k], alignmentMap[baseMatrixSize - 1 - i * 2 - j]);
                  }
                  if (messageBits.get(rowOffset + rowSize * 6 + columnOffset + k)) {
                    matrix.set(alignmentMap[baseMatrixSize - 1 - i * 2 - j], alignmentMap[i * 2 + k]);
                  }
                }
              }
              rowOffset += rowSize * 8;
            }
            Encoder$1.drawModeMessage(matrix, compact, matrixSize, modeMessage);
            if (compact) {
              Encoder$1.drawBullsEye(matrix, Integer.truncDivision(matrixSize, 2), 5);
            } else {
              Encoder$1.drawBullsEye(matrix, Integer.truncDivision(matrixSize, 2), 7);
              for (let i = 0, j = 0; i < Integer.truncDivision(baseMatrixSize, 2) - 1; i += 15, j += 16) {
                for (let k = Integer.truncDivision(matrixSize, 2) & 1; k < matrixSize; k += 2) {
                  matrix.set(Integer.truncDivision(matrixSize, 2) - j, k);
                  matrix.set(Integer.truncDivision(matrixSize, 2) + j, k);
                  matrix.set(k, Integer.truncDivision(matrixSize, 2) - j);
                  matrix.set(k, Integer.truncDivision(matrixSize, 2) + j);
                }
              }
            }
            let aztec = new AztecCode();
            aztec.setCompact(compact);
            aztec.setSize(matrixSize);
            aztec.setLayers(layers);
            aztec.setCodeWords(messageSizeInWords);
            aztec.setMatrix(matrix);
            return aztec;
          }
          static drawBullsEye(matrix, center, size) {
            for (let i = 0; i < size; i += 2) {
              for (let j = center - i; j <= center + i; j++) {
                matrix.set(j, center - i);
                matrix.set(j, center + i);
                matrix.set(center - i, j);
                matrix.set(center + i, j);
              }
            }
            matrix.set(center - size, center - size);
            matrix.set(center - size + 1, center - size);
            matrix.set(center - size, center - size + 1);
            matrix.set(center + size, center - size);
            matrix.set(center + size, center - size + 1);
            matrix.set(center + size, center + size - 1);
          }
          static generateModeMessage(compact, layers, messageSizeInWords) {
            let modeMessage = new BitArray();
            if (compact) {
              modeMessage.appendBits(layers - 1, 2);
              modeMessage.appendBits(messageSizeInWords - 1, 6);
              modeMessage = Encoder$1.generateCheckWords(modeMessage, 28, 4);
            } else {
              modeMessage.appendBits(layers - 1, 5);
              modeMessage.appendBits(messageSizeInWords - 1, 11);
              modeMessage = Encoder$1.generateCheckWords(modeMessage, 40, 4);
            }
            return modeMessage;
          }
          static drawModeMessage(matrix, compact, matrixSize, modeMessage) {
            let center = Integer.truncDivision(matrixSize, 2);
            if (compact) {
              for (let i = 0; i < 7; i++) {
                let offset = center - 3 + i;
                if (modeMessage.get(i)) {
                  matrix.set(offset, center - 5);
                }
                if (modeMessage.get(i + 7)) {
                  matrix.set(center + 5, offset);
                }
                if (modeMessage.get(20 - i)) {
                  matrix.set(offset, center + 5);
                }
                if (modeMessage.get(27 - i)) {
                  matrix.set(center - 5, offset);
                }
              }
            } else {
              for (let i = 0; i < 10; i++) {
                let offset = center - 5 + i + Integer.truncDivision(i, 5);
                if (modeMessage.get(i)) {
                  matrix.set(offset, center - 7);
                }
                if (modeMessage.get(i + 10)) {
                  matrix.set(center + 7, offset);
                }
                if (modeMessage.get(29 - i)) {
                  matrix.set(offset, center + 7);
                }
                if (modeMessage.get(39 - i)) {
                  matrix.set(center - 7, offset);
                }
              }
            }
          }
          static generateCheckWords(bitArray, totalBits, wordSize) {
            let messageSizeInWords = bitArray.getSize() / wordSize;
            let rs = new ReedSolomonEncoder(Encoder$1.getGF(wordSize));
            let totalWords = Integer.truncDivision(totalBits, wordSize);
            let messageWords = Encoder$1.bitsToWords(bitArray, wordSize, totalWords);
            rs.encode(messageWords, totalWords - messageSizeInWords);
            let startPad = totalBits % wordSize;
            let messageBits = new BitArray();
            messageBits.appendBits(0, startPad);
            for (const messageWord of Array.from(messageWords)) {
              messageBits.appendBits(messageWord, wordSize);
            }
            return messageBits;
          }
          static bitsToWords(stuffedBits, wordSize, totalWords) {
            let message = new Int32Array(totalWords);
            let i;
            let n;
            for (i = 0, n = stuffedBits.getSize() / wordSize; i < n; i++) {
              let value = 0;
              for (let j = 0; j < wordSize; j++) {
                value |= stuffedBits.get(i * wordSize + j) ? 1 << wordSize - j - 1 : 0;
              }
              message[i] = value;
            }
            return message;
          }
          static getGF(wordSize) {
            switch (wordSize) {
              case 4:
                return GenericGF.AZTEC_PARAM;
              case 6:
                return GenericGF.AZTEC_DATA_6;
              case 8:
                return GenericGF.AZTEC_DATA_8;
              case 10:
                return GenericGF.AZTEC_DATA_10;
              case 12:
                return GenericGF.AZTEC_DATA_12;
              default:
                throw new IllegalArgumentException("Unsupported word size " + wordSize);
            }
          }
          static stuffBits(bits, wordSize) {
            let out = new BitArray();
            let n = bits.getSize();
            let mask = (1 << wordSize) - 2;
            for (let i = 0; i < n; i += wordSize) {
              let word = 0;
              for (let j = 0; j < wordSize; j++) {
                if (i + j >= n || bits.get(i + j)) {
                  word |= 1 << wordSize - 1 - j;
                }
              }
              if ((word & mask) === mask) {
                out.appendBits(word & mask, wordSize);
                i--;
              } else if ((word & mask) === 0) {
                out.appendBits(word | 1, wordSize);
                i--;
              } else {
                out.appendBits(word, wordSize);
              }
            }
            return out;
          }
          static totalBitsInLayer(layers, compact) {
            return ((compact ? 88 : 112) + 16 * layers) * layers;
          }
        }
        Encoder$1.DEFAULT_EC_PERCENT = 33;
        Encoder$1.DEFAULT_AZTEC_LAYERS = 0;
        Encoder$1.MAX_NB_BITS = 32;
        Encoder$1.MAX_NB_BITS_COMPACT = 4;
        Encoder$1.WORD_SIZE = Int32Array.from([
          4,
          6,
          6,
          8,
          8,
          8,
          8,
          8,
          8,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12
        ]);
        class AztecWriter {
          encode(contents, format, width, height) {
            return this.encodeWithHints(contents, format, width, height, null);
          }
          encodeWithHints(contents, format, width, height, hints) {
            let charset = StandardCharsets.ISO_8859_1;
            let eccPercent = Encoder$1.DEFAULT_EC_PERCENT;
            let layers = Encoder$1.DEFAULT_AZTEC_LAYERS;
            if (hints != null) {
              if (hints.has(EncodeHintType$1.CHARACTER_SET)) {
                charset = Charset.forName(hints.get(EncodeHintType$1.CHARACTER_SET).toString());
              }
              if (hints.has(EncodeHintType$1.ERROR_CORRECTION)) {
                eccPercent = Integer.parseInt(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());
              }
              if (hints.has(EncodeHintType$1.AZTEC_LAYERS)) {
                layers = Integer.parseInt(hints.get(EncodeHintType$1.AZTEC_LAYERS).toString());
              }
            }
            return AztecWriter.encodeLayers(contents, format, width, height, charset, eccPercent, layers);
          }
          static encodeLayers(contents, format, width, height, charset, eccPercent, layers) {
            if (format !== BarcodeFormat$1.AZTEC) {
              throw new IllegalArgumentException("Can only encode AZTEC, but got " + format);
            }
            let aztec = Encoder$1.encode(StringUtils.getBytes(contents, charset), eccPercent, layers);
            return AztecWriter.renderResult(aztec, width, height);
          }
          static renderResult(code, width, height) {
            let input = code.getMatrix();
            if (input == null) {
              throw new IllegalStateException();
            }
            let inputWidth = input.getWidth();
            let inputHeight = input.getHeight();
            let outputWidth = Math.max(width, inputWidth);
            let outputHeight = Math.max(height, inputHeight);
            let multiple = Math.min(outputWidth / inputWidth, outputHeight / inputHeight);
            let leftPadding = (outputWidth - inputWidth * multiple) / 2;
            let topPadding = (outputHeight - inputHeight * multiple) / 2;
            let output = new BitMatrix(outputWidth, outputHeight);
            for (let inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
              for (let inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
                if (input.get(inputX, inputY)) {
                  output.setRegion(outputX, outputY, multiple, multiple);
                }
              }
            }
            return output;
          }
        }
        exports2.AbstractExpandedDecoder = AbstractExpandedDecoder;
        exports2.ArgumentException = ArgumentException;
        exports2.ArithmeticException = ArithmeticException;
        exports2.AztecCode = AztecCode;
        exports2.AztecCodeReader = AztecReader;
        exports2.AztecCodeWriter = AztecWriter;
        exports2.AztecDecoder = Decoder;
        exports2.AztecDetector = Detector;
        exports2.AztecDetectorResult = AztecDetectorResult;
        exports2.AztecEncoder = Encoder$1;
        exports2.AztecHighLevelEncoder = HighLevelEncoder;
        exports2.AztecPoint = Point;
        exports2.BarcodeFormat = BarcodeFormat$1;
        exports2.Binarizer = Binarizer;
        exports2.BinaryBitmap = BinaryBitmap2;
        exports2.BitArray = BitArray;
        exports2.BitMatrix = BitMatrix;
        exports2.BitSource = BitSource;
        exports2.BrowserAztecCodeReader = BrowserAztecCodeReader;
        exports2.BrowserBarcodeReader = BrowserBarcodeReader;
        exports2.BrowserCodeReader = BrowserCodeReader;
        exports2.BrowserDatamatrixCodeReader = BrowserDatamatrixCodeReader;
        exports2.BrowserMultiFormatReader = BrowserMultiFormatReader;
        exports2.BrowserPDF417Reader = BrowserPDF417Reader;
        exports2.BrowserQRCodeReader = BrowserQRCodeReader;
        exports2.BrowserQRCodeSvgWriter = BrowserQRCodeSvgWriter;
        exports2.CharacterSetECI = CharacterSetECI;
        exports2.ChecksumException = ChecksumException;
        exports2.Code128Reader = Code128Reader;
        exports2.Code39Reader = Code39Reader;
        exports2.DataMatrixDecodedBitStreamParser = DecodedBitStreamParser;
        exports2.DataMatrixReader = DataMatrixReader;
        exports2.DecodeHintType = DecodeHintType$1;
        exports2.DecoderResult = DecoderResult;
        exports2.DefaultGridSampler = DefaultGridSampler;
        exports2.DetectorResult = DetectorResult;
        exports2.EAN13Reader = EAN13Reader;
        exports2.EncodeHintType = EncodeHintType$1;
        exports2.Exception = Exception;
        exports2.FormatException = FormatException;
        exports2.GenericGF = GenericGF;
        exports2.GenericGFPoly = GenericGFPoly;
        exports2.GlobalHistogramBinarizer = GlobalHistogramBinarizer;
        exports2.GridSampler = GridSampler;
        exports2.GridSamplerInstance = GridSamplerInstance;
        exports2.HTMLCanvasElementLuminanceSource = HTMLCanvasElementLuminanceSource2;
        exports2.HybridBinarizer = HybridBinarizer2;
        exports2.ITFReader = ITFReader;
        exports2.IllegalArgumentException = IllegalArgumentException;
        exports2.IllegalStateException = IllegalStateException;
        exports2.InvertedLuminanceSource = InvertedLuminanceSource;
        exports2.LuminanceSource = LuminanceSource;
        exports2.MathUtils = MathUtils;
        exports2.MultiFormatOneDReader = MultiFormatOneDReader;
        exports2.MultiFormatReader = MultiFormatReader2;
        exports2.MultiFormatWriter = MultiFormatWriter;
        exports2.NotFoundException = NotFoundException;
        exports2.OneDReader = OneDReader;
        exports2.PDF417DecodedBitStreamParser = DecodedBitStreamParser$2;
        exports2.PDF417DecoderErrorCorrection = ErrorCorrection;
        exports2.PDF417Reader = PDF417Reader;
        exports2.PDF417ResultMetadata = PDF417ResultMetadata;
        exports2.PerspectiveTransform = PerspectiveTransform;
        exports2.PlanarYUVLuminanceSource = PlanarYUVLuminanceSource;
        exports2.QRCodeByteMatrix = ByteMatrix;
        exports2.QRCodeDataMask = DataMask;
        exports2.QRCodeDecodedBitStreamParser = DecodedBitStreamParser$1;
        exports2.QRCodeDecoderErrorCorrectionLevel = ErrorCorrectionLevel;
        exports2.QRCodeDecoderFormatInformation = FormatInformation;
        exports2.QRCodeEncoder = Encoder;
        exports2.QRCodeEncoderQRCode = QRCode;
        exports2.QRCodeMaskUtil = MaskUtil;
        exports2.QRCodeMatrixUtil = MatrixUtil;
        exports2.QRCodeMode = Mode$1;
        exports2.QRCodeReader = QRCodeReader;
        exports2.QRCodeVersion = Version$1;
        exports2.QRCodeWriter = QRCodeWriter;
        exports2.RGBLuminanceSource = RGBLuminanceSource;
        exports2.RSS14Reader = RSS14Reader;
        exports2.RSSExpandedReader = RSSExpandedReader;
        exports2.ReaderException = ReaderException;
        exports2.ReedSolomonDecoder = ReedSolomonDecoder;
        exports2.ReedSolomonEncoder = ReedSolomonEncoder;
        exports2.ReedSolomonException = ReedSolomonException;
        exports2.Result = Result;
        exports2.ResultMetadataType = ResultMetadataType$1;
        exports2.ResultPoint = ResultPoint;
        exports2.StringUtils = StringUtils;
        exports2.UnsupportedOperationException = UnsupportedOperationException;
        exports2.VideoInputDevice = VideoInputDevice;
        exports2.WhiteRectangleDetector = WhiteRectangleDetector;
        exports2.WriterException = WriterException;
        exports2.ZXingArrays = Arrays;
        exports2.ZXingCharset = Charset;
        exports2.ZXingInteger = Integer;
        exports2.ZXingStandardCharsets = StandardCharsets;
        exports2.ZXingStringBuilder = StringBuilder;
        exports2.ZXingStringEncoding = StringEncoding;
        exports2.ZXingSystem = System;
        exports2.createAbstractExpandedDecoder = createDecoder;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/core.js
  var Html5QrcodeSupportedFormats;
  (function(Html5QrcodeSupportedFormats2) {
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["QR_CODE"] = 0] = "QR_CODE";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["AZTEC"] = 1] = "AZTEC";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["CODABAR"] = 2] = "CODABAR";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["CODE_39"] = 3] = "CODE_39";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["CODE_93"] = 4] = "CODE_93";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["CODE_128"] = 5] = "CODE_128";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["DATA_MATRIX"] = 6] = "DATA_MATRIX";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["MAXICODE"] = 7] = "MAXICODE";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["ITF"] = 8] = "ITF";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["EAN_13"] = 9] = "EAN_13";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["EAN_8"] = 10] = "EAN_8";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["PDF_417"] = 11] = "PDF_417";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["RSS_14"] = 12] = "RSS_14";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["UPC_A"] = 14] = "UPC_A";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["UPC_E"] = 15] = "UPC_E";
    Html5QrcodeSupportedFormats2[Html5QrcodeSupportedFormats2["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
  })(Html5QrcodeSupportedFormats || (Html5QrcodeSupportedFormats = {}));
  var html5QrcodeSupportedFormatsTextMap = /* @__PURE__ */ new Map([
    [Html5QrcodeSupportedFormats.QR_CODE, "QR_CODE"],
    [Html5QrcodeSupportedFormats.AZTEC, "AZTEC"],
    [Html5QrcodeSupportedFormats.CODABAR, "CODABAR"],
    [Html5QrcodeSupportedFormats.CODE_39, "CODE_39"],
    [Html5QrcodeSupportedFormats.CODE_93, "CODE_93"],
    [Html5QrcodeSupportedFormats.CODE_128, "CODE_128"],
    [Html5QrcodeSupportedFormats.DATA_MATRIX, "DATA_MATRIX"],
    [Html5QrcodeSupportedFormats.MAXICODE, "MAXICODE"],
    [Html5QrcodeSupportedFormats.ITF, "ITF"],
    [Html5QrcodeSupportedFormats.EAN_13, "EAN_13"],
    [Html5QrcodeSupportedFormats.EAN_8, "EAN_8"],
    [Html5QrcodeSupportedFormats.PDF_417, "PDF_417"],
    [Html5QrcodeSupportedFormats.RSS_14, "RSS_14"],
    [Html5QrcodeSupportedFormats.RSS_EXPANDED, "RSS_EXPANDED"],
    [Html5QrcodeSupportedFormats.UPC_A, "UPC_A"],
    [Html5QrcodeSupportedFormats.UPC_E, "UPC_E"],
    [Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"]
  ]);
  var DecodedTextType;
  (function(DecodedTextType2) {
    DecodedTextType2[DecodedTextType2["UNKNOWN"] = 0] = "UNKNOWN";
    DecodedTextType2[DecodedTextType2["URL"] = 1] = "URL";
  })(DecodedTextType || (DecodedTextType = {}));
  function isValidHtml5QrcodeSupportedFormats(format) {
    return Object.values(Html5QrcodeSupportedFormats).includes(format);
  }
  var Html5QrcodeScanType;
  (function(Html5QrcodeScanType2) {
    Html5QrcodeScanType2[Html5QrcodeScanType2["SCAN_TYPE_CAMERA"] = 0] = "SCAN_TYPE_CAMERA";
    Html5QrcodeScanType2[Html5QrcodeScanType2["SCAN_TYPE_FILE"] = 1] = "SCAN_TYPE_FILE";
  })(Html5QrcodeScanType || (Html5QrcodeScanType = {}));
  var Html5QrcodeConstants = function() {
    function Html5QrcodeConstants2() {
    }
    Html5QrcodeConstants2.GITHUB_PROJECT_URL = "https://github.com/mebjas/html5-qrcode";
    Html5QrcodeConstants2.SCAN_DEFAULT_FPS = 2;
    Html5QrcodeConstants2.DEFAULT_DISABLE_FLIP = false;
    Html5QrcodeConstants2.DEFAULT_REMEMBER_LAST_CAMERA_USED = true;
    Html5QrcodeConstants2.DEFAULT_SUPPORTED_SCAN_TYPE = [
      Html5QrcodeScanType.SCAN_TYPE_CAMERA,
      Html5QrcodeScanType.SCAN_TYPE_FILE
    ];
    return Html5QrcodeConstants2;
  }();
  var QrcodeResultFormat = function() {
    function QrcodeResultFormat2(format, formatName) {
      this.format = format;
      this.formatName = formatName;
    }
    QrcodeResultFormat2.prototype.toString = function() {
      return this.formatName;
    };
    QrcodeResultFormat2.create = function(format) {
      if (!html5QrcodeSupportedFormatsTextMap.has(format)) {
        throw "".concat(format, " not in html5QrcodeSupportedFormatsTextMap");
      }
      return new QrcodeResultFormat2(format, html5QrcodeSupportedFormatsTextMap.get(format));
    };
    return QrcodeResultFormat2;
  }();
  var Html5QrcodeResultFactory = function() {
    function Html5QrcodeResultFactory2() {
    }
    Html5QrcodeResultFactory2.createFromText = function(decodedText) {
      var qrcodeResult = {
        text: decodedText
      };
      return {
        decodedText,
        result: qrcodeResult
      };
    };
    Html5QrcodeResultFactory2.createFromQrcodeResult = function(qrcodeResult) {
      return {
        decodedText: qrcodeResult.text,
        result: qrcodeResult
      };
    };
    return Html5QrcodeResultFactory2;
  }();
  var Html5QrcodeErrorTypes;
  (function(Html5QrcodeErrorTypes2) {
    Html5QrcodeErrorTypes2[Html5QrcodeErrorTypes2["UNKWOWN_ERROR"] = 0] = "UNKWOWN_ERROR";
    Html5QrcodeErrorTypes2[Html5QrcodeErrorTypes2["IMPLEMENTATION_ERROR"] = 1] = "IMPLEMENTATION_ERROR";
    Html5QrcodeErrorTypes2[Html5QrcodeErrorTypes2["NO_CODE_FOUND_ERROR"] = 2] = "NO_CODE_FOUND_ERROR";
  })(Html5QrcodeErrorTypes || (Html5QrcodeErrorTypes = {}));
  var Html5QrcodeErrorFactory = function() {
    function Html5QrcodeErrorFactory2() {
    }
    Html5QrcodeErrorFactory2.createFrom = function(error) {
      return {
        errorMessage: error,
        type: Html5QrcodeErrorTypes.UNKWOWN_ERROR
      };
    };
    return Html5QrcodeErrorFactory2;
  }();
  var BaseLoggger = function() {
    function BaseLoggger2(verbose) {
      this.verbose = verbose;
    }
    BaseLoggger2.prototype.log = function(message) {
      if (this.verbose) {
        console.log(message);
      }
    };
    BaseLoggger2.prototype.warn = function(message) {
      if (this.verbose) {
        console.warn(message);
      }
    };
    BaseLoggger2.prototype.logError = function(message, isExperimental) {
      if (this.verbose || isExperimental === true) {
        console.error(message);
      }
    };
    BaseLoggger2.prototype.logErrors = function(errors) {
      if (errors.length === 0) {
        throw "Logger#logError called without arguments";
      }
      if (this.verbose) {
        console.error(errors);
      }
    };
    return BaseLoggger2;
  }();
  function isNullOrUndefined(obj) {
    return typeof obj === "undefined" || obj === null;
  }
  function clip(value, minValue, maxValue) {
    if (value > maxValue) {
      return maxValue;
    }
    if (value < minValue) {
      return minValue;
    }
    return value;
  }

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/strings.js
  var Html5QrcodeStrings = function() {
    function Html5QrcodeStrings2() {
    }
    Html5QrcodeStrings2.codeParseError = function(exception) {
      return "QR code parse error, error = ".concat(exception);
    };
    Html5QrcodeStrings2.errorGettingUserMedia = function(error) {
      return "Error getting userMedia, error = ".concat(error);
    };
    Html5QrcodeStrings2.onlyDeviceSupportedError = function() {
      return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string).";
    };
    Html5QrcodeStrings2.cameraStreamingNotSupported = function() {
      return "Camera streaming not supported by the browser.";
    };
    Html5QrcodeStrings2.unableToQuerySupportedDevices = function() {
      return "Unable to query supported devices, unknown error.";
    };
    Html5QrcodeStrings2.insecureContextCameraQueryError = function() {
      return "Camera access is only supported in secure context like https or localhost.";
    };
    Html5QrcodeStrings2.scannerPaused = function() {
      return "Scanner paused";
    };
    return Html5QrcodeStrings2;
  }();
  var Html5QrcodeScannerStrings = function() {
    function Html5QrcodeScannerStrings2() {
    }
    Html5QrcodeScannerStrings2.scanningStatus = function() {
      return "Scanning";
    };
    Html5QrcodeScannerStrings2.idleStatus = function() {
      return "Idle";
    };
    Html5QrcodeScannerStrings2.errorStatus = function() {
      return "Error";
    };
    Html5QrcodeScannerStrings2.permissionStatus = function() {
      return "Permission";
    };
    Html5QrcodeScannerStrings2.noCameraFoundErrorStatus = function() {
      return "No Cameras";
    };
    Html5QrcodeScannerStrings2.lastMatch = function(decodedText) {
      return "Last Match: ".concat(decodedText);
    };
    Html5QrcodeScannerStrings2.codeScannerTitle = function() {
      return "Code Scanner";
    };
    Html5QrcodeScannerStrings2.cameraPermissionTitle = function() {
      return "Request Camera Permissions";
    };
    Html5QrcodeScannerStrings2.cameraPermissionRequesting = function() {
      return "Requesting camera permissions...";
    };
    Html5QrcodeScannerStrings2.noCameraFound = function() {
      return "No camera found";
    };
    Html5QrcodeScannerStrings2.scanButtonStopScanningText = function() {
      return "Stop Scanning";
    };
    Html5QrcodeScannerStrings2.scanButtonStartScanningText = function() {
      return "Start Scanning";
    };
    Html5QrcodeScannerStrings2.torchOnButton = function() {
      return "Switch On Torch";
    };
    Html5QrcodeScannerStrings2.torchOffButton = function() {
      return "Switch Off Torch";
    };
    Html5QrcodeScannerStrings2.torchOnFailedMessage = function() {
      return "Failed to turn on torch";
    };
    Html5QrcodeScannerStrings2.torchOffFailedMessage = function() {
      return "Failed to turn off torch";
    };
    Html5QrcodeScannerStrings2.scanButtonScanningStarting = function() {
      return "Launching Camera...";
    };
    Html5QrcodeScannerStrings2.textIfCameraScanSelected = function() {
      return "Scan an Image File";
    };
    Html5QrcodeScannerStrings2.textIfFileScanSelected = function() {
      return "Scan using camera directly";
    };
    Html5QrcodeScannerStrings2.selectCamera = function() {
      return "Select Camera";
    };
    Html5QrcodeScannerStrings2.fileSelectionChooseImage = function() {
      return "Choose Image";
    };
    Html5QrcodeScannerStrings2.fileSelectionChooseAnother = function() {
      return "Choose Another";
    };
    Html5QrcodeScannerStrings2.fileSelectionNoImageSelected = function() {
      return "No image choosen";
    };
    Html5QrcodeScannerStrings2.anonymousCameraPrefix = function() {
      return "Anonymous Camera";
    };
    Html5QrcodeScannerStrings2.dragAndDropMessage = function() {
      return "Or drop an image to scan";
    };
    Html5QrcodeScannerStrings2.dragAndDropMessageOnlyImages = function() {
      return "Or drop an image to scan (other files not supported)";
    };
    Html5QrcodeScannerStrings2.zoom = function() {
      return "zoom";
    };
    Html5QrcodeScannerStrings2.loadingImage = function() {
      return "Loading image...";
    };
    Html5QrcodeScannerStrings2.cameraScanAltText = function() {
      return "Camera based scan";
    };
    Html5QrcodeScannerStrings2.fileScanAltText = function() {
      return "Fule based scan";
    };
    return Html5QrcodeScannerStrings2;
  }();
  var LibraryInfoStrings = function() {
    function LibraryInfoStrings2() {
    }
    LibraryInfoStrings2.poweredBy = function() {
      return "Powered by ";
    };
    LibraryInfoStrings2.reportIssues = function() {
      return "Report issues";
    };
    return LibraryInfoStrings2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/utils.js
  var VideoConstraintsUtil = function() {
    function VideoConstraintsUtil2() {
    }
    VideoConstraintsUtil2.isMediaStreamConstraintsValid = function(videoConstraints, logger) {
      if (typeof videoConstraints !== "object") {
        var typeofVideoConstraints = typeof videoConstraints;
        logger.logError("videoConstraints should be of type object, the " + "object passed is of type ".concat(typeofVideoConstraints, "."), true);
        return false;
      }
      var bannedKeys = [
        "autoGainControl",
        "channelCount",
        "echoCancellation",
        "latency",
        "noiseSuppression",
        "sampleRate",
        "sampleSize",
        "volume"
      ];
      var bannedkeysSet = new Set(bannedKeys);
      var keysInVideoConstraints = Object.keys(videoConstraints);
      for (var _i = 0, keysInVideoConstraints_1 = keysInVideoConstraints; _i < keysInVideoConstraints_1.length; _i++) {
        var key = keysInVideoConstraints_1[_i];
        if (bannedkeysSet.has(key)) {
          logger.logError("".concat(key, " is not supported videoConstaints."), true);
          return false;
        }
      }
      return true;
    };
    return VideoConstraintsUtil2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/zxing-html5-qrcode-decoder.js
  var ZXing = __toESM(require_zxing_js_umd());
  var ZXingHtml5QrcodeDecoder = function() {
    function ZXingHtml5QrcodeDecoder2(requestedFormats, verbose, logger) {
      this.formatMap = /* @__PURE__ */ new Map([
        [Html5QrcodeSupportedFormats.QR_CODE, ZXing.BarcodeFormat.QR_CODE],
        [Html5QrcodeSupportedFormats.AZTEC, ZXing.BarcodeFormat.AZTEC],
        [Html5QrcodeSupportedFormats.CODABAR, ZXing.BarcodeFormat.CODABAR],
        [Html5QrcodeSupportedFormats.CODE_39, ZXing.BarcodeFormat.CODE_39],
        [Html5QrcodeSupportedFormats.CODE_93, ZXing.BarcodeFormat.CODE_93],
        [
          Html5QrcodeSupportedFormats.CODE_128,
          ZXing.BarcodeFormat.CODE_128
        ],
        [
          Html5QrcodeSupportedFormats.DATA_MATRIX,
          ZXing.BarcodeFormat.DATA_MATRIX
        ],
        [
          Html5QrcodeSupportedFormats.MAXICODE,
          ZXing.BarcodeFormat.MAXICODE
        ],
        [Html5QrcodeSupportedFormats.ITF, ZXing.BarcodeFormat.ITF],
        [Html5QrcodeSupportedFormats.EAN_13, ZXing.BarcodeFormat.EAN_13],
        [Html5QrcodeSupportedFormats.EAN_8, ZXing.BarcodeFormat.EAN_8],
        [Html5QrcodeSupportedFormats.PDF_417, ZXing.BarcodeFormat.PDF_417],
        [Html5QrcodeSupportedFormats.RSS_14, ZXing.BarcodeFormat.RSS_14],
        [
          Html5QrcodeSupportedFormats.RSS_EXPANDED,
          ZXing.BarcodeFormat.RSS_EXPANDED
        ],
        [Html5QrcodeSupportedFormats.UPC_A, ZXing.BarcodeFormat.UPC_A],
        [Html5QrcodeSupportedFormats.UPC_E, ZXing.BarcodeFormat.UPC_E],
        [
          Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
          ZXing.BarcodeFormat.UPC_EAN_EXTENSION
        ]
      ]);
      this.reverseFormatMap = this.createReverseFormatMap();
      if (!ZXing) {
        throw "Use html5qrcode.min.js without edit, ZXing not found.";
      }
      this.verbose = verbose;
      this.logger = logger;
      var formats = this.createZXingFormats(requestedFormats);
      var hints = /* @__PURE__ */ new Map();
      hints.set(ZXing.DecodeHintType.POSSIBLE_FORMATS, formats);
      hints.set(ZXing.DecodeHintType.TRY_HARDER, false);
      this.hints = hints;
    }
    ZXingHtml5QrcodeDecoder2.prototype.decodeAsync = function(canvas) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        try {
          resolve(_this.decode(canvas));
        } catch (error) {
          reject(error);
        }
      });
    };
    ZXingHtml5QrcodeDecoder2.prototype.decode = function(canvas) {
      var zxingDecoder = new ZXing.MultiFormatReader(this.verbose, this.hints);
      var luminanceSource = new ZXing.HTMLCanvasElementLuminanceSource(canvas);
      var binaryBitmap = new ZXing.BinaryBitmap(new ZXing.HybridBinarizer(luminanceSource));
      var result = zxingDecoder.decode(binaryBitmap);
      return {
        text: result.text,
        format: QrcodeResultFormat.create(this.toHtml5QrcodeSupportedFormats(result.format)),
        debugData: this.createDebugData()
      };
    };
    ZXingHtml5QrcodeDecoder2.prototype.createReverseFormatMap = function() {
      var result = /* @__PURE__ */ new Map();
      this.formatMap.forEach(function(value, key, _) {
        result.set(value, key);
      });
      return result;
    };
    ZXingHtml5QrcodeDecoder2.prototype.toHtml5QrcodeSupportedFormats = function(zxingFormat) {
      if (!this.reverseFormatMap.has(zxingFormat)) {
        throw "reverseFormatMap doesn't have ".concat(zxingFormat);
      }
      return this.reverseFormatMap.get(zxingFormat);
    };
    ZXingHtml5QrcodeDecoder2.prototype.createZXingFormats = function(requestedFormats) {
      var zxingFormats = [];
      for (var _i = 0, requestedFormats_1 = requestedFormats; _i < requestedFormats_1.length; _i++) {
        var requestedFormat = requestedFormats_1[_i];
        if (this.formatMap.has(requestedFormat)) {
          zxingFormats.push(this.formatMap.get(requestedFormat));
        } else {
          this.logger.logError("".concat(requestedFormat, " is not supported by") + "ZXingHtml5QrcodeShim");
        }
      }
      return zxingFormats;
    };
    ZXingHtml5QrcodeDecoder2.prototype.createDebugData = function() {
      return { decoderName: "zxing-js" };
    };
    return ZXingHtml5QrcodeDecoder2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/native-bar-code-detector.js
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var BarcodeDetectorDelegate = function() {
    function BarcodeDetectorDelegate2(requestedFormats, verbose, logger) {
      this.formatMap = /* @__PURE__ */ new Map([
        [Html5QrcodeSupportedFormats.QR_CODE, "qr_code"],
        [Html5QrcodeSupportedFormats.AZTEC, "aztec"],
        [Html5QrcodeSupportedFormats.CODABAR, "codabar"],
        [Html5QrcodeSupportedFormats.CODE_39, "code_39"],
        [Html5QrcodeSupportedFormats.CODE_93, "code_93"],
        [Html5QrcodeSupportedFormats.CODE_128, "code_128"],
        [Html5QrcodeSupportedFormats.DATA_MATRIX, "data_matrix"],
        [Html5QrcodeSupportedFormats.ITF, "itf"],
        [Html5QrcodeSupportedFormats.EAN_13, "ean_13"],
        [Html5QrcodeSupportedFormats.EAN_8, "ean_8"],
        [Html5QrcodeSupportedFormats.PDF_417, "pdf417"],
        [Html5QrcodeSupportedFormats.UPC_A, "upc_a"],
        [Html5QrcodeSupportedFormats.UPC_E, "upc_e"]
      ]);
      this.reverseFormatMap = this.createReverseFormatMap();
      if (!BarcodeDetectorDelegate2.isSupported()) {
        throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
      }
      this.verbose = verbose;
      this.logger = logger;
      var formats = this.createBarcodeDetectorFormats(requestedFormats);
      this.detector = new BarcodeDetector(formats);
      if (!this.detector) {
        throw "BarcodeDetector detector not supported";
      }
    }
    BarcodeDetectorDelegate2.isSupported = function() {
      if (!("BarcodeDetector" in window)) {
        return false;
      }
      var dummyDetector = new BarcodeDetector({ formats: ["qr_code"] });
      return typeof dummyDetector !== "undefined";
    };
    BarcodeDetectorDelegate2.prototype.decodeAsync = function(canvas) {
      return __awaiter(this, void 0, void 0, function() {
        var barcodes, largestBarcode;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.detector.detect(canvas)];
            case 1:
              barcodes = _a.sent();
              if (!barcodes || barcodes.length === 0) {
                throw "No barcode or QR code detected.";
              }
              largestBarcode = this.selectLargestBarcode(barcodes);
              return [2, {
                text: largestBarcode.rawValue,
                format: QrcodeResultFormat.create(this.toHtml5QrcodeSupportedFormats(largestBarcode.format)),
                debugData: this.createDebugData()
              }];
          }
        });
      });
    };
    BarcodeDetectorDelegate2.prototype.selectLargestBarcode = function(barcodes) {
      var largestBarcode = null;
      var maxArea = 0;
      for (var _i = 0, barcodes_1 = barcodes; _i < barcodes_1.length; _i++) {
        var barcode = barcodes_1[_i];
        var area = barcode.boundingBox.width * barcode.boundingBox.height;
        if (area > maxArea) {
          maxArea = area;
          largestBarcode = barcode;
        }
      }
      if (!largestBarcode) {
        throw "No largest barcode found";
      }
      return largestBarcode;
    };
    BarcodeDetectorDelegate2.prototype.createBarcodeDetectorFormats = function(requestedFormats) {
      var formats = [];
      for (var _i = 0, requestedFormats_1 = requestedFormats; _i < requestedFormats_1.length; _i++) {
        var requestedFormat = requestedFormats_1[_i];
        if (this.formatMap.has(requestedFormat)) {
          formats.push(this.formatMap.get(requestedFormat));
        } else {
          this.logger.warn("".concat(requestedFormat, " is not supported by") + "BarcodeDetectorDelegate");
        }
      }
      return { formats };
    };
    BarcodeDetectorDelegate2.prototype.toHtml5QrcodeSupportedFormats = function(barcodeDetectorFormat) {
      if (!this.reverseFormatMap.has(barcodeDetectorFormat)) {
        throw "reverseFormatMap doesn't have ".concat(barcodeDetectorFormat);
      }
      return this.reverseFormatMap.get(barcodeDetectorFormat);
    };
    BarcodeDetectorDelegate2.prototype.createReverseFormatMap = function() {
      var result = /* @__PURE__ */ new Map();
      this.formatMap.forEach(function(value, key, _) {
        result.set(value, key);
      });
      return result;
    };
    BarcodeDetectorDelegate2.prototype.createDebugData = function() {
      return { decoderName: "BarcodeDetector" };
    };
    return BarcodeDetectorDelegate2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/code-decoder.js
  var __awaiter2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator2 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var Html5QrcodeShim = function() {
    function Html5QrcodeShim2(requestedFormats, useBarCodeDetectorIfSupported, verbose, logger) {
      this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100;
      this.executions = 0;
      this.executionResults = [];
      this.wasPrimaryDecoderUsedInLastDecode = false;
      this.verbose = verbose;
      if (useBarCodeDetectorIfSupported && BarcodeDetectorDelegate.isSupported()) {
        this.primaryDecoder = new BarcodeDetectorDelegate(requestedFormats, verbose, logger);
        this.secondaryDecoder = new ZXingHtml5QrcodeDecoder(requestedFormats, verbose, logger);
      } else {
        this.primaryDecoder = new ZXingHtml5QrcodeDecoder(requestedFormats, verbose, logger);
      }
    }
    Html5QrcodeShim2.prototype.decodeAsync = function(canvas) {
      return __awaiter2(this, void 0, void 0, function() {
        var startTime;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              startTime = performance.now();
              _a.label = 1;
            case 1:
              _a.trys.push([1, , 3, 4]);
              return [4, this.getDecoder().decodeAsync(canvas)];
            case 2:
              return [2, _a.sent()];
            case 3:
              this.possiblyLogPerformance(startTime);
              return [7];
            case 4:
              return [2];
          }
        });
      });
    };
    Html5QrcodeShim2.prototype.decodeRobustlyAsync = function(canvas) {
      return __awaiter2(this, void 0, void 0, function() {
        var startTime, error_1;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              startTime = performance.now();
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, 4, 5]);
              return [4, this.primaryDecoder.decodeAsync(canvas)];
            case 2:
              return [2, _a.sent()];
            case 3:
              error_1 = _a.sent();
              if (this.secondaryDecoder) {
                return [2, this.secondaryDecoder.decodeAsync(canvas)];
              }
              throw error_1;
            case 4:
              this.possiblyLogPerformance(startTime);
              return [7];
            case 5:
              return [2];
          }
        });
      });
    };
    Html5QrcodeShim2.prototype.getDecoder = function() {
      if (!this.secondaryDecoder) {
        return this.primaryDecoder;
      }
      if (this.wasPrimaryDecoderUsedInLastDecode === false) {
        this.wasPrimaryDecoderUsedInLastDecode = true;
        return this.primaryDecoder;
      }
      this.wasPrimaryDecoderUsedInLastDecode = false;
      return this.secondaryDecoder;
    };
    Html5QrcodeShim2.prototype.possiblyLogPerformance = function(startTime) {
      if (!this.verbose) {
        return;
      }
      var executionTime = performance.now() - startTime;
      this.executionResults.push(executionTime);
      this.executions++;
      this.possiblyFlushPerformanceReport();
    };
    Html5QrcodeShim2.prototype.possiblyFlushPerformanceReport = function() {
      if (this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE) {
        return;
      }
      var sum = 0;
      for (var _i = 0, _a = this.executionResults; _i < _a.length; _i++) {
        var executionTime = _a[_i];
        sum += executionTime;
      }
      var mean = sum / this.executionResults.length;
      console.log("".concat(mean, " ms for ").concat(this.executionResults.length, " last runs."));
      this.executions = 0;
      this.executionResults = [];
    };
    return Html5QrcodeShim2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/camera/core-impl.js
  var __extends = function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var __awaiter3 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator3 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var AbstractCameraCapability = function() {
    function AbstractCameraCapability2(name, track) {
      this.name = name;
      this.track = track;
    }
    AbstractCameraCapability2.prototype.isSupported = function() {
      if (!this.track.getCapabilities) {
        return false;
      }
      return this.name in this.track.getCapabilities();
    };
    AbstractCameraCapability2.prototype.apply = function(value) {
      var constraint = {};
      constraint[this.name] = value;
      var constraints = { advanced: [constraint] };
      return this.track.applyConstraints(constraints);
    };
    AbstractCameraCapability2.prototype.value = function() {
      var settings = this.track.getSettings();
      if (this.name in settings) {
        var settingValue = settings[this.name];
        return settingValue;
      }
      return null;
    };
    return AbstractCameraCapability2;
  }();
  var AbstractRangeCameraCapability = function(_super) {
    __extends(AbstractRangeCameraCapability2, _super);
    function AbstractRangeCameraCapability2(name, track) {
      return _super.call(this, name, track) || this;
    }
    AbstractRangeCameraCapability2.prototype.min = function() {
      return this.getCapabilities().min;
    };
    AbstractRangeCameraCapability2.prototype.max = function() {
      return this.getCapabilities().max;
    };
    AbstractRangeCameraCapability2.prototype.step = function() {
      return this.getCapabilities().step;
    };
    AbstractRangeCameraCapability2.prototype.apply = function(value) {
      var constraint = {};
      constraint[this.name] = value;
      var constraints = { advanced: [constraint] };
      return this.track.applyConstraints(constraints);
    };
    AbstractRangeCameraCapability2.prototype.getCapabilities = function() {
      this.failIfNotSupported();
      var capabilities = this.track.getCapabilities();
      var capability = capabilities[this.name];
      return {
        min: capability.min,
        max: capability.max,
        step: capability.step
      };
    };
    AbstractRangeCameraCapability2.prototype.failIfNotSupported = function() {
      if (!this.isSupported()) {
        throw new Error("".concat(this.name, " capability not supported"));
      }
    };
    return AbstractRangeCameraCapability2;
  }(AbstractCameraCapability);
  var ZoomFeatureImpl = function(_super) {
    __extends(ZoomFeatureImpl2, _super);
    function ZoomFeatureImpl2(track) {
      return _super.call(this, "zoom", track) || this;
    }
    return ZoomFeatureImpl2;
  }(AbstractRangeCameraCapability);
  var TorchFeatureImpl = function(_super) {
    __extends(TorchFeatureImpl2, _super);
    function TorchFeatureImpl2(track) {
      return _super.call(this, "torch", track) || this;
    }
    return TorchFeatureImpl2;
  }(AbstractCameraCapability);
  var CameraCapabilitiesImpl = function() {
    function CameraCapabilitiesImpl2(track) {
      this.track = track;
    }
    CameraCapabilitiesImpl2.prototype.zoomFeature = function() {
      return new ZoomFeatureImpl(this.track);
    };
    CameraCapabilitiesImpl2.prototype.torchFeature = function() {
      return new TorchFeatureImpl(this.track);
    };
    return CameraCapabilitiesImpl2;
  }();
  var RenderedCameraImpl = function() {
    function RenderedCameraImpl2(parentElement, mediaStream, callbacks) {
      this.isClosed = false;
      this.parentElement = parentElement;
      this.mediaStream = mediaStream;
      this.callbacks = callbacks;
      this.surface = this.createVideoElement(this.parentElement.clientWidth);
      parentElement.append(this.surface);
    }
    RenderedCameraImpl2.prototype.createVideoElement = function(width) {
      var videoElement = document.createElement("video");
      videoElement.style.width = "".concat(width, "px");
      videoElement.style.display = "block";
      videoElement.muted = true;
      videoElement.setAttribute("muted", "true");
      videoElement.playsInline = true;
      return videoElement;
    };
    RenderedCameraImpl2.prototype.setupSurface = function() {
      var _this = this;
      this.surface.onabort = function() {
        throw "RenderedCameraImpl video surface onabort() called";
      };
      this.surface.onerror = function() {
        throw "RenderedCameraImpl video surface onerror() called";
      };
      var onVideoStart = function() {
        var videoWidth = _this.surface.clientWidth;
        var videoHeight = _this.surface.clientHeight;
        _this.callbacks.onRenderSurfaceReady(videoWidth, videoHeight);
        _this.surface.removeEventListener("playing", onVideoStart);
      };
      this.surface.addEventListener("playing", onVideoStart);
      this.surface.srcObject = this.mediaStream;
      this.surface.play();
    };
    RenderedCameraImpl2.create = function(parentElement, mediaStream, options, callbacks) {
      return __awaiter3(this, void 0, void 0, function() {
        var renderedCamera, aspectRatioConstraint;
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              renderedCamera = new RenderedCameraImpl2(parentElement, mediaStream, callbacks);
              if (!options.aspectRatio)
                return [3, 2];
              aspectRatioConstraint = {
                aspectRatio: options.aspectRatio
              };
              return [4, renderedCamera.getFirstTrackOrFail().applyConstraints(aspectRatioConstraint)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              renderedCamera.setupSurface();
              return [2, renderedCamera];
          }
        });
      });
    };
    RenderedCameraImpl2.prototype.failIfClosed = function() {
      if (this.isClosed) {
        throw "The RenderedCamera has already been closed.";
      }
    };
    RenderedCameraImpl2.prototype.getFirstTrackOrFail = function() {
      this.failIfClosed();
      if (this.mediaStream.getVideoTracks().length === 0) {
        throw "No video tracks found";
      }
      return this.mediaStream.getVideoTracks()[0];
    };
    RenderedCameraImpl2.prototype.pause = function() {
      this.failIfClosed();
      this.surface.pause();
    };
    RenderedCameraImpl2.prototype.resume = function(onResumeCallback) {
      this.failIfClosed();
      var $this = this;
      var onVideoResume = function() {
        setTimeout(onResumeCallback, 200);
        $this.surface.removeEventListener("playing", onVideoResume);
      };
      this.surface.addEventListener("playing", onVideoResume);
      this.surface.play();
    };
    RenderedCameraImpl2.prototype.isPaused = function() {
      this.failIfClosed();
      return this.surface.paused;
    };
    RenderedCameraImpl2.prototype.getSurface = function() {
      this.failIfClosed();
      return this.surface;
    };
    RenderedCameraImpl2.prototype.getRunningTrackCapabilities = function() {
      return this.getFirstTrackOrFail().getCapabilities();
    };
    RenderedCameraImpl2.prototype.getRunningTrackSettings = function() {
      return this.getFirstTrackOrFail().getSettings();
    };
    RenderedCameraImpl2.prototype.applyVideoConstraints = function(constraints) {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          if ("aspectRatio" in constraints) {
            throw "Changing 'aspectRatio' in run-time is not yet supported.";
          }
          return [2, this.getFirstTrackOrFail().applyConstraints(constraints)];
        });
      });
    };
    RenderedCameraImpl2.prototype.close = function() {
      if (this.isClosed) {
        return Promise.resolve();
      }
      var $this = this;
      return new Promise(function(resolve, _) {
        var tracks = $this.mediaStream.getVideoTracks();
        var tracksToClose = tracks.length;
        var tracksClosed = 0;
        $this.mediaStream.getVideoTracks().forEach(function(videoTrack) {
          $this.mediaStream.removeTrack(videoTrack);
          videoTrack.stop();
          ++tracksClosed;
          if (tracksClosed >= tracksToClose) {
            $this.isClosed = true;
            $this.parentElement.removeChild($this.surface);
            resolve();
          }
        });
      });
    };
    RenderedCameraImpl2.prototype.getCapabilities = function() {
      return new CameraCapabilitiesImpl(this.getFirstTrackOrFail());
    };
    return RenderedCameraImpl2;
  }();
  var CameraImpl = function() {
    function CameraImpl2(mediaStream) {
      this.mediaStream = mediaStream;
    }
    CameraImpl2.prototype.render = function(parentElement, options, callbacks) {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          return [2, RenderedCameraImpl.create(parentElement, this.mediaStream, options, callbacks)];
        });
      });
    };
    CameraImpl2.create = function(videoConstraints) {
      return __awaiter3(this, void 0, void 0, function() {
        var constraints, mediaStream;
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!navigator.mediaDevices) {
                throw "navigator.mediaDevices not supported";
              }
              constraints = {
                audio: false,
                video: videoConstraints
              };
              return [4, navigator.mediaDevices.getUserMedia(constraints)];
            case 1:
              mediaStream = _a.sent();
              return [2, new CameraImpl2(mediaStream)];
          }
        });
      });
    };
    return CameraImpl2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/camera/factories.js
  var __awaiter4 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator4 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var CameraFactory = function() {
    function CameraFactory2() {
    }
    CameraFactory2.failIfNotSupported = function() {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a) {
          if (!navigator.mediaDevices) {
            throw "navigator.mediaDevices not supported";
          }
          return [2, new CameraFactory2()];
        });
      });
    };
    CameraFactory2.prototype.create = function(videoConstraints) {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a) {
          return [2, CameraImpl.create(videoConstraints)];
        });
      });
    };
    return CameraFactory2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/camera/retriever.js
  var __awaiter5 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator5 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var CameraRetriever = function() {
    function CameraRetriever2() {
    }
    CameraRetriever2.retrieve = function() {
      if (navigator.mediaDevices) {
        return CameraRetriever2.getCamerasFromMediaDevices();
      }
      var mst = MediaStreamTrack;
      if (MediaStreamTrack && mst.getSources) {
        return CameraRetriever2.getCamerasFromMediaStreamTrack();
      }
      return CameraRetriever2.rejectWithError();
    };
    CameraRetriever2.rejectWithError = function() {
      var errorMessage = Html5QrcodeStrings.unableToQuerySupportedDevices();
      if (!CameraRetriever2.isHttpsOrLocalhost()) {
        errorMessage = Html5QrcodeStrings.insecureContextCameraQueryError();
      }
      return Promise.reject(errorMessage);
    };
    CameraRetriever2.isHttpsOrLocalhost = function() {
      if (location.protocol === "https:") {
        return true;
      }
      var host = location.host.split(":")[0];
      return host === "127.0.0.1" || host === "localhost";
    };
    CameraRetriever2.getCamerasFromMediaDevices = function() {
      return __awaiter5(this, void 0, void 0, function() {
        var closeActiveStreams, mediaStream, devices, results, _i, devices_1, device;
        return __generator5(this, function(_a) {
          switch (_a.label) {
            case 0:
              closeActiveStreams = function(stream) {
                var tracks = stream.getVideoTracks();
                for (var _i2 = 0, tracks_1 = tracks; _i2 < tracks_1.length; _i2++) {
                  var track = tracks_1[_i2];
                  track.enabled = false;
                  track.stop();
                  stream.removeTrack(track);
                }
              };
              return [4, navigator.mediaDevices.getUserMedia({ audio: false, video: true })];
            case 1:
              mediaStream = _a.sent();
              return [4, navigator.mediaDevices.enumerateDevices()];
            case 2:
              devices = _a.sent();
              results = [];
              for (_i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                device = devices_1[_i];
                if (device.kind === "videoinput") {
                  results.push({
                    id: device.deviceId,
                    label: device.label
                  });
                }
              }
              closeActiveStreams(mediaStream);
              return [2, results];
          }
        });
      });
    };
    CameraRetriever2.getCamerasFromMediaStreamTrack = function() {
      return new Promise(function(resolve, _) {
        var callback = function(sourceInfos) {
          var results = [];
          for (var _i = 0, sourceInfos_1 = sourceInfos; _i < sourceInfos_1.length; _i++) {
            var sourceInfo = sourceInfos_1[_i];
            if (sourceInfo.kind === "video") {
              results.push({
                id: sourceInfo.id,
                label: sourceInfo.label
              });
            }
          }
          resolve(results);
        };
        var mst = MediaStreamTrack;
        mst.getSources(callback);
      });
    };
    return CameraRetriever2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/state-manager.js
  var Html5QrcodeScannerState;
  (function(Html5QrcodeScannerState2) {
    Html5QrcodeScannerState2[Html5QrcodeScannerState2["UNKNOWN"] = 0] = "UNKNOWN";
    Html5QrcodeScannerState2[Html5QrcodeScannerState2["NOT_STARTED"] = 1] = "NOT_STARTED";
    Html5QrcodeScannerState2[Html5QrcodeScannerState2["SCANNING"] = 2] = "SCANNING";
    Html5QrcodeScannerState2[Html5QrcodeScannerState2["PAUSED"] = 3] = "PAUSED";
  })(Html5QrcodeScannerState || (Html5QrcodeScannerState = {}));
  var StateManagerImpl = function() {
    function StateManagerImpl2() {
      this.state = Html5QrcodeScannerState.NOT_STARTED;
      this.onGoingTransactionNewState = Html5QrcodeScannerState.UNKNOWN;
    }
    StateManagerImpl2.prototype.directTransition = function(newState) {
      this.failIfTransitionOngoing();
      this.validateTransition(newState);
      this.state = newState;
    };
    StateManagerImpl2.prototype.startTransition = function(newState) {
      this.failIfTransitionOngoing();
      this.validateTransition(newState);
      this.onGoingTransactionNewState = newState;
      return this;
    };
    StateManagerImpl2.prototype.execute = function() {
      if (this.onGoingTransactionNewState === Html5QrcodeScannerState.UNKNOWN) {
        throw "Transaction is already cancelled, cannot execute().";
      }
      var tempNewState = this.onGoingTransactionNewState;
      this.onGoingTransactionNewState = Html5QrcodeScannerState.UNKNOWN;
      this.directTransition(tempNewState);
    };
    StateManagerImpl2.prototype.cancel = function() {
      if (this.onGoingTransactionNewState === Html5QrcodeScannerState.UNKNOWN) {
        throw "Transaction is already cancelled, cannot cancel().";
      }
      this.onGoingTransactionNewState = Html5QrcodeScannerState.UNKNOWN;
    };
    StateManagerImpl2.prototype.getState = function() {
      return this.state;
    };
    StateManagerImpl2.prototype.failIfTransitionOngoing = function() {
      if (this.onGoingTransactionNewState !== Html5QrcodeScannerState.UNKNOWN) {
        throw "Cannot transition to a new state, already under transition";
      }
    };
    StateManagerImpl2.prototype.validateTransition = function(newState) {
      switch (this.state) {
        case Html5QrcodeScannerState.UNKNOWN:
          throw "Transition from unknown is not allowed";
        case Html5QrcodeScannerState.NOT_STARTED:
          this.failIfNewStateIs(newState, [Html5QrcodeScannerState.PAUSED]);
          break;
        case Html5QrcodeScannerState.SCANNING:
          break;
        case Html5QrcodeScannerState.PAUSED:
          break;
      }
    };
    StateManagerImpl2.prototype.failIfNewStateIs = function(newState, disallowedStatesToTransition) {
      for (var _i = 0, disallowedStatesToTransition_1 = disallowedStatesToTransition; _i < disallowedStatesToTransition_1.length; _i++) {
        var disallowedState = disallowedStatesToTransition_1[_i];
        if (newState === disallowedState) {
          throw "Cannot transition from ".concat(this.state, " to ").concat(newState);
        }
      }
    };
    return StateManagerImpl2;
  }();
  var StateManagerProxy = function() {
    function StateManagerProxy2(stateManager) {
      this.stateManager = stateManager;
    }
    StateManagerProxy2.prototype.startTransition = function(newState) {
      return this.stateManager.startTransition(newState);
    };
    StateManagerProxy2.prototype.directTransition = function(newState) {
      this.stateManager.directTransition(newState);
    };
    StateManagerProxy2.prototype.getState = function() {
      return this.stateManager.getState();
    };
    StateManagerProxy2.prototype.canScanFile = function() {
      return this.stateManager.getState() === Html5QrcodeScannerState.NOT_STARTED;
    };
    StateManagerProxy2.prototype.isScanning = function() {
      return this.stateManager.getState() !== Html5QrcodeScannerState.NOT_STARTED;
    };
    StateManagerProxy2.prototype.isStrictlyScanning = function() {
      return this.stateManager.getState() === Html5QrcodeScannerState.SCANNING;
    };
    StateManagerProxy2.prototype.isPaused = function() {
      return this.stateManager.getState() === Html5QrcodeScannerState.PAUSED;
    };
    return StateManagerProxy2;
  }();
  var StateManagerFactory = function() {
    function StateManagerFactory2() {
    }
    StateManagerFactory2.create = function() {
      return new StateManagerProxy(new StateManagerImpl());
    };
    return StateManagerFactory2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/html5-qrcode.js
  var __extends2 = function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var Constants = function(_super) {
    __extends2(Constants2, _super);
    function Constants2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Constants2.DEFAULT_WIDTH = 300;
    Constants2.DEFAULT_WIDTH_OFFSET = 2;
    Constants2.FILE_SCAN_MIN_HEIGHT = 300;
    Constants2.FILE_SCAN_HIDDEN_CANVAS_PADDING = 100;
    Constants2.MIN_QR_BOX_SIZE = 50;
    Constants2.SHADED_LEFT = 1;
    Constants2.SHADED_RIGHT = 2;
    Constants2.SHADED_TOP = 3;
    Constants2.SHADED_BOTTOM = 4;
    Constants2.SHADED_REGION_ELEMENT_ID = "qr-shaded-region";
    Constants2.VERBOSE = false;
    Constants2.BORDER_SHADER_DEFAULT_COLOR = "#ffffff";
    Constants2.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)";
    return Constants2;
  }(Html5QrcodeConstants);
  var InternalHtml5QrcodeConfig = function() {
    function InternalHtml5QrcodeConfig2(config, logger) {
      this.logger = logger;
      this.fps = Constants.SCAN_DEFAULT_FPS;
      if (!config) {
        this.disableFlip = Constants.DEFAULT_DISABLE_FLIP;
      } else {
        if (config.fps) {
          this.fps = config.fps;
        }
        this.disableFlip = config.disableFlip === true;
        this.qrbox = config.qrbox;
        this.aspectRatio = config.aspectRatio;
        this.videoConstraints = config.videoConstraints;
      }
    }
    InternalHtml5QrcodeConfig2.prototype.isMediaStreamConstraintsValid = function() {
      if (!this.videoConstraints) {
        this.logger.logError("Empty videoConstraints", true);
        return false;
      }
      return VideoConstraintsUtil.isMediaStreamConstraintsValid(this.videoConstraints, this.logger);
    };
    InternalHtml5QrcodeConfig2.prototype.isShadedBoxEnabled = function() {
      return !isNullOrUndefined(this.qrbox);
    };
    InternalHtml5QrcodeConfig2.create = function(config, logger) {
      return new InternalHtml5QrcodeConfig2(config, logger);
    };
    return InternalHtml5QrcodeConfig2;
  }();
  var Html5Qrcode = function() {
    function Html5Qrcode2(elementId, configOrVerbosityFlag) {
      this.element = null;
      this.canvasElement = null;
      this.scannerPausedUiElement = null;
      this.hasBorderShaders = null;
      this.borderShaders = null;
      this.qrMatch = null;
      this.renderedCamera = null;
      this.qrRegion = null;
      this.context = null;
      this.lastScanImageFile = null;
      this.isScanning = false;
      if (!document.getElementById(elementId)) {
        throw "HTML Element with id=".concat(elementId, " not found");
      }
      this.elementId = elementId;
      this.verbose = false;
      var experimentalFeatureConfig;
      var configObject;
      if (typeof configOrVerbosityFlag == "boolean") {
        this.verbose = configOrVerbosityFlag === true;
      } else if (configOrVerbosityFlag) {
        configObject = configOrVerbosityFlag;
        this.verbose = configObject.verbose === true;
        experimentalFeatureConfig = configObject.experimentalFeatures;
      }
      this.logger = new BaseLoggger(this.verbose);
      this.qrcode = new Html5QrcodeShim(this.getSupportedFormats(configOrVerbosityFlag), this.getUseBarCodeDetectorIfSupported(configObject), this.verbose, this.logger);
      this.foreverScanTimeout;
      this.shouldScan = true;
      this.stateManagerProxy = StateManagerFactory.create();
    }
    Html5Qrcode2.prototype.start = function(cameraIdOrConfig, configuration, qrCodeSuccessCallback, qrCodeErrorCallback) {
      var _this = this;
      if (!cameraIdOrConfig) {
        throw "cameraIdOrConfig is required";
      }
      if (!qrCodeSuccessCallback || typeof qrCodeSuccessCallback != "function") {
        throw "qrCodeSuccessCallback is required and should be a function.";
      }
      var qrCodeErrorCallbackInternal;
      if (qrCodeErrorCallback) {
        qrCodeErrorCallbackInternal = qrCodeErrorCallback;
      } else {
        qrCodeErrorCallbackInternal = this.verbose ? this.logger.log : function() {
        };
      }
      var internalConfig = InternalHtml5QrcodeConfig.create(configuration, this.logger);
      this.clearElement();
      var videoConstraintsAvailableAndValid = false;
      if (internalConfig.videoConstraints) {
        if (!internalConfig.isMediaStreamConstraintsValid()) {
          this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'", true);
        } else {
          videoConstraintsAvailableAndValid = true;
        }
      }
      var areVideoConstraintsEnabled = videoConstraintsAvailableAndValid;
      var element = document.getElementById(this.elementId);
      var rootElementWidth = element.clientWidth ? element.clientWidth : Constants.DEFAULT_WIDTH;
      element.style.position = "relative";
      this.shouldScan = true;
      this.element = element;
      var $this = this;
      var toScanningStateChangeTransaction = this.stateManagerProxy.startTransition(Html5QrcodeScannerState.SCANNING);
      return new Promise(function(resolve, reject) {
        var videoConstraints = areVideoConstraintsEnabled ? internalConfig.videoConstraints : $this.createVideoConstraints(cameraIdOrConfig);
        if (!videoConstraints) {
          toScanningStateChangeTransaction.cancel();
          reject("videoConstraints should be defined");
          return;
        }
        var cameraRenderingOptions = {};
        if (!areVideoConstraintsEnabled || internalConfig.aspectRatio) {
          cameraRenderingOptions.aspectRatio = internalConfig.aspectRatio;
        }
        var renderingCallbacks = {
          onRenderSurfaceReady: function(viewfinderWidth, viewfinderHeight) {
            $this.setupUi(viewfinderWidth, viewfinderHeight, internalConfig);
            $this.isScanning = true;
            $this.foreverScan(internalConfig, qrCodeSuccessCallback, qrCodeErrorCallbackInternal);
          }
        };
        CameraFactory.failIfNotSupported().then(function(factory) {
          factory.create(videoConstraints).then(function(camera) {
            return camera.render(_this.element, cameraRenderingOptions, renderingCallbacks).then(function(renderedCamera) {
              $this.renderedCamera = renderedCamera;
              toScanningStateChangeTransaction.execute();
              resolve(null);
            }).catch(function(error) {
              toScanningStateChangeTransaction.cancel();
              reject(error);
            });
          }).catch(function(error) {
            toScanningStateChangeTransaction.cancel();
            reject(Html5QrcodeStrings.errorGettingUserMedia(error));
          });
        }).catch(function(_) {
          toScanningStateChangeTransaction.cancel();
          reject(Html5QrcodeStrings.cameraStreamingNotSupported());
        });
      });
    };
    Html5Qrcode2.prototype.pause = function(shouldPauseVideo) {
      if (!this.stateManagerProxy.isStrictlyScanning()) {
        throw "Cannot pause, scanner is not scanning.";
      }
      this.stateManagerProxy.directTransition(Html5QrcodeScannerState.PAUSED);
      this.showPausedState();
      if (isNullOrUndefined(shouldPauseVideo) || shouldPauseVideo !== true) {
        shouldPauseVideo = false;
      }
      if (shouldPauseVideo && this.renderedCamera) {
        this.renderedCamera.pause();
      }
    };
    Html5Qrcode2.prototype.resume = function() {
      if (!this.stateManagerProxy.isPaused()) {
        throw "Cannot result, scanner is not paused.";
      }
      if (!this.renderedCamera) {
        throw "renderedCamera doesn't exist while trying resume()";
      }
      var $this = this;
      var transitionToScanning = function() {
        $this.stateManagerProxy.directTransition(Html5QrcodeScannerState.SCANNING);
        $this.hidePausedState();
      };
      if (!this.renderedCamera.isPaused()) {
        transitionToScanning();
        return;
      }
      this.renderedCamera.resume(function() {
        transitionToScanning();
      });
    };
    Html5Qrcode2.prototype.getState = function() {
      return this.stateManagerProxy.getState();
    };
    Html5Qrcode2.prototype.stop = function() {
      var _this = this;
      if (!this.stateManagerProxy.isScanning()) {
        throw "Cannot stop, scanner is not running or paused.";
      }
      var toStoppedStateTransaction = this.stateManagerProxy.startTransition(Html5QrcodeScannerState.NOT_STARTED);
      this.shouldScan = false;
      if (this.foreverScanTimeout) {
        clearTimeout(this.foreverScanTimeout);
      }
      var removeQrRegion = function() {
        if (!_this.element) {
          return;
        }
        var childElement = document.getElementById(Constants.SHADED_REGION_ELEMENT_ID);
        if (childElement) {
          _this.element.removeChild(childElement);
        }
      };
      var $this = this;
      return this.renderedCamera.close().then(function() {
        $this.renderedCamera = null;
        if ($this.element) {
          $this.element.removeChild($this.canvasElement);
          $this.canvasElement = null;
        }
        removeQrRegion();
        if ($this.qrRegion) {
          $this.qrRegion = null;
        }
        if ($this.context) {
          $this.context = null;
        }
        toStoppedStateTransaction.execute();
        $this.hidePausedState();
        $this.isScanning = false;
        return Promise.resolve();
      });
    };
    Html5Qrcode2.prototype.scanFile = function(imageFile, showImage) {
      return this.scanFileV2(imageFile, showImage).then(function(html5qrcodeResult) {
        return html5qrcodeResult.decodedText;
      });
    };
    Html5Qrcode2.prototype.scanFileV2 = function(imageFile, showImage) {
      var _this = this;
      if (!imageFile || !(imageFile instanceof File)) {
        throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
      }
      if (isNullOrUndefined(showImage)) {
        showImage = true;
      }
      if (!this.stateManagerProxy.canScanFile()) {
        throw "Cannot start file scan - ongoing camera scan";
      }
      return new Promise(function(resolve, reject) {
        _this.possiblyCloseLastScanImageFile();
        _this.clearElement();
        _this.lastScanImageFile = URL.createObjectURL(imageFile);
        var inputImage = new Image();
        inputImage.onload = function() {
          var imageWidth = inputImage.width;
          var imageHeight = inputImage.height;
          var element = document.getElementById(_this.elementId);
          var containerWidth = element.clientWidth ? element.clientWidth : Constants.DEFAULT_WIDTH;
          var containerHeight = Math.max(element.clientHeight ? element.clientHeight : imageHeight, Constants.FILE_SCAN_MIN_HEIGHT);
          var config = _this.computeCanvasDrawConfig(imageWidth, imageHeight, containerWidth, containerHeight);
          if (showImage) {
            var visibleCanvas = _this.createCanvasElement(containerWidth, containerHeight, "qr-canvas-visible");
            visibleCanvas.style.display = "inline-block";
            element.appendChild(visibleCanvas);
            var context_1 = visibleCanvas.getContext("2d");
            if (!context_1) {
              throw "Unable to get 2d context from canvas";
            }
            context_1.canvas.width = containerWidth;
            context_1.canvas.height = containerHeight;
            context_1.drawImage(inputImage, 0, 0, imageWidth, imageHeight, config.x, config.y, config.width, config.height);
          }
          var padding = Constants.FILE_SCAN_HIDDEN_CANVAS_PADDING;
          var hiddenImageWidth = Math.max(inputImage.width, config.width);
          var hiddenImageHeight = Math.max(inputImage.height, config.height);
          var hiddenCanvasWidth = hiddenImageWidth + 2 * padding;
          var hiddenCanvasHeight = hiddenImageHeight + 2 * padding;
          var hiddenCanvas = _this.createCanvasElement(hiddenCanvasWidth, hiddenCanvasHeight);
          element.appendChild(hiddenCanvas);
          var context = hiddenCanvas.getContext("2d");
          if (!context) {
            throw "Unable to get 2d context from canvas";
          }
          context.canvas.width = hiddenCanvasWidth;
          context.canvas.height = hiddenCanvasHeight;
          context.drawImage(inputImage, 0, 0, imageWidth, imageHeight, padding, padding, hiddenImageWidth, hiddenImageHeight);
          try {
            _this.qrcode.decodeRobustlyAsync(hiddenCanvas).then(function(result) {
              resolve(Html5QrcodeResultFactory.createFromQrcodeResult(result));
            }).catch(reject);
          } catch (exception) {
            reject("QR code parse error, error = ".concat(exception));
          }
        };
        inputImage.onerror = reject;
        inputImage.onabort = reject;
        inputImage.onstalled = reject;
        inputImage.onsuspend = reject;
        inputImage.src = URL.createObjectURL(imageFile);
      });
    };
    Html5Qrcode2.prototype.clear = function() {
      this.clearElement();
    };
    Html5Qrcode2.getCameras = function() {
      return CameraRetriever.retrieve();
    };
    Html5Qrcode2.prototype.getRunningTrackCapabilities = function() {
      return this.getRenderedCameraOrFail().getRunningTrackCapabilities();
    };
    Html5Qrcode2.prototype.getRunningTrackSettings = function() {
      return this.getRenderedCameraOrFail().getRunningTrackSettings();
    };
    Html5Qrcode2.prototype.getRunningTrackCameraCapabilities = function() {
      return this.getRenderedCameraOrFail().getCapabilities();
    };
    Html5Qrcode2.prototype.applyVideoConstraints = function(videoConstaints) {
      if (!videoConstaints) {
        throw "videoConstaints is required argument.";
      } else if (!VideoConstraintsUtil.isMediaStreamConstraintsValid(videoConstaints, this.logger)) {
        throw "invalid videoConstaints passed, check logs for more details";
      }
      return this.getRenderedCameraOrFail().applyVideoConstraints(videoConstaints);
    };
    Html5Qrcode2.prototype.getRenderedCameraOrFail = function() {
      if (this.renderedCamera == null) {
        throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
      }
      return this.renderedCamera;
    };
    Html5Qrcode2.prototype.getSupportedFormats = function(configOrVerbosityFlag) {
      var allFormats = [
        Html5QrcodeSupportedFormats.QR_CODE,
        Html5QrcodeSupportedFormats.AZTEC,
        Html5QrcodeSupportedFormats.CODABAR,
        Html5QrcodeSupportedFormats.CODE_39,
        Html5QrcodeSupportedFormats.CODE_93,
        Html5QrcodeSupportedFormats.CODE_128,
        Html5QrcodeSupportedFormats.DATA_MATRIX,
        Html5QrcodeSupportedFormats.MAXICODE,
        Html5QrcodeSupportedFormats.ITF,
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.EAN_8,
        Html5QrcodeSupportedFormats.PDF_417,
        Html5QrcodeSupportedFormats.RSS_14,
        Html5QrcodeSupportedFormats.RSS_EXPANDED,
        Html5QrcodeSupportedFormats.UPC_A,
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION
      ];
      if (!configOrVerbosityFlag || typeof configOrVerbosityFlag == "boolean") {
        return allFormats;
      }
      if (!configOrVerbosityFlag.formatsToSupport) {
        return allFormats;
      }
      if (!Array.isArray(configOrVerbosityFlag.formatsToSupport)) {
        throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
      }
      if (configOrVerbosityFlag.formatsToSupport.length === 0) {
        throw "Atleast 1 formatsToSupport is needed.";
      }
      var supportedFormats = [];
      for (var _i = 0, _a = configOrVerbosityFlag.formatsToSupport; _i < _a.length; _i++) {
        var format = _a[_i];
        if (isValidHtml5QrcodeSupportedFormats(format)) {
          supportedFormats.push(format);
        } else {
          this.logger.warn("Invalid format: ".concat(format, " passed in config, ignoring."));
        }
      }
      if (supportedFormats.length === 0) {
        throw "None of formatsToSupport match supported values.";
      }
      return supportedFormats;
    };
    Html5Qrcode2.prototype.getUseBarCodeDetectorIfSupported = function(config) {
      if (isNullOrUndefined(config)) {
        return true;
      }
      if (!isNullOrUndefined(config.useBarCodeDetectorIfSupported)) {
        return config.useBarCodeDetectorIfSupported !== false;
      }
      if (isNullOrUndefined(config.experimentalFeatures)) {
        return true;
      }
      var experimentalFeatures = config.experimentalFeatures;
      if (isNullOrUndefined(experimentalFeatures.useBarCodeDetectorIfSupported)) {
        return true;
      }
      return experimentalFeatures.useBarCodeDetectorIfSupported !== false;
    };
    Html5Qrcode2.prototype.validateQrboxSize = function(viewfinderWidth, viewfinderHeight, internalConfig) {
      var _this = this;
      var qrboxSize = internalConfig.qrbox;
      this.validateQrboxConfig(qrboxSize);
      var qrDimensions = this.toQrdimensions(viewfinderWidth, viewfinderHeight, qrboxSize);
      var validateMinSize = function(size) {
        if (size < Constants.MIN_QR_BOX_SIZE) {
          throw "minimum size of 'config.qrbox' dimension value is" + " ".concat(Constants.MIN_QR_BOX_SIZE, "px.");
        }
      };
      var correctWidthBasedOnRootElementSize = function(configWidth) {
        if (configWidth > viewfinderWidth) {
          _this.logger.warn("`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element.");
          configWidth = viewfinderWidth;
        }
        return configWidth;
      };
      validateMinSize(qrDimensions.width);
      validateMinSize(qrDimensions.height);
      qrDimensions.width = correctWidthBasedOnRootElementSize(qrDimensions.width);
    };
    Html5Qrcode2.prototype.validateQrboxConfig = function(qrboxSize) {
      if (typeof qrboxSize === "number") {
        return;
      }
      if (typeof qrboxSize === "function") {
        return;
      }
      if (qrboxSize.width === void 0 || qrboxSize.height === void 0) {
        throw "Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set.";
      }
    };
    Html5Qrcode2.prototype.toQrdimensions = function(viewfinderWidth, viewfinderHeight, qrboxSize) {
      if (typeof qrboxSize === "number") {
        return { width: qrboxSize, height: qrboxSize };
      } else if (typeof qrboxSize === "function") {
        try {
          return qrboxSize(viewfinderWidth, viewfinderHeight);
        } catch (error) {
          throw new Error("qrbox config was passed as a function but it failed with unknown error" + error);
        }
      }
      return qrboxSize;
    };
    Html5Qrcode2.prototype.setupUi = function(viewfinderWidth, viewfinderHeight, internalConfig) {
      if (internalConfig.isShadedBoxEnabled()) {
        this.validateQrboxSize(viewfinderWidth, viewfinderHeight, internalConfig);
      }
      var qrboxSize = isNullOrUndefined(internalConfig.qrbox) ? { width: viewfinderWidth, height: viewfinderHeight } : internalConfig.qrbox;
      this.validateQrboxConfig(qrboxSize);
      var qrDimensions = this.toQrdimensions(viewfinderWidth, viewfinderHeight, qrboxSize);
      if (qrDimensions.height > viewfinderHeight) {
        this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");
      }
      var shouldShadingBeApplied = internalConfig.isShadedBoxEnabled() && qrDimensions.height <= viewfinderHeight;
      var defaultQrRegion = {
        x: 0,
        y: 0,
        width: viewfinderWidth,
        height: viewfinderHeight
      };
      var qrRegion = shouldShadingBeApplied ? this.getShadedRegionBounds(viewfinderWidth, viewfinderHeight, qrDimensions) : defaultQrRegion;
      var canvasElement = this.createCanvasElement(qrRegion.width, qrRegion.height);
      var contextAttributes = { willReadFrequently: true };
      var context = canvasElement.getContext("2d", contextAttributes);
      context.canvas.width = qrRegion.width;
      context.canvas.height = qrRegion.height;
      this.element.append(canvasElement);
      if (shouldShadingBeApplied) {
        this.possiblyInsertShadingElement(this.element, viewfinderWidth, viewfinderHeight, qrDimensions);
      }
      this.createScannerPausedUiElement(this.element);
      this.qrRegion = qrRegion;
      this.context = context;
      this.canvasElement = canvasElement;
    };
    Html5Qrcode2.prototype.createScannerPausedUiElement = function(rootElement) {
      var scannerPausedUiElement = document.createElement("div");
      scannerPausedUiElement.innerText = Html5QrcodeStrings.scannerPaused();
      scannerPausedUiElement.style.display = "none";
      scannerPausedUiElement.style.position = "absolute";
      scannerPausedUiElement.style.top = "0px";
      scannerPausedUiElement.style.zIndex = "1";
      scannerPausedUiElement.style.background = "rgba(9, 9, 9, 0.46)";
      scannerPausedUiElement.style.color = "#FFECEC";
      scannerPausedUiElement.style.textAlign = "center";
      scannerPausedUiElement.style.width = "100%";
      rootElement.appendChild(scannerPausedUiElement);
      this.scannerPausedUiElement = scannerPausedUiElement;
    };
    Html5Qrcode2.prototype.scanContext = function(qrCodeSuccessCallback, qrCodeErrorCallback) {
      var _this = this;
      if (this.stateManagerProxy.isPaused()) {
        return Promise.resolve(false);
      }
      return this.qrcode.decodeAsync(this.canvasElement).then(function(result) {
        qrCodeSuccessCallback(result.text, Html5QrcodeResultFactory.createFromQrcodeResult(result));
        _this.possiblyUpdateShaders(true);
        return true;
      }).catch(function(error) {
        _this.possiblyUpdateShaders(false);
        var errorMessage = Html5QrcodeStrings.codeParseError(error);
        qrCodeErrorCallback(errorMessage, Html5QrcodeErrorFactory.createFrom(errorMessage));
        return false;
      });
    };
    Html5Qrcode2.prototype.foreverScan = function(internalConfig, qrCodeSuccessCallback, qrCodeErrorCallback) {
      var _this = this;
      if (!this.shouldScan) {
        return;
      }
      if (!this.renderedCamera) {
        return;
      }
      var videoElement = this.renderedCamera.getSurface();
      var widthRatio = videoElement.videoWidth / videoElement.clientWidth;
      var heightRatio = videoElement.videoHeight / videoElement.clientHeight;
      if (!this.qrRegion) {
        throw "qrRegion undefined when localMediaStream is ready.";
      }
      var sWidthOffset = this.qrRegion.width * widthRatio;
      var sHeightOffset = this.qrRegion.height * heightRatio;
      var sxOffset = this.qrRegion.x * widthRatio;
      var syOffset = this.qrRegion.y * heightRatio;
      this.context.drawImage(videoElement, sxOffset, syOffset, sWidthOffset, sHeightOffset, 0, 0, this.qrRegion.width, this.qrRegion.height);
      var triggerNextScan = function() {
        _this.foreverScanTimeout = setTimeout(function() {
          _this.foreverScan(internalConfig, qrCodeSuccessCallback, qrCodeErrorCallback);
        }, _this.getTimeoutFps(internalConfig.fps));
      };
      this.scanContext(qrCodeSuccessCallback, qrCodeErrorCallback).then(function(isSuccessfull) {
        if (!isSuccessfull && internalConfig.disableFlip !== true) {
          _this.context.translate(_this.context.canvas.width, 0);
          _this.context.scale(-1, 1);
          _this.scanContext(qrCodeSuccessCallback, qrCodeErrorCallback).finally(function() {
            triggerNextScan();
          });
        } else {
          triggerNextScan();
        }
      }).catch(function(error) {
        _this.logger.logError("Error happend while scanning context", error);
        triggerNextScan();
      });
    };
    Html5Qrcode2.prototype.createVideoConstraints = function(cameraIdOrConfig) {
      if (typeof cameraIdOrConfig == "string") {
        return { deviceId: { exact: cameraIdOrConfig } };
      } else if (typeof cameraIdOrConfig == "object") {
        var facingModeKey = "facingMode";
        var deviceIdKey = "deviceId";
        var allowedFacingModeValues_1 = { "user": true, "environment": true };
        var exactKey = "exact";
        var isValidFacingModeValue = function(value) {
          if (value in allowedFacingModeValues_1) {
            return true;
          } else {
            throw "config has invalid 'facingMode' value = " + "'".concat(value, "'");
          }
        };
        var keys = Object.keys(cameraIdOrConfig);
        if (keys.length !== 1) {
          throw "'cameraIdOrConfig' object should have exactly 1 key," + " if passed as an object, found ".concat(keys.length, " keys");
        }
        var key = Object.keys(cameraIdOrConfig)[0];
        if (key !== facingModeKey && key !== deviceIdKey) {
          throw "Only '".concat(facingModeKey, "' and '").concat(deviceIdKey, "' ") + " are supported for 'cameraIdOrConfig'";
        }
        if (key === facingModeKey) {
          var facingMode = cameraIdOrConfig.facingMode;
          if (typeof facingMode == "string") {
            if (isValidFacingModeValue(facingMode)) {
              return { facingMode };
            }
          } else if (typeof facingMode == "object") {
            if (exactKey in facingMode) {
              if (isValidFacingModeValue(facingMode["".concat(exactKey)])) {
                return {
                  facingMode: {
                    exact: facingMode["".concat(exactKey)]
                  }
                };
              }
            } else {
              throw "'facingMode' should be string or object with" + " ".concat(exactKey, " as key.");
            }
          } else {
            var type_1 = typeof facingMode;
            throw "Invalid type of 'facingMode' = ".concat(type_1);
          }
        } else {
          var deviceId = cameraIdOrConfig.deviceId;
          if (typeof deviceId == "string") {
            return { deviceId };
          } else if (typeof deviceId == "object") {
            if (exactKey in deviceId) {
              return {
                deviceId: { exact: deviceId["".concat(exactKey)] }
              };
            } else {
              throw "'deviceId' should be string or object with" + " ".concat(exactKey, " as key.");
            }
          } else {
            var type_2 = typeof deviceId;
            throw "Invalid type of 'deviceId' = ".concat(type_2);
          }
        }
      }
      var type = typeof cameraIdOrConfig;
      throw "Invalid type of 'cameraIdOrConfig' = ".concat(type);
    };
    Html5Qrcode2.prototype.computeCanvasDrawConfig = function(imageWidth, imageHeight, containerWidth, containerHeight) {
      if (imageWidth <= containerWidth && imageHeight <= containerHeight) {
        var xoffset = (containerWidth - imageWidth) / 2;
        var yoffset = (containerHeight - imageHeight) / 2;
        return {
          x: xoffset,
          y: yoffset,
          width: imageWidth,
          height: imageHeight
        };
      } else {
        var formerImageWidth = imageWidth;
        var formerImageHeight = imageHeight;
        if (imageWidth > containerWidth) {
          imageHeight = containerWidth / imageWidth * imageHeight;
          imageWidth = containerWidth;
        }
        if (imageHeight > containerHeight) {
          imageWidth = containerHeight / imageHeight * imageWidth;
          imageHeight = containerHeight;
        }
        this.logger.log("Image downsampled from " + "".concat(formerImageWidth, "X").concat(formerImageHeight) + " to ".concat(imageWidth, "X").concat(imageHeight, "."));
        return this.computeCanvasDrawConfig(imageWidth, imageHeight, containerWidth, containerHeight);
      }
    };
    Html5Qrcode2.prototype.clearElement = function() {
      if (this.stateManagerProxy.isScanning()) {
        throw "Cannot clear while scan is ongoing, close it first.";
      }
      var element = document.getElementById(this.elementId);
      if (element) {
        element.innerHTML = "";
      }
    };
    Html5Qrcode2.prototype.possiblyUpdateShaders = function(qrMatch) {
      if (this.qrMatch === qrMatch) {
        return;
      }
      if (this.hasBorderShaders && this.borderShaders && this.borderShaders.length) {
        this.borderShaders.forEach(function(shader) {
          shader.style.backgroundColor = qrMatch ? Constants.BORDER_SHADER_MATCH_COLOR : Constants.BORDER_SHADER_DEFAULT_COLOR;
        });
      }
      this.qrMatch = qrMatch;
    };
    Html5Qrcode2.prototype.possiblyCloseLastScanImageFile = function() {
      if (this.lastScanImageFile) {
        URL.revokeObjectURL(this.lastScanImageFile);
        this.lastScanImageFile = null;
      }
    };
    Html5Qrcode2.prototype.createCanvasElement = function(width, height, customId) {
      var canvasWidth = width;
      var canvasHeight = height;
      var canvasElement = document.createElement("canvas");
      canvasElement.style.width = "".concat(canvasWidth, "px");
      canvasElement.style.height = "".concat(canvasHeight, "px");
      canvasElement.style.display = "none";
      canvasElement.id = isNullOrUndefined(customId) ? "qr-canvas" : customId;
      return canvasElement;
    };
    Html5Qrcode2.prototype.getShadedRegionBounds = function(width, height, qrboxSize) {
      if (qrboxSize.width > width || qrboxSize.height > height) {
        throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
      }
      return {
        x: (width - qrboxSize.width) / 2,
        y: (height - qrboxSize.height) / 2,
        width: qrboxSize.width,
        height: qrboxSize.height
      };
    };
    Html5Qrcode2.prototype.possiblyInsertShadingElement = function(element, width, height, qrboxSize) {
      if (width - qrboxSize.width < 1 || height - qrboxSize.height < 1) {
        return;
      }
      var shadingElement = document.createElement("div");
      shadingElement.style.position = "absolute";
      var rightLeftBorderSize = (width - qrboxSize.width) / 2;
      var topBottomBorderSize = (height - qrboxSize.height) / 2;
      shadingElement.style.borderLeft = "".concat(rightLeftBorderSize, "px solid rgba(0, 0, 0, 0.48)");
      shadingElement.style.borderRight = "".concat(rightLeftBorderSize, "px solid rgba(0, 0, 0, 0.48)");
      shadingElement.style.borderTop = "".concat(topBottomBorderSize, "px solid rgba(0, 0, 0, 0.48)");
      shadingElement.style.borderBottom = "".concat(topBottomBorderSize, "px solid rgba(0, 0, 0, 0.48)");
      shadingElement.style.boxSizing = "border-box";
      shadingElement.style.top = "0px";
      shadingElement.style.bottom = "0px";
      shadingElement.style.left = "0px";
      shadingElement.style.right = "0px";
      shadingElement.id = "".concat(Constants.SHADED_REGION_ELEMENT_ID);
      if (width - qrboxSize.width < 11 || height - qrboxSize.height < 11) {
        this.hasBorderShaders = false;
      } else {
        var smallSize = 5;
        var largeSize = 40;
        this.insertShaderBorders(shadingElement, largeSize, smallSize, -smallSize, null, 0, true);
        this.insertShaderBorders(shadingElement, largeSize, smallSize, -smallSize, null, 0, false);
        this.insertShaderBorders(shadingElement, largeSize, smallSize, null, -smallSize, 0, true);
        this.insertShaderBorders(shadingElement, largeSize, smallSize, null, -smallSize, 0, false);
        this.insertShaderBorders(shadingElement, smallSize, largeSize + smallSize, -smallSize, null, -smallSize, true);
        this.insertShaderBorders(shadingElement, smallSize, largeSize + smallSize, null, -smallSize, -smallSize, true);
        this.insertShaderBorders(shadingElement, smallSize, largeSize + smallSize, -smallSize, null, -smallSize, false);
        this.insertShaderBorders(shadingElement, smallSize, largeSize + smallSize, null, -smallSize, -smallSize, false);
        this.hasBorderShaders = true;
      }
      element.append(shadingElement);
    };
    Html5Qrcode2.prototype.insertShaderBorders = function(shaderElem, width, height, top, bottom, side, isLeft) {
      var elem = document.createElement("div");
      elem.style.position = "absolute";
      elem.style.backgroundColor = Constants.BORDER_SHADER_DEFAULT_COLOR;
      elem.style.width = "".concat(width, "px");
      elem.style.height = "".concat(height, "px");
      if (top !== null) {
        elem.style.top = "".concat(top, "px");
      }
      if (bottom !== null) {
        elem.style.bottom = "".concat(bottom, "px");
      }
      if (isLeft) {
        elem.style.left = "".concat(side, "px");
      } else {
        elem.style.right = "".concat(side, "px");
      }
      if (!this.borderShaders) {
        this.borderShaders = [];
      }
      this.borderShaders.push(elem);
      shaderElem.appendChild(elem);
    };
    Html5Qrcode2.prototype.showPausedState = function() {
      if (!this.scannerPausedUiElement) {
        throw "[internal error] scanner paused UI element not found";
      }
      this.scannerPausedUiElement.style.display = "block";
    };
    Html5Qrcode2.prototype.hidePausedState = function() {
      if (!this.scannerPausedUiElement) {
        throw "[internal error] scanner paused UI element not found";
      }
      this.scannerPausedUiElement.style.display = "none";
    };
    Html5Qrcode2.prototype.getTimeoutFps = function(fps) {
      return 1e3 / fps;
    };
    return Html5Qrcode2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/image-assets.js
  var SVG_XML_PREFIX = "data:image/svg+xml;base64,";
  var ASSET_CAMERA_SCAN = SVG_XML_PREFIX + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzEuNjQzIDM3MS42NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS42NDMgMzcxLjY0MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTEwNS4wODQgMzguMjcxaDE2My43Njh2MjBIMTA1LjA4NHoiLz48cGF0aCBkPSJNMzExLjU5NiAxOTAuMTg5Yy03LjQ0MS05LjM0Ny0xOC40MDMtMTYuMjA2LTMyLjc0My0yMC41MjJWMzBjMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwSDEyNS4wODRjLTE2LjU0MiAwLTMwIDEzLjQ1OC0zMCAzMHYxMjAuMTQzaC04LjI5NmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjEuMzMzYTI5LjgwNCAyOS44MDQgMCAwIDAgNC42MDMgMTUuOTM5Yy03LjM0IDUuNDc0LTEyLjEwMyAxNC4yMjEtMTIuMTAzIDI0LjA2MXYxLjMzM2MwIDkuODQgNC43NjMgMTguNTg3IDEyLjEwMyAyNC4wNjJhMjkuODEgMjkuODEgMCAwIDAtNC42MDMgMTUuOTM4djEuMzMzYzAgMTYuNTQyIDEzLjQ1OCAzMCAzMCAzMGg4LjMyNGMuNDI3IDExLjYzMSA3LjUwMyAyMS41ODcgMTcuNTM0IDI2LjE3Ny45MzEgMTAuNTAzIDQuMDg0IDMwLjE4NyAxNC43NjggNDUuNTM3YTkuOTg4IDkuOTg4IDAgMCAwIDguMjE2IDQuMjg4IDkuOTU4IDkuOTU4IDAgMCAwIDUuNzA0LTEuNzkzYzQuNTMzLTMuMTU1IDUuNjUtOS4zODggMi40OTUtMTMuOTIxLTYuNzk4LTkuNzY3LTkuNjAyLTIyLjYwOC0xMC43Ni0zMS40aDgyLjY4NWMuMjcyLjQxNC41NDUuODE4LjgxNSAxLjIxIDMuMTQyIDQuNTQxIDkuMzcyIDUuNjc5IDEzLjkxMyAyLjUzNCA0LjU0Mi0zLjE0MiA1LjY3Ny05LjM3MSAyLjUzNS0xMy45MTMtMTEuOTE5LTE3LjIyOS04Ljc4Ny0zNS44ODQgOS41ODEtNTcuMDEyIDMuMDY3LTIuNjUyIDEyLjMwNy0xMS43MzIgMTEuMjE3LTI0LjAzMy0uODI4LTkuMzQzLTcuMTA5LTE3LjE5NC0xOC42NjktMjMuMzM3YTkuODU3IDkuODU3IDAgMCAwLTEuMDYxLS40ODZjLS40NjYtLjE4Mi0xMS40MDMtNC41NzktOS43NDEtMTUuNzA2IDEuMDA3LTYuNzM3IDE0Ljc2OC04LjI3MyAyMy43NjYtNy42NjYgMjMuMTU2IDEuNTY5IDM5LjY5OCA3LjgwMyA0Ny44MzYgMTguMDI2IDUuNzUyIDcuMjI1IDcuNjA3IDE2LjYyMyA1LjY3MyAyOC43MzMtLjQxMyAyLjU4NS0uODI0IDUuMjQxLTEuMjQ1IDcuOTU5LTUuNzU2IDM3LjE5NC0xMi45MTkgODMuNDgzLTQ5Ljg3IDExNC42NjEtNC4yMjEgMy41NjEtNC43NTYgOS44Ny0xLjE5NCAxNC4wOTJhOS45OCA5Ljk4IDAgMCAwIDcuNjQ4IDMuNTUxIDkuOTU1IDkuOTU1IDAgMCAwIDYuNDQ0LTIuMzU4YzQyLjY3Mi0zNi4wMDUgNTAuODAyLTg4LjUzMyA1Ni43MzctMTI2Ljg4OC40MTUtMi42ODQuODIxLTUuMzA5IDEuMjI5LTcuODYzIDIuODM0LTE3LjcyMS0uNDU1LTMyLjY0MS05Ljc3Mi00NC4zNDV6bS0yMzIuMzA4IDQyLjYyYy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM2MwLTUuNTE0IDQuNDg2LTEwIDEwLTEwaDE1djIxLjMzM2gtMTV6bS0yLjUtNTIuNjY2YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoNy41djIxLjMzM2gtNy41Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM3ptMTcuNSA5My45OTloLTcuNWMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHYtMS4zMzNjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGg3LjV2MjEuMzMzem0zMC43OTYgMjguODg3Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi04LjI3MWg5MS40NTdjLS44NTEgNi42NjgtLjQzNyAxMi43ODcuNzMxIDE4LjI3MWgtODIuMTg4em03OS40ODItMTEzLjY5OGMtMy4xMjQgMjAuOTA2IDEyLjQyNyAzMy4xODQgMjEuNjI1IDM3LjA0IDUuNDQxIDIuOTY4IDcuNTUxIDUuNjQ3IDcuNzAxIDcuMTg4LjIxIDIuMTUtMi41NTMgNS42ODQtNC40NzcgNy4yNTEtLjQ4Mi4zNzgtLjkyOS44LTEuMzM1IDEuMjYxLTYuOTg3IDcuOTM2LTExLjk4MiAxNS41Mi0xNS40MzIgMjIuNjg4aC05Ny41NjRWMzBjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGgxMjMuNzY5YzUuNTE0IDAgMTAgNC40ODYgMTAgMTB2MTM1LjU3OWMtMy4wMzItLjM4MS02LjE1LS42OTQtOS4zODktLjkxNC0yNS4xNTktMS42OTQtNDIuMzcgNy43NDgtNDQuODk4IDI0LjY2NnoiLz48cGF0aCBkPSJNMTc5LjEyOSA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXpNMTcyLjYyOSAxNDIuODZoLTEyLjU2VjEzMC44YTUgNSAwIDEgMC0xMCAwdjE3LjA2MWE1IDUgMCAwIDAgNSA1aDE3LjU2YTUgNSAwIDEgMCAwLTEwLjAwMXpNMjE2LjU2OCA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXptLTUgMjQuMDYxaC0xNC4wNlY5My4xNjdoMTQuMDZ2MTQuMDYxek0yMTEuNjY5IDEyNS45MzZIMTk3LjQxYTUgNSAwIDAgMC01IDV2MTQuMjU3YTUgNSAwIDAgMCA1IDVoMTQuMjU5YTUgNSAwIDAgMCA1LTV2LTE0LjI1N2E1IDUgMCAwIDAtNS01eiIvPjwvc3ZnPg==";
  var ASSET_FILE_SCAN = SVG_XML_PREFIX + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4wMTggNTkuMDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS4wMTggNTkuMDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTguNzQxIDU0LjgwOS01Ljk2OS02LjI0NGExMC43NCAxMC43NCAwIDAgMCAyLjgyLTcuMjVjMC01Ljk1My00Ljg0My0xMC43OTYtMTAuNzk2LTEwLjc5NlMzNCAzNS4zNjEgMzQgNDEuMzE0IDM4Ljg0MyA1Mi4xMSA0NC43OTYgNTIuMTFjMi40NDEgMCA0LjY4OC0uODI0IDYuNDk5LTIuMTk2bDYuMDAxIDYuMjc3YS45OTguOTk4IDAgMCAwIDEuNDE0LjAzMiAxIDEgMCAwIDAgLjAzMS0xLjQxNHpNMzYgNDEuMzE0YzAtNC44NSAzLjk0Ni04Ljc5NiA4Ljc5Ni04Ljc5NnM4Ljc5NiAzLjk0NiA4Ljc5NiA4Ljc5Ni0zLjk0NiA4Ljc5Ni04Ljc5NiA4Ljc5NlMzNiA0Ni4xNjQgMzYgNDEuMzE0ek0xMC40MzEgMTYuMDg4YzAgMy4wNyAyLjQ5OCA1LjU2OCA1LjU2OSA1LjU2OHM1LjU2OS0yLjQ5OCA1LjU2OS01LjU2OGMwLTMuMDcxLTIuNDk4LTUuNTY5LTUuNTY5LTUuNTY5cy01LjU2OSAyLjQ5OC01LjU2OSA1LjU2OXptOS4xMzggMGMwIDEuOTY4LTEuNjAyIDMuNTY4LTMuNTY5IDMuNTY4cy0zLjU2OS0xLjYwMS0zLjU2OS0zLjU2OCAxLjYwMi0zLjU2OSAzLjU2OS0zLjU2OSAzLjU2OSAxLjYwMSAzLjU2OSAzLjU2OXoiLz48cGF0aCBkPSJtMzAuODgyIDI4Ljk4NyA5LjE4LTEwLjA1NCAxMS4yNjIgMTAuMzIzYTEgMSAwIDAgMCAxLjM1MS0xLjQ3NWwtMTItMTFhMSAxIDAgMCAwLTEuNDE0LjA2M2wtOS43OTQgMTAuNzI3LTQuNzQzLTQuNzQzYTEuMDAzIDEuMDAzIDAgMCAwLTEuMzY4LS4wNDRMNi4zMzkgMzcuNzY4YTEgMSAwIDEgMCAxLjMyMiAxLjUwMWwxNi4zMTMtMTQuMzYyIDcuMzE5IDcuMzE4YS45OTkuOTk5IDAgMSAwIDEuNDE0LTEuNDE0bC0xLjgyNS0xLjgyNHoiLz48cGF0aCBkPSJNMzAgNDYuNTE4SDJ2LTQyaDU0djI4YTEgMSAwIDEgMCAyIDB2LTI5YTEgMSAwIDAgMC0xLTFIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoMjlhMSAxIDAgMSAwIDAtMnoiLz48L3N2Zz4=";
  var ASSET_INFO_ICON_16PX = SVG_XML_PREFIX + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjMwIDBDMTAyLjk3NSAwIDAgMTAyLjk3NSAwIDIzMHMxMDIuOTc1IDIzMCAyMzAgMjMwIDIzMC0xMDIuOTc0IDIzMC0yMzBTMzU3LjAyNSAwIDIzMCAwem0zOC4zMzMgMzc3LjM2YzAgOC42NzYtNy4wMzQgMTUuNzEtMTUuNzEgMTUuNzFoLTQzLjEwMWMtOC42NzYgMC0xNS43MS03LjAzNC0xNS43MS0xNS43MVYyMDIuNDc3YzAtOC42NzYgNy4wMzMtMTUuNzEgMTUuNzEtMTUuNzFoNDMuMTAxYzguNjc2IDAgMTUuNzEgNy4wMzMgMTUuNzEgMTUuNzFWMzc3LjM2ek0yMzAgMTU3Yy0yMS41MzkgMC0zOS0xNy40NjEtMzktMzlzMTcuNDYxLTM5IDM5LTM5IDM5IDE3LjQ2MSAzOSAzOS0xNy40NjEgMzktMzkgMzl6Ii8+PC9zdmc+";
  var ASSET_CLOSE_ICON_16PX = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAQgAAAEIBarqQRAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE1SURBVDiNfdI7S0NBEAXgLya1otFgpbYSbISAgpXYi6CmiH9KCAiChaVga6OiWPgfRDQ+0itaGVNosXtluWwcuMzePfM4M3sq8lbHBubwg1dc4m1E/J/N4ghDPOIsfk/4xiEao5KX0McFljN4C9d4QTPXuY99jP3DsIoDPGM6BY5i5yI5R7O4q+ImFkJY2DCh3cAH2klyB+9J1xUMMAG7eCh1a+Mr+k48b5diXrFVwwLuS+BJ9MfR7+G0FHOHhTHhnXNWS87VDF4pcnfQK4Ep7XScNLmPTZgURNKKYENYWDpzW1BhscS1WHS8CDgURFJQrWcoF3c13KKbgg1BYQfy8xZWEzTTw1QZbAoKu8FqJnktdu5hcVSHmchiILzzuaDQvjBzV2m8yohCE1jHfPx/xhU+y4G/D75ELlRJsSYAAAAASUVORK5CYII=";

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/storage.js
  var PersistedDataFactory = function() {
    function PersistedDataFactory2() {
    }
    PersistedDataFactory2.createDefault = function() {
      return {
        hasPermission: false,
        lastUsedCameraId: null
      };
    };
    return PersistedDataFactory2;
  }();
  var PersistedDataManager = function() {
    function PersistedDataManager2() {
      this.data = PersistedDataFactory.createDefault();
      var data = localStorage.getItem(PersistedDataManager2.LOCAL_STORAGE_KEY);
      if (!data) {
        this.reset();
      } else {
        this.data = JSON.parse(data);
      }
    }
    PersistedDataManager2.prototype.hasCameraPermissions = function() {
      return this.data.hasPermission;
    };
    PersistedDataManager2.prototype.getLastUsedCameraId = function() {
      return this.data.lastUsedCameraId;
    };
    PersistedDataManager2.prototype.setHasPermission = function(hasPermission) {
      this.data.hasPermission = hasPermission;
      this.flush();
    };
    PersistedDataManager2.prototype.setLastUsedCameraId = function(lastUsedCameraId) {
      this.data.lastUsedCameraId = lastUsedCameraId;
      this.flush();
    };
    PersistedDataManager2.prototype.resetLastUsedCameraId = function() {
      this.data.lastUsedCameraId = null;
      this.flush();
    };
    PersistedDataManager2.prototype.reset = function() {
      this.data = PersistedDataFactory.createDefault();
      this.flush();
    };
    PersistedDataManager2.prototype.flush = function() {
      localStorage.setItem(PersistedDataManager2.LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    };
    PersistedDataManager2.LOCAL_STORAGE_KEY = "HTML5_QRCODE_DATA";
    return PersistedDataManager2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui.js
  var LibraryInfoDiv = function() {
    function LibraryInfoDiv2() {
      this.infoDiv = document.createElement("div");
    }
    LibraryInfoDiv2.prototype.renderInto = function(parent) {
      this.infoDiv.style.position = "absolute";
      this.infoDiv.style.top = "10px";
      this.infoDiv.style.right = "10px";
      this.infoDiv.style.zIndex = "2";
      this.infoDiv.style.display = "none";
      this.infoDiv.style.padding = "5pt";
      this.infoDiv.style.border = "1px solid #171717";
      this.infoDiv.style.fontSize = "10pt";
      this.infoDiv.style.background = "rgb(0 0 0 / 69%)";
      this.infoDiv.style.borderRadius = "5px";
      this.infoDiv.style.textAlign = "center";
      this.infoDiv.style.fontWeight = "400";
      this.infoDiv.style.color = "white";
      this.infoDiv.innerText = LibraryInfoStrings.poweredBy();
      var projectLink = document.createElement("a");
      projectLink.innerText = "ScanApp";
      projectLink.href = "https://scanapp.org";
      projectLink.target = "new";
      projectLink.style.color = "white";
      this.infoDiv.appendChild(projectLink);
      var breakElemFirst = document.createElement("br");
      var breakElemSecond = document.createElement("br");
      this.infoDiv.appendChild(breakElemFirst);
      this.infoDiv.appendChild(breakElemSecond);
      var reportIssueLink = document.createElement("a");
      reportIssueLink.innerText = LibraryInfoStrings.reportIssues();
      reportIssueLink.href = "https://github.com/mebjas/html5-qrcode/issues";
      reportIssueLink.target = "new";
      reportIssueLink.style.color = "white";
      this.infoDiv.appendChild(reportIssueLink);
      parent.appendChild(this.infoDiv);
    };
    LibraryInfoDiv2.prototype.show = function() {
      this.infoDiv.style.display = "block";
    };
    LibraryInfoDiv2.prototype.hide = function() {
      this.infoDiv.style.display = "none";
    };
    return LibraryInfoDiv2;
  }();
  var LibraryInfoIcon = function() {
    function LibraryInfoIcon2(onTapIn, onTapOut) {
      this.isShowingInfoIcon = true;
      this.onTapIn = onTapIn;
      this.onTapOut = onTapOut;
      this.infoIcon = document.createElement("img");
    }
    LibraryInfoIcon2.prototype.renderInto = function(parent) {
      var _this = this;
      this.infoIcon.alt = "Info icon";
      this.infoIcon.src = ASSET_INFO_ICON_16PX;
      this.infoIcon.style.position = "absolute";
      this.infoIcon.style.top = "4px";
      this.infoIcon.style.right = "4px";
      this.infoIcon.style.opacity = "0.6";
      this.infoIcon.style.cursor = "pointer";
      this.infoIcon.style.zIndex = "2";
      this.infoIcon.style.width = "16px";
      this.infoIcon.style.height = "16px";
      this.infoIcon.onmouseover = function(_) {
        return _this.onHoverIn();
      };
      this.infoIcon.onmouseout = function(_) {
        return _this.onHoverOut();
      };
      this.infoIcon.onclick = function(_) {
        return _this.onClick();
      };
      parent.appendChild(this.infoIcon);
    };
    LibraryInfoIcon2.prototype.onHoverIn = function() {
      if (this.isShowingInfoIcon) {
        this.infoIcon.style.opacity = "1";
      }
    };
    LibraryInfoIcon2.prototype.onHoverOut = function() {
      if (this.isShowingInfoIcon) {
        this.infoIcon.style.opacity = "0.6";
      }
    };
    LibraryInfoIcon2.prototype.onClick = function() {
      if (this.isShowingInfoIcon) {
        this.isShowingInfoIcon = false;
        this.onTapIn();
        this.infoIcon.src = ASSET_CLOSE_ICON_16PX;
        this.infoIcon.style.opacity = "1";
      } else {
        this.isShowingInfoIcon = true;
        this.onTapOut();
        this.infoIcon.src = ASSET_INFO_ICON_16PX;
        this.infoIcon.style.opacity = "0.6";
      }
    };
    return LibraryInfoIcon2;
  }();
  var LibraryInfoContainer = function() {
    function LibraryInfoContainer2() {
      var _this = this;
      this.infoDiv = new LibraryInfoDiv();
      this.infoIcon = new LibraryInfoIcon(function() {
        _this.infoDiv.show();
      }, function() {
        _this.infoDiv.hide();
      });
    }
    LibraryInfoContainer2.prototype.renderInto = function(parent) {
      this.infoDiv.renderInto(parent);
      this.infoIcon.renderInto(parent);
    };
    return LibraryInfoContainer2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/camera/permissions.js
  var __awaiter6 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator6 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var CameraPermissions = function() {
    function CameraPermissions2() {
    }
    CameraPermissions2.hasPermissions = function() {
      return __awaiter6(this, void 0, void 0, function() {
        var devices, _i, devices_1, device;
        return __generator6(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, navigator.mediaDevices.enumerateDevices()];
            case 1:
              devices = _a.sent();
              for (_i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                device = devices_1[_i];
                if (device.kind === "videoinput" && device.label) {
                  return [2, true];
                }
              }
              return [2, false];
          }
        });
      });
    };
    return CameraPermissions2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui/scanner/scan-type-selector.js
  var ScanTypeSelector = function() {
    function ScanTypeSelector2(supportedScanTypes) {
      this.supportedScanTypes = this.validateAndReturnScanTypes(supportedScanTypes);
    }
    ScanTypeSelector2.prototype.getDefaultScanType = function() {
      return this.supportedScanTypes[0];
    };
    ScanTypeSelector2.prototype.hasMoreThanOneScanType = function() {
      return this.supportedScanTypes.length > 1;
    };
    ScanTypeSelector2.prototype.isCameraScanRequired = function() {
      for (var _i = 0, _a = this.supportedScanTypes; _i < _a.length; _i++) {
        var scanType = _a[_i];
        if (ScanTypeSelector2.isCameraScanType(scanType)) {
          return true;
        }
      }
      return false;
    };
    ScanTypeSelector2.isCameraScanType = function(scanType) {
      return scanType === Html5QrcodeScanType.SCAN_TYPE_CAMERA;
    };
    ScanTypeSelector2.isFileScanType = function(scanType) {
      return scanType === Html5QrcodeScanType.SCAN_TYPE_FILE;
    };
    ScanTypeSelector2.prototype.validateAndReturnScanTypes = function(supportedScanTypes) {
      if (!supportedScanTypes || supportedScanTypes.length === 0) {
        return Html5QrcodeConstants.DEFAULT_SUPPORTED_SCAN_TYPE;
      }
      var maxExpectedValues = Html5QrcodeConstants.DEFAULT_SUPPORTED_SCAN_TYPE.length;
      if (supportedScanTypes.length > maxExpectedValues) {
        throw "Max ".concat(maxExpectedValues, " values expected for ") + "supportedScanTypes";
      }
      for (var _i = 0, supportedScanTypes_1 = supportedScanTypes; _i < supportedScanTypes_1.length; _i++) {
        var scanType = supportedScanTypes_1[_i];
        if (!Html5QrcodeConstants.DEFAULT_SUPPORTED_SCAN_TYPE.includes(scanType)) {
          throw "Unsupported scan type ".concat(scanType);
        }
      }
      return supportedScanTypes;
    };
    return ScanTypeSelector2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui/scanner/base.js
  var PublicUiElementIdAndClasses = function() {
    function PublicUiElementIdAndClasses2() {
    }
    PublicUiElementIdAndClasses2.ALL_ELEMENT_CLASS = "html5-qrcode-element";
    PublicUiElementIdAndClasses2.CAMERA_PERMISSION_BUTTON_ID = "html5-qrcode-button-camera-permission";
    PublicUiElementIdAndClasses2.CAMERA_START_BUTTON_ID = "html5-qrcode-button-camera-start";
    PublicUiElementIdAndClasses2.CAMERA_STOP_BUTTON_ID = "html5-qrcode-button-camera-stop";
    PublicUiElementIdAndClasses2.TORCH_BUTTON_ID = "html5-qrcode-button-torch";
    PublicUiElementIdAndClasses2.CAMERA_SELECTION_SELECT_ID = "html5-qrcode-select-camera";
    PublicUiElementIdAndClasses2.FILE_SELECTION_BUTTON_ID = "html5-qrcode-button-file-selection";
    PublicUiElementIdAndClasses2.ZOOM_SLIDER_ID = "html5-qrcode-input-range-zoom";
    PublicUiElementIdAndClasses2.SCAN_TYPE_CHANGE_ANCHOR_ID = "html5-qrcode-anchor-scan-type-change";
    PublicUiElementIdAndClasses2.TORCH_BUTTON_CLASS_TORCH_ON = "html5-qrcode-button-torch-on";
    PublicUiElementIdAndClasses2.TORCH_BUTTON_CLASS_TORCH_OFF = "html5-qrcode-button-torch-off";
    return PublicUiElementIdAndClasses2;
  }();
  var BaseUiElementFactory = function() {
    function BaseUiElementFactory2() {
    }
    BaseUiElementFactory2.createElement = function(elementType, elementId) {
      var element = document.createElement(elementType);
      element.id = elementId;
      element.classList.add(PublicUiElementIdAndClasses.ALL_ELEMENT_CLASS);
      if (elementType === "button") {
        element.setAttribute("type", "button");
      }
      return element;
    };
    return BaseUiElementFactory2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui/scanner/torch-button.js
  var __awaiter7 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator7 = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var TorchController = function() {
    function TorchController2(torchCapability, buttonController, onTorchActionFailureCallback) {
      this.isTorchOn = false;
      this.torchCapability = torchCapability;
      this.buttonController = buttonController;
      this.onTorchActionFailureCallback = onTorchActionFailureCallback;
    }
    TorchController2.prototype.isTorchEnabled = function() {
      return this.isTorchOn;
    };
    TorchController2.prototype.flipState = function() {
      return __awaiter7(this, void 0, void 0, function() {
        var isTorchOnExpected, error_1;
        return __generator7(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.buttonController.disable();
              isTorchOnExpected = !this.isTorchOn;
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.torchCapability.apply(isTorchOnExpected)];
            case 2:
              _a.sent();
              this.updateUiBasedOnLatestSettings(this.torchCapability.value(), isTorchOnExpected);
              return [3, 4];
            case 3:
              error_1 = _a.sent();
              this.propagateFailure(isTorchOnExpected, error_1);
              this.buttonController.enable();
              return [3, 4];
            case 4:
              return [2];
          }
        });
      });
    };
    TorchController2.prototype.updateUiBasedOnLatestSettings = function(isTorchOn, isTorchOnExpected) {
      if (isTorchOn === isTorchOnExpected) {
        this.buttonController.setText(isTorchOnExpected ? Html5QrcodeScannerStrings.torchOffButton() : Html5QrcodeScannerStrings.torchOnButton());
        this.isTorchOn = isTorchOnExpected;
      } else {
        this.propagateFailure(isTorchOnExpected);
      }
      this.buttonController.enable();
    };
    TorchController2.prototype.propagateFailure = function(isTorchOnExpected, error) {
      var errorMessage = isTorchOnExpected ? Html5QrcodeScannerStrings.torchOnFailedMessage() : Html5QrcodeScannerStrings.torchOffFailedMessage();
      if (error) {
        errorMessage += "; Error = " + error;
      }
      this.onTorchActionFailureCallback(errorMessage);
    };
    TorchController2.prototype.reset = function() {
      this.isTorchOn = false;
    };
    return TorchController2;
  }();
  var TorchButton = function() {
    function TorchButton2(torchCapability, onTorchActionFailureCallback) {
      this.onTorchActionFailureCallback = onTorchActionFailureCallback;
      this.torchButton = BaseUiElementFactory.createElement("button", PublicUiElementIdAndClasses.TORCH_BUTTON_ID);
      this.torchController = new TorchController(torchCapability, this, onTorchActionFailureCallback);
    }
    TorchButton2.prototype.render = function(parentElement, torchButtonOptions) {
      var _this = this;
      this.torchButton.innerText = Html5QrcodeScannerStrings.torchOnButton();
      this.torchButton.style.display = torchButtonOptions.display;
      this.torchButton.style.marginLeft = torchButtonOptions.marginLeft;
      var $this = this;
      this.torchButton.addEventListener("click", function(_) {
        return __awaiter7(_this, void 0, void 0, function() {
          return __generator7(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, $this.torchController.flipState()];
              case 1:
                _a.sent();
                if ($this.torchController.isTorchEnabled()) {
                  $this.torchButton.classList.remove(PublicUiElementIdAndClasses.TORCH_BUTTON_CLASS_TORCH_OFF);
                  $this.torchButton.classList.add(PublicUiElementIdAndClasses.TORCH_BUTTON_CLASS_TORCH_ON);
                } else {
                  $this.torchButton.classList.remove(PublicUiElementIdAndClasses.TORCH_BUTTON_CLASS_TORCH_ON);
                  $this.torchButton.classList.add(PublicUiElementIdAndClasses.TORCH_BUTTON_CLASS_TORCH_OFF);
                }
                return [2];
            }
          });
        });
      });
      parentElement.appendChild(this.torchButton);
    };
    TorchButton2.prototype.updateTorchCapability = function(torchCapability) {
      this.torchController = new TorchController(torchCapability, this, this.onTorchActionFailureCallback);
    };
    TorchButton2.prototype.getTorchButton = function() {
      return this.torchButton;
    };
    TorchButton2.prototype.hide = function() {
      this.torchButton.style.display = "none";
    };
    TorchButton2.prototype.show = function() {
      this.torchButton.style.display = "inline-block";
    };
    TorchButton2.prototype.disable = function() {
      this.torchButton.disabled = true;
    };
    TorchButton2.prototype.enable = function() {
      this.torchButton.disabled = false;
    };
    TorchButton2.prototype.setText = function(text) {
      this.torchButton.innerText = text;
    };
    TorchButton2.prototype.reset = function() {
      this.torchButton.innerText = Html5QrcodeScannerStrings.torchOnButton();
      this.torchController.reset();
    };
    TorchButton2.create = function(parentElement, torchCapability, torchButtonOptions, onTorchActionFailureCallback) {
      var button = new TorchButton2(torchCapability, onTorchActionFailureCallback);
      button.render(parentElement, torchButtonOptions);
      return button;
    };
    return TorchButton2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui/scanner/file-selection-ui.js
  var FileSelectionUi = function() {
    function FileSelectionUi2(parentElement, showOnRender, onFileSelected) {
      this.fileBasedScanRegion = this.createFileBasedScanRegion();
      this.fileBasedScanRegion.style.display = showOnRender ? "block" : "none";
      parentElement.appendChild(this.fileBasedScanRegion);
      var fileScanLabel = document.createElement("label");
      fileScanLabel.setAttribute("for", this.getFileScanInputId());
      fileScanLabel.style.display = "inline-block";
      this.fileBasedScanRegion.appendChild(fileScanLabel);
      this.fileSelectionButton = BaseUiElementFactory.createElement("button", PublicUiElementIdAndClasses.FILE_SELECTION_BUTTON_ID);
      this.setInitialValueToButton();
      this.fileSelectionButton.addEventListener("click", function(_) {
        fileScanLabel.click();
      });
      fileScanLabel.append(this.fileSelectionButton);
      this.fileScanInput = BaseUiElementFactory.createElement("input", this.getFileScanInputId());
      this.fileScanInput.type = "file";
      this.fileScanInput.accept = "image/*";
      this.fileScanInput.style.display = "none";
      fileScanLabel.appendChild(this.fileScanInput);
      var $this = this;
      this.fileScanInput.addEventListener("change", function(e) {
        if (e == null || e.target == null) {
          return;
        }
        var target = e.target;
        if (target.files && target.files.length === 0) {
          return;
        }
        var fileList = target.files;
        var file = fileList[0];
        var fileName = file.name;
        $this.setImageNameToButton(fileName);
        onFileSelected(file);
      });
      var dragAndDropMessage = this.createDragAndDropMessage();
      this.fileBasedScanRegion.appendChild(dragAndDropMessage);
      this.fileBasedScanRegion.addEventListener("dragenter", function(event) {
        $this.fileBasedScanRegion.style.border = $this.fileBasedScanRegionActiveBorder();
        event.stopPropagation();
        event.preventDefault();
      });
      this.fileBasedScanRegion.addEventListener("dragleave", function(event) {
        $this.fileBasedScanRegion.style.border = $this.fileBasedScanRegionDefaultBorder();
        event.stopPropagation();
        event.preventDefault();
      });
      this.fileBasedScanRegion.addEventListener("dragover", function(event) {
        $this.fileBasedScanRegion.style.border = $this.fileBasedScanRegionActiveBorder();
        event.stopPropagation();
        event.preventDefault();
      });
      this.fileBasedScanRegion.addEventListener("drop", function(event) {
        event.stopPropagation();
        event.preventDefault();
        $this.fileBasedScanRegion.style.border = $this.fileBasedScanRegionDefaultBorder();
        var dataTransfer = event.dataTransfer;
        if (dataTransfer) {
          var files = dataTransfer.files;
          if (!files || files.length === 0) {
            return;
          }
          var isAnyFileImage = false;
          for (var i = 0; i < files.length; ++i) {
            var file = files.item(i);
            if (!file) {
              continue;
            }
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
              continue;
            }
            isAnyFileImage = true;
            var fileName = file.name;
            $this.setImageNameToButton(fileName);
            onFileSelected(file);
            dragAndDropMessage.innerText = Html5QrcodeScannerStrings.dragAndDropMessage();
            break;
          }
          if (!isAnyFileImage) {
            dragAndDropMessage.innerText = Html5QrcodeScannerStrings.dragAndDropMessageOnlyImages();
          }
        }
      });
    }
    FileSelectionUi2.prototype.hide = function() {
      this.fileBasedScanRegion.style.display = "none";
      this.fileScanInput.disabled = true;
    };
    FileSelectionUi2.prototype.show = function() {
      this.fileBasedScanRegion.style.display = "block";
      this.fileScanInput.disabled = false;
    };
    FileSelectionUi2.prototype.isShowing = function() {
      return this.fileBasedScanRegion.style.display === "block";
    };
    FileSelectionUi2.prototype.resetValue = function() {
      this.fileScanInput.value = "";
      this.setInitialValueToButton();
    };
    FileSelectionUi2.prototype.createFileBasedScanRegion = function() {
      var fileBasedScanRegion = document.createElement("div");
      fileBasedScanRegion.style.textAlign = "center";
      fileBasedScanRegion.style.margin = "auto";
      fileBasedScanRegion.style.width = "80%";
      fileBasedScanRegion.style.maxWidth = "600px";
      fileBasedScanRegion.style.border = this.fileBasedScanRegionDefaultBorder();
      fileBasedScanRegion.style.padding = "10px";
      fileBasedScanRegion.style.marginBottom = "10px";
      return fileBasedScanRegion;
    };
    FileSelectionUi2.prototype.fileBasedScanRegionDefaultBorder = function() {
      return "6px dashed #ebebeb";
    };
    FileSelectionUi2.prototype.fileBasedScanRegionActiveBorder = function() {
      return "6px dashed rgb(153 151 151)";
    };
    FileSelectionUi2.prototype.createDragAndDropMessage = function() {
      var dragAndDropMessage = document.createElement("div");
      dragAndDropMessage.innerText = Html5QrcodeScannerStrings.dragAndDropMessage();
      dragAndDropMessage.style.fontWeight = "400";
      return dragAndDropMessage;
    };
    FileSelectionUi2.prototype.setImageNameToButton = function(imageFileName) {
      var MAX_CHARS = 20;
      if (imageFileName.length > MAX_CHARS) {
        var start8Chars = imageFileName.substring(0, 8);
        var length_1 = imageFileName.length;
        var last8Chars = imageFileName.substring(length_1 - 8, length_1);
        imageFileName = "".concat(start8Chars, "....").concat(last8Chars);
      }
      var newText = Html5QrcodeScannerStrings.fileSelectionChooseAnother() + " - " + imageFileName;
      this.fileSelectionButton.innerText = newText;
    };
    FileSelectionUi2.prototype.setInitialValueToButton = function() {
      var initialText = Html5QrcodeScannerStrings.fileSelectionChooseImage() + " - " + Html5QrcodeScannerStrings.fileSelectionNoImageSelected();
      this.fileSelectionButton.innerText = initialText;
    };
    FileSelectionUi2.prototype.getFileScanInputId = function() {
      return "html5-qrcode-private-filescan-input";
    };
    FileSelectionUi2.create = function(parentElement, showOnRender, onFileSelected) {
      var button = new FileSelectionUi2(parentElement, showOnRender, onFileSelected);
      return button;
    };
    return FileSelectionUi2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui/scanner/camera-selection-ui.js
  var CameraSelectionUi = function() {
    function CameraSelectionUi2(cameras) {
      this.selectElement = BaseUiElementFactory.createElement("select", PublicUiElementIdAndClasses.CAMERA_SELECTION_SELECT_ID);
      this.cameras = cameras;
      this.options = [];
    }
    CameraSelectionUi2.prototype.render = function(parentElement) {
      var cameraSelectionContainer = document.createElement("span");
      cameraSelectionContainer.style.marginRight = "10px";
      var numCameras = this.cameras.length;
      if (numCameras === 0) {
        throw new Error("No cameras found");
      }
      if (numCameras === 1) {
        cameraSelectionContainer.style.display = "none";
      } else {
        var selectCameraString = Html5QrcodeScannerStrings.selectCamera();
        cameraSelectionContainer.innerText = "".concat(selectCameraString, " (").concat(this.cameras.length, ")  ");
      }
      var anonymousCameraId = 1;
      for (var _i = 0, _a = this.cameras; _i < _a.length; _i++) {
        var camera = _a[_i];
        var value = camera.id;
        var name_1 = camera.label == null ? value : camera.label;
        if (!name_1 || name_1 === "") {
          name_1 = [
            Html5QrcodeScannerStrings.anonymousCameraPrefix(),
            anonymousCameraId++
          ].join(" ");
        }
        var option = document.createElement("option");
        option.value = value;
        option.innerText = name_1;
        this.options.push(option);
        this.selectElement.appendChild(option);
      }
      cameraSelectionContainer.appendChild(this.selectElement);
      parentElement.appendChild(cameraSelectionContainer);
    };
    CameraSelectionUi2.prototype.disable = function() {
      this.selectElement.disabled = true;
    };
    CameraSelectionUi2.prototype.isDisabled = function() {
      return this.selectElement.disabled === true;
    };
    CameraSelectionUi2.prototype.enable = function() {
      this.selectElement.disabled = false;
    };
    CameraSelectionUi2.prototype.getValue = function() {
      return this.selectElement.value;
    };
    CameraSelectionUi2.prototype.hasValue = function(value) {
      for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
        var option = _a[_i];
        if (option.value === value) {
          return true;
        }
      }
      return false;
    };
    CameraSelectionUi2.prototype.setValue = function(value) {
      if (!this.hasValue(value)) {
        throw new Error("".concat(value, " is not present in the camera list."));
      }
      this.selectElement.value = value;
    };
    CameraSelectionUi2.prototype.hasSingleItem = function() {
      return this.cameras.length === 1;
    };
    CameraSelectionUi2.prototype.numCameras = function() {
      return this.cameras.length;
    };
    CameraSelectionUi2.create = function(parentElement, cameras) {
      var cameraSelectUi = new CameraSelectionUi2(cameras);
      cameraSelectUi.render(parentElement);
      return cameraSelectUi;
    };
    return CameraSelectionUi2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/ui/scanner/camera-zoom-ui.js
  var CameraZoomUi = function() {
    function CameraZoomUi2() {
      this.onChangeCallback = null;
      this.zoomElementContainer = document.createElement("div");
      this.rangeInput = BaseUiElementFactory.createElement("input", PublicUiElementIdAndClasses.ZOOM_SLIDER_ID);
      this.rangeInput.type = "range";
      this.rangeText = document.createElement("span");
      this.rangeInput.min = "1";
      this.rangeInput.max = "5";
      this.rangeInput.value = "1";
      this.rangeInput.step = "0.1";
    }
    CameraZoomUi2.prototype.render = function(parentElement, renderOnCreate) {
      this.zoomElementContainer.style.display = renderOnCreate ? "block" : "none";
      this.zoomElementContainer.style.padding = "5px 10px";
      this.zoomElementContainer.style.textAlign = "center";
      parentElement.appendChild(this.zoomElementContainer);
      this.rangeInput.style.display = "inline-block";
      this.rangeInput.style.width = "50%";
      this.rangeInput.style.height = "5px";
      this.rangeInput.style.background = "#d3d3d3";
      this.rangeInput.style.outline = "none";
      this.rangeInput.style.opacity = "0.7";
      var zoomString = Html5QrcodeScannerStrings.zoom();
      this.rangeText.innerText = "".concat(this.rangeInput.value, "x ").concat(zoomString);
      this.rangeText.style.marginRight = "10px";
      var $this = this;
      this.rangeInput.addEventListener("input", function() {
        return $this.onValueChange();
      });
      this.rangeInput.addEventListener("change", function() {
        return $this.onValueChange();
      });
      this.zoomElementContainer.appendChild(this.rangeInput);
      this.zoomElementContainer.appendChild(this.rangeText);
    };
    CameraZoomUi2.prototype.onValueChange = function() {
      var zoomString = Html5QrcodeScannerStrings.zoom();
      this.rangeText.innerText = "".concat(this.rangeInput.value, "x ").concat(zoomString);
      if (this.onChangeCallback) {
        this.onChangeCallback(parseFloat(this.rangeInput.value));
      }
    };
    CameraZoomUi2.prototype.setValues = function(minValue, maxValue, defaultValue, step) {
      this.rangeInput.min = minValue.toString();
      this.rangeInput.max = maxValue.toString();
      this.rangeInput.step = step.toString();
      this.rangeInput.value = defaultValue.toString();
      this.onValueChange();
    };
    CameraZoomUi2.prototype.show = function() {
      this.zoomElementContainer.style.display = "block";
    };
    CameraZoomUi2.prototype.hide = function() {
      this.zoomElementContainer.style.display = "none";
    };
    CameraZoomUi2.prototype.setOnCameraZoomValueChangeCallback = function(onChangeCallback) {
      this.onChangeCallback = onChangeCallback;
    };
    CameraZoomUi2.prototype.removeOnCameraZoomValueChangeCallback = function() {
      this.onChangeCallback = null;
    };
    CameraZoomUi2.create = function(parentElement, renderOnCreate) {
      var cameraZoomUi = new CameraZoomUi2();
      cameraZoomUi.render(parentElement, renderOnCreate);
      return cameraZoomUi;
    };
    return CameraZoomUi2;
  }();

  // ../multi_items_select/multi_items_select/node_modules/html5-qrcode/esm/html5-qrcode-scanner.js
  var Html5QrcodeScannerStatus;
  (function(Html5QrcodeScannerStatus2) {
    Html5QrcodeScannerStatus2[Html5QrcodeScannerStatus2["STATUS_DEFAULT"] = 0] = "STATUS_DEFAULT";
    Html5QrcodeScannerStatus2[Html5QrcodeScannerStatus2["STATUS_SUCCESS"] = 1] = "STATUS_SUCCESS";
    Html5QrcodeScannerStatus2[Html5QrcodeScannerStatus2["STATUS_WARNING"] = 2] = "STATUS_WARNING";
    Html5QrcodeScannerStatus2[Html5QrcodeScannerStatus2["STATUS_REQUESTING_PERMISSION"] = 3] = "STATUS_REQUESTING_PERMISSION";
  })(Html5QrcodeScannerStatus || (Html5QrcodeScannerStatus = {}));
  function toHtml5QrcodeCameraScanConfig(config) {
    return {
      fps: config.fps,
      qrbox: config.qrbox,
      aspectRatio: config.aspectRatio,
      disableFlip: config.disableFlip,
      videoConstraints: config.videoConstraints
    };
  }
  function toHtml5QrcodeFullConfig(config, verbose) {
    return {
      formatsToSupport: config.formatsToSupport,
      useBarCodeDetectorIfSupported: config.useBarCodeDetectorIfSupported,
      experimentalFeatures: config.experimentalFeatures,
      verbose
    };
  }
  var Html5QrcodeScanner = function() {
    function Html5QrcodeScanner2(elementId, config, verbose) {
      this.lastMatchFound = null;
      this.cameraScanImage = null;
      this.fileScanImage = null;
      this.fileSelectionUi = null;
      this.elementId = elementId;
      this.config = this.createConfig(config);
      this.verbose = verbose === true;
      if (!document.getElementById(elementId)) {
        throw "HTML Element with id=".concat(elementId, " not found");
      }
      this.scanTypeSelector = new ScanTypeSelector(this.config.supportedScanTypes);
      this.currentScanType = this.scanTypeSelector.getDefaultScanType();
      this.sectionSwapAllowed = true;
      this.logger = new BaseLoggger(this.verbose);
      this.persistedDataManager = new PersistedDataManager();
      if (config.rememberLastUsedCamera !== true) {
        this.persistedDataManager.reset();
      }
    }
    Html5QrcodeScanner2.prototype.render = function(qrCodeSuccessCallback, qrCodeErrorCallback) {
      var _this = this;
      this.lastMatchFound = null;
      this.qrCodeSuccessCallback = function(decodedText, result) {
        if (qrCodeSuccessCallback) {
          qrCodeSuccessCallback(decodedText, result);
        } else {
          if (_this.lastMatchFound === decodedText) {
            return;
          }
          _this.lastMatchFound = decodedText;
          _this.setHeaderMessage(Html5QrcodeScannerStrings.lastMatch(decodedText), Html5QrcodeScannerStatus.STATUS_SUCCESS);
        }
      };
      this.qrCodeErrorCallback = function(errorMessage, error) {
        if (qrCodeErrorCallback) {
          qrCodeErrorCallback(errorMessage, error);
        }
      };
      var container = document.getElementById(this.elementId);
      if (!container) {
        throw "HTML Element with id=".concat(this.elementId, " not found");
      }
      container.innerHTML = "";
      this.createBasicLayout(container);
      this.html5Qrcode = new Html5Qrcode(this.getScanRegionId(), toHtml5QrcodeFullConfig(this.config, this.verbose));
    };
    Html5QrcodeScanner2.prototype.pause = function(shouldPauseVideo) {
      if (isNullOrUndefined(shouldPauseVideo) || shouldPauseVideo !== true) {
        shouldPauseVideo = false;
      }
      this.getHtml5QrcodeOrFail().pause(shouldPauseVideo);
    };
    Html5QrcodeScanner2.prototype.resume = function() {
      this.getHtml5QrcodeOrFail().resume();
    };
    Html5QrcodeScanner2.prototype.getState = function() {
      return this.getHtml5QrcodeOrFail().getState();
    };
    Html5QrcodeScanner2.prototype.clear = function() {
      var _this = this;
      var emptyHtmlContainer = function() {
        var mainContainer = document.getElementById(_this.elementId);
        if (mainContainer) {
          mainContainer.innerHTML = "";
          _this.resetBasicLayout(mainContainer);
        }
      };
      if (this.html5Qrcode) {
        return new Promise(function(resolve, reject) {
          if (!_this.html5Qrcode) {
            resolve();
            return;
          }
          if (_this.html5Qrcode.isScanning) {
            _this.html5Qrcode.stop().then(function(_) {
              if (!_this.html5Qrcode) {
                resolve();
                return;
              }
              _this.html5Qrcode.clear();
              emptyHtmlContainer();
              resolve();
            }).catch(function(error) {
              if (_this.verbose) {
                _this.logger.logError("Unable to stop qrcode scanner", error);
              }
              reject(error);
            });
          } else {
            _this.html5Qrcode.clear();
            emptyHtmlContainer();
            resolve();
          }
        });
      }
      return Promise.resolve();
    };
    Html5QrcodeScanner2.prototype.getRunningTrackCapabilities = function() {
      return this.getHtml5QrcodeOrFail().getRunningTrackCapabilities();
    };
    Html5QrcodeScanner2.prototype.getRunningTrackSettings = function() {
      return this.getHtml5QrcodeOrFail().getRunningTrackSettings();
    };
    Html5QrcodeScanner2.prototype.applyVideoConstraints = function(videoConstaints) {
      return this.getHtml5QrcodeOrFail().applyVideoConstraints(videoConstaints);
    };
    Html5QrcodeScanner2.prototype.getHtml5QrcodeOrFail = function() {
      if (!this.html5Qrcode) {
        throw "Code scanner not initialized.";
      }
      return this.html5Qrcode;
    };
    Html5QrcodeScanner2.prototype.createConfig = function(config) {
      if (config) {
        if (!config.fps) {
          config.fps = Html5QrcodeConstants.SCAN_DEFAULT_FPS;
        }
        if (config.rememberLastUsedCamera !== !Html5QrcodeConstants.DEFAULT_REMEMBER_LAST_CAMERA_USED) {
          config.rememberLastUsedCamera = Html5QrcodeConstants.DEFAULT_REMEMBER_LAST_CAMERA_USED;
        }
        if (!config.supportedScanTypes) {
          config.supportedScanTypes = Html5QrcodeConstants.DEFAULT_SUPPORTED_SCAN_TYPE;
        }
        return config;
      }
      return {
        fps: Html5QrcodeConstants.SCAN_DEFAULT_FPS,
        rememberLastUsedCamera: Html5QrcodeConstants.DEFAULT_REMEMBER_LAST_CAMERA_USED,
        supportedScanTypes: Html5QrcodeConstants.DEFAULT_SUPPORTED_SCAN_TYPE
      };
    };
    Html5QrcodeScanner2.prototype.createBasicLayout = function(parent) {
      parent.style.position = "relative";
      parent.style.padding = "0px";
      parent.style.border = "1px solid silver";
      this.createHeader(parent);
      var qrCodeScanRegion = document.createElement("div");
      var scanRegionId = this.getScanRegionId();
      qrCodeScanRegion.id = scanRegionId;
      qrCodeScanRegion.style.width = "100%";
      qrCodeScanRegion.style.minHeight = "100px";
      qrCodeScanRegion.style.textAlign = "center";
      parent.appendChild(qrCodeScanRegion);
      if (ScanTypeSelector.isCameraScanType(this.currentScanType)) {
        this.insertCameraScanImageToScanRegion();
      } else {
        this.insertFileScanImageToScanRegion();
      }
      var qrCodeDashboard = document.createElement("div");
      var dashboardId = this.getDashboardId();
      qrCodeDashboard.id = dashboardId;
      qrCodeDashboard.style.width = "100%";
      parent.appendChild(qrCodeDashboard);
      this.setupInitialDashboard(qrCodeDashboard);
    };
    Html5QrcodeScanner2.prototype.resetBasicLayout = function(mainContainer) {
      mainContainer.style.border = "none";
    };
    Html5QrcodeScanner2.prototype.setupInitialDashboard = function(dashboard) {
      this.createSection(dashboard);
      this.createSectionControlPanel();
      if (this.scanTypeSelector.hasMoreThanOneScanType()) {
        this.createSectionSwap();
      }
    };
    Html5QrcodeScanner2.prototype.createHeader = function(dashboard) {
      var header = document.createElement("div");
      header.style.textAlign = "left";
      header.style.margin = "0px";
      dashboard.appendChild(header);
      var libraryInfo = new LibraryInfoContainer();
      libraryInfo.renderInto(header);
      var headerMessageContainer = document.createElement("div");
      headerMessageContainer.id = this.getHeaderMessageContainerId();
      headerMessageContainer.style.display = "none";
      headerMessageContainer.style.textAlign = "center";
      headerMessageContainer.style.fontSize = "14px";
      headerMessageContainer.style.padding = "2px 10px";
      headerMessageContainer.style.margin = "4px";
      headerMessageContainer.style.borderTop = "1px solid #f6f6f6";
      header.appendChild(headerMessageContainer);
    };
    Html5QrcodeScanner2.prototype.createSection = function(dashboard) {
      var section = document.createElement("div");
      section.id = this.getDashboardSectionId();
      section.style.width = "100%";
      section.style.padding = "10px 0px 10px 0px";
      section.style.textAlign = "left";
      dashboard.appendChild(section);
    };
    Html5QrcodeScanner2.prototype.createCameraListUi = function(scpCameraScanRegion, requestPermissionContainer, requestPermissionButton) {
      var $this = this;
      $this.showHideScanTypeSwapLink(false);
      $this.setHeaderMessage(Html5QrcodeScannerStrings.cameraPermissionRequesting());
      var createPermissionButtonIfNotExists = function() {
        if (!requestPermissionButton) {
          $this.createPermissionButton(scpCameraScanRegion, requestPermissionContainer);
        }
      };
      Html5Qrcode.getCameras().then(function(cameras) {
        $this.persistedDataManager.setHasPermission(true);
        $this.showHideScanTypeSwapLink(true);
        $this.resetHeaderMessage();
        if (cameras && cameras.length > 0) {
          scpCameraScanRegion.removeChild(requestPermissionContainer);
          $this.renderCameraSelection(cameras);
        } else {
          $this.setHeaderMessage(Html5QrcodeScannerStrings.noCameraFound(), Html5QrcodeScannerStatus.STATUS_WARNING);
          createPermissionButtonIfNotExists();
        }
      }).catch(function(error) {
        $this.persistedDataManager.setHasPermission(false);
        if (requestPermissionButton) {
          requestPermissionButton.disabled = false;
        } else {
          createPermissionButtonIfNotExists();
        }
        $this.setHeaderMessage(error, Html5QrcodeScannerStatus.STATUS_WARNING);
        $this.showHideScanTypeSwapLink(true);
      });
    };
    Html5QrcodeScanner2.prototype.createPermissionButton = function(scpCameraScanRegion, requestPermissionContainer) {
      var $this = this;
      var requestPermissionButton = BaseUiElementFactory.createElement("button", this.getCameraPermissionButtonId());
      requestPermissionButton.innerText = Html5QrcodeScannerStrings.cameraPermissionTitle();
      requestPermissionButton.addEventListener("click", function() {
        requestPermissionButton.disabled = true;
        $this.createCameraListUi(scpCameraScanRegion, requestPermissionContainer, requestPermissionButton);
      });
      requestPermissionContainer.appendChild(requestPermissionButton);
    };
    Html5QrcodeScanner2.prototype.createPermissionsUi = function(scpCameraScanRegion, requestPermissionContainer) {
      var $this = this;
      if (ScanTypeSelector.isCameraScanType(this.currentScanType) && this.persistedDataManager.hasCameraPermissions()) {
        CameraPermissions.hasPermissions().then(function(hasPermissions) {
          if (hasPermissions) {
            $this.createCameraListUi(scpCameraScanRegion, requestPermissionContainer);
          } else {
            $this.persistedDataManager.setHasPermission(false);
            $this.createPermissionButton(scpCameraScanRegion, requestPermissionContainer);
          }
        }).catch(function(_) {
          $this.persistedDataManager.setHasPermission(false);
          $this.createPermissionButton(scpCameraScanRegion, requestPermissionContainer);
        });
        return;
      }
      this.createPermissionButton(scpCameraScanRegion, requestPermissionContainer);
    };
    Html5QrcodeScanner2.prototype.createSectionControlPanel = function() {
      var section = document.getElementById(this.getDashboardSectionId());
      var sectionControlPanel = document.createElement("div");
      section.appendChild(sectionControlPanel);
      var scpCameraScanRegion = document.createElement("div");
      scpCameraScanRegion.id = this.getDashboardSectionCameraScanRegionId();
      scpCameraScanRegion.style.display = ScanTypeSelector.isCameraScanType(this.currentScanType) ? "block" : "none";
      sectionControlPanel.appendChild(scpCameraScanRegion);
      var requestPermissionContainer = document.createElement("div");
      requestPermissionContainer.style.textAlign = "center";
      scpCameraScanRegion.appendChild(requestPermissionContainer);
      if (this.scanTypeSelector.isCameraScanRequired()) {
        this.createPermissionsUi(scpCameraScanRegion, requestPermissionContainer);
      }
      this.renderFileScanUi(sectionControlPanel);
    };
    Html5QrcodeScanner2.prototype.renderFileScanUi = function(parent) {
      var showOnRender = ScanTypeSelector.isFileScanType(this.currentScanType);
      var $this = this;
      var onFileSelected = function(file) {
        if (!$this.html5Qrcode) {
          throw "html5Qrcode not defined";
        }
        if (!ScanTypeSelector.isFileScanType($this.currentScanType)) {
          return;
        }
        $this.setHeaderMessage(Html5QrcodeScannerStrings.loadingImage());
        $this.html5Qrcode.scanFileV2(file, true).then(function(html5qrcodeResult) {
          $this.resetHeaderMessage();
          $this.qrCodeSuccessCallback(html5qrcodeResult.decodedText, html5qrcodeResult);
        }).catch(function(error) {
          $this.setHeaderMessage(error, Html5QrcodeScannerStatus.STATUS_WARNING);
          $this.qrCodeErrorCallback(error, Html5QrcodeErrorFactory.createFrom(error));
        });
      };
      this.fileSelectionUi = FileSelectionUi.create(parent, showOnRender, onFileSelected);
    };
    Html5QrcodeScanner2.prototype.renderCameraSelection = function(cameras) {
      var _this = this;
      var $this = this;
      var scpCameraScanRegion = document.getElementById(this.getDashboardSectionCameraScanRegionId());
      scpCameraScanRegion.style.textAlign = "center";
      var cameraZoomUi = CameraZoomUi.create(scpCameraScanRegion, false);
      var renderCameraZoomUiIfSupported = function(cameraCapabilities) {
        var zoomCapability = cameraCapabilities.zoomFeature();
        if (!zoomCapability.isSupported()) {
          return;
        }
        cameraZoomUi.setOnCameraZoomValueChangeCallback(function(zoomValue) {
          zoomCapability.apply(zoomValue);
        });
        var defaultZoom = 1;
        if (_this.config.defaultZoomValueIfSupported) {
          defaultZoom = _this.config.defaultZoomValueIfSupported;
        }
        defaultZoom = clip(defaultZoom, zoomCapability.min(), zoomCapability.max());
        cameraZoomUi.setValues(zoomCapability.min(), zoomCapability.max(), defaultZoom, zoomCapability.step());
        cameraZoomUi.show();
      };
      var cameraSelectUi = CameraSelectionUi.create(scpCameraScanRegion, cameras);
      var cameraActionContainer = document.createElement("span");
      var cameraActionStartButton = BaseUiElementFactory.createElement("button", PublicUiElementIdAndClasses.CAMERA_START_BUTTON_ID);
      cameraActionStartButton.innerText = Html5QrcodeScannerStrings.scanButtonStartScanningText();
      cameraActionContainer.appendChild(cameraActionStartButton);
      var cameraActionStopButton = BaseUiElementFactory.createElement("button", PublicUiElementIdAndClasses.CAMERA_STOP_BUTTON_ID);
      cameraActionStopButton.innerText = Html5QrcodeScannerStrings.scanButtonStopScanningText();
      cameraActionStopButton.style.display = "none";
      cameraActionStopButton.disabled = true;
      cameraActionContainer.appendChild(cameraActionStopButton);
      var torchButton;
      var createAndShowTorchButtonIfSupported = function(cameraCapabilities) {
        if (!cameraCapabilities.torchFeature().isSupported()) {
          if (torchButton) {
            torchButton.hide();
          }
          return;
        }
        if (!torchButton) {
          torchButton = TorchButton.create(cameraActionContainer, cameraCapabilities.torchFeature(), { display: "none", marginLeft: "5px" }, function(errorMessage) {
            $this.setHeaderMessage(errorMessage, Html5QrcodeScannerStatus.STATUS_WARNING);
          });
        } else {
          torchButton.updateTorchCapability(cameraCapabilities.torchFeature());
        }
        torchButton.show();
      };
      scpCameraScanRegion.appendChild(cameraActionContainer);
      var resetCameraActionStartButton = function(shouldShow) {
        if (!shouldShow) {
          cameraActionStartButton.style.display = "none";
        }
        cameraActionStartButton.innerText = Html5QrcodeScannerStrings.scanButtonStartScanningText();
        cameraActionStartButton.style.opacity = "1";
        cameraActionStartButton.disabled = false;
        if (shouldShow) {
          cameraActionStartButton.style.display = "inline-block";
        }
      };
      cameraActionStartButton.addEventListener("click", function(_) {
        cameraActionStartButton.innerText = Html5QrcodeScannerStrings.scanButtonScanningStarting();
        cameraSelectUi.disable();
        cameraActionStartButton.disabled = true;
        cameraActionStartButton.style.opacity = "0.5";
        if (_this.scanTypeSelector.hasMoreThanOneScanType()) {
          $this.showHideScanTypeSwapLink(false);
        }
        $this.resetHeaderMessage();
        var cameraId2 = cameraSelectUi.getValue();
        $this.persistedDataManager.setLastUsedCameraId(cameraId2);
        $this.html5Qrcode.start(cameraId2, toHtml5QrcodeCameraScanConfig($this.config), $this.qrCodeSuccessCallback, $this.qrCodeErrorCallback).then(function(_2) {
          cameraActionStopButton.disabled = false;
          cameraActionStopButton.style.display = "inline-block";
          resetCameraActionStartButton(false);
          var cameraCapabilities = $this.html5Qrcode.getRunningTrackCameraCapabilities();
          if (_this.config.showTorchButtonIfSupported === true) {
            createAndShowTorchButtonIfSupported(cameraCapabilities);
          }
          if (_this.config.showZoomSliderIfSupported === true) {
            renderCameraZoomUiIfSupported(cameraCapabilities);
          }
        }).catch(function(error) {
          $this.showHideScanTypeSwapLink(true);
          cameraSelectUi.enable();
          resetCameraActionStartButton(true);
          $this.setHeaderMessage(error, Html5QrcodeScannerStatus.STATUS_WARNING);
        });
      });
      if (cameraSelectUi.hasSingleItem()) {
        cameraActionStartButton.click();
      }
      cameraActionStopButton.addEventListener("click", function(_) {
        if (!$this.html5Qrcode) {
          throw "html5Qrcode not defined";
        }
        cameraActionStopButton.disabled = true;
        $this.html5Qrcode.stop().then(function(_2) {
          if (_this.scanTypeSelector.hasMoreThanOneScanType()) {
            $this.showHideScanTypeSwapLink(true);
          }
          cameraSelectUi.enable();
          cameraActionStartButton.disabled = false;
          cameraActionStopButton.style.display = "none";
          cameraActionStartButton.style.display = "inline-block";
          if (torchButton) {
            torchButton.reset();
            torchButton.hide();
          }
          cameraZoomUi.removeOnCameraZoomValueChangeCallback();
          cameraZoomUi.hide();
          $this.insertCameraScanImageToScanRegion();
        }).catch(function(error) {
          cameraActionStopButton.disabled = false;
          $this.setHeaderMessage(error, Html5QrcodeScannerStatus.STATUS_WARNING);
        });
      });
      if ($this.persistedDataManager.getLastUsedCameraId()) {
        var cameraId = $this.persistedDataManager.getLastUsedCameraId();
        if (cameraSelectUi.hasValue(cameraId)) {
          cameraSelectUi.setValue(cameraId);
          cameraActionStartButton.click();
        } else {
          $this.persistedDataManager.resetLastUsedCameraId();
        }
      }
    };
    Html5QrcodeScanner2.prototype.createSectionSwap = function() {
      var $this = this;
      var TEXT_IF_CAMERA_SCAN_SELECTED = Html5QrcodeScannerStrings.textIfCameraScanSelected();
      var TEXT_IF_FILE_SCAN_SELECTED = Html5QrcodeScannerStrings.textIfFileScanSelected();
      var section = document.getElementById(this.getDashboardSectionId());
      var switchContainer = document.createElement("div");
      switchContainer.style.textAlign = "center";
      var switchScanTypeLink = BaseUiElementFactory.createElement("span", this.getDashboardSectionSwapLinkId());
      switchScanTypeLink.style.textDecoration = "underline";
      switchScanTypeLink.style.cursor = "pointer";
      switchScanTypeLink.innerText = ScanTypeSelector.isCameraScanType(this.currentScanType) ? TEXT_IF_CAMERA_SCAN_SELECTED : TEXT_IF_FILE_SCAN_SELECTED;
      switchScanTypeLink.addEventListener("click", function() {
        if (!$this.sectionSwapAllowed) {
          if ($this.verbose) {
            $this.logger.logError("Section swap called when not allowed");
          }
          return;
        }
        $this.resetHeaderMessage();
        $this.fileSelectionUi.resetValue();
        $this.sectionSwapAllowed = false;
        if (ScanTypeSelector.isCameraScanType($this.currentScanType)) {
          $this.clearScanRegion();
          $this.getCameraScanRegion().style.display = "none";
          $this.fileSelectionUi.show();
          switchScanTypeLink.innerText = TEXT_IF_FILE_SCAN_SELECTED;
          $this.currentScanType = Html5QrcodeScanType.SCAN_TYPE_FILE;
          $this.insertFileScanImageToScanRegion();
        } else {
          $this.clearScanRegion();
          $this.getCameraScanRegion().style.display = "block";
          $this.fileSelectionUi.hide();
          switchScanTypeLink.innerText = TEXT_IF_CAMERA_SCAN_SELECTED;
          $this.currentScanType = Html5QrcodeScanType.SCAN_TYPE_CAMERA;
          $this.insertCameraScanImageToScanRegion();
          $this.startCameraScanIfPermissionExistsOnSwap();
        }
        $this.sectionSwapAllowed = true;
      });
      switchContainer.appendChild(switchScanTypeLink);
      section.appendChild(switchContainer);
    };
    Html5QrcodeScanner2.prototype.startCameraScanIfPermissionExistsOnSwap = function() {
      var _this = this;
      var $this = this;
      if (this.persistedDataManager.hasCameraPermissions()) {
        CameraPermissions.hasPermissions().then(function(hasPermissions) {
          if (hasPermissions) {
            var permissionButton = document.getElementById($this.getCameraPermissionButtonId());
            if (!permissionButton) {
              _this.logger.logError("Permission button not found, fail;");
              throw "Permission button not found";
            }
            permissionButton.click();
          } else {
            $this.persistedDataManager.setHasPermission(false);
          }
        }).catch(function(_) {
          $this.persistedDataManager.setHasPermission(false);
        });
        return;
      }
    };
    Html5QrcodeScanner2.prototype.resetHeaderMessage = function() {
      var messageDiv = document.getElementById(this.getHeaderMessageContainerId());
      messageDiv.style.display = "none";
    };
    Html5QrcodeScanner2.prototype.setHeaderMessage = function(messageText, scannerStatus) {
      if (!scannerStatus) {
        scannerStatus = Html5QrcodeScannerStatus.STATUS_DEFAULT;
      }
      var messageDiv = this.getHeaderMessageDiv();
      messageDiv.innerText = messageText;
      messageDiv.style.display = "block";
      switch (scannerStatus) {
        case Html5QrcodeScannerStatus.STATUS_SUCCESS:
          messageDiv.style.background = "rgba(106, 175, 80, 0.26)";
          messageDiv.style.color = "#477735";
          break;
        case Html5QrcodeScannerStatus.STATUS_WARNING:
          messageDiv.style.background = "rgba(203, 36, 49, 0.14)";
          messageDiv.style.color = "#cb2431";
          break;
        case Html5QrcodeScannerStatus.STATUS_DEFAULT:
        default:
          messageDiv.style.background = "rgba(0, 0, 0, 0)";
          messageDiv.style.color = "rgb(17, 17, 17)";
          break;
      }
    };
    Html5QrcodeScanner2.prototype.showHideScanTypeSwapLink = function(shouldDisplay) {
      if (this.scanTypeSelector.hasMoreThanOneScanType()) {
        if (shouldDisplay !== true) {
          shouldDisplay = false;
        }
        this.sectionSwapAllowed = shouldDisplay;
        this.getDashboardSectionSwapLink().style.display = shouldDisplay ? "inline-block" : "none";
      }
    };
    Html5QrcodeScanner2.prototype.insertCameraScanImageToScanRegion = function() {
      var $this = this;
      var qrCodeScanRegion = document.getElementById(this.getScanRegionId());
      if (this.cameraScanImage) {
        qrCodeScanRegion.innerHTML = "<br>";
        qrCodeScanRegion.appendChild(this.cameraScanImage);
        return;
      }
      this.cameraScanImage = new Image();
      this.cameraScanImage.onload = function(_) {
        qrCodeScanRegion.innerHTML = "<br>";
        qrCodeScanRegion.appendChild($this.cameraScanImage);
      };
      this.cameraScanImage.width = 64;
      this.cameraScanImage.style.opacity = "0.8";
      this.cameraScanImage.src = ASSET_CAMERA_SCAN;
      this.cameraScanImage.alt = Html5QrcodeScannerStrings.cameraScanAltText();
    };
    Html5QrcodeScanner2.prototype.insertFileScanImageToScanRegion = function() {
      var $this = this;
      var qrCodeScanRegion = document.getElementById(this.getScanRegionId());
      if (this.fileScanImage) {
        qrCodeScanRegion.innerHTML = "<br>";
        qrCodeScanRegion.appendChild(this.fileScanImage);
        return;
      }
      this.fileScanImage = new Image();
      this.fileScanImage.onload = function(_) {
        qrCodeScanRegion.innerHTML = "<br>";
        qrCodeScanRegion.appendChild($this.fileScanImage);
      };
      this.fileScanImage.width = 64;
      this.fileScanImage.style.opacity = "0.8";
      this.fileScanImage.src = ASSET_FILE_SCAN;
      this.fileScanImage.alt = Html5QrcodeScannerStrings.fileScanAltText();
    };
    Html5QrcodeScanner2.prototype.clearScanRegion = function() {
      var qrCodeScanRegion = document.getElementById(this.getScanRegionId());
      qrCodeScanRegion.innerHTML = "";
    };
    Html5QrcodeScanner2.prototype.getDashboardSectionId = function() {
      return "".concat(this.elementId, "__dashboard_section");
    };
    Html5QrcodeScanner2.prototype.getDashboardSectionCameraScanRegionId = function() {
      return "".concat(this.elementId, "__dashboard_section_csr");
    };
    Html5QrcodeScanner2.prototype.getDashboardSectionSwapLinkId = function() {
      return PublicUiElementIdAndClasses.SCAN_TYPE_CHANGE_ANCHOR_ID;
    };
    Html5QrcodeScanner2.prototype.getScanRegionId = function() {
      return "".concat(this.elementId, "__scan_region");
    };
    Html5QrcodeScanner2.prototype.getDashboardId = function() {
      return "".concat(this.elementId, "__dashboard");
    };
    Html5QrcodeScanner2.prototype.getHeaderMessageContainerId = function() {
      return "".concat(this.elementId, "__header_message");
    };
    Html5QrcodeScanner2.prototype.getCameraPermissionButtonId = function() {
      return PublicUiElementIdAndClasses.CAMERA_PERMISSION_BUTTON_ID;
    };
    Html5QrcodeScanner2.prototype.getCameraScanRegion = function() {
      return document.getElementById(this.getDashboardSectionCameraScanRegionId());
    };
    Html5QrcodeScanner2.prototype.getDashboardSectionSwapLink = function() {
      return document.getElementById(this.getDashboardSectionSwapLinkId());
    };
    Html5QrcodeScanner2.prototype.getHeaderMessageDiv = function() {
      return document.getElementById(this.getHeaderMessageContainerId());
    };
    return Html5QrcodeScanner2;
  }();

  // ../multi_items_select/multi_items_select/public/scanner.bundle.js
  frappe.provide("Html5QrcodeScanner");
  frappe.provide("Html5QrcodeScanType");
  window.Html5QrcodeScanner = Html5QrcodeScanner;
  window.Html5QrcodeScanType = Html5QrcodeScanType;
})();
//# sourceMappingURL=scanner.bundle.5TOWEV7L.js.map
