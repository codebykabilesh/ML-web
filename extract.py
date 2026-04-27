import PyPDF2

pdf_file = open('AI ML REC 71 (1-4, 7-10).pdf', 'rb')
pdf_reader = PyPDF2.PdfReader(pdf_file)

text = ''
for page in pdf_reader.pages:
    text += page.extract_text()

with open('extracted_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Text extracted to extracted_text.txt")

pdf_file.close()