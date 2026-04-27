import PyPDF2

pdf_file = open('xgboostCode.pdf', 'rb')
pdf_reader = PyPDF2.PdfReader(pdf_file)

text = ''
for page in pdf_reader.pages:
    text += page.extract_text()

with open('extracted_xgboost.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Text extracted to extracted_xgboost.txt")

pdf_file.close()